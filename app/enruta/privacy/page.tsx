import { SiteFooter, SiteHeader } from "../../components/SiteChrome";

const collectedInfo = [
  "Account information: email address and authentication details.",
  "Profile information: name, Matricula ID, age, height, weight, blood type, address, city, favorite sports, primary sport, and related health or fitness profile details.",
  "Activity information: activity title, sport focus, distance, duration, average speed, route name, completed date, streaks, badges, leaderboard progress, and activity history.",
  "Location information: device location while recording a route, finding nearby sport resources, or verifying event check-in proximity.",
  "Event information: event registrations, check-ins, attendance status, city, event focus, and reward eligibility.",
  "Community and coach information: coach applications, community leader applications, submitted event details, and admin review status when applicable.",
  "Subscription and reward information: trial status, Premium entitlement, reward claims, claim status, subscription product ID, purchase status, and related billing metadata when payments are enabled."
];

const useCases = [
  "Create and manage your EnRuta account.",
  "Save and update your profile.",
  "Personalize the app around your selected sport focus.",
  "Track activities, distance, streaks, badges, and leaderboard progress.",
  "Enable route tracking and GPS-based event check-ins.",
  "Manage event registration, event attendance, and community participation.",
  "Show relevant routes, events, coaches, partner stores, and rewards.",
  "Review coach, community leader, event, partner store, and reward applications.",
  "Provide Premium access, trials, reward-based Premium extensions, and future subscriptions.",
  "Improve app safety, reliability, support, and user experience."
];

const sharingDetails = [
  "Public or community-facing features may show names, city, ranking, activity focus, leaderboard position, badges, and activity totals.",
  "Admin users may review event submissions, coach applications, community applications, reward claims, registrations, check-ins, and entitlement records.",
  "Service providers such as Supabase and Expo may process data needed to run the app.",
  "Google Play may process purchase and subscription information when paid subscriptions are enabled."
];

export default function EnRutaPrivacyPage() {
  return (
    <main>
      <SiteHeader />
      <section className="legal-page">
        <div className="legal-header">
          <span>EnRuta</span>
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how EnRuta collects, uses, stores, and
            protects information when you use the EnRuta mobile application.
          </p>
          <p>Last updated: April 29, 2026</p>
          <p>
            Contact:{" "}
            <a href="mailto:info@olympushelix.com">info@olympushelix.com</a>
          </p>
        </div>

        <article className="legal-content">
          <h2>1. App And Developer</h2>
          <p>App name: EnRuta</p>
          <p>
            Contact email:{" "}
            <a href="mailto:info@olympushelix.com">info@olympushelix.com</a>
          </p>
          <p>
            EnRuta helps users track physical activities, discover routes and
            local events, register for events, check in near event locations,
            view rewards, and connect with community resources such as coaches
            and partner stores.
          </p>

          <h2>2. Information We Collect</h2>
          <p>EnRuta may collect the following information:</p>
          <ul>
            {collectedInfo.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>3. How We Use Information</h2>
          <p>We use information to:</p>
          <ul>
            {useCases.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>4. Location Data</h2>
          <p>
            EnRuta requests location permission to record activities, support
            location-based discovery, and verify whether you are within the
            allowed check-in radius for an event.
          </p>
          <p>
            Location is not required to browse most app content. EnRuta does not
            request background location access in the current version.
          </p>

          <h2>5. Health And Fitness Data</h2>
          <p>
            EnRuta collects health and fitness profile details to support
            fitness tracking, personalization, rewards, profile functionality,
            and community features.
          </p>
          <p>
            EnRuta is not a medical device and does not provide medical
            diagnosis, treatment, or professional medical advice. Consult a
            qualified health professional before starting or changing an
            exercise program.
          </p>

          <h2>6. Sharing</h2>
          <p>EnRuta does not sell personal data.</p>
          <p>Information may be shared or made visible in limited ways:</p>
          <ul>
            {sharingDetails.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>7. Data Storage And Security</h2>
          <p>
            EnRuta stores app data using Supabase and local device storage.
            Row-level security is used in Supabase for user-owned records where
            applicable. Data is transmitted using HTTPS where supported by the
            service provider.
          </p>
          <p>
            No system can guarantee complete security. Users should protect
            their account credentials and notify us if they believe their
            account has been accessed without permission.
          </p>

          <h2>8. Data Retention And Deletion</h2>
          <p>
            We retain information while your account is active or as needed to
            provide EnRuta services, comply with legal obligations, resolve
            disputes, and enforce policies.
          </p>
          <p>
            Users may request deletion of their account or personal data by
            contacting{" "}
            <a href="mailto:info@olympushelix.com">info@olympushelix.com</a>.
          </p>

          <h2>9. Children</h2>
          <p>
            EnRuta is not intended for children under 13. Profile validation
            currently requires users to be at least 13 years old.
          </p>

          <h2>10. User Choices</h2>
          <p>Users can:</p>
          <ul>
            <li>
              Decline location permission, although tracking and GPS check-ins
              may not work.
            </li>
            <li>Edit profile details in the app.</li>
            <li>Sign out of the app.</li>
            <li>Request account or data deletion by email.</li>
          </ul>

          <h2>11. Changes</h2>
          <p>
            We may update this Privacy Policy as EnRuta evolves. The updated
            date will be changed when the policy is revised.
          </p>

          <h2>12. Contact</h2>
          <p>
            For privacy questions, account deletion, or data requests, contact{" "}
            <a href="mailto:info@olympushelix.com">info@olympushelix.com</a>.
          </p>
        </article>
      </section>
      <SiteFooter />
    </main>
  );
}
