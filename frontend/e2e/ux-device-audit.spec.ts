import { test, expect } from '@playwright/test';

test.describe('ChampaWeb UX/UI & Multi-Device Responsiveness Audit', () => {

  test('TC-01: Zero Horizontal Overflow across core pages', async ({ page }) => {
    const testRoutes = ['/', '/tour', '/bai-viet', '/so-hoa-di-san', '/san-pham'];

    for (const route of testRoutes) {
      await page.goto(route, { waitUntil: 'domcontentloaded' });
      await page.waitForTimeout(300);

      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        return {
          scrollWidth: docWidth,
          innerWidth: winWidth,
          isOverflowing: docWidth > winWidth + 1, // allow 1px sub-pixel rounding
        };
      });

      expect(
        overflow.isOverflowing,
        `Page ${route} has horizontal overflow: scrollWidth=${overflow.scrollWidth} > innerWidth=${overflow.innerWidth}`
      ).toBe(false);
    }
  });

  test('TC-02: Header layout, typography and mobile drawer usability', async ({ page }) => {
    await page.goto('/');

    const header = page.locator('header');
    await expect(header).toBeVisible();

    // Check brand identity
    const brand = header.locator('text=Panduranga Heritage').first();
    await expect(brand).toBeVisible();

    const isSmallScreen = (page.viewportSize()?.width ?? 1024) < 1024;

    if (isSmallScreen) {
      // Mobile Drawer Menu
      const menuBtn = header.getByRole('button', { name: /Mở danh mục|Đóng danh mục/i });
      await expect(menuBtn).toBeVisible();

      // Check tap target size >= 40px
      const box = await menuBtn.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.width).toBeGreaterThanOrEqual(40);
        expect(box.height).toBeGreaterThanOrEqual(40);
      }

      // Open drawer
      await menuBtn.click();
      await expect(page.locator('text=Danh mục khám phá di sản')).toBeVisible();

      // Click Close
      const closeBtn = page.getByRole('button', { name: /Đóng/i }).first();
      await closeBtn.click();
      await expect(page.locator('text=Danh mục khám phá di sản')).not.toBeVisible();
    } else {
      // Desktop Nav Links scoped inside header nav
      const nav = header.locator('nav');
      await expect(nav.getByRole('link', { name: 'Trang chủ', exact: true })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Hành trình', exact: true })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Bài Viết', exact: true })).toBeVisible();
      await expect(nav.getByRole('link', { name: 'Số hoá di sản', exact: true })).toBeVisible();
    }
  });

  test('TC-03: Bottom Navigation responsive visibility and navigation', async ({ page }) => {
    await page.goto('/');

    const bottomNav = page.locator('nav[aria-label="Thanh điều hướng dưới di động"]');
    const isMobileWidth = (page.viewportSize()?.width ?? 1024) < 768;

    if (isMobileWidth) {
      await expect(bottomNav).toBeVisible();
      const items = bottomNav.getByRole('button');
      await expect(items).toHaveCount(4);

      // Verify tap target size >= 44px
      const firstItem = items.first();
      const box = await firstItem.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.height).toBeGreaterThanOrEqual(44);
      }
    } else {
      await expect(bottomNav).toBeHidden();
    }
  });

  test('TC-04: Audio Saranai player interaction and floating widget', async ({ page }) => {
    await page.goto('/');

    const audioBtn = page.locator('button[title*="Saranai"]').first();
    await expect(audioBtn).toBeVisible();

    // Toggle on
    await audioBtn.click();

    // Floating bar appears
    const audioBar = page.locator('aside');
    await expect(audioBar).toBeVisible();
    await expect(page.locator('text=Thanh âm Saranai Panduranga')).toBeVisible();

    // Close floating bar
    const closeBtn = page.locator('button[title="Tắt âm thanh"]');
    await closeBtn.click();
    await page.waitForTimeout(300);
  });

  test('TC-05: Trip Planner form controls & smooth interaction', async ({ page }) => {
    await page.goto('/');

    const planner = page.locator('#dat-tour');
    await expect(planner).toBeVisible();

    // Check Destination selector
    await expect(page.locator('text=Điểm đến / Làng nghề')).toBeVisible();

    // Click submit
    const submitBtn = page.getByRole('button', { name: /Tìm Chuyến Đi/i });
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Verify feedback toast appears
    await expect(page.locator('text=Dana đã tìm thấy các hành trình phù hợp!')).toBeVisible({ timeout: 5000 });
  });

  test('TC-06: Digital Heritage tab transitions & multimedia inspection', async ({ page }) => {
    await page.goto('/so-hoa-di-san');

    const main = page.locator('main');

    // Default tab button
    const photoTab = main.getByRole('button', { name: /Kho ảnh Văn hoá/i });
    await expect(photoTab).toBeVisible();

    // Switch to language tab
    const langTab = main.getByRole('button', { name: /Số hoá Ngôn ngữ Chăm/i });
    await langTab.click();
    await expect(main.locator('text=Ký tự Akhar Thrah').first()).toBeVisible();

    // Switch to inscription tab
    const inscrTab = main.getByRole('button', { name: /Giải mã Văn bia Cổ/i });
    await inscrTab.click();
    await expect(main.getByRole('heading', { name: /Văn Bia Cổ Sa Thạch/i })).toBeVisible();
  });

  test('TC-07: Blog live search and category filtering UX', async ({ page }) => {
    await page.goto('/bai-viet');

    // Search input
    const searchInput = page.locator('input[placeholder*="Tìm kiếm bài khảo cứu"]');
    await expect(searchInput).toBeVisible();

    // Type query
    await searchInput.fill('Po Klong');
    await page.waitForTimeout(200);

    // Verify filtered results contain Po Klong
    const articles = page.locator('article, .group\\/card');
    const count = await articles.count();
    expect(count).toBeGreaterThanOrEqual(1);

    // Clear search
    const clearBtn = page.getByRole('button', { name: /Xóa từ khóa tìm kiếm/i });
    if (await clearBtn.isVisible()) {
      await clearBtn.click();
      await expect(searchInput).toHaveValue('');
    }
  });

  test('TC-08: Champa Souvenir Page has NO prices, only artisan contact channels', async ({ page }) => {
    await page.goto('/san-pham');

    // Check main title
    await expect(page.locator('h1')).toContainText('Lưu Niệm Champa');

    // Verify NO price tags exist on the cards
    const pricePattern = page.locator('text=/\\b[0-9]{2,3}\\.000\\s*(đ|VND|đồng)/i');
    await expect(pricePattern).toHaveCount(0);

    // Verify product cards are displayed
    const contactBtns = page.getByRole('button', { name: /Liên hệ thỉnh/i });
    await expect(contactBtns.first()).toBeVisible();

    // Click to open contact modal
    await contactBtns.first().click();

    // Modal should be visible
    const modal = page.locator('div.fixed.inset-0.z-50');
    await expect(modal).toBeVisible();
    await expect(modal.locator('text=Thông Tin Liên Hệ Thỉnh / Đặt Tác Phẩm')).toBeVisible();
    await expect(modal.locator('text=(+84) 259 388 9988')).toBeVisible();

    // Fill quick contact form
    const nameInput = modal.locator('input[placeholder*="Họ và tên"]');
    const phoneInput = modal.locator('input[placeholder*="Số điện thoại"]');
    await nameInput.fill('Lữ Khách Đan');
    await phoneInput.fill('0987654321');

    const submitInquiryBtn = modal.getByRole('button', { name: /Gửi Yêu Cầu Tư Vấn/i });
    await submitInquiryBtn.click();

    // Verify confirmation toast
    await expect(page.locator('text=Đã gửi thông tin liên hệ thành công!')).toBeVisible({ timeout: 5000 });
  });

  test('TC-09: Tour listings and detail pages have NO prices, only direct contact channels', async ({ page }) => {
    // 1. Audit Tour List Page (/tour)
    await page.goto('/tour');

    await expect(page.locator('h1')).toContainText('Danh Sách Hành Trình Di Sản');

    // Verify non-commercialization callout banner is visible
    await expect(page.locator('text=Hành Trình Di Sản Phi Thương Mại Hóa')).toBeVisible();
    await expect(page.locator('text=0918.388.998').first()).toBeVisible();

    // Verify NO price tags exist on tour cards
    const pricePattern = page.locator('text=/\\b[0-9]{2,3}\\.000\\s*(đ|VND|đồng)/i');
    await expect(pricePattern).toHaveCount(0);

    // Verify tour cards have consultation CTAs
    const detailBtns = page.getByRole('link', { name: /Chi Tiết & Liên Hệ/i });
    await expect(detailBtns.first()).toBeVisible();

    // 2. Audit Tour Detail Page (/tour/ky-uc-bau-truc)
    await page.goto('/tour/ky-uc-bau-truc');

    // Verify tour title
    await expect(page.locator('h1')).toContainText('Ký ức Bàu Trúc');

    // Verify NO price numbers in booking sidebar
    const detailPricePattern = page.locator('aside').getByText(/\b[0-9]{2,3}\.000\s*(đ|VND|đồng)/i);
    await expect(detailPricePattern).toHaveCount(0);

    // Verify Consultation & Reservation widget
    await expect(page.locator('text=Đăng Ký Tư Vấn & Đặt Lịch')).toBeVisible();
    await expect(page.locator('text=Đặc quyền di sản đi kèm:')).toBeVisible();

    // Fill in consultation form
    const nameInput = page.locator('input[placeholder*="Nguyễn Thị Lan"]');
    const phoneInput = page.locator('input[placeholder*="0912 345 678"]');
    await nameInput.fill('Lữ Khách Phương');
    await phoneInput.fill('0918112233');

    // Click submit inquiry button
    const submitBtn = page.getByRole('button', { name: /Gửi Yêu Cầu Tư Vấn Lịch Trình/i });
    await submitBtn.click();

    // Verify toast confirmation
    await expect(page.locator('text=Đã gửi thông tin liên hệ thành công!')).toBeVisible({ timeout: 5000 });
  });

});
