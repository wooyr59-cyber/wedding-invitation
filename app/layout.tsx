import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "김동우 ♥ 우유림 결혼합니다.",
  description: "우리의 소중한 날에 초대합니다.",
  openGraph: {
    title: "김동우 ♥ 우유림 결혼합니다.",
    description: "우리의 소중한 날에 초대합니다.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "김동우 ♥ 우유림 결혼식" }],
    type: "website"
  },
  twitter: { card: "summary_large_image", title: "김동우 ♥ 우유림 결혼합니다.", images: ["/images/og-image.jpg"] }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Script src="https://t1.kakaocdn.net/kakao_js_sdk/2.7.2/kakao.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
