export default function Hero() {
  return (
    <section className="w-full bg-[#f8f5f1] px-5 py-8">
      
      {/* 사진 */}
      <div className="mx-auto w-full max-w-[560px] overflow-hidden">
        <img
          src="/images/hero.jpg"
          alt="신랑 신부 웨딩 사진"
          className="h-[520px] w-full object-cover"
        />
      </div>

      {/* 초대 문구 */}
      <div className="mx-auto max-w-[560px] px-4 pt-12 text-center">
        <p className="text-[10px] tracking-[0.35em] text-[#8d8177]">
          INVITATION
        </p>

        <h1 className="mt-6 text-[24px] font-light leading-[1.8] tracking-[-0.02em] text-[#403a35]">
          우리의 시작에
          <br />
          소중한 분들을 초대합니다.
        </h1>
      </div>

      {/* 날짜 / 장소 */}
      <div className="mx-auto max-w-[560px] px-4 pb-8 pt-10 text-center">
        <div className="mx-auto mb-6 h-px w-8 bg-[#b8aaa0]" />

        <p className="text-[14px] tracking-[0.12em] text-[#4d4640]">
          2027. 06. 12 SAT
        </p>

        <p className="mt-3 text-[12px] tracking-[0.04em] text-[#81766e]">
          오후 2시 30분 · 소풍웨딩컨벤션 7층 베일리홀
        </p>
      </div>

    </section>
  );
}