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

  // 처음에는 9장만 표시
  const visibleImages = showAll
    ? galleryImages
    : galleryImages.slice(0, INITIAL_COUNT);

  const hasMoreImages = galleryImages.length > INITIAL_COUNT;

  // 모달에 선택된 이미지
  const selectedImage =
    selectedIndex !== null
      ? galleryImages[selectedIndex]
      : null;

  // ESC / 방향키
  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex(
          (selectedIndex + 1) % galleryImages.length
        );
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex(
          (selectedIndex - 1 + galleryImages.length) %
            galleryImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  // 모달이 열려 있을 때 배경 스크롤 방지
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <>
      {/* =========================
          Gallery
      ========================== */}
      <section className="bg-[#f8f5f1] px-5 py-24">
        <div className="mx-auto max-w-[560px]">

          {/* 타이틀 */}
          <div className="mb-12 text-center">
            <p className="text-[10px] tracking-[0.35em] text-[#9a8d82]">
              OUR MOMENTS
            </p>

            <h2 className="mt-5 text-[24px] font-light tracking-[-0.02em] text-[#403a35]">
              우리의 순간들
            </h2>
          </div>

          {/* 사진 */}
          <div className="grid grid-cols-3 gap-[3px]">
            {visibleImages.map((image, index) => {
              const realIndex = galleryImages.findIndex(
                (item) => item.src === image.src
              );

              return (
                <button
                  key={image.src}
                  type="button"
                  aria-label={`${realIndex + 1}번째 사진 크게 보기`}
                  onClick={() => setSelectedIndex(realIndex)}
                  className="relative aspect-square w-full overflow-hidden bg-[#eee9e4]"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="block h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </button>
              );
            })}
          </div>

          {/* 더보기 */}
          {hasMoreImages && !showAll && (
            <div className="mt-8 text-center">
              <button
                type="button"
                onClick={() => setShowAll(true)}
                className="border border-[#c8bdb4] px-8 py-3 text-[11px] tracking-[0.12em] text-[#665c55] transition-colors hover:bg-[#eee9e4]"
              >
                사진 더보기
              </button>
            </div>
          )}

          {/* 전체보기 후 안내 */}
          {showAll && hasMoreImages && (
            <p className="mt-8 text-center text-[10px] tracking-[0.08em] text-[#9a8d82]">
              총 {galleryImages.length}장의 사진
            </p>
          )}
        </div>
      </section>

      {/* =========================
          사진 확대 모달
      ========================== */}
      {selectedImage && selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90"
          onClick={() => setSelectedIndex(null)}
        >
          {/* 닫기 */}
          <button
            type="button"
            aria-label="사진 닫기"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center text-[30px] font-light text-white"
          >
            ×
          </button>

          {/* 이전 버튼 */}
          <button
            type="button"
            aria-label="이전 사진"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex(
                (selectedIndex - 1 + galleryImages.length) %
                  galleryImages.length
              );
            }}
            className="absolute left-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-[36px] font-light text-white/80"
          >
            ‹
          </button>

          {/* 이미지 영역 */}
          <div
            className="flex max-h-[90vh] max-w-[90vw] flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-h-[80vh] max-w-[88vw] object-contain"
            />

            <p className="mt-4 text-[11px] tracking-[0.15em] text-white/60">
              {selectedIndex + 1} / {galleryImages.length}
            </p>
          </div>

          {/* 다음 버튼 */}
          <button
            type="button"
            aria-label="다음 사진"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex(
                (selectedIndex + 1) % galleryImages.length
              );
            }}
            className="absolute right-2 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-[36px] font-light text-white/80"
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}