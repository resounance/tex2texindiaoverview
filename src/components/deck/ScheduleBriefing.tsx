import { Calendar, ExternalLink, Clock, Shield } from "lucide-react";

const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/Tex2TexIndiaGreenfieldIntro@earthprotex.com/?ismsaljsauthenabled";

export default function ScheduleBriefing() {
  return (
    <section id="schedule" className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-14 sm:py-16">
        <div className="grid lg:grid-cols-[340px_1fr] gap-8 lg:gap-10 items-start">
          {/* Left: compact intro */}
          <aside className="lg:sticky lg:top-24">
            <p className="text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Next Step
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-3 leading-tight">
              Request a private project briefing
            </h2>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Schedule a confidential meeting with the Tex2Tex® team to discuss
              the India greenfield opportunity.
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>30–45 minute introductory call</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>Confidential — NDA available on request</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>Pick a slot that works in your timezone</span>
              </li>
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab
              <ExternalLink className="w-3 h-3" />
            </a>
          </aside>

          {/* Right: booking iframe */}
          <div className="rounded-xl overflow-hidden border border-border bg-card shadow-sm">
            <iframe
              src={BOOKING_URL}
              title="Schedule a briefing with Tex2Tex"
              className="w-full block"
              style={{ height: "720px", border: 0 }}
              loading="lazy"
              allow="clipboard-write; fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
