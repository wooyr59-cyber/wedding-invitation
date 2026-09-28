"use client";

import { useState } from "react";

const ADDRESS = "경기 부천시 원미구 송내대로 239 7층";
const NAVER_MAP_URL = "https://naver.me/G0DXk3Wa";

export default function Location() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = async () => {
    try {
      await navigator.clipboard.writeText(ADDRESS);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch (error) {
      console.error("주소 복사 실패", error);
    }
  };

  
  return (
    <section className="bg-[#f8f5f1] px-5 py-24">
      <div className="mx-auto max-w-[560px]">

        {/* 제목 */}
        <div className="mb-12 text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#9a8d82]">
            LOCATION
          </p>

          <h2 className="mt-5 text-[24px] font-light tracking-[-0.02em] text-[#403a35]">
            오시는 길
          </h2>
        </div>

        {/* 지도 */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e9e3dc]">

          {/* 실제 지도 들어갈 영역 */}
          <div className="flex h-full w-full items-center justify-center">
            <div className="text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-[#b9aaa0] bg-[#f8f5f1]">
                <span className="text-[20px]">📍</span>
              </div>

              <p className="mt-4 text-[13px] tracking-[0.02em] text-[#665c55]">
                ○○웨딩홀
              </p>

              <p className="mt-2 text-[10px] text-[#9a8d82]">
                지도가 표시될 영역
              </p>

            </div>
          </div>
        </div>

        {/* 장소 정보 */}
        <div className="mt-10 text-center">

          <h3 className="text-[17px] font-normal tracking-[-0.02em] text-[#403a35]">
            ○○웨딩홀 3층 ○○홀
          </h3>

          <p className="mt-3 text-[13px] font-light leading-[1.8] text-[#756b64]">
            {ADDRESS}
          </p>

          {/* 주소 복사 */}
          <button
            type="button"
            onClick={handleCopyAddress}
            className="mt-4 border-b border-[#b9aaa0] pb-1 text-[10px] tracking-[0.08em] text-[#756b64]"
          >
            주소 복사
          </button>
        </div>

        {/* 오시는 방법 */}
        <div className="mt-10 border-t border-[#ded7d1] pt-8">

          <div className="flex gap-5">
            <span className="w-[50px] shrink-0 text-[10px] tracking-[0.08em] text-[#9a8d82]">
              지하철
            </span>

            <p className="text-[12px] font-light leading-[1.8] text-[#665c55]">
              ○호선 ○○역 하차 후<br />
              ○번 출구에서 도보 약 5분
            </p>
          </div>

          <div className="mt-6 flex gap-5">
            <span className="w-[50px] shrink-0 text-[10px] tracking-[0.08em] text-[#9a8d82]">
              버스
            </span>

            <p className="text-[12px] font-light leading-[1.8] text-[#665c55]">
              ○○정류장 하차 후 도보 약 3분
            </p>
          </div>

          <div className="mt-6 flex gap-5">
            <span className="w-[50px] shrink-0 text-[10px] tracking-[0.08em] text-[#9a8d82]">
              주차
            </span>

            <p className="text-[12px] font-light leading-[1.8] text-[#665c55]">
              건물 내 주차장 이용 가능
            </p>
          </div>

        </div>

        {/* 네이버 지도 */}
        <a
          href={NAVER_MAP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 flex h-12 items-center justify-center border border-[#b9aaa0] text-[11px] tracking-[0.08em] text-[#665c55] transition-colors hover:bg-[#eee9e4]"
        >
          네이버 지도에서 보기
        </a>

      </div>

      {/* 복사 완료 토스트 */}
      {copied && (
        <div className="fixed bottom-8 left-1/2 z-[9999] -translate-x-1/2 rounded-full bg-[#403a35] px-5 py-3 text-[11px] text-white shadow-lg">
          주소가 복사되었습니다.
        </div>
      )}
    </section>
  );
}