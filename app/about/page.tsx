import { SiteFooter, SiteHeader } from "../components/SiteChrome";

export default function AboutPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <h1>AlaRuta is a human route.</h1>
        <p>
          We started with a simple belief: movement gets easier when people can
          find their routes, their rhythm, and their community.
        </p>
      </section>
      <section className="content-grid">
        <article>
          <h2>Mission</h2>
          <p>Make movement easier to start across local Latin American cities.</p>
        </article>
        <article>
          <h2>Vision</h2>
          <p>Connect every local route with real community and local opportunity.</p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
