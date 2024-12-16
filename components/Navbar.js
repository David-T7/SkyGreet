import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Importing icons for the menu

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle the mobile menu
  const [active, setActive] = useState('/'); // State to track the active link

  const toggleMenu = () => setIsOpen(!isOpen);

  // Function to handle active link
  const handleActiveLink = (path) => {
    setActive(path);
    setIsOpen(false); // Close mobile menu on selection
  };

  const linkClasses = (path) =>
    `hover:text-yellow-400 transition duration-300 underline-offset-4 decoration-2 ${
      active === path
        && 'text-yellow-400 underline decoration-yellow-400'
      
    }`;

  return (
    <nav className="bg-blue-900 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-semibold">
            <img src="/images/logo.png" alt="Logo" className="h-14 w-24" /> {/* Replace with your logo image */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className={linkClasses('/')} onClick={() => handleActiveLink('/')}>
              Home
            </Link>
            <Link href="/services" className={linkClasses('/services')} onClick={() => handleActiveLink('/services')}>
              Services
            </Link>
            <Link href="/price" className={linkClasses('/price')} onClick={() => handleActiveLink('/price')}>
              Pricing
            </Link>
            <Link href="/contact" className={linkClasses('/contact')} onClick={() => handleActiveLink('/contact')}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-900 text-white`}>
        <div className="flex flex-col items-center py-4 space-y-4">
          <Link href="/" className={linkClasses('/')} onClick={() => handleActiveLink('/')}>
            Home
          </Link>
          <Link href="/services" className={linkClasses('/services')} onClick={() => handleActiveLink('/services')}>
            Services
          </Link>
          <Link href="/price" className={linkClasses('/price')} onClick={() => handleActiveLink('/price')}>
            Pricing
          </Link>
          <Link href="/contact" className={linkClasses('/contact')} onClick={() => handleActiveLink('/contact')}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
