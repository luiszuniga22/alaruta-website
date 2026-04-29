import { CircleDot, Play } from "lucide-react";

export function PhoneMockup() {
  return (
    <div className="phone-shell" aria-label="En Ruta app preview">
      <div className="phone-top">
        <span className="phone-brand">
          <img src="/er-logo.png" alt="" />
          En Ruta
        </span>
        <CircleDot size={18} aria-hidden="true" />
      </div>
      <div className="map-panel">
        <div className="route-line" />
        <span className="pin pin-a" />
        <span className="pin pin-b" />
        <span className="pin pin-c" />
      </div>
      <div className="run-card">
        <div>
          <span className="label">Today</span>
          <strong>4.8 km</strong>
        </div>
        <button aria-label="Start run">
          <Play size={18} fill="currentColor" aria-hidden="true" />
        </button>
      </div>
      <div className="phone-stats">
        <span>
          <strong>28m</strong>
          Pace
        </span>
        <span>
          <strong>312</strong>
          Elev.
        </span>
        <span>
          <strong>12</strong>
          Crew
        </span>
      </div>
    </div>
  );
}
