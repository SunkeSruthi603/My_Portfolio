import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Frontend Developer",
  "React & Tailwind",
  "AI Enthusiast",
];

function Home() {
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (charIndex < currentRole.length) {
        setCurrentText(currentText + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setCurrentText("");
          setRoleIndex((roleIndex + 1) % roles.length);
        }, 2000);
      }
    }, 80);
    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex, currentText]);

  return (
    <section className="relative flex flex-col items-center justify-center text-center h-screen px-6 bg-gray-50 overflow-hidden">
      {/* Background floating glow */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
        animate={{ y: [0, 40, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
        animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* Profile Image */}
      <motion.img
        src="/ai-logo.jpg"
        alt="Sruthi Sunke"
        className="w-36 h-36 rounded-full object-cover shadow-lg mb-6 z-10 border-4 border-white"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        whileHover={{ scale: 1.07 }}
      />

      {/* Hero Content */}
      <motion.div
        className="max-w-3xl z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-gray-800">
          Sruthi Sunke
        </h1>
        <h2 className="text-xl sm:text-2xl text-blue-600 font-medium mb-4 h-8">
          {currentText}
          <span className="animate-pulse">|</span>
        </h2>
        <p className="text-base sm:text-lg text-gray-700 mb-8">
          Hi!, i'm sruthi. i'm an undergraduate in Information Technology,
          I'm eager to leverage my skills and passion for problem solving,
          contribute to innovative projects in Tech.
        </p>

        <div className="flex justify-center gap-4">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.07 }}
            className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-md hover:bg-blue-600 hover:text-white transition"
          >
            Hire Me
          </motion.a>
        </div>
      </motion.div>

      {/* Floating Icons */}
      <FloatingIcon src="/react-logo.png" top="20%" left="10%" />
      <FloatingIcon src="/OIP.jpg" top="70%" left="15%" />
      <FloatingIcon src="/js-logo.jpg" top="30%" right="10%" />
      <FloatingIcon src="/git-logo.jpg" bottom="10%" right="15%" />
    </section>
  );
}

// 👇 Helper for floating icons
const FloatingIcon = ({ src, top, bottom, left, right }) => (
  <motion.img
    src={src}
    alt=""
    className="w-10 h-10 absolute z-0 opacity-60"
    style={{ top, bottom, left, right }}
    animate={{
      y: [0, 10, 0],
      rotate: [0, 10, -10, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
);

export default Home;
