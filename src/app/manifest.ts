import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Mit főzzek ma? – Magyar menü sorsoló",
    short_name: "Mit főzzek ma?",
    description: "Véletlenszerű magyaros leves, főétel és desszert egy kattintással.",
    start_url: "/",
    display: "standalone",
    background_color: "#fffaf0",
    theme_color: "#a52a2a",
    lang: "hu",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
