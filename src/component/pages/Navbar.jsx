import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/src/assets/images/Bakereies_Logo-removebg-preview.png";

const menuVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
};

const menuItems = [
  { name: "HOME", path: "/" },
  { name: "THEMED", path: "/themed" },
  { name: "PASTRIES", path: "/pastries" },
  { name: "BREAD-DESSERTS", path: "/bread-desserts" }, 
  { name: "BEVERAGES", path: "/beverages" },
  { name: "OUR IDENTITY", path: "/our-identity" },
  { name: "REACH OUT", path: "/reach-out" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#5D4037] text-white p-3 flex justify-between items-center relative">
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <motion.img
          src={logo}
          alt="Sweet Dessert House Cake"
          className="w-36"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Link>

      <ul className="hidden md:flex text-xl font-bold gap-14">
        {menuItems.map(({ name, path }, index) => (
          <motion.li key={index} whileHover={{ scale: 1.1, color: "#F8BBD0" }}>
            <Link to={path}>{name}</Link>
          </motion.li>
        ))}
      </ul>

      <button
        className="md:hidden text-white text-2xl"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-full left-0 w-full bg-[#5D4037] flex flex-col items-center text-lg font-bold p-5 space-y-4 md:hidden z-50"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {menuItems.map(({ name, path }, index) => (
              <Link
                key={index}
                to={path}
                className="hover:text-[#F8BBD0]"
                onClick={() => setIsMenuOpen(false)}
              >
                {name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
