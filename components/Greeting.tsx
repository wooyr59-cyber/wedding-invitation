export default function Greeting() {
  return (
    <section className="bg-[#f8f5f1] px-7 py-24">
      <div className="mx-auto max-w-[560px] text-center">

        {/* 타이틀 */}
        <p className="text-[10px] tracking-[0.35em] text-[#9a8d82]">
          OUR STORY
        </p>

        {/* 인사말 */}
        <div className="mt-10 text-[15px] font-light leading-[2.15] tracking-[-0.01em] text-[#4b443e]">
          <p>
            서로의 하루에
            <br />
            자연스럽게 스며들어
          </p>

          <p className="mt-7">
            이제는 같은 곳을 바라보며
            <br />
            함께 걸어가려 합니다.
          </p>

          <p className="mt-7">
            저희의 새로운 시작에
            <br />
            소중한 분들을 초대합니다.
          </p>
        </div>

        {/* 장식 */}
        <div className="mt-12 text-[18px] font-light text-[#b2a49a]">
          ❦
        </div>

      </div>
    </section>
  );
}