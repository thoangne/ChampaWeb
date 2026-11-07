import { useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import RichArticleEditor from "../../components/admin/RichArticleEditor";

export default function AdminArticleEditPage() {
  const { id } = useParams<{ id: string }>();

  return (
    <AdminLayout>
      <RichArticleEditor
        initialId={id}
        defaultMainCategory="van-hoa"
        backUrl="/admin/articles"
        titlePrefix="Bài viết Khảo cứu"
      />
    </AdminLayout>
  );
}

