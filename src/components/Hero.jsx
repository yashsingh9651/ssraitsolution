"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen overflow-hidden flex items-center"
    >
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start mb-6"
            >
              <span
                className="px-4 py-1 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: "var(--gray-light)",
                  color: "var(--primary)",
                }}
              >
                Design • Develop • Deploy
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block">Transforming</span>
              <span style={{ color: "var(--primary)" }}>Ideas</span> into
              <span className="relative ml-3">
                Digital Reality
                <motion.span
                  className="absolute -bottom-1 left-0 w-full"
                  style={{
                    height: "6px",
                    backgroundColor: "var(--secondary)",
                    opacity: 0.7,
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1.2 }}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-lg mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{ color: "var(--foreground)", opacity: 0.8 }}
            >
              We craft stunning, high-performance websites and applications that
              elevate your brand and drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.a
              href="#services"
                className="px-8 py-3 rounded-lg font-medium"
                style={{
                  backgroundColor: "var(--primary)",
                  color: "var(--background)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Our Services
              </motion.a>

              <motion.a
              href="#contact"
                className="px-8 py-3 rounded-lg font-medium border-2"
                style={{
                  borderColor: "var(--primary)",
                  color: "var(--foreground)",
                }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--primary)",
                  color: "var(--background)",
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us
              </motion.a>
            </motion.div>
          </motion.div>
          {/* Right side - Image with geometric decorative elements */}
          <motion.div
            className="lg:w-1/2 relative hidden lg:block"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative">
              {/* Decorative geometric shapes */}
              <motion.div
                className="absolute -top-10 -left-10 w-24 h-24 rounded-xl"
                style={{ backgroundColor: "var(--primary)", opacity: 0.1 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full"
                style={{ backgroundColor: "var(--secondary)", opacity: 0.1 }}
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border-2"
                style={{ borderColor: "var(--gray)", zIndex: 1 }}
              >
                <motion.div
                  className="p-1 rounded-2xl overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/images/work-2.jpg"
                    alt="Web Development Services"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover h-[400px]"
                  />
                </motion.div>
              </div>

              {/* Tech stack floating boxes - Original ones */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundColor: "var(--background)", zIndex: 2 }}
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                className="absolute top-10 -right-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundColor: "var(--background)", zIndex: 2 }}
              >
                <span className="text-2xl">🔥</span>
              </motion.div>
              <motion.div
                className="absolute top-3 -left-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundColor: "var(--background)", zIndex: 2 }}
              >
                <span className="text-2xl">💡</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
