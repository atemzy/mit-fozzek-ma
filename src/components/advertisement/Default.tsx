"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type TCData = { eventStatus?: string; listenerId?: number; gdprApplies?: boolean; purpose?: { consents?: Record<string, boolean> }; vendor?: { consents?: Record<string, boolean> } };
declare global { interface Window { adsbygoogle?: Record<string, unknown>[]; __tcfapi?: (command: string, version: number, callback: (data: TCData, success: boolean) => void, parameter?: number) => void; } }
let scriptPromise: Promise<void> | undefined;
function loadAds(client: string) {
  if (!scriptPromise) scriptPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script"); script.async = true; script.crossOrigin = "anonymous";
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
    script.onload = () => resolve(); script.onerror = () => { scriptPromise = undefined; reject(new Error("Hirdetésbetöltési hiba")); }; document.head.appendChild(script);
  });
  return scriptPromise;
}
export default function Advertisement({ className = "", label = "Hirdetés", slot }: {className?: string; label?: string; slot?: string}) {
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "";
  const adSlot = slot || process.env.NEXT_PUBLIC_ADSENSE_DEFAULT_SLOT || "";
  const path = usePathname();
  const allowed = path === "/" || /^\/(ebed-otletek|vacsora-otletek|gyors-etelek|olcso-etelek|magyaros-etelek|hetvegi-menu|egyszeru-etelek|maradekmento-etelek)\/?$/.test(path) || /^\/receptek\/[^/]+\/?$/.test(path);
  const configured = allowed && process.env.NEXT_PUBLIC_ADSENSE_ENABLED === "true" && process.env.NEXT_PUBLIC_ADSENSE_CMP_READY === "true" && /^ca-pub-\d{16}$/.test(client) && /^\d+$/.test(adSlot);
  const [consent, setConsent] = useState(false);
  const ad = useRef<HTMLModElement>(null);
  useEffect(() => {
    if (!configured) return;
    let listenerId: number | undefined; let attached = false; let active = true;
    const attach = () => {
      if (attached || !window.__tcfapi) return;
      attached = true;
      window.__tcfapi("addEventListener", 2, (data, success) => {
        listenerId = data.listenerId;
        if (!active) { if (listenerId !== undefined) window.__tcfapi?.("removeEventListener", 2, () => {}, listenerId); return; }
        if (!success || !["tcloaded", "useractioncomplete"].includes(data.eventStatus || "")) return;
        // Conservative mode: no ads without CMP confirmation; in GDPR regions require Google and all purposes used here.
        setConsent(data.gdprApplies === false || (data.gdprApplies === true && !!data.vendor?.consents?.["755"] && ["1", "3", "4", "7", "9", "10"].every(p => data.purpose?.consents?.[p])));
      });
    };
    attach(); const timer = window.setInterval(attach, 500);
    return () => { active = false; clearInterval(timer); if (listenerId !== undefined) window.__tcfapi?.("removeEventListener", 2, () => {}, listenerId); };
  }, [configured]);
  useEffect(() => {
    if (!configured || !consent) return;
    let active = true;
    loadAds(client).then(() => { if (active && ad.current && !ad.current.dataset.adStatus && ad.current.getBoundingClientRect().width > 0) (window.adsbygoogle = window.adsbygoogle || []).push({}); }).catch(() => {});
    return () => { active = false; };
  }, [configured, consent, client, adSlot]);
  if (!configured || !consent) return null;
  return <aside className={`w-full overflow-hidden rounded-2xl bg-white/30 p-2 ${className}`} aria-label="Hirdetés"><p className="mb-2 text-center text-xs text-[#69483d]">{label}</p><ins ref={ad} className="adsbygoogle block" style={{display:"block"}} data-ad-client={client} data-ad-slot={adSlot} data-ad-format="auto" data-full-width-responsive="true" /></aside>;
}
