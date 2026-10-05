import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/app/contentData";

const data = guides["gyors-etelek"];
export const metadata: Metadata = {
  title: data.title,
  description: data.intro,
  alternates: { canonical: "/gyors-etelek/" },
};
export default function Page() { return <GuidePage category="gyors-etelek" {...data} />; }
