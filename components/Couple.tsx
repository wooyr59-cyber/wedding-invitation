import Reveal from "@/components/Reveal";
import { weddingConfig } from "@/config/wedding";

export default function Couple() {
  return <section className="paper-section couple-section"><Reveal>
    <p className="eyebrow">GROOM & BRIDE</p>
    <h2 className="section-title">두 사람을 소개합니다</h2>
    <div className="couple-grid">
      <div className="couple-card"><img src="/images/wedding-01.jpg" alt="신랑"/><p className="couple-role">GROOM</p><strong>{weddingConfig.groom.fullName}</strong></div>
      <div className="couple-card"><img src="/images/wedding-02.jpg" alt="신부"/><p className="couple-role">BRIDE</p><strong>{weddingConfig.bride.fullName}</strong></div>
    </div>
    <p className="couple-caption">가장 편안한 친구이자<br/>서로의 가장 든든한 가족이 되겠습니다.</p>
  </Reveal></section>;
}
