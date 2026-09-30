import Reveal from "@/components/Reveal";
import Contact from "@/components/Contact";
import { weddingConfig } from "@/config/wedding";

export default function Greeting() {
  return (
    <section className="paper-section greeting-section">
      <Reveal className="hero-intro reveal-first">
        <p className="eyebrow">INVITATION</p>
        <h1>소중한 분들을 초대합니다</h1>
        <div className="hero-poem">
          <p>저희 두 사람이 사랑으로 만나<br/>평생을 함께하려 합니다.</p>
          <p>샬라샬라샬라 <br/>문구를 정하라<br/>하하하하하하하하하하하</p>
          <p>김동우유림<br/>결혼한다 다 와라!!!!<br/>축복하거라!!!!</p>
        </div>
        <div className="hero-names"><b>{weddingConfig.groom.fullName}</b><span>그리고</span><b>{weddingConfig.bride.fullName}</b></div>
        <p className="hero-place">{weddingConfig.date.year}. {String(weddingConfig.date.month).padStart(2,"0")}. {String(weddingConfig.date.day).padStart(2,"0")} {weddingConfig.date.dayName}<br/>{weddingConfig.date.time} · {weddingConfig.venue.name} {weddingConfig.venue.hall}</p>
        <div className="flourish">♥</div>
        <Contact />
      </Reveal>
    </section>
  );
}
