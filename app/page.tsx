import Image from "next/image";
import Link from "next/link";
import { Instagram, Twitter, Linkedin, Github } from "lucide-react";
import { getMediumPosts } from "@/lib/medium-api";
import PostsList from "@/components/PostList";

export default async function Home() {
  const posts = await getMediumPosts(3);

  return (
    <div>
      <div className="mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-10">
        <div className="rounded-full md:h-48 md:w-48">
          <Image
            src="/profile.png"
            alt="Areeb Ahmed"
            width={180}
            height={180}
            className="rounded-full object-cover"
            priority
          />
        </div>
        <div className="flex flex-col md:items-start">
          <h1 className="mb-2 text-2xl font-semibold md:text-3xl">
            <Link href="/about" className="hover:text-custom-blue">
              Hey, I'm Areeb.
            </Link>
            <span className="ml-2 text-gray-400">
              I'm a software developer and devops engineer.
            </span>
          </h1>
          <div className="mt-4 flex flex-col items-start gap-2 md:flex-row md:items-start md:gap-6">
            <Link
              href="https://instagram.com/areebahmeddd"
              className="flex items-center text-gray-400 hover:text-[#ed7470]"
            >
              <Instagram
                className="mr-2 h-4 w-4"
                style={{ color: "#ed7470" }}
              />
              Instagram
            </Link>
            <Link
              href="https://twitter.com/areebahmeddd"
              className="flex items-center text-gray-400 hover:text-[#86bef7]"
            >
              <Twitter className="mr-2 h-4 w-4" style={{ color: "#86bef7" }} />
              Twitter
            </Link>
            <Link
              href="https://linkedin.com/in/areebahmeddd"
              className="flex items-center text-gray-400 hover:text-[#2966bc]"
            >
              <Linkedin className="mr-2 h-4 w-4" style={{ color: "#2966bc" }} />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/areebahmeddd"
              className="flex items-center text-gray-400 hover:text-[#d4d4d4]"
            >
              <Github className="mr-2 h-4 w-4" style={{ color: "#d4d4d4" }} />
              GitHub
            </Link>
          </div>
        </div>
      </div>
      <h2 className="my-8 text-xl uppercase">Recent Posts</h2>
      <PostsList posts={posts} />
    </div>
  );
}
