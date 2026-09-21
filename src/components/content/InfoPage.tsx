import type { ReactNode } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function InfoPage({ title, intro, children }: { title: string; intro?: string; children: ReactNode }) {
  return <main className="min-h-screen font-sans"><div className="mx-auto my-2 w-[calc(100%-1rem)] max-w-[1480px] overflow-hidden rounded-[1.25rem] border border-[#6f2b1b]/15 bg-[#fffaf0]/85 shadow-[0_20px_70px_rgba(87,35,21,0.12)] sm:my-4 sm:w-[calc(100%-1.5rem)] sm:rounded-[2rem]"><SiteHeader /><section className="bg-[linear-gradient(135deg,#fff4dc_0%,#fffaf0_55%,#f8e7d4_100%)] px-5 py-10 md:px-10 md:py-14"><h1 className="font-serif text-4xl font-black text-[#742115] md:text-6xl">{title}</h1>{intro ? <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[#623f34]">{intro}</p> : null}</section><article className="mx-auto max-w-4xl space-y-6 px-5 py-8 leading-8 text-[#69483d] md:px-10 md:py-12">{children}</article><SiteFooter /></div></main>;
}
