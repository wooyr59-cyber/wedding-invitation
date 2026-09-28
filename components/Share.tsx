'use client';

export default function Share() {
  const share = async () => {
    if (navigator.share) {
      await navigator.share({
        title: '유림 & 동우의 결혼식에 초대합니다',
        text: '소중한 분들을 결혼식에 초대합니다.',
        url: window.location.href,
      });
      return;
    }

    await navigator.clipboard.writeText(window.location.href);
    alert('청첩장 링크가 복사되었습니다.');
  };

  return (
    <footer className="border-t border-[#e8e3de] px-8 py-20 text-center">
      <p className="mb-6 text-xs tracking-[0.25em] text-[#a39a92]">
        SHARE
      </p>

      <button
        type="button"
        onClick={share}
        className="border border-[#bdb4ac] px-6 py-3 text-sm"
      >
        청첩장 공유하기
      </button>

      <p className="mt-12 text-xs text-[#9b9188]">
        © 2026 YURIM & DONGWOO
      </p>
    </footer>
  );
}
