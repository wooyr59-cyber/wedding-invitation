"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { weddingConfig } from "@/config/wedding";

declare global { interface Window { naver: any; } }

function NavIcon({ type }: { type: "naver" | "tmap" | "kakao" }) {
  return <span className={`nav-icon ${type}`} aria-hidden="true">{type === "naver" ? "N" : type === "tmap" ? "T" : "K"}</span>;
}

export default function Location() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(function () {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;
    function initMap() {
      if (!window.naver || !window.naver.maps || !mapRef.current) return;
      const position = new window.naver.maps.LatLng(weddingConfig.venue.latitude, weddingConfig.venue.longitude);
      const map = new window.naver.maps.Map(mapRef.current, { center: position, zoom: 16, zoomControl: true, zoomControlOptions: { position: window.naver.maps.Position.TOP_RIGHT } });
      new window.naver.maps.Marker({ position: position, map: map });
    }
    if (window.naver && window.naver.maps) { initMap(); return; }
    const script = document.createElement("script");
    script.src = "https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=" + clientId;
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
    return function () { script.remove(); };
  }, []);

  function openNaver() { window.open("https://map.naver.com/p/search/" + encodeURIComponent(weddingConfig.venue.name), "_blank"); }
  function openTmap() { window.open("https://tmap.life/", "_blank"); }
  function openKakao() { window.open("https://map.kakao.com/?q=" + encodeURIComponent(weddingConfig.venue.name), "_blank"); }

  return <section className="location-section"><Reveal>
    <p className="eyebrow">LOCATION</p>
    <h2 className="section-title">오시는 길</h2>
    <div className="map-wrap" ref={mapRef}><div className="map-placeholder">지도를 불러오는 중입니다.</div></div>
    <div className="location-copy"><strong>{weddingConfig.venue.name} {weddingConfig.venue.hall}</strong><p>{weddingConfig.venue.address}</p></div>
    <div className="navigation-row">
      <button type="button" onClick={openNaver}><NavIcon type="naver"/><span>네이버지도</span></button>
      <button type="button" onClick={openTmap}><NavIcon type="tmap"/><span>티맵</span></button>
      <button type="button" onClick={openKakao}><NavIcon type="kakao"/><span>카카오내비</span></button>
    </div>
    <div className="transport-box">
      <p><b>지하철</b> 1호선 중동역 2번 출구에서 도보 약 10분</p>
      <p><b>버스</b> 송내역 정류장 하차 후 셔틀/도보 이용</p>
      <p><b>주차</b> 웨딩홀 지하 주차장 이용 가능</p>
    </div>
  </Reveal></section>;
}
