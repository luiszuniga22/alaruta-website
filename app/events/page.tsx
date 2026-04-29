import { CalendarDays, MapPin } from "lucide-react";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";

const events = [
  ["Sunrise 5K", "Zona Viva", "May 18"],
  ["Ruta Verde", "Parque Central", "Jun 02"],
  ["Night Pace", "Ciclovia", "Jun 16"]
];

export default function EventsPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-hero">
        <h1>Events</h1>
        <p>Upcoming events, location-based discovery, and community challenges.</p>
      </section>
      <section className="events-section">
        <div className="filter-bar" aria-label="Event filters">
          <button className="active">All</button>
          <button>Runs</button>
          <button>Challenges</button>
          <button>Nearby</button>
        </div>
        <div className="event-list">
          {events.map(([title, place, date]) => (
            <article className="event-card" key={title}>
              <div className="event-date">
                <CalendarDays size={18} aria-hidden="true" />
                {date}
              </div>
              <h3>{title}</h3>
              <p>
                <MapPin size={16} aria-hidden="true" />
                {place}
              </p>
              <span>RSVP coming soon</span>
            </article>
          ))}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
