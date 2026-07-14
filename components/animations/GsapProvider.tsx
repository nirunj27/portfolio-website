"use client";

import { useEffect } from "react";
import { registerGsap } from "@/lib/gsap";

export default function GsapProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    registerGsap();
  }, []);

  return <>{children}</>;
}
