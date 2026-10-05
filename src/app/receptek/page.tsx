import type { Metadata } from "next";
import InfoPage from "@/components/content/InfoPage";
import RecipeList from "@/components/content/RecipeList";
export const metadata: Metadata = { title: "Receptek lépésről lépésre", description: "Hétköznapi levesek, főételek és desszertek kimért hozzávalókkal, adagokkal és gyakorlati főzési tanácsokkal.", alternates: { canonical: "/receptek/" } };
export default function Page() { return <InfoPage title="Receptek lépésről lépésre" intro="A sorsoló ötletet ad; itt az elkészítéshez is segítséget kapsz. A receptek házias alapváltozatok, a megadott időket a saját konyhádhoz igazítsd."><RecipeList /></InfoPage>; }
