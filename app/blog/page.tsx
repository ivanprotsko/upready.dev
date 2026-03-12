import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";
import Footer from "@/components/shadcn-space/blocks/footer-05/footer-upready";

export const metadata: Metadata = {
  title: "Blog — Migration Guides & Self-Hosting Tips",
  description:
    "Step-by-step migration guides from expensive SaaS to self-hosted alternatives. Real cost comparisons, Docker configs, and practical advice.",
  openGraph: {
    title: "Blog — Migration Guides & Self-Hosting Tips",
    description:
      "Step-by-step migration guides from expensive SaaS to self-hosted alternatives.",
    url: "https://upready.dev/blog",
  },
  alternates: {
    canonical: "https://upready.dev/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="mx-auto max-w-4xl px-6 py-24">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white">
          Blog
        </h1>
        <p className="mb-16 text-lg text-muted-foreground">
          Migration guides, cost comparisons, and practical self-hosting advice.
        </p>

        <div className="space-y-12">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border-b border-border/40 pb-10"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="mb-3 flex items-center gap-3 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-border">|</span>
                  <div className="flex gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted/50 px-2.5 py-0.5 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="mb-3 text-2xl font-semibold text-white transition-colors group-hover:text-blue-400">
                  {post.title}
                </h2>
                <p className="line-clamp-3 text-muted-foreground">
                  {post.description}
                </p>
              </Link>
            </article>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
