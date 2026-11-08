import { brandGlyphs } from "@/lib/brandmark";

export function BrandLogo({ large = false, outlined = false }: { large?: boolean; outlined?: boolean }) {
  return (
    <span className={large ? "brand-logo brand-logo--large" : "brand-logo"}>
      <svg viewBox="0 0 912 421" role="img" aria-label="4our" fillRule="evenodd">
        {brandGlyphs.map((glyph) => <path key={glyph.letter} d={glyph.path} transform={"translate(" + (glyph.x + 4) + " 4)"} fill={glyph.letter === "4" ? "#ff5c00" : "#ffffff"} stroke={outlined && glyph.letter !== "4" ? "#000" : undefined} strokeWidth={outlined && glyph.letter !== "4" ? 22 : undefined} strokeLinejoin="round" paintOrder="stroke fill" />)}
      </svg>
    </span>
  );
}
