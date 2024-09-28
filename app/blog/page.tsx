// pages/blog/page.tsx

import { posts } from "#site/content";
import { PostItem } from "@/components/post-item";
import { QueryPagination } from "@/components/query-pagination";
import { Tag as TagIcon, Coffee, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getAllTags, sortPosts, sortTagsByCount } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My blog",
  description: "This is a description",
};

const POSTS_PER_PAGE = 5;

interface BlogPageProps {
  searchParams: {
    page?: string;
  };
}

export default function BlogPage({ searchParams }: BlogPageProps) {
  const currentPage = Number(searchParams?.page) || 1;
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const totalPages = Math.ceil(sortedPosts.length / POSTS_PER_PAGE);

  const displayPosts = sortedPosts.slice(
    POSTS_PER_PAGE * (currentPage - 1),
    POSTS_PER_PAGE * currentPage
  );

  const tags = getAllTags(posts);
  const sortedTags = sortTagsByCount(tags);

  return (
    <div className="container max-w-4xl py-6 lg:py-10 animate-fadeIn bg-gradient-to-br from-background to-muted">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-6xl font-black mb-4 animate-bounce inline-flex items-center">
          <Coffee className="mr-4 text-primary" aria-hidden="true" />
          <span>Blog</span>
        </h1>
        <p className="text-xl text-muted-foreground animate-slideIn">
          My thoughts on all things web3, frontend, solidity, rust, thoughts on
          particular topics and more.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Posts Section */}
        <div className="md:col-span-2 space-y-8">
          {displayPosts?.length > 0 ? (
            displayPosts.map((post, index) => {
              const { slug, date, title, description, tags } = post;
              return (
                <Card
                  key={slug}
                  className={`animate-slideIn animation-delay-${
                    index + 1
                  } hover:shadow-lg transition-shadow duration-300 overflow-hidden group`}
                >
                  <CardHeader className="bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <CardTitle className="text-2xl group-hover:text-primary transition-colors duration-300">
                      <a href={`/blog/${slug}`} className="flex items-center">
                        <BookOpen className="mr-2" aria-hidden="true" />
                        <span>{title}</span>
                      </a>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      <time dateTime={date}>
                        {new Date(date).toLocaleDateString()}
                      </time>
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="my-4">{description}</p>
                    <div className="flex flex-wrap gap-2">
                      {(tags || []).map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-sm group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300"
                        >
                          <TagIcon
                            className="w-3 h-3 mr-1"
                            aria-hidden="true"
                          />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <p>Nothing to see here yet</p>
          )}
          {/* Pagination */}
          <QueryPagination
            totalPages={totalPages}
            className="justify-end mt-4"
          />
        </div>

        {/* Tags Section */}
        <Card className="h-fit animate-slideIn animation-delay-5 sticky top-4">
          <CardHeader className="bg-primary/10">
            <CardTitle className="flex items-center">
              <TagIcon className="mr-2" aria-hidden="true" />
              <span>Tags</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {sortedTags?.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-md"
              >
                {tag} ({tags[tag]})
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
