"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import { CopyIcon, ChevronIcon } from "@/components/Icon";
import { weddingConfig } from "@/config/wedding";

export default function Account() {
  const [open, setOpen] = useState<string | null>(null);
  const [toast, setToast] = useState("");

  function copy(value: string) {
    navigator.clipboard.writeText(value);
    setToast("계좌번호가 복사되었습니다.");
    window.setTimeout(function () { setToast(""); }, 1600);
  }

  const groups = [
    { id: "groom", title: "신랑측", people: weddingConfig.family.groom },
    { id: "bride", title: "신부측", people: weddingConfig.family.bride }
  ];

  return (
    <section className="paper-section account-section">
      <Reveal>
        <p className="eyebrow">ACCOUNT</p>
        <h2 className="section-title">마음 전하실 곳</h2>
        <p className="section-desc">축하의 마음을 전하고 싶으신 분들을 위해<br/>계좌번호를 안내드립니다.</p>
        <div className="account-groups">
          {groups.map(function (group) {
            const isOpen = open === group.id;
            return (
              <div className="account-group" key={group.id}>
                <button type="button" className={`account-group-trigger ${isOpen ? "open" : ""}`} onClick={() => setOpen(isOpen ? null : group.id)}>
                  <span>{group.title}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                {isOpen && (
                  <div className="account-group-panel">
                    {group.people.map(function (person) {
                      return (
                        <div className="account-detail account-detail-row" key={person.relation}>
                          <div className="account-person">
                            <span>{person.label}</span>
                            <b>{person.name}</b>
                          </div>
                          <div className="account-number">
                            <b>{person.bank}</b>
                            <span>{person.account}</span>
                          </div>
                          <button type="button" onClick={() => copy(person.account)} aria-label={`${person.name} 계좌번호 복사`}>
                            <CopyIcon />
                            <span>복사</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        {toast && <div className="toast">{toast}</div>}
      </Reveal>
    </section>
  );
}
