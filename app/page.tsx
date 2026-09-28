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
      <Location
        latitude={37.5665}
        longitude={126.9780}
        placeName="소풍웨딩컨벤션"
        address="경기 부천시 원미구 송내대로 239 7층"
      />
    </main>
  );
}