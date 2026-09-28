"use client";

import { useEffect, useState } from "react";

const galleryImages = [
  {
    src: "/images/wedding-01.jpg",
    alt: "웨딩 사진 1",
  },
  {
    src: "/images/wedding-02.jpg",
    alt: "웨딩 사진 2",
  },
  {
    src: "/images/wedding-03.jpg",
    alt: "웨딩 사진 3",
  },
  {
    src: "/images/wedding-04.jpg",
    alt: "웨딩 사진 4",
  },
  {
    src: "/images/wedding-05.jpg",
    alt: "웨딩 사진 5",
  },
  {
    src: "/images/wedding-06.jpg",
    alt: "웨딩 사진 6",
  },
  {
    src: "/images/wedding-07.jpg",
    alt: "웨딩 사진 7",
  },
  {
    src: "/images/wedding-08.jpg",
    alt: "웨딩 사진 8",
  },
  {
    src: "/images/wedding-09.jpg",
    alt: "웨딩 사진 9",
  },
  {
    src: "/images/wedding-10.jpg",
    alt: "웨딩 사진 10",
  },
  {
    src: "/images/wedding-11.jpg",
    alt: "웨딩 사진 11",
  },
  {
    src: "/images/wedding-12.jpg",
    alt: "웨딩 사진 12",
  },
  {
    src: "/images/wedding-13.jpg",
    alt: "웨딩 사진 13",
  },
];

const INITIAL_COUNT = 9;

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);

  const hasMoreImages = galleryImages.length > INITIAL_COUNT;

  const selectedImage =
    selectedIndex !== null
      ? galleryImages[selectedIndex]
      : null;

  /*
   * 키보드 조작
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return (current + 1) % galleryImages.length;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) => {
          if (current === null) return null;

          return (
            (current - 1 + galleryImages.length) %
            galleryImages.length
          );
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <>
      {/* ========================================
          Gallery
      ========================================= */}
      <section className="bg-[#f8f5f1] px-5 py-24">
        <div className="mx-auto max-w-[560px]">

          {/* 제목 */}
          <div className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.35em] text-[#9a8d82]">
              OUR MOMENTS
            </p>

            <h2 className="mt-5 text-[24px] font-light tracking-[-0.02em] text-[#403a35]">
              우리의 순간들
            </h2>
          </div>

          {/* ========================================
              사진 그리드
          ========================================= */}
          <div className="grid grid-cols-3 gap-[3px]">
            {visibleImages.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group relative aspect-square w-full overflow-hidden bg-[#eee9e4]"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="block h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </button>
            ))}
          </div>

          {/* ========================================
              더보기 / 접기
          ========================================= */}
          {hasMoreImages && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setShowAll((current) => !current)}
                className="border border-[#c8bdb4] px-8 py-3 text-[11px] tracking-[0.12em] text-[#665c55] transition-colors hover:bg-[#eee9e4]"
              >
                {showAll ? "접기" : "사진 더보기"}
              </button>
            </div>
          )}

          {/* 사진 개수 */}
          <p className="mt-5 text-center text-[10px] tracking-[0.08em] text-[#9a8d82]">
            {showAll
              ? `총 ${galleryImages.length}장의 사진`
              : `${visibleImages.length}장의 사진`}
          </p>
        </div>
      </section>

      {/* ========================================
          확대 모달
      ========================================= */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90"
          onClick={() => setSelectedIndex(null)}
        >
          {/* ====================================
              모달 컨테이너
          ==================================== */}
          <div className="relative flex h-full w-full items-center justify-center">

            {/* ==================================
                닫기
            ================================== */}
            <button
              type="button"
              aria-label="닫기"
              onClick={(event) => {
                event.stopPropagation();
                setSelectedIndex(null);
              }}
              className="absolute right-4 top-4 z-50 flex h-12 w-12 items-center justify-center text-[32px] font-light text-white"
            >
              ×
            </button>

            {/* ==================================
                이전
            ================================== */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                aria-label="이전 사진"
                onClick={(event) => {
                  event.stopPropagation();

                  setSelectedIndex((current) => {
                    if (current === null) return null;

                    return (
                      (current - 1 + galleryImages.length) %
                      galleryImages.length
                    );
                  });
                }}
                className="absolute left-2 top-1/2 z-50 flex h-16 w-12 -translate-y-1/2 items-center justify-center text-[40px] font-light text-white/80"
              >
                ‹
              </button>
            )}

            {/* ==================================
                사진 영역
            ================================== */}
            <div
              className="flex max-h-[90vh] max-w-[90vw] flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="block max-h-[82vh] max-w-[85vw] object-contain"
              />

              <p className="mt-4 text-[11px] tracking-[0.15em] text-white/60">
                {selectedIndex + 1} / {galleryImages.length}
              </p>
            </div>

            {/* ==================================
                다음
            ================================== */}
            {galleryImages.length > 1 && (
              <button
                type="button"
                aria-label="다음 사진"
                onClick={(event) => {
                  event.stopPropagation();

                  setSelectedIndex((current) => {
                    if (current === null) return null;

                    return (
                      (current + 1) % galleryImages.length
                    );
                  });
                }}
                className="absolute right-2 top-1/2 z-50 flex h-16 w-12 -translate-y-1/2 items-center justify-center text-[40px] font-light text-white/80"
              >
                ›
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}