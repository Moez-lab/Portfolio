"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.trim() || !form.message.trim()) {
      alert("Please provide both your email and a message.");
      return;
    }

    setLoading(true);

    // --- 1. SEND TO EMAIL (Via EmailJS) ---
    emailjs
      .send(
        "service_a43do4p", // Your Service ID
        "template_7vxh8gd", // Your Template ID
        {
          // --- FIXED KEYS TO MATCH YOUR TEMPLATE ---
          name: form.name,      // Was 'from_name', needs to be 'name'
          email: form.email,    // Was 'from_email', needs to be 'email'
          message: form.message,
          title: "Portfolio Contact", // Added this so your email Subject isn't empty
        },
        "K48EUrPFdjVAOO0ZO" // Your Public Key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          // Reset form
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          // EmailJS rejects with { status, text } — not a plain Error object,
          // so console.error(error) prints {} . Extract the meaningful fields:
          const status = error?.status ?? "unknown";
          const text   = error?.text   ?? JSON.stringify(error);
          console.error(`EmailJS error [${status}]:`, text);
          alert(`Ahh, something went wrong (${status}). Please try again.`);
        }
      );
  };

  return (
    <div className={`xl:mt-12 flex flex-col gap-10 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 w-full bg-slate-50 dark:bg-black-100 p-8 rounded-2xl border border-slate-200 dark:border-transparent shadow-xl dark:shadow-none transition-colors duration-300"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-white dark:bg-tertiary py-4 px-6 placeholder:text-slate-400 dark:placeholder:text-secondary text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-transparent font-medium focus:border-[#915eff] dark:focus:border-[#915eff] transition-all"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email address?"
              className="bg-white dark:bg-tertiary py-4 px-6 placeholder:text-slate-400 dark:placeholder:text-secondary text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-transparent font-medium focus:border-[#915eff] dark:focus:border-[#915eff] transition-all"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-slate-800 dark:text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-white dark:bg-tertiary py-4 px-6 placeholder:text-slate-400 dark:placeholder:text-secondary text-slate-900 dark:text-white rounded-lg outline-none border border-slate-300 dark:border-transparent font-medium focus:border-[#915eff] dark:focus:border-[#915eff] transition-all"
            />
          </label>

          <button
            type="submit"
            className="bg-[#915eff] hover:bg-[#804dee] py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-[#915eff]/30 transition-all hover:scale-105"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

const ContactSection = SectionWrapper(Contact, "contact");
export default ContactSection;
