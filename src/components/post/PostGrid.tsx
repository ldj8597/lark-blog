import { Post } from "~/pages";
import PostPreview from "./PostPreview";

export default function PostGrid({ posts }: { posts: Post[] }) {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          date={post.date}
          excerpt={post.excerpt}
          image={post.image}
          slug={post.slug}
          title={post.title}
        />
      ))}
    </div>
  );
}
