import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";
import { agency } from "@/lib/agency";
import type { CSSProperties } from "react";
import { testimonialPreview } from "./testimonial-preview";
import { TestimonialsRotator } from "./testimonials-rotator";
import "./testimonials-section.css";

export function TestimonialsSection() {
  const isPreview = agency.testimonials.length === 0;
  const testimonials: readonly (typeof agency.testimonials)[number][] = isPreview ? testimonialPreview : agency.testimonials;

  return (
    <section
      id="testimonials"
      className="testimonials-section page-width section-space"
      aria-labelledby="testimonials-title"
    >
      <header className="testimonials-heading">
        <h2 id="testimonials-title">
          Good work starts with <span>good people.</span>
        </h2>
        <p>{isPreview ? "Layout preview · Sample content from Motive9" : "A little space for the people we build with."}</p>
      </header>
      <TestimonialsRotator>
        {testimonials.map(
          ({ name, avatar, project, quote, verified }, index) => (
            <figure
              className="testimonial-card"
              key={`${name}-${project}`}
              style={{ "--testimonial-order": index } as CSSProperties}
            >
              <figcaption>
                <span className="testimonial-avatar" aria-hidden="true">
                  {avatar ? (
                    <Image src={avatar} alt="" width={40} height={40} sizes="40px" />
                  ) : name.trim().split(/\s+/).slice(0, 2).map((word) => word[0]).join("")}
                </span>
                <span className="testimonial-person">
                  <span className="testimonial-name-row">
                    <strong>{name}</strong>
                    {(isPreview || verified) && (
                      <BadgeCheck className="testimonial-verified" size={16} role="img" aria-label={isPreview ? "Sample verification badge" : "Verified client"} />
                    )}
                  </span>
                  <span>{isPreview ? `Sample · ${project}` : project}</span>
                </span>
                <Quote className="testimonial-quote-icon" size={18} aria-hidden="true" />
              </figcaption>
              <blockquote>
                <p>{quote}</p>
              </blockquote>
            </figure>
          ),
        )}
      </TestimonialsRotator>
    </section>
  );
}
