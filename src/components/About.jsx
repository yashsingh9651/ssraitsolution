"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const AnimatedCounter = ({ value, title, icon }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * value));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={counterRef}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="bg-white dark:bg-gray-800 rounded-full p-4 shadow-lg mb-3"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.1,
        }}
        style={{ backgroundColor: "var(--background)" }}
      >
        <span className="text-3xl">{icon}</span>
      </motion.div>
      <motion.span
        className="text-3xl md:text-4xl font-bold"
        style={{ color: "var(--primary)" }}
      >
        {count}+
      </motion.span>
      <motion.span
        className="mt-1 text-sm md:text-base opacity-80"
        style={{ color: "var(--foreground)" }}
      >
        {title}
      </motion.span>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      id="about"
      className="relative py-20 md:py-28 overflow-hidden"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="relative hidden lg:block">
              {/* Decorative geometric shapes */}
              <motion.div
                className="absolute -top-10 -left-10 w-24 h-24 rounded-full"
                style={{ backgroundColor: "var(--secondary)", opacity: 0.1 }}
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute -bottom-10 -right-10 w-32 h-32 rounded-xl"
                style={{ backgroundColor: "var(--primary)", opacity: 0.1 }}
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
                    src="/images/work-1.jpg"
                    alt="About Our Agency"
                    width={600}
                    height={400}
                    className="rounded-xl object-cover h-[400px]"
                  />
                </motion.div>
              </div>
              {/* Floating elements */}
              <motion.div
                className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundColor: "var(--background)", zIndex: 2 }}
              >
                <span className="text-2xl">🏆</span>
              </motion.div>

              <motion.div
                className="absolute top-10 -right-5 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundColor: "var(--background)", zIndex: 2 }}
              >
                <span className="text-2xl">💼</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Text content */}
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                About Us
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block">
                We are a{" "}
                <span style={{ color: "var(--primary)" }}>Creative Team</span>
              </span>
              of
              <span className="relative ml-3">
                Digital Experts
                <motion.span
                  className="absolute -bottom-1 left-0 w-full"
                  style={{
                    height: "6px",
                    backgroundColor: "var(--secondary)",
                    opacity: 0.7,
                  }}
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : { width: 0 }}
                  transition={{ duration: 1, delay: 0.8 }}
                />
              </span>
            </motion.h2>

            <motion.p
              className="text-lg mb-10 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{ color: "var(--foreground)", opacity: 0.8 }}
            >
              Founded with passion and driven by innovation, our agency
              specializes in creating digital solutions that exceed
              expectations. We combine strategic thinking, cutting-edge
              technology, and creative design to help businesses thrive in the
              digital landscape.
            </motion.p>

            {/* Stats cards */}
            <motion.div
              className="grid grid-cols-3 gap-8 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <AnimatedCounter
                value={20}
                title="Projects Completed"
                icon="🚀"
              />
              <AnimatedCounter value={12} title="Happy Clients" icon="😊" />
              <AnimatedCounter value={8} title="Business Partners" icon="🤝" />
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.8 }}
            >
              <motion.a
              href="#team"
                className="px-8 py-3 cursor-pointer rounded-lg font-medium border-2"
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
                Meet The Team
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
