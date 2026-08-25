"use client";

import React, { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[];
  }
}

type AdvertisementProps = {
  className?: string;
  label?: string;
  slot?: string;
};

const Advertisement: React.FC<AdvertisementProps> = ({
  className = "",
  label = "Hirdetés",
  slot,
}) => {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;
  const adSlot = slot || process.env.NEXT_PUBLIC_ADSENSE_DEFAULT_SLOT;
  const isConfigured = Boolean(client && adSlot);

  useEffect(() => {
    if (!isConfigured) return;

    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.warn("[adsense] A hirdetés betöltése nem sikerült.", error);
    }
  }, [isConfigured, adSlot]);

  if (!isConfigured) {
    return (
      <aside
        className={`flex min-h-[120px] w-full items-center justify-center rounded-2xl border border-dashed border-foreground/20 bg-white/35 text-foreground/50 ${className}`}
        aria-label="Hirdetési hely"
      >
        <span className="text-xs font-bold uppercase tracking-[0.28em]">{label}</span>
      </aside>
    );
  }

  return (
    <aside
      className={`w-full overflow-hidden rounded-2xl bg-white/30 p-2 ${className}`}
      aria-label="Hirdetés"
    >
      <div className="mb-1 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-foreground/40">
        {label}
      </div>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={client}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  );
};

export default Advertisement;
