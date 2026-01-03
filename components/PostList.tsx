"use client";

import Link from "next/link";

interface MediumPost {
  id: string;
  title: string;
  emoji: string;
  date: string;
  readingTime: string;
  category: string;
  excerpt: string;
  link: string;
  thumbnail?: string;
}

interface PostsListProps {
  posts: MediumPost[];
}

export default function PostsList({ posts }: PostsListProps) {
  return (
    <>
      <div className="space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="post-card">
            <div className="mb-2 flex items-center">
              <Link
                href={post.link}
                className="text-2xl font-semibold hover:text-blue-400"
              >
                {post.emoji + " " + post.title}
              </Link>
            </div>
            <div className="mb-2 flex items-center gap-3 text-gray-300">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readingTime}</span>
              <span>•</span>
              <span>{post.category}</span>
            </div>
            <p className="text-gray-400">{post.excerpt}</p>
          </div>
        ))}
      </div>
      <Link href="/blogs" className="mt-6 inline-block text-custom-blue">
        <div className="inline-flex items-center rounded p-1 hover:bg-custom-blue/40">
          <span>Read more posts</span>
          <span className="ml-2">⟶</span>
        </div>
      </Link>
    </>
  );
}
