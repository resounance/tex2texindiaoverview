import { Calendar, ExternalLink } from "lucide-react";

export default function ScheduleBriefing() {
  return (
    <section id="schedule" className="bg-background border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16 sm:py-20">
        <div className="text-center mb-10">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Next Step
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
            Request a private project briefing
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Schedule a confidential meeting with the Tex2Tex® team to discuss the India greenfield opportunity.
          </p>
        </div>

        <div className="rounded-lg overflow-hidden border border-border bg-card shadow-sm">
          <iframe
            src="https://bookings.cloud.microsoft/book/Tex2TexIndiaGreenfieldIntro@earthprotex.com/?ismsaljsauthenabled"
            title="Schedule a briefing with Tex2Tex"
            className="w-full"
            style={{ height: "900px", border: 0 }}
            loading="lazy"
            allow="clipboard-write; fullscreen"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://bookings.cloud.microsoft/book/Tex2TexIndiaGreenfieldIntro@earthprotex.com/?ismsaljsauthenabled"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            Open booking page in a new tab
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
}
