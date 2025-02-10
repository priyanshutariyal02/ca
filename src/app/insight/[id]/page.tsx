import BlogDetail from "../components/BlogDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [1, 2, 3].map((id) => ({
    id: id.toString(),
  }));
}
export default function InsightPage({ params }: { params: { id: string } }) {
  if (!params.id) {
    notFound();
  }

  return <BlogDetail id={params.id} />;
}
