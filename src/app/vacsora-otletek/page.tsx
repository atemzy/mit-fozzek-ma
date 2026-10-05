import type { Metadata } from "next";
import GuidePage from "@/components/content/GuidePage";
import { guides } from "@/app/contentData";

const data = guides["vacsora-otletek"];
export const metadata: Metadata = {
  title: data.title,
  description: data.intro,
  alternates: { canonical: "/vacsora-otletek/" },
};
export default function Page() { return <GuidePage category="vacsora-otletek" {...data} />; }
