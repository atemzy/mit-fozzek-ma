import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/app/contentData";

const data = guides["magyaros-etelek"];
export const metadata: Metadata = {
  title: data.title,
  description: data.intro,
  alternates: { canonical: "/magyaros-etelek/" },
};
export default function Page() { return <GuidePage {...data} />; }
