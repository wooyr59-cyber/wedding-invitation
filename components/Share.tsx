"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

declare global {
  interface Window {
    Kakao?: any;
  }
}

export default function Share() {
  const [kakaoReady, setKakaoReady] = useState(false);

  useEffect(function () {
    const key = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;
    if (!key) return;

    let count = 0;
    const timer = window.setInterval(function () {
      count += 1;
      if (window.Kakao) {
        if (!window.Kakao.isInitialized()) window.Kakao.init(key);
        setKakaoReady(window.Kakao.isInitialized());
        window.clearInterval(timer);
      }
      if (count >= 20) window.clearInterval(timer);
    }, 250);

    return function () { window.clearInterval(timer); };
  }, []);

  function shareKakao() {
    if (kakaoReady && window.Kakao) {
      window.Kakao.Share.sendDefault({
        objectType: "feed",
        content: {
          title: "김동우 ♥ 우유림 결혼합니다.",
          description: "저희의 소중한 날에 초대합니다.",
          imageUrl: `${window.location.origin}/images/og-image.jpg`,
          link: { mobileWebUrl: window.location.href, webUrl: window.location.href }
        },
        buttons: [{ title: "청첩장 보기", link: { mobileWebUrl: window.location.href, webUrl: window.location.href } }]
      });
      return;
    }

    if (navigator.share) {
      navigator.share({ title: "김동우 ♥ 우유림 결혼합니다.", text: "저희의 소중한 날에 초대합니다.", url: window.location.href }).catch(function () {});
      return;
    }

    navigator.clipboard.writeText(window.location.href).then(function () {
      window.alert("청첩장 링크가 복사되었습니다.");
    });
  }

  return (
    <section className="share-section">
      <Reveal>
        <p className="eyebrow">SHARE</p>
        <h2 className="share-title">소중한 분들과 함께해 주세요</h2>
        <p className="share-copy">청첩장을 카카오톡으로 전해보세요.</p>
        <button type="button" className="kakao-share" onClick={shareKakao}>
          <span className="kakao-bubble">●</span>
          카카오톡 공유하기
        </button>
        <p className="share-hint">{kakaoReady ? "카카오톡으로 청첩장을 공유합니다." : "카카오 SDK가 설정되지 않은 경우 기기 공유 기능으로 연결됩니다."}</p>
      </Reveal>
    </section>
  );
}
