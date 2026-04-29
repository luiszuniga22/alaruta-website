import { PartnerForm } from "../components/PartnerForm";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-split">
        <div>
          <h1>Contact AlaRuta</h1>
          <p>
            Reach out for partnerships, community events, and En Ruta launch
            updates.
          </p>
        </div>
        <PartnerForm />
      </section>
      <SiteFooter />
    </main>
  );
}
