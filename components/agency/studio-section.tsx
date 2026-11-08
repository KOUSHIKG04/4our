import { StudioShowcase } from "./studio-showcase";
import "./studio-section.css";

export function StudioSection() {
  return (
    <section id="studio" className="studio-section section-space" aria-labelledby="studio-heading">
      <div className="page-width studio-grid">
        <div className="section-intro studio-intro">
          <h2 id="studio-heading">
            Your ideas.{" "}
            <span>Our shared focus</span>
          </h2>
          <p>
            Design, development and AI for your business.
            <br className="studio-intro-break" /> The right tools to take your
            idea to a working product.
          </p>
        </div>
        <StudioShowcase />
      </div>
    </section>
  );
}
