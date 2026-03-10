/* eslint-disable react/no-unescaped-entities */
"use client";

import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin, Send } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  message: string;
  phone?: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <section className=" py-10">
      <div className="container-wrapper grid lg:grid-cols-2 gap-16">
        {/* LEFT FORM */}
        <div>
          <span className="tag mb-3">Get in Touch</span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Send us a message
          </h2>

          <p className="text-gray-600 mb-8">
            Have questions about our care services? We're here to help and will
            respond as soon as possible.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* NAME */}
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                {...register("name", { required: "Name required" })}
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input
                {...register("email", {
                  required: "Email required",
                })}
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-sm mb-2">Phone (Optional)</label>
              <input
                {...register("phone")}
                placeholder="(555) 123-4567"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm mb-2">Message</label>
              <textarea
                rows={5}
                {...register("message", { required: "Message required" })}
                placeholder="Tell us how we can help you..."
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* SUBMIT */}
            <button
              disabled={isSubmitting}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-indigo-800 cursor-pointer"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent animate-spin rounded-full"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  Send Message
                  <Send className="w-4 h-4" />
                </div>
              )}
            </button>
          </form>
        </div>

        {/* RIGHT CONTACT INFO */}
        <div className="space-y-10 pt-14 lg:pt-24">
          {/* EMAIL */}
          <div className="flex gap-4">
            <Mail className="w-6 h-6 text-gray-700" />
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <p className="text-gray-600 text-sm">Reach out with questions</p>
              <p className="text-sm text-gray-800">
                ebonicshomecareservices98@gmail.com
              </p>
            </div>
          </div>

          {/* PHONE */}
          <div className="flex gap-4">
            <Phone className="w-6 h-6 text-gray-700" />
            <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <p className="text-gray-600 text-sm">
                Call us during business hours
              </p>
              <p className="text-sm text-gray-800">(+234) 9039746329</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-gray-700" />
            <div>
              <h4 className="font-semibold mb-1">Address</h4>
              <p className="text-gray-600 text-sm mb-2">
                Visit us in person to learn more about our services
              </p>
              <p className="text-sm text-gray-800">
                123 Caregiver Lane
                <br />
                Compassionate City, CC 12345
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
