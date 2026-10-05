import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/app/contentData";

const data = guides["maradekmento-etelek"];
export const metadata: Metadata = {
  title: data.title,
  description: data.intro,
  alternates: { canonical: "/maradekmento-etelek/" },
};
export default function Page() { return <GuidePage category="maradekmento-etelek" {...data} />; }
