"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";
import { weddingConfig } from "@/config/wedding";

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getCountdown(): Countdown {
  const year = weddingConfig.date.year;
  const month = weddingConfig.date.month - 1;
  const day = weddingConfig.date.day;

  /*
   * weddingConfig.date.time이
   * "14:30" 같은 형태라면 시간까지 반영
   */
  const time = weddingConfig.date.time || "00:00";

  const timeParts = time.split(":");
  const hour = Number(timeParts[0]) || 0;
  const minute = Number(timeParts[1]) || 0;

  const weddingDate = new Date(
    year,
    month,
    day,
    hour,
    minute,
    0
  );

  const now = new Date();

  const difference = weddingDate.getTime() - now.getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  const days = Math.floor(
    difference / (1000 * 60 * 60 * 24)
  );

  const hours = Math.floor(
    (difference / (1000 * 60 * 60)) % 24
  );

  const minutes = Math.floor(
    (difference / (1000 * 60)) % 60
  );

  const seconds = Math.floor(
    (difference / 1000) % 60
  );

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds
  };
}

function padNumber(value: number, length: number) {
  return String(value).padStart(length, "0");
}

export default function WeddingInfo() {
  const year = weddingConfig.date.year;
  const monthIndex = weddingConfig.date.month - 1;
  const day = weddingConfig.date.day;

  const first = new Date(year, monthIndex, 1).getDay();
  const last = new Date(year, monthIndex + 1, 0).getDate();

  const days: Array<number | null> = [];

  for (let i = 0; i < first; i += 1) {
    days.push(null);
  }

  for (let i = 1; i <= last; i += 1) {
    days.push(i);
  }

  /*
   * 실시간 카운트다운
   */
  const [countdown, setCountdown] = useState<Countdown>(
    getCountdown()
  );

  useEffect(function () {
    const timer = window.setInterval(function () {
      setCountdown(getCountdown());
    }, 1000);

    return function () {
      window.clearInterval(timer);
    };
  }, []);

  /*
   * 기존 D-Day
   */
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const weddingDate = new Date(
    year,
    monthIndex,
    day
  );

  weddingDate.setHours(0, 0, 0, 0);

  const diff = Math.ceil(
    (weddingDate.getTime() - today.getTime()) / 86400000
  );

  const dday =
    diff >= 0
      ? `D-${diff}`
      : `D+${Math.abs(diff)}`;

  return (
    <section className="paper-section calendar-section">
      <Reveal>

        <p className="eyebrow">
          WEDDING DAY
        </p>

        <h2 className="section-title">
          우리의 결혼식
        </h2>

        {/* =========================
            CALENDAR
        ========================= */}
        <div className="calendar-card">

          <div className="calendar-head">
            <span>
              {new Date(
                year,
                monthIndex,
                1
              ).toLocaleString("en-US", {
                month: "long"
              }).toUpperCase()}
            </span>

            <b>
              {year}.{" "}
              {String(
                weddingConfig.date.month
              ).padStart(2, "0")}.{" "}
              {String(day).padStart(2, "0")}
            </b>
          </div>

          <div className="week-row">
            {[
              "SUN",
              "MON",
              "TUE",
              "WED",
              "THU",
              "FRI",
              "SAT"
            ].map(function (d) {
              return (
                <span key={d}>
                  {d}
                </span>
              );
            })}
          </div>

          <div className="calendar-grid">
            {days.map(function (d, i) {
              return (
                <span
                  key={i}
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

        {/* =========================
            REAL TIME COUNTDOWN
        ========================= */}
        <div className="real-countdown">

          <div className="countdown-timer">

            <div className="countdown-item">
              <span className="countdown-number">
                {padNumber(countdown.days, 3)}
              </span>

              <span className="countdown-label">
                DAYS
              </span>
            </div>

            <span className="countdown-colon">
              :
            </span>

            <div className="countdown-item">
              <span className="countdown-number">
                {padNumber(countdown.hours, 2)}
              </span>

              <span className="countdown-label">
                HOUR
              </span>
            </div>

            <span className="countdown-colon">
              :
            </span>

            <div className="countdown-item">
              <span className="countdown-number">
                {padNumber(countdown.minutes, 2)}
              </span>

              <span className="countdown-label">
                MIN
              </span>
            </div>

            <span className="countdown-colon">
              :
            </span>

            <div className="countdown-item">
              <span className="countdown-number">
                {padNumber(countdown.seconds, 2)}
              </span>

              <span className="countdown-label">
                SEC
              </span>
            </div>

          </div>

          <p className="countdown-message">
            <strong>
              동우, 유림
            </strong>
            의 결혼식이{" "}
            <strong>
              {countdown.days}일
            </strong>{" "}
            남았습니다.
          </p>

        </div>

      </Reveal>
    </section>
  );
}