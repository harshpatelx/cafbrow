import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Clock, MapPin, Phone, Loader2 } from "lucide-react";
import { FadeUp, SectionLabel } from "./Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const TIME_SLOTS = ["08:00", "09:30", "11:00", "12:30", "14:00", "15:30", "17:00", "18:30", "20:00"];

const INITIAL = { name: "", email: "", phone: "", date: "", time: "", guests: 2, message: "" };

const validate = (form) => {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Please enter your full name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!/^[+\d][\d\s\-()]{6,18}$/.test(form.phone)) errors.phone = "Enter a valid phone number.";
  if (!form.date) {
    errors.date = "Pick a date.";
  } else {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(`${form.date}T00:00:00`) < today) errors.date = "Date can't be in the past.";
  }
  if (!form.time) errors.time = "Pick a time slot.";
  if (!form.guests || form.guests < 1 || form.guests > 20) errors.guests = "1 to 20 guests.";
  return errors;
};

const inputClass = (hasError) =>
  `w-full border-b-2 bg-transparent py-3 text-base outline-none transition-colors duration-300 placeholder:text-ink/40 focus:border-terracotta ${
    hasError ? "border-red-500" : "border-charcoal/25"
  }`;

const FieldError = ({ id, message }) =>
  message ? (
    <p data-testid={id} className="mt-1.5 text-xs font-semibold text-red-600">
      {message}
    </p>
  ) : null;

export default function Reservation() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const set = (key) => (e) => {
    const value = key === "guests" ? Number(e.target.value) : e.target.value;
    setForm((f) => ({ ...f, [key]: value }));
    setErrors((err) => ({ ...err, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(form);
    setErrors(errs);
    if (Object.values(errs).some(Boolean)) {
      toast.error("A few fields need attention before we can book you in.");
      return;
    }
    setSubmitting(true);
    try {
      const { data } = await axios.post(`${API}/reservations`, form);
      toast.success(
        `Table booked for ${data.name} — ${data.date} at ${data.time}, ${data.guests} guest${data.guests > 1 ? "s" : ""}. See you soon!`
      );
      setForm(INITIAL);
    } catch (err) {
      const detail = err.response?.data?.detail;
      const msg = Array.isArray(detail) ? detail.map((d) => d.msg).join(" ") : "Something went wrong — please try again.";
      toast.error(msg);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="reserve" className="mx-auto max-w-7xl px-6 py-28 lg:px-12 lg:py-36" data-testid="reservation-section">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <FadeUp>
            <SectionLabel>Reservations</SectionLabel>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="mt-6 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Book your <span className="italic text-terracotta">corner.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink">
              Tell us when, and we'll keep the kettle on. Reservations are confirmed
              instantly — for parties over 20, give us a call instead.
            </p>
            <div className="mt-10 flex flex-col gap-5 text-sm font-semibold text-ink">
              <p className="flex items-center gap-3" data-testid="contact-address">
                <MapPin className="h-5 w-5 text-terracotta" /> 21 Shree Krishna Complex, C.G. Road, Ahmedabad, Gujarat 380009
              </p>
              <p className="flex items-center gap-3" data-testid="contact-phone">
                <Phone className="h-5 w-5 text-terracotta" /> +91 98765 01420
              </p>
              <p className="flex items-center gap-3" data-testid="contact-hours">
                <Clock className="h-5 w-5 text-terracotta" /> Mon–Sun, 8:00 AM – 9:00 PM
              </p>
            </div>
          </FadeUp>
        </div>

        <FadeUp delay={0.15} className="lg:col-span-7">
          <form
            onSubmit={onSubmit}
            noValidate
            data-testid="reservation-form"
            className="rounded-[2rem] border border-charcoal/10 bg-white p-8 shadow-xl sm:p-12"
          >
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
              <div>
                <label htmlFor="res-name" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Name</label>
                <input
                  id="res-name"
                  data-testid="reservation-name-input"
                  type="text"
                  placeholder="Jordan Avery"
                  value={form.name}
                  onChange={set("name")}
                  className={inputClass(errors.name)}
                />
                <FieldError id="reservation-name-error" message={errors.name} />
              </div>
              <div>
                <label htmlFor="res-email" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Email</label>
                <input
                  id="res-email"
                  data-testid="reservation-email-input"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={set("email")}
                  className={inputClass(errors.email)}
                />
                <FieldError id="reservation-email-error" message={errors.email} />
              </div>
              <div>
                <label htmlFor="res-phone" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Phone</label>
                <input
                  id="res-phone"
                  data-testid="reservation-phone-input"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={set("phone")}
                  className={inputClass(errors.phone)}
                />
                <FieldError id="reservation-phone-error" message={errors.phone} />
              </div>
              <div>
                <label htmlFor="res-guests" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Guests</label>
                <input
                  id="res-guests"
                  data-testid="reservation-guests-input"
                  type="number"
                  min="1"
                  max="20"
                  value={form.guests}
                  onChange={set("guests")}
                  className={inputClass(errors.guests)}
                />
                <FieldError id="reservation-guests-error" message={errors.guests} />
              </div>
              <div>
                <label htmlFor="res-date" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Date</label>
                <input
                  id="res-date"
                  data-testid="reservation-date-input"
                  type="date"
                  value={form.date}
                  onChange={set("date")}
                  className={inputClass(errors.date)}
                />
                <FieldError id="reservation-date-error" message={errors.date} />
              </div>
              <div>
                <label htmlFor="res-time" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">Time</label>
                <select
                  id="res-time"
                  data-testid="reservation-time-select"
                  value={form.time}
                  onChange={set("time")}
                  className={`${inputClass(errors.time)} cursor-pointer`}
                >
                  <option value="" disabled>Select a slot</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
                <FieldError id="reservation-time-error" message={errors.time} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="res-message" className="text-xs font-bold tracking-[0.2em] uppercase text-ink">
                  Special Requests <span className="normal-case tracking-normal text-ink/50">(optional)</span>
                </label>
                <textarea
                  id="res-message"
                  data-testid="reservation-message-input"
                  rows="3"
                  placeholder="Window seat, a candle on the dessert, wheelchair access..."
                  value={form.message}
                  onChange={set("message")}
                  className={`${inputClass(false)} resize-none`}
                />
              </div>
            </div>
            <button
              type="submit"
              data-testid="reservation-submit-button"
              disabled={submitting}
              className="mt-10 flex w-full items-center justify-center gap-2 rounded-full bg-terracotta py-4 text-sm font-bold tracking-wide text-cream transition-colors duration-300 hover:bg-charcoal disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {submitting ? "Booking your table..." : "Confirm Reservation"}
            </button>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}
