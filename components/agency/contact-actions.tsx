"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { Popover as PopoverPrimitive } from "radix-ui";
import { X } from "lucide-react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Toaster } from "@/components/ui/sonner";
import { agency } from "@/lib/agency";
import "./contact-actions.css";

export function ContactActions() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const request = useRef<AbortController | null>(null);
  const nameInput = useRef<HTMLInputElement>(null);
  const id = useId();
  const { email: contactEmail, bookingUrl, enquiryEndpoint } = agency.contact;

  useEffect(() => () => request.current?.abort(), []);

  async function submitEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (request.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const details = String(data.get("details") || "").trim();
    setError("");
    setFeedback("");
    if (!name || !email || !details) {
      setError("Please add your name, email address, and a few details about your project.");
      return;
    }

    const brief = ["Project enquiry for 4our", `Name: ${name}`, `Email: ${email}`, "", details].join("\n");
    if (!enquiryEndpoint) {
      if (contactEmail) {
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent("A new project for 4our")}&body=${encodeURIComponent(brief)}`;
        setFeedback("Your email app will open with your brief. Review and send it there; nothing has been sent by this website.");
        return;
      }
      const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = "4our-project-brief.txt";
      document.body.append(link);
      link.click();
      link.remove();
      window.setTimeout(() => URL.revokeObjectURL(url), 1000);
      setFeedback("Your brief has been downloaded. Nothing has been sent to 4our.");
      toast.info("Brief downloaded", { description: "Saved on your device. Nothing has been sent to 4our." });
      return;
    }

    data.set("name", name);
    data.set("email", email);
    data.set("message", details);
    data.delete("details");
    data.set("_subject", "4our project enquiry");
    const controller = new AbortController();
    request.current = controller;
    setSubmitting(true);
    try {
      const response = await fetch(enquiryEndpoint, { method: "POST", body: data, headers: { Accept: "application/json" }, signal: controller.signal });
      if (controller.signal.aborted) return;
      if (!response.ok) {
        const message = response.status === 429 ? "Too many attempts. Please wait a little before trying again." : "Your enquiry could not be sent. Please try again.";
        setError(message);
        toast.error("Enquiry not sent", { description: message });
        return;
      }
      form.reset();
      setOpen(false);
      toast.success("Enquiry sent", { description: "Your project enquiry has been accepted." });
    } catch {
      if (!controller.signal.aborted) {
        setError("We couldn’t confirm delivery. Check your connection before trying again.");
        toast.error("Delivery not confirmed", { description: "Check your connection before trying again." });
      }
    } finally {
      if (request.current === controller) request.current = null;
      setSubmitting(false);
    }
  }

  return (
    <div className="four-contact-actions-panel">
      <Popover open={open} onOpenChange={setOpen} modal>
        <div className="four-contact-actions">
          <PopoverTrigger asChild><Button type="button" size="sm" variant="secondary" className="four-contact-action">Send an enquiry</Button></PopoverTrigger>
          {bookingUrl ? <a href={bookingUrl} target="_blank" rel="noopener noreferrer" className={buttonVariants({ variant: "outline", size: "sm", className: "four-contact-action four-book-call" })}>Book a call<span className="sr-only"> (opens in a new tab)</span></a> : <Button type="button" size="sm" variant="outline" className="four-contact-action four-book-call" disabled aria-describedby={id + "-booking"}>Book a call</Button>}
        </div>
        {!bookingUrl && <p id={id + "-booking"} className="four-contact-availability">Booking link coming soon.</p>}
        {open && <PopoverPrimitive.Portal><div className="four-enquiry-backdrop" aria-hidden="true" /></PopoverPrimitive.Portal>}
        <PopoverContent className="four-enquiry-popup" aria-labelledby={id + "-title"} aria-describedby={id + "-description"} onOpenAutoFocus={(event) => { event.preventDefault(); nameInput.current?.focus(); }}>
          <div className="four-enquiry-heading"><h3 id={id + "-title"}>Let’s hear your idea</h3><Button variant="ghost" size="icon" className="four-enquiry-close" type="button" onClick={() => setOpen(false)} aria-label="Close enquiry form"><X size={20} aria-hidden="true" /></Button></div>
          <p id={id + "-description"} className="four-enquiry-description">Tell us a little about yourself and what you’d like to make.</p>
          <form className="four-enquiry-form" onSubmit={submitEnquiry} aria-busy={submitting} aria-describedby={!enquiryEndpoint ? id + "-notice" : undefined}>
            <fieldset disabled={submitting}>
              <div className="four-enquiry-fields">
                <div><label htmlFor={id + "-name"}>Name</label><input ref={nameInput} id={id + "-name"} name="name" autoComplete="name" placeholder="Your name" required maxLength={100} /></div>
                <div><label htmlFor={id + "-email"}>Email</label><input id={id + "-email"} name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></div>
              </div>
              <label htmlFor={id + "-details"}>Project details</label>
              <textarea id={id + "-details"} name="details" rows={4} placeholder="What are you working on, and how can we help?" required maxLength={2000} />
              {!enquiryEndpoint && <p className="four-enquiry-notice" id={id + "-notice"}>{contactEmail ? "This opens an email draft. You choose when to send it." : "Online enquiries aren’t connected yet. You can download your brief to keep; nothing is submitted."}</p>}
              {error && <p className="four-enquiry-error" role="alert">{error}</p>}
              <p className="four-enquiry-feedback" role="status">{feedback}</p>
              <div className="four-enquiry-buttons"><Button size="sm" variant="secondary" type="button" onClick={() => setOpen(false)}>Cancel</Button><Button size="sm" type="submit" disabled={submitting}>{submitting ? "Sending…" : enquiryEndpoint ? "Send enquiry" : contactEmail ? "Open email draft" : "Download brief"}</Button></div>
            </fieldset>
          </form>
        </PopoverContent>
      </Popover>
      <Toaster />
    </div>
  );
}
