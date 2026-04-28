import { Calendar, ExternalLink, Clock, Shield } from "lucide-react";

const BOOKING_URL =
  "https://bookings.cloud.microsoft/book/Tex2TexIndiaGreenfieldIntro@earthprotex.com/?ismsaljsauthenabled";

export default function ScheduleBriefing() {
  return (
    <section id="schedule" className="bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-10 sm:py-12">
        <div className="grid lg:grid-cols-[260px_1fr] gap-6 lg:gap-8 items-start">
          {/* Left: compact intro */}
          <aside className="lg:sticky lg:top-24">
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Next Step
            </p>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight mb-2 leading-tight">
              Request a private project briefing
            </h2>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
              Confidential meeting with the Tex2Tex® team on the India
              greenfield opportunity.
            </p>

            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <Clock className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>30 min – 1 hr introductory call</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <Shield className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>NDA available on request</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5 mt-0.5 text-primary shrink-0" />
                <span>Pick a slot in your timezone</span>
              </li>
            </ul>

            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Open in new tab
              <ExternalLink className="w-3 h-3" />
            </a>
          </aside>

          {/* Right: booking iframe */}
          <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
            <iframe
              src={BOOKING_URL}
              title="Schedule a briefing with Tex2Tex"
              className="w-full block h-[560px] sm:h-[600px]"
              style={{ border: 0 }}
              loading="lazy"
              allow="clipboard-write; fullscreen"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
