"use client";

import { useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { weddingConfig } from "@/config/wedding";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getWeddingDate() {
  var year = weddingConfig.date.year;
  var month = weddingConfig.date.month - 1;
  var day = weddingConfig.date.day;

  var time = weddingConfig.date.time;

  var hour = 0;
  var minute = 0;

  /*
   * "PM 2:30" 형식 처리
   */
  var timeMatch = time.match(/^(AM|PM)\s+(\d+):(\d+)$/i);

  if (timeMatch) {
    var ampm = timeMatch[1].toUpperCase();
    hour = Number(timeMatch[2]);
    minute = Number(timeMatch[3]);

    if (ampm === "PM" && hour !== 12) {
      hour += 12;
    }

    if (ampm === "AM" && hour === 12) {
      hour = 0;
    }
  }

  return new Date(year, month, day, hour, minute, 0);
}

function getCountdown(): Countdown {
  var now = new Date();
  var weddingDate = getWeddingDate();

  var diff = weddingDate.getTime() - now.getTime();

  if (diff <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  var totalSeconds = Math.floor(diff / 1000);

  var days = Math.floor(totalSeconds / 86400);

  var hours = Math.floor(
    (totalSeconds % 86400) / 3600
  );

  var minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );

  var seconds = totalSeconds % 60;

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export default function WeddingInfo() {
  var year = weddingConfig.date.year;
  var monthIndex = weddingConfig.date.month - 1;
  var day = weddingConfig.date.day;

  /*
   * 달력 계산
   */
  var first = new Date(
    year,
    monthIndex,
    1
  ).getDay();

  var last = new Date(
    year,
    monthIndex + 1,
    0
  ).getDate();

  var days: Array<number | null> = [];

  for (var i = 0; i < first; i += 1) {
    days.push(null);
  }

  for (var j = 1; j <= last; j += 1) {
    days.push(j);
  }

  /*
   * D-Day
   *
   * 날짜 기준으로 계산
   */
  var weddingDate = new Date(
    year,
    monthIndex,
    day
  );

  var today = new Date();

  today.setHours(0, 0, 0, 0);

  var diff = Math.ceil(
    (weddingDate.getTime() - today.getTime()) /
      86400000
  );

  var dday =
    diff >= 0
      ? `D-${diff}`
      : `D+${Math.abs(diff)}`;

  /*
   * 중요!
   *
   * 서버와 클라이언트의 첫 렌더링을
   * 동일하게 만들기 위해 0으로 시작한다.
   */
  var countdownState = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  var countdown = countdownState[0];
  var setCountdown = countdownState[1];

  /*
   * 브라우저에서 렌더링된 이후
   * 실제 카운트다운 시작
   */
  useEffect(function () {
    setCountdown(getCountdown());

    var timer = window.setInterval(
      function () {
        setCountdown(getCountdown());
      },
      1000
    );

    return function () {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <section className="paper-section calendar-section">
      <ScrollReveal>

        <p className="eyebrow">
          WEDDING DAY
        </p>

        <h2 className="section-title">
          우리의 결혼식
        </h2>

        {/* Calendar */}
        <div className="calendar-card">

          <div className="calendar-head">

            <span>
              {new Date(
                year,
                monthIndex,
                1
              )
                .toLocaleString(
                  "en-US",
                  {
                    month: "long",
                  }
                )
                .toUpperCase()}
            </span>

            <b>{year}.{" "}
            {String(
              weddingConfig.date.month
            ).padStart(2, "0")}
            .{" "}
            {String(day).padStart(
              2,
              "0"
            )}</b>

          </div>

          <div className="week-row">

            {[
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT",
            ].map(function (d) {
              return (
                <span key={d}>
                  {d}
                </span>
              );
            })}

          </div>

          <div className="calendar-grid">

            {days.map(function (
              d,
              index
            ) {
              return (
                <span
                  key={index}
                  className={
                    d === day
                      ? "wedding-day"
                      : d === null
                      ? "empty"
                      : ""
                  }
                >
                  {d}
                </span>
              );
            })}

          </div>

        </div>

        {/* Real Countdown */}
        <div className="real-countdown">

          <div className="countdown-timer">

            {/* DAYS */}
            <div className="countdown-item">

              <span className="countdown-number">
                {String(
                  countdown.days
                ).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                DAYS
              </span>

            </div>

            <span className="countdown-colon">
              :
            </span>

            {/* HOUR */}
            <div className="countdown-item">

              <span className="countdown-number">
                {String(
                  countdown.hours
                ).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                HOUR
              </span>

            </div>

            <span className="countdown-colon">
              :
            </span>

            {/* MIN */}
            <div className="countdown-item">

              <span className="countdown-number">
                {String(
                  countdown.minutes
                ).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                MIN
              </span>

            </div>

            <span className="countdown-colon">
              :
            </span>

            {/* SEC */}
            <div className="countdown-item">

              <span className="countdown-number">
                {String(
                  countdown.seconds
                ).padStart(2, "0")}
              </span>

              <span className="countdown-label">
                SEC
              </span>

            </div>

          </div>

          <p className="countdown-message">
            동우, 유림의 결혼식이{" "}
            <strong>
              {countdown.days}일
            </strong>{" "}
            남았습니다.
          </p>

        </div>

      </ScrollReveal>
    </section>
  );
}