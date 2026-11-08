import Image from "next/image";
import { AmbientMotion } from "./ambient-motion";
import { FooterWordmark } from "./footer-wordmark";
import "./footer-landscape.css";

export function FooterLandscape() {
  return (
    <div className="four-footer-landscape">
      <svg className="four-footer-filters" width="0" height="0" focusable="false" aria-hidden="true">
        <defs>
          <filter id="four-orange-landscape" colorInterpolationFilters="sRGB">
            <feColorMatrix type="saturate" values="0" />
            <feComponentTransfer>
              <feFuncR type="table" tableValues="0.4196 0.62 0.90 1 1 1" />
              <feFuncG type="table" tableValues="0.141 0.23 0.34 0.3608 0.65 0.92" />
              <feFuncB type="table" tableValues="0 0.015 0.045 0 0.38 0.85" />
            </feComponentTransfer>
          </filter>
        </defs>
      </svg>
      <div className="four-footer-canvas">
        <Image src="/landscapes/footer-purple-mountains-ridge.png" alt="" fill sizes="100vw" unoptimized className="four-footer-ridge four-footer-ridge--back" />
        <div className="four-footer-left-ridge-shade" aria-hidden="true" />
        <FooterWordmark />
        <Image src="/landscapes/footer-purple-mountains-ridge-foreground.png" alt="" fill sizes="100vw" unoptimized className="four-footer-ridge four-footer-ridge--front" />
        <AmbientMotion className="four-footer-car-track">
          <div className="four-footer-car">
            <span className="four-footer-light-trail" />
            <Image src="/landscapes/footer-red-car.png" alt="" width={2172} height={724} unoptimized className="four-footer-car-artwork" />
          </div>
        </AmbientMotion>
      </div>
    </div>
  );
}
