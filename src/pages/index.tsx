// Show featured posts
import Hero from "~/components/Hero";
import { NextPageWithLayout } from "./_app";

const HomePage: NextPageWithLayout = () => {
  return (
    <div>
      <Hero />
      <h2>Featured Posts</h2>
    </div>
  );
};

export default HomePage;
