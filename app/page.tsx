import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PostItem } from "@/components/post-item";
import { Button } from "@/components/ui/button";
import { sortPosts } from "@/lib/utils";
import { posts } from "#site/content";

export default function Home() {
  const latestPosts = sortPosts(posts).slice(0, 5);

  return (
    <div className="min-h-screen bg-background">
      <section className="container max-w-4xl py-12">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
          Latest Posts
        </h2>
        <ul className="space-y-8">
          {latestPosts.map(
            (post, index) =>
              post.published && (
                <li
                  key={post.slug}
                  className="group animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="block p-6 bg-card rounded-lg shadow-lg transition-all duration-200 hover:shadow-xl">
                    <PostItem
                      slug={post.slug}
                      title={post.title}
                      description={post.description}
                      date={post.date}
                      tags={post.tags}
                    />
                  </span>
                </li>
              )
          )}
        </ul>
        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/blog">View all posts</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
