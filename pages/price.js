import { FaWhatsapp } from "react-icons/fa";

export default function Price() {
    return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        {/* Main Content */}
        <div className="flex-grow py-12 px-4">
          {/* Pricing Heading */}
          <h2 className="text-4xl font-normal text-center mb-12 text-gray-700">Our Pricing</h2>
  
          {/* Pricing Cards */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Basic Plan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Ideal for single travelers or occasional users looking for essential support.
              </p>
              <p className="text-4xl font-bold text-blue-900 mb-6">
                $49<span className="text-lg font-normal">/trip</span>
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✔ Meet & Greet</li>
                <li>✔ Basic Assistance</li>
                <li>✖ Lounge Access</li>
              </ul>
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition duration-300 w-full">
                Select Plan
              </button>
            </div>
  
            {/* Standard Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-yellow-500 hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Standard Plan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Perfect for frequent travelers seeking added convenience and comfort.
              </p>
              <p className="text-4xl font-bold text-blue-900 mb-6">
                $99<span className="text-lg font-normal">/trip</span>
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✔ Meet & Greet</li>
                <li>✔ Priority Assistance</li>
                <li>✔ Lounge Access</li>
              </ul>
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition duration-300 w-full">
                Select Plan
              </button>
            </div>
  
            {/* Premium Plan */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Plan</h3>
              <p className="text-lg text-gray-600 mb-6">
                Best for VIP travelers wanting luxury and top-tier services.
              </p>
              <p className="text-4xl font-bold text-blue-900 mb-6">
                $149<span className="text-lg font-normal">/trip</span>
              </p>
              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✔ Meet & Greet</li>
                <li>✔ Full Assistance</li>
                <li>✔ VIP Lounge Access</li>
              </ul>
              <button className="bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg text-lg hover:bg-yellow-600 transition duration-300 w-full">
                Select Plan
              </button>
            </div>
          </div>
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
        <footer className="bg-blue-900 text-white py-4 text-center">
          <p className="text-md">
            &copy; {new Date().getFullYear()} Sky Greet Service. All rights reserved.
          </p>
        </footer>
      </div>
    );
  }
  