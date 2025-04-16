import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const roles = [
    "Frontend Developer",
    "React & Tailwind",
    "AI Enthusiast",
];

function Projects() {
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
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-md:max-w-md mx-auto">

                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                <div class="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all">
                    <div class="p-8">
                        <h3 class="text-gray-800 text-xl font-semibold mb-3">Optimized Code Generator</h3>
                        <p class="text-gray-500 text-sm leading-relaxed"></p>
                    </div>
                </div>
                
            </div>

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

export default Projects;
