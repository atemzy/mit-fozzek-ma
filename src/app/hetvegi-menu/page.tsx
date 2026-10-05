import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/app/contentData";

const data = guides["hetvegi-menu"];
export const metadata: Metadata = {
  title: data.title,
  description: data.intro,
  alternates: { canonical: "/hetvegi-menu/" },
};
export default function Page() { return <GuidePage category="hetvegi-menu" {...data} />; }
