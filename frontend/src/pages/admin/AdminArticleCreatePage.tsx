import AdminLayout from "../../components/admin/AdminLayout";
import RichArticleEditor from "../../components/admin/RichArticleEditor";

export default function AdminArticleCreatePage() {
  return (
    <AdminLayout>
      <RichArticleEditor
        defaultMainCategory="van-hoa"
        backUrl="/admin/articles"
        titlePrefix="Bài viết Khảo cứu"
      />
    </AdminLayout>
  );
}

