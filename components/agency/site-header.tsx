"use client";

import { useSyncExternalStore } from "react";
import { buttonVariants } from "@/components/ui/button";
import "./site-header.css";

function subscribeToScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

const getScrolledSnapshot = () => window.scrollY > 0;
const getServerSnapshot = () => false;

export function SiteHeader() {
  const scrolled = useSyncExternalStore(subscribeToScroll, getScrolledSnapshot, getServerSnapshot);

  return (
    <header className="four-header-shell" data-scrolled={scrolled || undefined}>
      <div className="four-header">
        <a href="#contact" className={buttonVariants({ variant: "default", size: "sm", className: "four-header-contact" })}>Get started</a>
      </div>
    </header>
  );
}
