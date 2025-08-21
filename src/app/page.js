import Hero from "@/components/Hero/Hero";
import ProductsPage from "./products/page";
import HighlightsPage from "./highlights/page";
import FeaturesSection from "@/components/Features";

export default function Home() {
  return (
    <main >
      <Hero/>
      <ProductsPage/>
      <HighlightsPage/>
      <FeaturesSection/>
    </main>

  );
}
