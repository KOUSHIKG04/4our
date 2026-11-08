import { MousePointer2 } from "lucide-react";
import { agency } from "@/lib/agency";
import { brandGlyphs } from "@/lib/brandmark";
import { AmbientMotion } from "./ambient-motion";
import { BrandLogo } from "./brand-logo";
import "./why-bento.css";

function PhoneArtwork() {
  return (
    <svg className="four-bento-phone" viewBox="0 0 282 560" preserveAspectRatio="xMaxYMin slice" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <clipPath id="four-phone-preview"><rect x="70" y="112" width="224" height="158" rx="14" /></clipPath>
        <linearGradient id="four-phone-shell" x1="47" y1="10" x2="310" y2="420" gradientUnits="userSpaceOnUse"><stop stopColor="#666666" /><stop offset=".13" stopColor="#414141" /><stop offset=".56" stopColor="#2c2c2c" /><stop offset="1" stopColor="#171717" /></linearGradient>
        <linearGradient id="four-phone-screen" x2="0" y2="1"><stop stopColor="#303030" /><stop offset="1" stopColor="#242424" /></linearGradient>
        <filter id="four-phone-shadow" x="-30%" y="-15%" width="170%" height="145%"><feDropShadow dx="4" dy="12" stdDeviation="9" floodOpacity=".3" /></filter>
      </defs>
      <g filter="url(#four-phone-shadow)">
        <rect x="53" y="19" width="265" height="616" rx="45" fill="#171717" />
        <rect x="46" y="10" width="265" height="616" rx="45" fill="url(#four-phone-shell)" stroke="#737373" strokeWidth="2" />
        <rect x="53" y="18" width="250" height="604" rx="38" fill="url(#four-phone-screen)" stroke="#151515" strokeWidth="2" />
      </g>
      <rect x="143" y="31" width="100" height="24" rx="12" fill="#171717" />
      <text x="72" y="91" fill="#dedede" fontSize="14" fontFamily="var(--font-body), sans-serif">Motion study</text>
      <rect x="70" y="112" width="224" height="158" rx="14" fill="#202020" stroke="#484848" />
      <g clipPath="url(#four-phone-preview)">
        <g transform="translate(102 155) scale(.175)" fillRule="evenodd">
          <g className="four-bento-logo">
            {brandGlyphs.map((glyph, index) => (
              <g key={glyph.letter} transform={"translate(" + glyph.x + " 0)"}>
                <path
                  className={"four-bento-logo-glyph four-bento-logo-glyph-" + index}
                  d={glyph.path}
                  fill={index === 0 ? "#ff5c00" : "#fff"}
                />
              </g>
            ))}
          </g>
        </g>
      </g>
      <path d="M72 291H291" stroke="#484848" />
      <text x="72" y="319" fill="#c4c4c4" fontSize="12" fontFamily="var(--font-body), sans-serif">Timeline</text>
      <g fill="#3e3e3e"><rect x="73" y="337" width="52" height="24" rx="5" /><rect x="132" y="337" width="112" height="24" rx="5" /><rect x="73" y="369" width="92" height="24" rx="5" /><rect x="172" y="369" width="122" height="24" rx="5" /><rect x="73" y="401" width="175" height="24" rx="5" /></g>
      <rect x="132" y="337" width="112" height="24" rx="5" fill="#ff5c00" />
      <path d="M149 342v14m7-10v6m7-9v12m7-11v10m7-7v4m7-8v12m7-9v6m7-10v14m7-8v2m7-6v10m7-13v16m7-10v4" stroke="#282828" strokeWidth="2" strokeLinecap="round" />
      <g className="four-bento-playhead">
        <path d="M78 329v113" stroke="#ededed" strokeWidth="1.5" />
        <path d="M73 326h10l-5 7Z" fill="#ededed" />
      </g>
      <g className="four-bento-cursor">
        <MousePointer2 x="28" y="253" width="45" height="45" fill="#a8a8a8" stroke="#d1d1d1" strokeWidth="1" />
      </g>
    </svg>
  );
}

function ClockArtwork() {
  return (
    <svg className="four-bento-clock" viewBox="0 0 250 196" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="four-clock-face" x1="34" y1="-50" x2="172" y2="168" gradientUnits="userSpaceOnUse"><stop stopColor="#545454" /><stop offset=".6" stopColor="#383838" /><stop offset="1" stopColor="#292929" /></linearGradient>
        <linearGradient id="four-clock-device" x2="1" y2="1"><stop stopColor="#767676" /><stop offset=".48" stopColor="#535353" /><stop offset="1" stopColor="#323232" /></linearGradient>
        <filter id="four-clock-shadow" x="-50%" y="-30%" width="200%" height="190%"><feDropShadow dx="1" dy="6" stdDeviation="4" floodOpacity=".3" /></filter>
      </defs>
      <circle cx="125" cy="-9" r="171" fill="url(#four-clock-face)" stroke="#626262" strokeWidth="1.5" />
      <g stroke="#626262" strokeWidth="3" strokeLinecap="round"><path d="m12 67-12 7m33 22-12 13m40 11-7 17m41-5-2 17m62-17 3 17m31-27 9 15m22-42 13 12m10-43 13 7" /><circle cx="125" cy="0" r="11" fill="#3c3c3c" /></g>
      <g className="four-bento-pendulum">
        <path d="M125 12v98" stroke="#a1a1a1" strokeWidth="3" strokeLinecap="round" />
        <g filter="url(#four-clock-shadow)">
          <rect x="106" y="114" width="44" height="66" rx="7" fill="#202020" />
          <rect x="103" y="110" width="44" height="66" rx="7" fill="url(#four-clock-device)" stroke="#858585" />
          <rect x="108" y="115" width="34" height="56" rx="4" fill="#353535" />
        </g>
        <path d="M118 121h14" stroke="#666666" strokeWidth="3" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function ToolArtwork() {
  return (
    <svg className="four-bento-tools" viewBox="0 0 588 168" preserveAspectRatio="xMidYMax meet" fill="none" aria-hidden="true" focusable="false">
      <defs>
        <filter id="four-logo-depth" x="-30%" y="-30%" width="165%" height="175%" colorInterpolationFilters="sRGB">
          <feComponentTransfer in="SourceGraphic" result="side">
            <feFuncR type="linear" slope=".45" />
            <feFuncG type="linear" slope=".45" />
            <feFuncB type="linear" slope=".45" />
          </feComponentTransfer>
          <feOffset in="side" dx="1" dy="2" result="near" />
          <feOffset in="side" dx="2" dy="4" result="middle" />
          <feOffset in="side" dx="3" dy="6" result="far" />
          <feMerge result="solid">
            <feMergeNode in="far" /><feMergeNode in="middle" /><feMergeNode in="near" /><feMergeNode in="SourceGraphic" />
          </feMerge>
          <feDropShadow in="solid" dx="2" dy="7" stdDeviation="4" floodOpacity=".45" />
        </filter>
      </defs>
      <g stroke="#8a6552" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m80 103 34-34 21-9m71 4 31 28 15 10m58 4 31-24 25-15m66 0 28 27 30 12" />
        <circle cx="114" cy="69" r="3" fill="#ff5c00" stroke="none" />
        <circle cx="237" cy="92" r="3" fill="#ff5c00" stroke="none" />
        <circle cx="341" cy="82" r="3" fill="#ff5c00" stroke="none" />
        <circle cx="460" cy="94" r="3" fill="#ff5c00" stroke="none" />
      </g>
      <g className="four-bento-tool-node">
        <image href="/tools/figma.svg" width="44" height="66" transform="translate(34 79) rotate(-8)" filter="url(#four-logo-depth)" />
      </g>
      <g className="four-bento-tool-node">
        <image href="/tools/after-effects-mark.svg" width="66" height="43" transform="translate(138 38) rotate(4)" filter="url(#four-logo-depth)" />
      </g>
      <g className="four-bento-tool-node">
        <image href="/tools/davinci-resolve.svg" width="55" height="55" transform="translate(253 84) rotate(-6)" filter="url(#four-logo-depth)" />
      </g>
      <g className="four-bento-tool-node">
        <g transform="translate(398 58)" stroke="#61dafb" strokeWidth="2.4" filter="url(#four-logo-depth)">
          <ellipse rx="29" ry="11" />
          <ellipse rx="29" ry="11" transform="rotate(60)" />
          <ellipse rx="29" ry="11" transform="rotate(-60)" />
          <circle r="4.5" fill="#61dafb" stroke="none" />
        </g>
      </g>
      <g className="four-bento-tool-node">
        <g transform="translate(493 84) rotate(7)" filter="url(#four-logo-depth)">
          <rect width="54" height="54" rx="7" fill="#3178c6" />
          <text x="48" y="44" textAnchor="end" fill="#fff" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="700">TS</text>
        </g>
      </g>
    </svg>
  );
}

export function WhyBento() {
  return (
    <section id="why-4our" className="four-bento" aria-labelledby="four-bento-heading">
      <div className="page-width">
        <h2 id="four-bento-heading" aria-label="Why create with 4our?">Why create with <span className="four-bento-heading-mark" aria-hidden="true"><BrandLogo outlined />?</span></h2>
        <div className="four-bento-grid">
          <article className="four-bento-card four-bento-connected"><div className="four-bento-copy"><h3>Design, video,<br />and development</h3></div><AmbientMotion className="four-bento-motion-stage"><PhoneArtwork /></AmbientMotion></article>
          <article className="four-bento-card four-bento-services"><AmbientMotion className="four-bento-rails"><div><i /><i /><i /></div><div><i /></div></AmbientMotion><div className="four-bento-copy"><h3>{agency.services.length}-in-1</h3><p>One team for design, video,<br />development, campaigns, and support</p></div></article>
          <article className="four-bento-card four-bento-plan"><AmbientMotion className="four-bento-motion-stage"><ClockArtwork /></AmbientMotion><div className="four-bento-copy"><h3>A clear plan,<br />from idea to launch</h3></div></article>
          <article className="four-bento-card four-bento-delivery"><div className="four-bento-copy"><h3>Design. Edit. Develop.</h3><p>From Figma files and video edits to web, iOS, and Android.</p><ul className="sr-only" aria-label="Creative tools and platforms"><li>Figma</li><li>Adobe After Effects</li><li>DaVinci Resolve</li><li>React</li><li>TypeScript</li></ul></div><AmbientMotion className="four-bento-motion-stage"><ToolArtwork /></AmbientMotion></article>
        </div>
      </div>
    </section>
  );
}
