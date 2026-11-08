import { useId, type CSSProperties } from "react";

export function GlossyStar({ className, style }: { className?: string; style?: CSSProperties }) {
  const id = useId();
  return (
    <svg className={className} style={style} viewBox="0 0 48 48" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id={id} x2="0" y2="1">
        <stop stopColor="#555555" />
        <stop offset=".34" stopColor="#292929" />
        <stop offset=".52" stopColor="#141414" />
        <stop offset="1" stopColor="#030303" />
      </linearGradient>
    </defs>
    <path d="M24 3c3.5 12 8.9 17.5 21 21-12.1 3.5-17.5 8.9-21 21C20.5 32.9 15 27.5 3 24 15 20.5 20.5 15 24 3Z" fill={`url(#${id})`} stroke="#373737" strokeWidth=".8" />
    <path d="M24 7c-2.6 8.1-6.7 13-14.3 16.6" fill="none" stroke="#a0a0a0" strokeLinecap="round" opacity=".85" />
  </svg>
  );
}
