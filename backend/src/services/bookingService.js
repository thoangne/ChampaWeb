const supabase = require("../config/supabaseClient");

class BookingService {
  // 1. Tạo đơn đặt tour (TourDetailPage)
  async createTourBooking(bookingData) {
    const bookingCode = `DANA-${Math.floor(100000 + Math.random() * 900000)}`;

    const { data, error } = await supabase.from("tour_bookings").insert([
      {
        booking_code: bookingCode,
        tour_slug: bookingData.tour_slug,
        tour_title: bookingData.tour_title,
        customer_name: bookingData.customer_name,
        customer_phone: bookingData.customer_phone,
        pickup_note: bookingData.pickup_note || "",
        departure_date: bookingData.departure_date,
        adults: bookingData.adults,
        children: bookingData.children || 0,
        total_price: bookingData.total_price,
        status: "pending",
      },
    ]).select();

    if (error) throw error;
    return { bookingCode, booking: data[0] };
  }

  // 2. Tra cứu đơn theo mã booking
  async getBookingByCode(bookingCode) {
    const { data, error } = await supabase
      .from("tour_bookings")
      .select("*")
      .eq("booking_code", bookingCode)
      .single();

    if (error) throw error;
    return data;
  }

  // 3. Tạo yêu cầu tư vấn nhanh (TripPlannerSection / HeroSection)
  async createTripInquiry(inquiryData) {
    const { data, error } = await supabase.from("trip_inquiries").insert([
      {
        destination: inquiryData.destination,
        departure_date: inquiryData.departure_date,
        experience_type: inquiryData.experience_type || "",
        travelers: inquiryData.travelers,
        customer_phone: inquiryData.customer_phone || "",
      },
    ]).select();

    if (error) throw error;
    return data[0];
  }
}

module.exports = new BookingService();