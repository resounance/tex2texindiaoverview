import { ExternalLink } from "lucide-react";
import tex2texLogo from "@/assets/tex2tex-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div>
            <img src={tex2texLogo} alt="Tex2Tex® by Earth Protex™" className="h-8 mb-3 brightness-0 invert opacity-80" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              India's first large-scale, true textile-to-textile polyester recycling facility. Gujarat, India.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3">Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://tex2tex.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  tex2tex.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://earthprotex.com" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  earthprotex.com <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/earthprotex" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1">
                  LinkedIn <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground text-xs uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <a href="mailto:invest@earthprotex.com" className="hover:text-foreground transition-colors">
                  invest@earthprotex.com
                </a>
              </li>
              <li>Gujarat, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6">
          <p className="text-[10px] text-muted-foreground/60 leading-relaxed max-w-3xl">
            This document is confidential and intended solely for the use of the individual or entity to whom it is addressed. It contains proprietary information of Earth Protex™ and may not be reproduced, distributed, or disclosed without prior written consent. The information presented herein is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities.
          </p>
          <p className="text-[10px] text-muted-foreground/40 mt-4">
            © 2026 Earth Protex™. All rights reserved. Tex2Tex® and TMR™ are trademarks of Earth Protex.
          </p>
        </div>
      </div>
    </footer>
  );
}
