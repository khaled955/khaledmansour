import { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

type FormValues = { name: string; email: string; subject: string; message: string; _hp?: string,phone?: string; };

export default function Contacts() {
  const [showThanks, setShowThanks] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ mode: "onTouched" });

  async function onSubmit(values: FormValues) {
    try {
      if (values._hp) return; // honeypot

    

      await emailjs.send(
        "service_gpdh86c",
        "template_19s67dk",
          {
    name: values.name,       // {{name}}
    email: values.email,     // {{email}} (Reply-To)
    title: values.subject,   // {{title}} (used in Subject)
    message: values.message,
    phone: values.phone || "—",  // {{message}}
  },
        { publicKey:"coAT_I-kF5mClfEPP" }
      );

      reset();
      setShowThanks(true);
    } catch (err) {
      console.error(err);
      alert("Sorry—couldn't send your message. Please try again.");
    }
  }

  return (
    <section id="contact" className="relative">
      <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950 shadow-sm">
        <header className="mb-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Contact</h2>
          <p className="text-neutral-600 dark:text-neutral-400">
            Have a project or collaboration in mind? Send me a message.
          </p>
        </header>

        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
          {/* Honeypot */}
          <input type="text" {...register("_hp")} className="hidden" tabIndex={-1} autoComplete="off" />

          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Your name is required", minLength: { value: 2, message: "Name is too short" } })}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            />
            {errors.name && <p className="mt-1 text-xs text-rose-600">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
              })}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            />
            {errors.email && <p className="mt-1 text-xs text-rose-600">{errors.email.message}</p>}
          </div>


    {/* Phone (optional) */}
          <div>
            <label className="block text-sm font-medium mb-1">Phone (optional)</label>
            <input
              type="tel"
              placeholder="+966 50 978 4124"
              {...register("phone", {
                pattern: {
                  // allows +, spaces, dashes, parentheses; 7–20 digits
                  value: /^\+?[0-9\s\-()]{7,20}$/,
                  message: "Enter a valid phone number",
                },
              })}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            />
            {errors.phone && <p className="mt-1 text-xs text-rose-600">{errors.phone.message}</p>}
          </div>




          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="What’s this about?"
              {...register("subject", { required: "Subject is required", maxLength: { value: 120, message: "Keep it ≤ 120 characters" } })}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            />
            {errors.subject && <p className="mt-1 text-xs text-rose-600">{errors.subject.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows={5}
              placeholder="Tell me about your project or idea…"
              {...register("message", { required: "Please add a short message", minLength: { value: 10, message: "Give me a little more detail" } })}
              className="w-full rounded-lg border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900 px-3 py-2 outline-none focus:ring-2 focus:ring-neutral-600"
            />
            {errors.message && <p className="mt-1 text-xs text-rose-600">{errors.message.message}</p>}
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 shadow-sm transition hover:bg-neutral-800 disabled:opacity-50"
            >
              {isSubmitting && <i className="fa-solid fa-spinner fa-spin" />}
              <span>Send</span>
            </button>
          </div>
        </form>
      </div>

      {/* Thank-you popup */}
      {showThanks && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-black/60 p-4">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-xl dark:bg-neutral-900">
            <i className="fa-regular fa-circle-check text-4xl text-emerald-500" />
            <h3 className="mt-3 text-lg font-semibold">Thanks for reaching out!</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
              I’ll get back to you at the email you provided.
            </p>
            <button
              onClick={() => setShowThanks(false)}
              className="mt-4 rounded-lg bg-neutral-900 px-4 py-2 text-white hover:bg-neutral-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}





