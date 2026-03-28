"use client";

import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("@/components/ui/toaster").then((m) => m.Toaster), {
  ssr: false,
});
const Sonner = dynamic(() => import("@/components/ui/sonner").then((m) => m.Toaster), {
  ssr: false,
});

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Toaster />
      <Sonner />
    </>
  );
}
