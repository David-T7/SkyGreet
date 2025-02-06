import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Johnatan",
    role: "Frequent Traveler",
    image: "https://randomuser.me/api/portraits/men/37.jpg",
    comment: "The airport meet and greet service was amazing! It made my travel experience smooth and stress-free.",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Business Executive",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
    comment: "Highly professional and efficient service.",
  },
  {
    id: 3,
    name: "Samuel",
    role: "Solo Traveler",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
    comment: "Exceptional service! I was guided every step of the way, making my trip effortless.",
  },
  {
    id: 4,
    name: "Sophia Kim",
    role: "Vacationer",
    image: "https://randomuser.me/api/portraits/women/70.jpg",
    comment: "I felt like a VIP! The team was so welcoming and helpful. Highly recommended!",
  },
  {
    id: 5,
    name: "Carlos Mendes",
    role: "Business Traveler",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
    comment: "Fast, reliable, and professional. I will use this service again for my next trip.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const totalPages = Math.ceil(testimonials.length / 3);

  // Handle auto transition
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 15000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Handle manual navigation using dots
  const handleDotClick = (i) => {
    setIndex(i);
  };

  return (
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-normal text-gray-800 mb-6">What Our Clients Say</h2>

      <div className="relative max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.slice(index * 3, index * 3 + 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={80}
                  height={80}
                  className="rounded-full mb-4"
                  unoptimized
                />
                <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                <h3 className="mt-4 font-semibold text-gray-800">{testimonial.name}</h3>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Clickable Dotted Page Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleDotClick(i)}
              className={`h-3 w-3 rounded-full transition-all focus:outline-none ${
                i === index ? "bg-blue-600 scale-125" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
