import AdminLayout from "../../components/admin/AdminLayout";
import RichArticleEditor from "../../components/admin/RichArticleEditor";

export default function AdminNewsCreatePage() {
  return (
    <AdminLayout>
      <RichArticleEditor
        defaultMainCategory="tin-tuc"
        backUrl="/admin/news"
        titlePrefix="Tin tức & Sự kiện"
      />
    </AdminLayout>
  );
}

