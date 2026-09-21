import Image from "next/image";
import Link from "next/link";

const links = [
  ["Ebédötletek", "/ebed-otletek"],
  ["Vacsoraötletek", "/vacsora-otletek"],
  ["Gyors ételek", "/gyors-etelek"],
  ["Olcsó ételek", "/olcso-etelek"],
];

export default function SiteHeader() {
  return (
    <header className="border-b border-[#6f2b1b]/10 bg-white/80 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-[1480px] flex-col gap-3 px-4 py-3 md:px-7 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Mit főzzek ma? – főoldal">
          <Image src="/logo-mark.png" alt="Mit főzzek ma? embléma" width={54} height={54} priority className="h-11 w-11 shrink-0 sm:h-[54px] sm:w-[54px]" />
          <div>
            <div className="font-serif text-lg font-black tracking-tight text-[#742115] sm:text-xl md:text-2xl">Mit főzzek ma?</div>
            <div className="text-xs font-semibold text-[#4d6d36]">Magyar ízek. Nincs több fejtörés.</div>
          </div>
        </Link>
        <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm font-bold text-[#69483d]" aria-label="Fő navigáció">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="transition hover:text-[#c5231a]">{label}</Link>
          ))}
          <Link href="/rolunk" className="transition hover:text-[#c5231a]">Az oldalról</Link>
        </nav>
      </div>
    </header>
  );
}
