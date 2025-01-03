import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
      <div className="bg-white text-gray-800 min-h-screen flex flex-col">
          <Head>
              <title>Sky Greet Service | Airport Meet and Greet in Addis Ababa</title>
              <meta
                  name="description"
                  content="Sky Greet Service offers professional airport meet and greet services in Addis Ababa, Ethiopia. From arrivals to departures, we make your travel seamless and stress-free."
              />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <meta charSet="UTF-8" />
              <meta name="author" content="Sky Greet Service" />
              <meta
                  name="keywords"
                  content="Airport meet and greet Addis Ababa, travel assistance Ethiopia, arrivals, departures, transit service"
              />
              <meta property="og:title" content="Sky Greet Service | Airport Meet and Greet in Addis Ababa" />
              <meta
                  property="og:description"
                  content="Make your travel effortless with our premium meet and greet services. We handle all aspects of airport navigation so you can focus on your journey."
              />
              <meta property="og:image" content="/images/hero-white.jpg" />
              <meta property="og:url" content="https://yourwebsite.com" /> {/* Replace with your domain */}
              <meta property="og:type" content="website" />
              <link rel="icon" type="image/png" sizes="32x32" href="images/logo.png" />
          </Head>
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
          <div className="absolute inset-0 bg-blue-600 opacity-60 z-0"></div> {/* Light blue overlay */}
          <div className="relative z-10">
          <h1 className="text-3xl font-thin p-2 mb-4 text-white"> 
          Airport Meet and Greet in Addis Ababa, Ethiopia.
          </h1>
  <p className="text-lg text-white text-center px-6 sm:px-12">
    Make travel easier with our Airport Meet and Greet Service. We handle everything from arrivals to baggage claim and offer lounge access.
  </p>
  <p className="text-lg mb-8 text-white text-center px-6 sm:px-12">
  Let us handle the airport so you can focus on your trip.
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
          <Image
          src="/images/arrivals.jpg"
          alt="Arrival"
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
  
      {/* Why Us Section */}
<div className="bg-gray-50 px-4 py-16 text-center">
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
          Say goodbye to long lines and wait times. We hanlde every step of the
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
          href="https://wa.me/+251900666742" // Replace with your WhatsApp number
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
  