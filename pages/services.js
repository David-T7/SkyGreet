// pages/services.js

import Image from 'next/image';

export default function Services() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div
        className="flex flex-col justify-center items-center text-center py-20 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/images/hero-white.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-blue-600 opacity-60 z-0"></div>
        <div className="relative z-10">
          <p className="text-2xl mb-8 text-white">
            Experience seamless travel with personalized assistance at every step.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-thin text-center text-gray-700 mb-6">
          Our Services
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image
              src="/images/departures.jpg"
              alt="Departures"
              className="w-full h-40 object-cover rounded-lg mb-4"
              width={400}
              height={250}
            />
            <h3 className="text-2xl font-thin mb-3 text-gray-600">Departures</h3>
            <p>
              Enjoy stress-free travel from the moment you arrive at the airport. Our greeters will assist with check-in, security, and access to VIP lounges.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image
              src="/images/arrivals.jpg"
              alt="Arrivals"
              className="w-full h-40 object-cover rounded-lg mb-4"
              width={400}
              height={250}
            />
            <h3 className="text-2xl font-thin mb-3 text-gray-600">Arrivals</h3>
            <p>
              Seamlessly transition from the aircraft to your destination with our meet-and-greet service. We’ll assist with immigration, baggage, and transportation.
            </p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <Image
              src="/images/transfers.jpg"
              alt="Transfers"
              className="w-full h-40 object-cover rounded-lg mb-4"
              width={400}
              height={250}
            />
            <h3 className="text-2xl font-thin mb-3 text-gray-600">Transfers</h3>
            <p>
              Connect effortlessly between flights with our transit assistance. Relax in VIP lounges while we handle the logistics.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-blue-900 text-white shadow-md py-8 text-center">
        <p className="text-md">
          &copy; {new Date().getFullYear()} Airport Meet & Greet Service. All rights reserved.
        </p>
      </div>
    </div>
  );
}
