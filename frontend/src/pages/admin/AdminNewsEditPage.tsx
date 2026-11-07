import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import RichArticleEditor from "../../components/admin/RichArticleEditor";

export default function AdminNewsEditPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <AdminLayout>
      <RichArticleEditor
        initialId={id}
        defaultMainCategory="tin-tuc"
        backUrl="/admin/news"
        titlePrefix="Tin tức & Sự kiện"
      />
    </AdminLayout>
  );
}

