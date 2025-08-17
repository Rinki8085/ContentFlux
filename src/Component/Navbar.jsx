import { useState, useEffect } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";

import { Link } from "react-router-dom"

const serviceLinks = [
  {
    id: 5,
    to: "/website-content-writing-services",
    name: "Web Content Writing",
  },
  {
    id: 6,
    to: "/copywriting-services",
    name: "Copywriting Service",
  },
  {
    id: 9,
    to: "/legal-content-writing",
    name: "Legal Content Writing",
  },
  {
    id: 11,
    to: "/product-descriptions",
    name: "Product Description Writing",
  },
  {
    id: 13,
    to: "/technical-content-writing",
    name: "Technical Content Writing",
  },
  // {
  //   id: 15,
  //   to: "/social-media-content-services",
  //   name: "Social Media Content Writing",
  // },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "unset"
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#F1EAFF] shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src='/Images/header_logo.png' alt='Logo' width='40px' height='40px' />
            <span className="text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">
              ContentFlux
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <Link
              to="/"
              className="px-6 py-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
            >
              Home
            </Link>

            <Link
              to="/about-us"
              className="px-6 py-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
            >
              About
            </Link>
            {/* <Link
              to="/blogs"
              className="px-6 py-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md transition-all duration-300 font-medium"
            >
              Blogs
            </Link> */}

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 px-6 py-2 rounded-full text-gray-700 hover:text-purple-600 hover:bg-white hover:shadow-md transition-all duration-300 font-medium">
                <span>Services</span>
                <FiChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown Menu */}
              <div
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                  isServicesOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                }`}
              >
                <div className="py-2">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.id}
                      to={service.to}
                      className="block text-[14.5px] px-6 py-3 text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-all duration-200 font-medium"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="px-6 py-2 bg-[#312e5f] text-white rounded-full hover:bg-[#2a2654] hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-full hover:bg-white hover:shadow-md transition-all duration-300"
          >
            <FiMenu
              className={`w-6 h-6 text-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
               <img src='/Images/header_logo.png' alt='Logo' width='40px' height='40px' />
              <span className="text-xl font-bold text-gray-800">ContentFlux</span>
            </div>
            <button onClick={closeMenu} className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200">
              <FiX className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <div className="space-y-2 px-6">
              <Link
                to="/"
                onClick={closeMenu}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Home
              </Link>

              <Link
                to="/about-us"
                onClick={closeMenu}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                About
              </Link>
              {/* <Link
                to="/blogs"
                onClick={closeMenu}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Blogs
              </Link> */}

              {/* Mobile Services Dropdown */}
              <div>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
                >
                  <span>Services</span>
                  <FiChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isMobileServicesOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-4 space-y-1 mt-2">
                    {serviceLinks.map((service) => (
                      <Link
                        key={service.id}
                        to={service.to}
                        onClick={closeMenu}
                        className="block py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/contact"
                onClick={closeMenu}
                className="block py-3 text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block w-full py-3 px-6 bg-[#312e5f] text-white text-center rounded-full hover:bg-[#2a2654] transition-colors duration-300 font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
