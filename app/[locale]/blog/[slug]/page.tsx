import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-posts";
import BlogArticle from "./blog-article";


export default async function Page({
  params,
}: {
  params: Promise<{
    locale: "en" | "pl";
    slug: string;
  }>;
}) {
  const { locale, slug } = await params;


  const article = blogPosts[locale].find(
    (post) => post.slug === slug
  );


  if (!article) {
    notFound();
  }


  return <BlogArticle article={article} />;
}