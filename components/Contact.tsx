"use client";

import { useState } from "react";
import { weddingConfig } from "@/config/wedding";
import { MessageIcon, PhoneIcon } from "@/components/Icon";

const people = [
  { side: "신랑측", relation: "신랑", name: weddingConfig.groom.name, phone: weddingConfig.groom.phone },
  { side: "신부측", relation: "신부", name: weddingConfig.bride.name, phone: weddingConfig.bride.phone },
];

export default function Contact() {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" className="outline-button contact-open" onClick={() => setOpen(true)}>연락하기</button>
    {open && <div className="modal-backdrop" onClick={() => setOpen(false)}>
      <div className="contact-modal" onClick={function (e) { e.stopPropagation(); }}>
        <button className="modal-close" onClick={() => setOpen(false)} aria-label="닫기">×</button>
        <p className="eyebrow">CONTACT</p>
        <h3>연락하기</h3>
        <div className="contact-groups">
          {people.map(function (person) { return <div className="contact-row" key={person.side}>
            <div><span>{person.side}</span><strong>{person.relation} {person.name}</strong></div>
            <div className="contact-actions">
              <a href={`tel:${person.phone}`} aria-label="전화하기"><PhoneIcon /></a>
              <a href={`sms:${person.phone}`} aria-label="문자하기"><MessageIcon /></a>
            </div>
          </div>; })}
        </div>
      </div>
    </div>}
  </>;
}
