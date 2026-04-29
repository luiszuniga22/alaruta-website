import { Check } from "lucide-react";
import { PhoneMockup } from "../components/PhoneMockup";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const features = ["Tracking", "Social runs", "Local routes"];
const steps = ["Download En Ruta", "Choose a route", "Run with your community"];

export default function AppPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-split">
        <div>
          <h1>En Ruta App</h1>
          <p>
            Track your runs, discover routes, and join the people moving through
            your city.
          </p>
          <div className="check-list">
            {features.map((feature) => (
              <span key={feature}>
                <Check size={18} aria-hidden="true" />
                {feature}
              </span>
            ))}
          </div>
          <div className="store-actions">
            <span className="store-coming-soon">App Store coming soon</span>
            <a href="/contact">Google Play</a>
          </div>
        </div>
        <PhoneMockup />
      </section>
      <section className="content-grid">
        {steps.map((step, index) => (
          <article key={step}>
            <span className="step-number">{index + 1}</span>
            <h2>{step}</h2>
          </article>
        ))}
      </section>
      <SiteFooter />
    </main>
  );
}
