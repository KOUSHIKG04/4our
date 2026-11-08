import { WhyBento } from "@/components/agency/why-bento";
import { StudioSection, TestimonialsSection } from "@/components/agency/studio";
import { SiteHeader } from "@/components/agency/site-header";
import { Contact, Footer, Hero, Process, SelectedWork, Services } from "@/components/agency/sections";
import { ServiceTicker } from "@/components/agency/service-ticker";

export default function Home() {
  return (
    <div className="agency-site" id="top">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <SiteHeader />
      <main id="main-content"><Hero /><Services /><ServiceTicker /><StudioSection /><SelectedWork /><WhyBento /><Process /><TestimonialsSection /><Contact /></main>
      <Footer />
    </div>
  );
}
