import Hero from "@/components/Hero";
import Greeting from "@/components/Greeting";
import WeddingInfo from "@/components/WeddingInfo";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main>
      <Hero />
      <Greeting />
      <WeddingInfo />
      <Gallery />
      <Location />
    </main>
  );
}