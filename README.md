# 4our

A single responsive marketing website built with the existing Next.js App Router, TypeScript, Tailwind CSS, and shadcn/Base UI button.

## Development

- `npm run dev`
- `npm run lint`
- `npm run typecheck`
- `npm run build`
- `npm start` after a successful build

## Content and contact

Edit `lib/agency.ts` for services, process, contact email, booking URL, and approved projects. Static page sections live in `components/agency/sections.tsx`; only navigation and the brief form need client state. No database, authentication, or backend is used.

Contact uses the Motive9-style shadcn Popover enquiry form and Sonner notifications. Configure `agency.contact.enquiryEndpoint`, `email`, and `bookingUrl` in `lib/agency.ts` when 4our’s own destinations are ready. While both the endpoint and email are blank, the popup downloads a local brief and explicitly states that nothing was sent. An email without an endpoint opens an email draft. A configured enquiry endpoint receives a POST; a success notification appears only after an OK response. The Book a call button is disabled until the booking URL is supplied. No Motive9 destinations are used.

The selected-work section and navigation link remain hidden while `agency.projects` is empty. To add work, provide an approved title, discipline, local image, descriptive alternative text, and actual project URL. Do not publish invented projects or client claims.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin before production deployment to enable canonical URLs and absolute social-preview URLs. No domain is assumed. The Open Graph image is generated locally with the supplied logo and real service descriptions; Twitter uses the large-image card.

## Visual system

Brand orange `#ff5c00`, white `#ffffff`, charcoal `#282828`. Geist headings and Inter body text use Next's self-hosted font pipeline. The existing highlighted orange button is retained. White-on-orange button labels use large bold type; small mobile labels use charcoal for contrast. Layouts use fluid type, semantic section headings, visible keyboard focus, and a native service accordion. Motion is limited to the hero spark and small interaction feedback; reduced motion disables animation, transitions, and smooth scrolling.

The original PNG remains at `public/brand/4our-logo.png` as the reference and social-image source. The visible logo now uses true traced SVG paths (`public/brand/4our-logo.svg`, shared in `lib/brandmark.ts`) with no embedded raster or background. Header sizing is smaller; footer glyphs are white and independently animated.

Project-local skill examples and source snapshots are excluded from lint/typecheck. They are tooling material, not application source. The contact popup and notifications use `radix-ui` and `sonner`, matching Motive9’s shadcn components.

## Before launch

- Supply the agency's contact email or booking URL.
- Add approved portfolio screenshots, project URLs, and publishing permission.
- Configure the production site origin.
- Run the checks above and review the deployed site, contact behavior, and social preview.

Header refinement: desktop uses a Motive9-style scroll-reactive pill with section links and paired Explore / Let’s team up actions. Mobile remains a fixed full-width header with a dismissible menu panel. The footer logo is composed of measured display regions of the original PNG; o/r sit lower, and hover/focus randomizes individual tilts. The striped dither overlay is removed.

The favicon is now app/icon.svg, containing only the original traced orange 4 on a transparent background. The header logo is 68×32px. Footer letter motion uses coordinated 850ms easing with reduced-motion support.
