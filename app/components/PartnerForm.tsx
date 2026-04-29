"use client";

import { ChevronRight } from "lucide-react";
import { FormEvent, useState } from "react";

export function PartnerForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <form className="partner-form" id="contact" onSubmit={handleSubmit}>
      <h3>Partner Contact</h3>
      {sent ? (
        <div className="form-success" role="status">
          Thanks. The AlaRuta team will follow up soon.
        </div>
      ) : null}
      <label>
        Business name
        <input type="text" name="business" placeholder="Your studio" />
      </label>
      <label>
        Type
        <select name="type" defaultValue="">
          <option value="" disabled>
            Select type
          </option>
          <option>Gym</option>
          <option>Brand</option>
          <option>Studio</option>
          <option>Event organizer</option>
        </select>
      </label>
      <label>
        Email / phone
        <input type="text" name="contact" placeholder="hello@alaruta.com" />
      </label>
      <button type="submit">
        Send
        <ChevronRight size={18} aria-hidden="true" />
      </button>
    </form>
  );
}
