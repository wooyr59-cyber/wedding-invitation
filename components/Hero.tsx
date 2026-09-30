import { weddingConfig } from "@/config/wedding";

export default function Hero() {
  var day = String(weddingConfig.date.day).padStart(2, "0");

  var month = new Date(
    2000,
    weddingConfig.date.month - 1,
    1
  )
    .toLocaleString("en-US", {
      month: "short",
    })
    .toUpperCase();

  return (
    <section className="hero-section">
      <div className="hero-photo-wrap">

        <img
          className="hero-photo"
          src="/images/hero.jpg"
          alt="김동우 우유림 웨딩 사진"
        />

        <div className="hero-shade" />

        <div
          className="hero-script"
          aria-label="Getting Married"
        >
          <span>Getting</span>
          <span>Married</span>
        </div>

        <div className="hero-date-grid">
          <span>{day}TH</span>
          <span>{month}</span>
          <span>{weddingConfig.date.year}</span>
        </div>

      </div>
    </section>
  );
}