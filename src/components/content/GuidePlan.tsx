import { guidePlans } from "@/data/guidePlans";
export default function GuidePlan({category}: {category:string}) {
 const plan = guidePlans[category]; if (!plan) return null;
 return <section className="rounded-[2rem] border border-[#6f2b1b]/10 bg-white/75 p-6 md:p-8"><h2 className="font-serif text-3xl font-black text-[#742115]">{plan.title}</h2><p className="mt-4 leading-8 text-[#69483d]">{plan.intro}</p><div className="mt-5 overflow-x-auto"><table className="w-full text-left text-[#69483d]"><thead><tr>{["Kiindulópont","Fogás","Gyakorlati lépés"].map(h=><th key={h} scope="col" className="border-b p-3">{h}</th>)}</tr></thead><tbody>{plan.rows.map(row=><tr key={row[0]}>{row.map((v,i)=><td key={i} className="border-b border-[#6f2b1b]/10 p-3 align-top leading-7">{v}</td>)}</tr>)}</tbody></table></div><p className="mt-5 rounded-xl bg-[#fff5e8] p-4 leading-7 text-[#69483d]">{plan.tip}</p></section>;
}
