import { FaWhatsapp } from 'react-icons/fa';

export default function Home() {
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
          <div className="absolute inset-0 bg-blue-600 opacity-60 z-0"></div> {/* Light blue overlay */}
          <div className="relative z-10">
            <h1 className="text-5xl font-thin mb-4 text-white"> {/* Text color set to white */}
              Welcome to Airport Meet & Greet Service
            </h1>
            <p className="text-xl mb-8 text-white"> {/* Text color set to white */}
              Experience seamless travel with personalized assistance at every step.
            </p>
            <a
            href="/contact"
            className="border-2 border-white text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-900 hover:text-white transition duration-300"
            >
            Get Started
            </a>
          </div>
        </div>
    
  
        {/* Services Section */}
        <div id="services" className="bg-white py-16">
          <h2 className="text-3xl font-thin text-center text-gray-700 mb-6">
            Our Services
          </h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img
                src="/images/departures.jpg"
                alt="Departures"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Departures</h3>
              <p>
                Enjoy stress-free travel from the moment you arrive at the airport. Our
                greeters will assist with check-in, security, and access to VIP lounges.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img
                src="/images/arrivals.jpg"
                alt="Arrivals"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Arrivals</h3>
              <p>
                Seamlessly transition from the aircraft to your destination with our
                meet-and-greet service. We’ll assist with immigration, baggage, and
                transportation.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <img
                src="/images/transfers.jpg"
                alt="Transfers"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-thin mb-3 text-gray-600">Transfers</h3>
              <p>
                Connect effortlessly between flights with our transit assistance. Relax
                in VIP lounges while we handle the logistics.
              </p>
            </div>
          </div>
        </div>
  
      {/* Why Us Section */}
<div className="bg-gray-50 py-16 text-center">
  <h2 className="text-4xl font-thin mb-6 text-gray-700">Why Choose Us?</h2>
  <div className="max-w-4xl mx-auto">
    <p className="text-lg mb-6 text-gray-600">
      From the moment you arrive to your destination, we anticipate your every
      need. Our VIP services ensure a stress-free and enjoyable travel experience.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-normal mb-2 text-gray-800">No Hassle</h3>
        <p className="text-gray-600">
          Say goodbye to long lines and wait times. We expedite every step of the
          process.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-normal mb-2 text-gray-800">Quick Assistance</h3>
        <p className="text-gray-600">
          From check-in to boarding, our agents are with you every step of the way.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl">
        <h3 className="text-2xl font-normal mb-2 text-gray-800">Comfort & Style</h3>
        <p className="text-gray-600">
          Travel the way it should be—relaxing, luxurious, and stress-free.
        </p>
      </div>
    </div>
  </div>

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
            &copy; {new Date().getFullYear()} Airport Meet & Greet Service. All rights reserved.
          </p>
        </div>
      </div>
    );
  }
  