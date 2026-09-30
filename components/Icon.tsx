export function PhoneIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7.2 3.8 4.8 5.2c-.7.4-1 1.2-.7 2 1.9 5.8 5.6 9.5 11.4 11.4.8.3 1.6 0 2-.7l1.4-2.4c.3-.6.1-1.4-.5-1.7l-2.9-1.5c-.5-.3-1.2-.1-1.6.3l-1.1 1.3c-1.9-1-3.5-2.6-4.5-4.5l1.3-1.1c.4-.4.5-1 .3-1.6L9 4.3c-.3-.6-1.1-.8-1.8-.5Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}
export function MessageIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5.5h16v10H9l-4.5 3v-3H4v-10Z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/><path d="M8 9h8M8 12h5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>;
}
export function CopyIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="10" height="11" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.3"/><path d="M15 8V6.5A1.5 1.5 0 0 0 13.5 5h-7A1.5 1.5 0 0 0 5 6.5v8A1.5 1.5 0 0 0 6.5 16H8" fill="none" stroke="currentColor" strokeWidth="1.3"/></svg>;
}
export function ChevronIcon({open=false}:{open?:boolean}) { return <svg className={open ? "chevron open" : "chevron"} viewBox="0 0 24 24"><path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>; }
