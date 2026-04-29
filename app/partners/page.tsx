import { Check } from "lucide-react";
import { PartnerForm } from "../components/PartnerForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const reasons = [
  "Access local audience",
  "Event exposure",
  "Digital + physical presence"
];

const opportunities = ["Sponsorships", "Marketplace", "Gym integrations"];

export default function PartnersPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-split">
        <div>
          <h1>Grow your business with AlaRuta</h1>
          <p>
            Partner with a movement platform built for gyms, brands, studios,
            and local running communities.
          </p>
          <div className="check-list">
            {reasons.map((reason) => (
              <span key={reason}>
                <Check size={18} aria-hidden="true" />
                {reason}
              </span>
            ))}
          </div>
        </div>
        <PartnerForm />
      </section>
      <section className="content-grid">
        {opportunities.map((item) => (
          <article key={item}>
            <h2>{item}</h2>
            <p>Build visibility through AlaRuta app moments and local events.</p>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
