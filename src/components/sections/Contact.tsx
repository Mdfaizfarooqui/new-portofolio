"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

// Zod Validation Schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    // Simulate database API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();

    // Clear success banner after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Column: Details & Map */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-purple-500">
              08 / contact
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              let&apos;s build something great
            </h2>
            <p className="text-gray-400 font-light max-w-md leading-relaxed">
              have a project idea, partnership inquiry, or just want to chat? reach out and let us engineering your visual vision.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">email us</span>
                <a href="mailto:info@skynotech.com" className="text-sm font-semibold hover:text-purple-400 cursor-none">
                  info@skynotech.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">call us</span>
                <a href="tel:+905555555555" className="text-sm font-semibold hover:text-purple-400 cursor-none">
                  +90 (555) 555 55 55
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300">
              <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] text-gray-500 uppercase tracking-widest block">location</span>
                <span className="text-sm font-semibold">Istanbul, Turkey</span>
              </div>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="w-full h-[200px] rounded-xl overflow-hidden glass-panel flex items-center justify-center relative select-none">
            <div className="absolute inset-0 bg-purple-950/5" />
            <div className="z-10 text-center flex flex-col gap-1 items-center">
              <MapPin className="w-6 h-6 text-purple-500 animate-bounce" />
              <span className="text-xs font-semibold text-white uppercase tracking-wider">interactive map overlay</span>
              <span className="text-[10px] text-gray-500">Istanbul Center Office</span>
            </div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="flex flex-col">
          <Card className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
              {/* Name field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  full name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Faiz Farooqui"
                  {...register("name")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:bg-white/10 focus:border-purple-500 outline-none transition-all cursor-none ${
                    errors.name ? "border-red-500/50" : "border-white/10"
                  }`}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                    {errors.name.message}
                  </span>
                )}
              </div>

              {/* Email field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. info@skynotech.com"
                  {...register("email")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:bg-white/10 focus:border-purple-500 outline-none transition-all cursor-none ${
                    errors.email ? "border-red-500/50" : "border-white/10"
                  }`}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                    {errors.email.message}
                  </span>
                )}
              </div>

              {/* Message field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                  project details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="tell us about your timeline, stack preference, and target goals..."
                  {...register("message")}
                  className={`w-full bg-white/5 border rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:bg-white/10 focus:border-purple-500 outline-none transition-all cursor-none ${
                    errors.message ? "border-red-500/50" : "border-white/10"
                  }`}
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <span className="text-[10px] text-red-400 font-semibold uppercase tracking-wider">
                    {errors.message.message}
                  </span>
                )}
              </div>

              {/* Success Feedback Alert */}
              {submitSuccess && (
                <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-xs font-semibold uppercase tracking-wider text-center animate-fade-in">
                  message sent successfully! we will contact you shortly.
                </div>
              )}

              {/* Submit Trigger */}
              <Button type="submit" variant="primary" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    send message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
