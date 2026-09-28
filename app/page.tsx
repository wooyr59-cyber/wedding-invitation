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
        latitude={37.50414978664142}
        longitude={126.75671964248862}
        placeName="소풍컨벤션웨딩"
        address="경기 부천시 원미구 송내대로 239 7층"
      />
    </main>
  );
}