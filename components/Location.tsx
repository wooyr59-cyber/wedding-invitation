"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    naver: any;
  }
}

interface MapProps {
  latitude?: number;
  longitude?: number;
  placeName?: string;
  address?: string;
}

export default function Map({
  latitude = 37.5665,
  longitude = 126.9780,
  placeName = "예식장",
  address = "서울특별시 중구 세종대로 110",
}: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(function () {
    const clientId =
      process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

    if (!clientId) {
      console.error(
        "네이버 지도 Client ID가 설정되지 않았습니다."
      );
      return;
    }

    function initMap() {
      if (!window.naver || !mapRef.current) {
        return;
      }

      const position =
        new window.naver.maps.LatLng(
          latitude,
          longitude
        );

      const map =
        new window.naver.maps.Map(
          mapRef.current,
          {
            center: position,
            zoom: 16,
            zoomControl: true,
            zoomControlOptions: {
              position:
                window.naver.maps.Position.TOP_RIGHT,
            },
          }
        );

      mapInstanceRef.current = map;

      new window.naver.maps.Marker({
        position: position,
        map: map,
      });
    }

    // 이미 네이버 지도 API가 로드되어 있는 경우
    if (
      window.naver &&
      window.naver.maps
    ) {
      initMap();
      return;
    }

    // 네이버 지도 API 로드
    const script =
      document.createElement("script");

    script.src =
      "https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=" +
      clientId;

    script.async = true;

    script.onload = function () {
      initMap();
    };

    script.onerror = function () {
      console.error(
        "네이버 지도 API를 불러오지 못했습니다."
      );
    };

    document.head.appendChild(script);

    return function () {
      script.remove();
    };
  }, [latitude, longitude]);

  /*
   * 네이버 지도 길찾기
   */
  function goNaverMap() {
    const url =
      "https://map.naver.com/p/search/" +
      encodeURIComponent(placeName);

    window.open(url, "_blank");
  }

  /*
   * 카카오맵 길찾기
   */
  function goKakaoMap() {
    const url =
      "https://map.kakao.com/?q=" +
      encodeURIComponent(placeName);

    window.open(url, "_blank");
  }

  /*
   * 티맵 길찾기
   */
  function goTmap() {
    const url =
      "https://apis.openapi.sk.com/tmap/app/routes?name=" +
      encodeURIComponent(placeName) +
      "&lon=" +
      longitude +
      "&lat=" +
      latitude;

    window.open(url, "_blank");
  }

  return (
    <section className="map-section">

      {/* 제목 */}
      <div className="map-header">
        <p className="map-subtitle">
          LOCATION
        </p>

        <h2 className="map-title">
          오시는 길
        </h2>
      </div>

      {/* 지도 */}
      <div
        ref={mapRef}
        className="map-container"
      />

      {/* 장소 정보 */}
      <div className="map-info">

        <h3 className="map-place">
          {placeName}
        </h3>

        <p className="map-address">
          {address}
        </p>

      </div>

      {/* 길찾기 버튼 */}
      <div className="map-buttons">

        <button
          type="button"
          onClick={goNaverMap}
          className="map-button"
        >
          네이버지도
        </button>

        <button
          type="button"
          onClick={goKakaoMap}
          className="map-button"
        >
          카카오맵
        </button>

        <button
          type="button"
          onClick={goTmap}
          className="map-button"
        >
          티맵
        </button>

      </div>

    </section>
  );
}