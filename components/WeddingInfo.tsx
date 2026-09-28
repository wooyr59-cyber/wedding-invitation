"use client";

import { useMemo } from "react";

export default function WeddingInfo() {
  // 결혼식 날짜
  const weddingDate = new Date(2027, 5, 12);

  const year = weddingDate.getFullYear();
  const month = weddingDate.getMonth();
  const date = weddingDate.getDate();

  // 해당 월의 첫 번째 요일
  const firstDay = new Date(year, month, 1).getDay();

  // 해당 월의 마지막 날짜
  const lastDate = new Date(year, month + 1, 0).getDate();

  // 달력 날짜 생성
  const calendarDays = useMemo(() => {
    const days = [];

    // 첫 주 빈칸
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // 실제 날짜
    for (let i = 1; i <= lastDate; i++) {
      days.push(i);
    }

    return days;
  }, [firstDay, lastDate]);

  const weekDays = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <section className="bg-[#f8f5f1] px-7 py-24">
      <div className="mx-auto max-w-[560px]">

        {/* 섹션 타이틀 */}
        <div className="text-center">
          <p className="text-[10px] tracking-[0.35em] text-[#9a8d82]">
            WEDDING DAY
          </p>

          <h2 className="mt-5 text-[24px] font-light tracking-[-0.02em] text-[#403a35]">
            우리의 결혼식
          </h2>
        </div>

        {/* 날짜 */}
        <div className="mt-14 text-center">
          <p className="text-[12px] tracking-[0.3em] text-[#9a8d82]">
            JUNE
          </p>

          <p className="mt-2 text-[34px] font-light tracking-[0.08em] text-[#403a35]">
            {year}
          </p>
        </div>

        {/* 달력 */}
        <div className="mx-auto mt-10 max-w-[360px]">

          {/* 요일 */}
          <div className="grid grid-cols-7 text-center">
            {weekDays.map((day, index) => (
              <div
                key={index}
                className="py-3 text-[10px] tracking-[0.1em] text-[#9a8d82]"
              >
                {day}
              </div>
            ))}
          </div>

          {/* 날짜 */}
          <div className="grid grid-cols-7 text-center">
            {calendarDays.map((day, index) => {
              const isWeddingDay = day === date;

              return (
                <div
                  key={index}
                  className="flex h-12 items-center justify-center"
                >
                  {day && (
                    <span
                      className={
                        isWeddingDay
                          ? "flex h-9 w-9 items-center justify-center rounded-full bg-[#5d5148] text-[12px] text-white"
                          : "text-[12px] font-light text-[#514a44]"
                      }
                    >
                      {day}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 예식 시간 */}
        <div className="mt-14 text-center">
          <p className="text-[11px] tracking-[0.3em] text-[#9a8d82]">
            SATURDAY
          </p>

          <p className="mt-3 text-[17px] font-light tracking-[0.08em] text-[#403a35]">
            PM 2:30
          </p>
        </div>

        {/* 구분선 */}
        <div className="mx-auto mt-10 h-px w-8 bg-[#b8aaa0]" />

        {/* 장소 */}
        <div className="mt-8 text-center">
          <p className="text-[14px] font-light text-[#403a35]">
            소풍웨딩컨벤션 7층 베일리홀
          </p>

          <p className="mt-2 text-[12px] font-light text-[#8d8177]">
            부천시 원미구 송내대로 239 7층
          </p>
        </div>

      </div>
    </section>
  );
}