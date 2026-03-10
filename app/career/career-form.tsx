"use client";

import { useForm } from "react-hook-form";
import { Mail, Phone, MapPin } from "lucide-react";

type FormData = {
  name: string;
  email: string;
  experience: string;
  agree: boolean;
};

export default function CareerForm() {
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
    <section className="bg-gray-50 py-10">
      <div className="container-wrapper grid lg:grid-cols-2 gap-16 ">
        {/* LEFT FORM */}
        <div>
          <span className="tag">Apply</span>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start here</h2>

          <p className="text-gray-600 mb-8">
            Tell us about yourself and your experience
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

            {/* EXPERIENCE */}
            <div>
              <label className="block text-sm mb-2">Experience</label>

              <textarea
                rows={5}
                {...register("experience")}
                placeholder="Share your caregiving background"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* TERMS */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                {...register("agree", {
                  required: "You must agree to continue",
                })}
              />

              <span className="text-sm text-gray-600">
                I agree to the terms
              </span>
            </div>

            {/* SUBMIT */}
            <button
              disabled={isSubmitting}
              className="bg-primary text-white px-6 py-2 rounded-md hover:bg-indigo-800 cursor-pointer "
            >
              Submit
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
              <p className="text-sm text-gray-800">careers@carebridge.com</p>
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
              <p className="text-sm text-gray-800">+1 (800) 555-0147</p>
            </div>
          </div>

          {/* OFFICE */}
          <div className="flex gap-4">
            <MapPin className="w-6 h-6 text-gray-700" />
            <div>
              <h4 className="font-semibold mb-1">Office</h4>
              <p className="text-gray-600 text-sm mb-2">
                Visit us in person to learn more about CareBridge
              </p>

              <button className="text-sm flex items-center gap-2">
                Get directions →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
