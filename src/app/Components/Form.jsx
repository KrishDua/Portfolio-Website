"use client";
import React, { useRef, useState } from 'react';

function Form() {
  const formRef = useRef(null);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formData = new FormData(formRef.current);

    try {
      const response = await fetch("https://formsubmit.co/ajax/11f04a7c4451e872e55613fba5509703", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Message sent successfully!");
        formRef.current.reset(); 
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("Something went wrong.");
    }

    setSubmitting(false);
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-[#0f172a] border border-cyan-500 rounded-2xl p-6 sm:p-10 shadow-lg max-w-2xl mx-auto flex flex-col gap-6
      transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <input
        type="text"
        name="name"
        required
        placeholder="Your Name"
        className="bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <input
        type="email"
        name="email"
        required
        placeholder="Your Email"
        className="bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <input
        type="tel"
        name="phone"
        required
        placeholder="Your Phone Number"
        className="bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
      />
      <textarea
        name="message"
        required
        placeholder="Hi, I like your profile and would like to connect with you"
        rows="6"
        className="bg-[#1e293b] text-white placeholder-gray-400 px-4 py-3 rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
      ></textarea>

      <button
        type="submit"
        disabled={submitting}
        className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-all duration-300 disabled:opacity-50"
      >
        {submitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

export default Form;