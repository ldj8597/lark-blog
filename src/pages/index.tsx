import FeaturedPosts from "~/components/homepage/FeaturedPosts";
import Hero from "~/components/homepage/Hero";
import { NextPageWithLayout } from "./_app";

export type Post = {
  slug: string;
  title: string;
  image: string;
  excerpt: string;
  date: string;
};

const DUMMY_POSTS: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs2",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs3",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
  {
    slug: "getting-started-with-nextjs4",
    title: "Getting started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR",
    date: "2022-02-10",
  },
];

const HomePage: NextPageWithLayout = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </div>
  );
};

export default HomePage;
