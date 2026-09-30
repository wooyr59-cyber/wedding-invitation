import ScrollReveal from "@/components/ScrollReveal";
import { weddingConfig } from "@/config/wedding";

export default function Closing() {
  return <>
    <section className="closing-photo"><ScrollReveal><img src="/images/wedding-13.jpg" alt="신랑 신부"/><div className="closing-overlay"><p>THANK YOU</p><strong>저희의 시작을<br/>함께해 주셔서 감사합니다.</strong></div></ScrollReveal></section>
    <section className="closing-paper"><ScrollReveal><div className="closing-script">With love</div><p>{weddingConfig.groom.fullName} &amp; {weddingConfig.bride.fullName}</p><p className="muted">2027. 06. 12</p><div className="flourish">❦</div></ScrollReveal></section>
  </>;
}
