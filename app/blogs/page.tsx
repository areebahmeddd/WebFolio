import Link from "next/link";
import { getMediumPosts } from "@/lib/medium-api";

export default async function BlogPage() {
  const posts = await getMediumPosts();

  return (
    <div>
      <h1 className="mb-4 text-4xl font-bold">Blogs</h1>
      <p className="mb-12 text-xl text-gray-400">
        This is where I write. Follow me on{" "}
        <Link
          href="https://medium.com/@areebahmeddd"
          className="text-blue-400 hover:underline"
        >
          Medium{" "}
        </Link>
        for updates.
      </p>

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
    </div>
  );
}
