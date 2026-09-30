"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const images = Array.from({ length: 13 }, function (_, i) { return { src: `/images/wedding-${String(i + 1).padStart(2,"0")}.jpg`, alt: `웨딩 사진 ${i + 1}` }; });

export default function Gallery() {
  const [all, setAll] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const visible = all ? images : images.slice(0, 9);

  useEffect(function () {
    function key(e: KeyboardEvent) {
      if (selected === null) return;
      if (e.key === "Escape") setSelected(null);
      if (e.key === "ArrowRight") setSelected((selected + 1) % images.length);
      if (e.key === "ArrowLeft") setSelected((selected - 1 + images.length) % images.length);
    }
    window.addEventListener("keydown", key);
    return function () { window.removeEventListener("keydown", key); };
  }, [selected]);

  return <section className="paper-section gallery-section"><Reveal>
    <p className="eyebrow">GALLERY</p>
    <h2 className="section-title">우리의 순간</h2>
    <p className="section-desc">함께한 소중한 순간들을 담았습니다.</p>
    <div className="gallery-grid">{visible.map(function (image, i) { return <button key={image.src} onClick={() => setSelected(i)}><img src={image.src} alt={image.alt}/></button>; })}</div>
    <button className="outline-button gallery-more" onClick={() => setAll(!all)}>{all ? "접기" : "사진 더보기"}</button>
  </Reveal>
  {selected !== null && <div className="lightbox" onClick={() => setSelected(null)}>
    <button className="lightbox-close" onClick={() => setSelected(null)}>×</button>
    <button className="lightbox-arrow left" onClick={(e) => { e.stopPropagation(); setSelected((selected - 1 + images.length) % images.length); }}>‹</button>
    <img src={images[selected].src} alt={images[selected].alt} onClick={(e) => e.stopPropagation()}/>
    <button className="lightbox-arrow right" onClick={(e) => { e.stopPropagation(); setSelected((selected + 1) % images.length); }}>›</button>
  </div>}
  </section>;
}
