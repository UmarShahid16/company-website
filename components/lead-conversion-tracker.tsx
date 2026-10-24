"use client";

import { useEffect, useRef } from "react";
import { trackGenerateLead } from "@/components/analytics";

export function LeadConversionTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;
    trackGenerateLead();
  }, []);

  return null;
}
