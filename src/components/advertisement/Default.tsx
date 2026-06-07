import React from "react";

type AdvertisementProps = {
  className?: string;
  label?: string;
};

const Advertisement: React.FC<AdvertisementProps> = ({
  className = "",
  label = "REKLÁM",
}) => {
  return (
    <aside
      className={`w-full min-h-[120px] rounded-2xl border border-foreground/20 bg-white/40 text-foreground/60 flex items-center justify-center ${className}`}
      aria-label="Hirdetés"
    >
      <span className="text-sm uppercase tracking-[0.3em]">{label}</span>
    </aside>
  );
};

export default Advertisement;
