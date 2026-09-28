'use client';

import { useState } from 'react';

const accounts = [
  { name: '신랑 동우', bank: '국민은행', number: '000000-00-000000' },
  { name: '신부 유림', bank: '신한은행', number: '000-000-000000' },
];

export default function Account() {
  const [toast, setToast] = useState('');

  const copyAccount = async (number: string) => {
    await navigator.clipboard.writeText(number);
    setToast('계좌번호가 복사되었습니다.');

    window.setTimeout(() => {
      setToast('');
    }, 1800);
  };

  return (
    <section className="relative border-t border-[#e8e3de] px-8 py-24">
      <div className="mb-10 text-center">
        <p className="mb-3 text-xs tracking-[0.25em] text-[#a39a92]">
          ACCOUNT
        </p>
        <h2 className="text-xl">마음 전하실 곳</h2>
      </div>

      <div className="space-y-3">
        {accounts.map((account) => (
          <div
            key={account.name}
            className="flex items-center justify-between border border-[#e5dfd9] bg-white px-4 py-4"
          >
            <div className="text-sm leading-6">
              <p>{account.name}</p>
              <p className="text-[#817870]">
                {account.bank} {account.number}
              </p>
            </div>

            <button
              type="button"
              onClick={() => copyAccount(account.number)}
              className="border border-[#d4ccc5] px-3 py-2 text-xs"
            >
              복사
            </button>
          </div>
        ))}
      </div>

      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-[#403a35] px-5 py-3 text-xs text-white shadow-lg">
          {toast}
        </div>
      )}
    </section>
  );
}
