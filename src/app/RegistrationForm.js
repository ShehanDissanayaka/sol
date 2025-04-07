"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    jobTitle: "",
    company: "",
    mobileNumber: "",
    email: "",
    companyWebsite: "",
    agree: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert("Please agree to the Privacy Policy.");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          firstName: "",
          lastName: "",
          jobTitle: "",
          company: "",
          mobileNumber: "",
          email: "",
          companyWebsite: "",
          agree: false,
        });
      } else {
        alert("Failed to register. Try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try later.");
      console.error(error);
    }
  };

  return (
    <section id="register" className="relative min-h-screen bg-black text-white overflow-hidden">
      
      <div className="absolute inset-0 z-0">
        <Image
          src="/orgimage.jpg"
          alt="Background"
          layout="fill"
          className="object-cover opacity-20 blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a002b] to-[#3a0ca3] opacity-60" />
      </div>

      <div className="relative z-10 flex items-center justify-center py-20 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 max-w-5xl w-full grid md:grid-cols-2 gap-10"
        >
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Register Now</h2>
            <p className="text-lg text-gray-300">
              Be part of something incredible! Fill in your details to reserve your place.
            </p>
          </motion.div>

          
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="bg-green-100 text-green-900 p-6 rounded-xl text-center shadow-xl"
            >
              <p className="text-lg font-medium leading-relaxed">
                Thank you for registering with us! Your interest in our event is greatly appreciated.
                <br /><br />
                This is an <strong>INVITATION ONLY</strong> private conference. <br />
                Our team will be in touch with you shortly to confirm your participation!
              </p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-4"
            >
              {[
                { name: "firstName", placeholder: "First Name" },
                { name: "lastName", placeholder: "Last Name" },
                { name: "jobTitle", placeholder: "Job Title" },
                { name: "company", placeholder: "Company" },
                { name: "mobileNumber", placeholder: "Mobile Number" },
                { name: "email", placeholder: "Email Address", type: "email" },
                { name: "companyWebsite", placeholder: "Company Website URL", type: "url" },
              ].map(({ name, placeholder, type = "text" }) => (
                <input
                  key={name}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  value={formData[name]}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-gray-900 border border-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
                  required
                />
              ))}

              <label className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="agree"
                  checked={formData.agree}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
                <span>
                  By filling out this form, you agree to our
                  <a href="#" className="text-pink-300 underline ml-1">Privacy Policy</a>.
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-pink-600 hover:bg-pink-700 py-3 rounded-lg font-semibold text-white transition-all duration-300 hover:scale-105"
              >
                Register
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
