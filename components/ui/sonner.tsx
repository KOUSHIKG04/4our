"use client";

import { CircleCheck, Info, Loader2, OctagonX, TriangleAlert } from "lucide-react";
import { Toaster as Sonner, type ToasterProps } from "sonner";
import type { CSSProperties } from "react";

export function Toaster(props: ToasterProps) {
  return (
    <Sonner
      theme="light"
      position="bottom-right"
      closeButton
      icons={{ success: <CircleCheck size={18} />, info: <Info size={18} />, warning: <TriangleAlert size={18} />, error: <OctagonX size={18} />, loading: <Loader2 size={18} className="animate-spin" /> }}
      style={{ "--normal-bg": "#ffffff", "--normal-text": "#282828", "--normal-border": "#dedede", "--border-radius": "16px" } as CSSProperties}
      {...props}
    />
  );
}
