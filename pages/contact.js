import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "", // Clear error on input change
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    // If no errors, proceed with form submission logic
    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!"); // Replace with your logic
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
      {/* Main Content */}
      <div className="py-12 px-4">
        {/* Contact Heading */}
        <h2 className="text-2xl font-normal text-center mb-4 text-gray-700">Contact Us</h2>

        {/* Contact Info */}
        <div className="max-w-md mx-auto mb-8 text-center">
          <p className="text-lg font-medium text-gray-700">
            <strong>Email:</strong> skygreetservice@gmail.com
          </p>
          {/* <p className="text-lg font-medium text-gray-700">
            <strong>Phone:</strong> +251900666742
          </p> */}
          <p className="text-gray-600 mt-2">
            Our team will reply to your message in a short time.
          </p>
        </div>

        {/* Contact Form */}
        <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
            {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg text-black focus:outline-none focus:border-blue-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
          </div>
          <div className="mb-6">
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded-lg text-black focus:outline-none h-40 focus:border-blue-500"
              rows="4"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
          </div>
          <button
            type="submit"
            className="bg-blue-500 px-6 py-3 rounded-lg text-lg text-white hover:bg-blue-600 transition duration-300 w-full"
          >
            Send Message
          </button>
        </form>

        {/* WhatsApp Contact */}
        <a
          href="https://wa.me/11234567890" // Replace with your WhatsApp number
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg text-white text-3xl hover:bg-green-600 transition duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white shadow-md py-8 text-center">
        <p className="text-md">
          &copy; {new Date().getFullYear()} Sky Greet Service. All rights reserved.
        </p>
      </div>
    </div>
  );
}
