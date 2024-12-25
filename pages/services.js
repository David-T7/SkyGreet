// pages/services.js

import Image from 'next/image';

export default function Services() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col">
      {/* Hero Section */}
     <div className="relative flex flex-col justify-center items-center text-center py-20 bg-cover bg-center">
             {/* Hero Background Image */}
             <Image
               src="/images/hero-white.jpg"
               alt="Sky Greet Service"
               layout="fill" // Ensures the image covers the background
               objectFit="cover" // Keeps the image properly scaled
               objectPosition="center"
               quality={75} // Adjusts the quality for optimization (default is 75)
               priority // Ensures this image loads as high priority
               className="z-0"
             />
        <div className="absolute inset-0 bg-blue-600 opacity-60 z-0"></div>
        <div className="relative z-10">
          <p className="text-2xl mb-8 text-white">
            Experience seamless travel with personalized assistance at every step.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-white py-16">
          <h2 className="text-3xl font-thin text-center text-gray-700 mb-6">
            Our Services
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-gray-100 p-6 rounded-lg shadow">
               <Image
                        src="/images/arrivals.jpg"
                        alt="Arrivals"
                        width={400}
                        height={200}
                        layout="responsive"
                        priority // Makes it load faster
                        className="object-cover rounded-lg mb-4"
                        />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Arrival</h3>
              <p>
              Enjoy a stress-free welcome at the airport. Our staff meets you at the gate, assists through immigration, customs and with your luggage, ensuring a smooth exit.
              </p>
            </div>


            <div className="bg-gray-100 p-6 rounded-lg shadow">
               <Image
                        src="/images/departures.jpg"
                        alt="Departure"
                        width={400}
                        height={200}
                        layout="responsive"
                        priority // Makes it load faster
                        className="object-cover rounded-lg mb-4"
                        />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Departure</h3>
              <p>
              We handle check-in, fast-track security, passport control and offer lounge access, making your departure seamless and relaxing.
              </p>
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <Image
                       src="/images/transfers.jpg"
                       alt="Transit"
                       width={400}
                       height={200}
                       layout="responsive"
                       priority // Makes it load faster
                       className="object-cover rounded-lg mb-4"
                       />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Transit</h3>
              <p>
              We ensure you catch your connecting flight without hassle, guiding you through the airport to your next gate efficiently.
              </p>
            </div>
          </div>
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
