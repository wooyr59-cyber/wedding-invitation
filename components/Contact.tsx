const contacts = [
  { label: '신랑', name: '동우', phone: '010-0000-0000' },
  { label: '신부', name: '유림', phone: '010-0000-0000' },
];

export default function Contact() {
  return (
    <section className="border-t border-[#e8e3de] px-8 py-24">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs tracking-[0.25em] text-[#a39a92]">
          CONTACT
        </p>
        <h2 className="text-xl">연락하기</h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {contacts.map((contact) => (
          <div
            key={contact.label}
            className="border border-[#e5dfd9] bg-white p-5 text-center"
          >
            <p className="text-xs text-[#9b9188]">{contact.label}</p>
            <p className="mt-2 text-sm">{contact.name}</p>

            <div className="mt-4 flex justify-center gap-2">
              <a
                href={`tel:${contact.phone}`}
                className="border border-[#d4ccc5] px-3 py-2 text-xs"
              >
                전화
              </a>
              <a
                href={`sms:${contact.phone}`}
                className="border border-[#d4ccc5] px-3 py-2 text-xs"
              >
                문자
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
