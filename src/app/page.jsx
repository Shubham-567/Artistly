import CategorySection from "@/sections/CategorySection";

const { default: Hero } = require("@/sections/Hero");

function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
    </>
  );
}

export default Home;
