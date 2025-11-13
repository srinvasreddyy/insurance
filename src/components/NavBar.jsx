import React, { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from '../assets/logo.png';
const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menu = [
    { id: 1, name: "New to the UK?", path: "newtouk" },
    { id: 2, name: "Car", path: "car" },
    { id: 3, name: "Van", path: "van" },
    { id: 4, name: "Car finance", path: "carfinance" },
    { id: 5, name: "Our story", path: "ourstory" },
    { id: 6, name: "Refer a friend", path: "referafriend" },
    { id: 7, name: "Blog", path: "blog" },
    { id: 8, name: "Help", path: "help" },
  ];

  return (
    <motion.nav 
      className="w-full bg-[#f1e9dc] shadow-sm fixed top-0 left-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center h-20 px-5 md:px-8">
        {/* Logo */}
        <motion.div 
          className="text-2xl font-bold text-blue-500 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
        <a href="/">
         <img src={logo} alt="Company Logo" className="h-10 w-auto" />
        </a></motion.div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 text-neutral-800 font-medium">
          {menu.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.path}
              className="hover:text-blue-500 transition-colors"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <motion.button 
            className="bg-neutral-300 hover:bg-neutral-400 px-6 py-2 rounded-full font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: '/claims' })}
          >
            Claims
          </motion.button>
          <motion.button 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate({ to: '/getaquote' })}
          >
            Get a Quote
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            className="lg:hidden bg-[#f1e9dc] flex flex-col items-center gap-4 py-6 text-neutral-800 font-medium"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            {menu.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.path}
                className="hover:text-blue-500 transition-colors"
                onClick={() => setMenuOpen(false)}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <motion.button 
                className="bg-neutral-300 px-6 py-2 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/claims');
                  setMenuOpen(false);
                }}
              >
                Claims
              </motion.button>
              <motion.button 
                className="bg-blue-500 text-white px-6 py-2 rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  navigate('/getaquote');
                  setMenuOpen(false);
                }}
              >
                Get a Quote
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default NavBar;
