import Hero from "@/components/Hero";
import Greeting from "@/components/Greeting";
import Couple from "@/components/Couple";
import WeddingInfo from "@/components/WeddingInfo";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Guestbook from "@/components/Guestbook";
import Account from "@/components/Account";
import Closing from "@/components/Closing";
import Share from "@/components/Share";

export default function Home() {
  return <main className="invitation">
    {/* 메인 사진 */}
    <Hero />

    {/* 인사말 */}
    <Greeting />

    {/* 신랑신부 소개 */}
    <Couple />

    {/* 결혼 정보 */}
    <WeddingInfo />

    {/* 장소 안내 */}
    <Location />

    {/* 갤러리 */}
    <Gallery />

    {/* 방명록 */}
    <Guestbook />

    {/* 마무리 */}
    <Closing />

    {/* 마음전하실 곳 */}
    <Account />

    {/* 카카오톡 공유하기 */}
    <Share />

    {/* 푸터 */}
    <footer className="footer">2027 · DONGWOO &amp; YURIM</footer>
  </main>;
}
