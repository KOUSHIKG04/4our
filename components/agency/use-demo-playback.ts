"use client";

import { useSyncExternalStore, type RefObject } from "react";
import { useInView, useReducedMotion } from "framer-motion";

function subscribe(onChange: () => void) {
  document.addEventListener("visibilitychange", onChange);
  return () => document.removeEventListener("visibilitychange", onChange);
}
const pageVisible = () => !document.hidden;
const serverVisible = () => false;

export function useDemoPlayback(host: RefObject<HTMLElement | null>) {
  const inView = useInView(host, { amount: 0.15 });
  const reduced = useReducedMotion() === true;
  const visible = useSyncExternalStore(subscribe, pageVisible, serverVisible);
  return { active: inView && visible && !reduced, reduced };
}
