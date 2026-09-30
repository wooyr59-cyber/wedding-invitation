"use client";

import { useState } from "react";
import Contact from "@/components/Contact";

export default function BottomNav() {
  const [open, setOpen] = useState(false);
  return <>
    <div className="bottom-bar"><button onClick={() => setOpen(true)}>연락하기</button><button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}>마음 전하기</button></div>
    {open && <div className="hidden-contact"><Contact/></div>}
  </>;
}
