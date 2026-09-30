"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";

type Guest = { name: string; message: string };
export default function Guestbook() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [items, setItems] = useState<Guest[]>([]);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    setItems([{ name: name.trim(), message: message.trim() }, ...items]);
    setName(""); setMessage("");
  }
  return <section className="paper-section guestbook-section"><ScrollReveal>
    <p className="eyebrow">GUESTBOOK</p>
    <h2 className="section-title">축하의 한마디</h2>
    <p className="section-desc">두 사람에게 따뜻한 축하의 마음을 남겨주세요.</p>
    <form className="guest-form" onSubmit={submit}><input value={name} onChange={(e) => setName(e.target.value)} placeholder="이름"/><textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="축하 메시지를 남겨주세요." rows={4}/><button type="submit">남기기</button></form>
    <div className="guest-list">{items.map(function (item, i) { return <article key={i}><div><b>{item.name}</b><span>{item.message}</span></div><small>방명록</small></article>; })}</div>
  </ScrollReveal></section>;
}
