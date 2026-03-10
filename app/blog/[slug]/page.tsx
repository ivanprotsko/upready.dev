import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import Footer from "@/components/shadcn-space/blocks/footer-01/footer";

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://upready.dev/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}&description=${encodeURIComponent(post.description.slice(0, 100))}`,
          width: 1200,
          height: 630,
        },
      ],
    },
    alternates: {
      canonical: `https://upready.dev/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10">
          <Link
            href="/blog"
            className="mb-6 inline-flex items-center text-sm text-muted-foreground transition-colors hover:text-white"
          >
            &larr; All articles
          </Link>
          <div className="mb-4 flex items-center gap-3 text-sm text-muted-foreground">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-border">|</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted/50 px-2.5 py-0.5 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
        </div>

        <div className="prose prose-invert prose-lg max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:mt-12 prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-300 prose-li:text-gray-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-strong:text-white prose-code:rounded prose-code:bg-muted/50 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-sm prose-code:text-gray-200 prose-code:before:content-none prose-code:after:content-none prose-pre:bg-muted/30 prose-pre:border prose-pre:border-border/40 prose-blockquote:border-l-blue-500 prose-blockquote:text-gray-400 prose-table:text-sm prose-th:text-white prose-td:text-gray-300">
          <Markdown remarkPlugins={[remarkGfm]}>{post.content}</Markdown>
        </div>

        <div className="mt-16 rounded-lg border border-border/40 bg-muted/10 p-8 text-center">
          <h3 className="mb-2 text-xl font-semibold text-white">
            Need help with this migration?
          </h3>
          <p className="mb-6 text-muted-foreground">
            We handle the entire setup — server, deployment, migration, and
            ongoing maintenance.
          </p>
          <Link
            href="/#pricing"
            className="inline-flex rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-500"
          >
            View pricing
          </Link>
        </div>
      </article>
      <Footer />
    </>
  );
}
