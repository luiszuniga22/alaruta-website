import {
  Activity,
  ArrowRight,
  Building2,
  CalendarDays,
  Check,
  Dumbbell,
  MapPin,
  Map,
  Search,
  Sparkles,
  Users
} from "lucide-react";
import { PartnerForm } from "./components/PartnerForm";
import { PhoneMockup } from "./components/PhoneMockup";
import { SiteFooter, SiteHeader } from "./components/SiteChrome";

const coreFeatures = [
  { icon: Activity, title: "Track your activity" },
  { icon: Map, title: "Discover local routes" },
  { icon: Users, title: "Connect with your community" }
];

const appFeatures = [
  "Live run tracking",
  "Route discovery",
  "Community challenges"
];

const localAdvantages = ["Local routes", "Local events", "Local community"];

const events = [
  {
    title: "Sunrise 5K",
    place: "Zona Viva",
    date: "May 18",
    type: "Community run"
  },
  {
    title: "Ruta Verde",
    place: "Parque Central",
    date: "Jun 02",
    type: "Challenge"
  },
  {
    title: "Night Pace",
    place: "Ciclovia",
    date: "Jun 16",
    type: "Social run"
  }
];

const partnerTypes = [
  { icon: Dumbbell, title: "Gyms" },
  { icon: Building2, title: "Brands" },
  { icon: Sparkles, title: "Studios" }
];

const partnerFeatures = [
  "In-app promotion",
  "Event sponsorship",
  "Customer engagement"
];

function ButtonLink({
  children,
  href,
  variant = "primary"
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "dark";
}) {
  return (
    <a className={`button button-${variant}`} href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={18} />
    </a>
  );
}

function SectionHeading({
  title,
  text
}: {
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <SiteHeader />

      <section className="hero" id="home">
        <div className="hero-copy">
          <h1>Tu movimiento empieza aquí.</h1>
          <p>Track your runs, discover routes, and connect with your community.</p>
          <div className="hero-actions">
            <ButtonLink href="/app">Download App</ButtonLink>
            <ButtonLink href="/events" variant="secondary">
              Join the Movement
            </ButtonLink>
          </div>
        </div>
        <div className="hero-visual">
          <div className="runner-scene">
            <div className="sun" />
            <div className="community-card">
              <Users size={20} aria-hidden="true" />
              <span>12 runners nearby</span>
            </div>
            <a className="helix-credit" href="https://olympushelix.com">
              Powered by Helix
            </a>
          </div>
          <PhoneMockup />
        </div>
      </section>

      <section className="simple-band" aria-labelledby="what-title">
        <SectionHeading title="What is AlaRuta" />
        <div className="feature-row">
          {coreFeatures.map(({ icon: Icon, title }) => (
            <div className="icon-block" key={title}>
              <Icon size={28} aria-hidden="true" />
              <h3>{title}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="app-preview" id="app">
        <div className="app-copy">
          <SectionHeading
            title="En Ruta App"
            text="A lighter way to move through your city, your routes, and your people."
          />
          <div className="check-list">
            {appFeatures.map((feature) => (
              <span key={feature}>
                <Check size={18} aria-hidden="true" />
                {feature}
              </span>
            ))}
          </div>
          <div className="how-it-works">
            <h3>How it works</h3>
            <ol>
              <li>Download En Ruta</li>
              <li>Choose a route</li>
              <li>Run with your community</li>
            </ol>
          </div>
          <div className="store-actions">
            <span className="store-coming-soon">App Store coming soon</span>
            <a href="#contact">Google Play</a>
          </div>
        </div>
        <div className="screenshots">
          <PhoneMockup />
          <div className="mini-screen">
            <div className="screen-header">
              <Search size={18} aria-hidden="true" />
              Routes
            </div>
            <div className="route-list">
              <span>Centro 3K</span>
              <span>Volcan 8K</span>
              <span>Malecon 5K</span>
            </div>
          </div>
        </div>
      </section>

      <section className="local-band" id="about">
        <div>
          <h2>Built for Latin America</h2>
          <p>
            AlaRuta starts with the places people already move: neighborhood
            routes, local events, and crews that make running feel social.
          </p>
        </div>
        <div className="local-grid">
          {localAdvantages.map((item) => (
            <div key={item}>
              <MapPin size={22} aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="events-section" id="events">
        <div className="section-header-row">
          <SectionHeading
            title="Events"
            text="Upcoming events, join a run, and community challenges."
          />
            <ButtonLink href="/events" variant="secondary">
            Explore Events
          </ButtonLink>
        </div>
        <div className="filter-bar" aria-label="Event filters">
          <button className="active">All</button>
          <button>Runs</button>
          <button>Challenges</button>
          <button>Nearby</button>
        </div>
        <div className="event-list">
          {events.map((event) => (
            <article className="event-card" key={event.title}>
              <div className="event-date">
                <CalendarDays size={18} aria-hidden="true" />
                {event.date}
              </div>
              <h3>{event.title}</h3>
              <p>{event.place}</p>
              <span>{event.type}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="partners" id="partners">
        <div className="partners-main">
          <SectionHeading
            title="Grow your business with AlaRuta"
            text="Reach a local movement audience through app visibility, event energy, and community connection."
          />
          <div className="partner-types">
            {partnerTypes.map(({ icon: Icon, title }) => (
              <span key={title}>
                <Icon size={20} aria-hidden="true" />
                {title}
              </span>
            ))}
          </div>
          <div className="check-list">
            {partnerFeatures.map((feature) => (
              <span key={feature}>
                <Check size={18} aria-hidden="true" />
                {feature}
              </span>
            ))}
          </div>
          <ButtonLink href="/partners">Become a Partner</ButtonLink>
        </div>
        <PartnerForm />
      </section>

      <section className="story" aria-labelledby="story-title">
        <div>
          <h2 id="story-title">AlaRuta is a human route.</h2>
          <p>
            We are building a movement hub for runners, walkers, gyms, brands,
            and local communities who want healthier cities and stronger
            connection.
          </p>
        </div>
        <div className="story-points">
          <span>Mission: make movement easier to start.</span>
          <span>Vision: connect every local route with real community.</span>
        </div>
      </section>

      <section className="final-cta">
        <h2>Empieza tu ruta hoy.</h2>
        <div className="hero-actions">
          <ButtonLink href="/app" variant="dark">
            Download App
          </ButtonLink>
          <ButtonLink href="/events" variant="secondary">
            Join Community
          </ButtonLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
