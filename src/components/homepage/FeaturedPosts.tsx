import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Post } from "~/pages";
import PostGrid from "../post/PostGrid";

export default function FeaturedPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="space-y-5">
      <h2 className="text-3xl font-bold">Featured Posts</h2>
      <PostGrid posts={posts} />
      <Link href="/blog">
        <a className="flex items-center gap-1 text-slate-500">
          <span>Read all posts</span>
          <BsArrowRight />
        </a>
      </Link>
    </section>
  );
}
