"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const ServiceCard = ({ title, description, icon, index }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      className="bg-white dark:bg-gray-800 rounded-xl p-6 md:p-8 shadow-lg flex flex-col h-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      style={{ backgroundColor: "var(--background)" }}
    >
      <motion.div
        className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl"
        style={{
          backgroundColor: "var(--gray-light)",
        }}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.2 + 0.1 * index,
        }}
      >
        <span className="text-3xl">{icon}</span>
      </motion.div>
      <motion.h3
        className="text-xl md:text-2xl font-bold mb-3"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 + 0.1 * index }}
      >
        {title}
      </motion.h3>
      <motion.p
        className="opacity-80 flex-grow"
        style={{ color: "var(--foreground)" }}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.4 + 0.1 * index }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const services = [
    {
      title: "App Development",
      description:
        "Build powerful, scalable mobile applications for iOS and Android platforms with cutting-edge technologies and intuitive user experiences.",
      icon: "📱",
    },
    {
      title: "Web Development",
      description:
        "Create responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.",
      icon: "🌐",
    },
    {
      title: "Cyber Security",
      description:
        "Protect your digital assets with comprehensive security solutions including penetration testing, vulnerability assessments, and secure coding practices.",
      icon: "🔒",
    },
    {
      title: "UI/UX Design",
      description:
        "Transform user experiences with intuitive interface designs that balance aesthetic appeal with functional efficiency and conversion optimization.",
      icon: "🎨",
    },
    {
      title: "SEO & Digital Marketing",
      description:
        "Boost your online visibility and drive targeted traffic with data-driven SEO strategies and comprehensive digital marketing campaigns.",
      icon: "📈",
    },
    {
      title: "DevOps, Cloud Services & SecOps",
      description:
        "Optimize deployment workflows, leverage scalable cloud infrastructure, and implement robust security operations to enhance application reliability, performance and safety.",
      icon: "☁️",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-10 md:py-20 overflow-x-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <motion.div
        className="absolute left-0 top-1/3 w-20 h-20 rounded-full opacity-10 z-0"
        style={{ backgroundColor: "var(--primary)" }}
        initial={{ x: -100 }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />
      <motion.div
        className="absolute right-0 bottom-1/4 w-24 h-24 rounded-xl opacity-10 z-0"
        style={{ backgroundColor: "var(--secondary)" }}
        initial={{ x: 100 }}
        animate={isInView ? { x: 0 } : {}}
        transition={{ duration: 0.8 }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mb-6"
          >
            <span
              className="px-4 py-1 rounded-full text-sm font-semibold"
              style={{
                backgroundColor: "var(--gray-light)",
                color: "var(--primary)",
              }}
            >
              Our Services
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block">
              What <span style={{ color: "var(--primary)" }}>We Offer</span>
              <span className="relative ml-3">
                For You
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
            </span>
          </motion.h2>

          <motion.p
            className="text-lg opacity-80 max-w-2xl mx-auto"
            style={{ color: "var(--foreground)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Comprehensive digital solutions that empower your business to thrive
            in the modern marketplace. From concept to execution, we deliver
            excellence at every stage.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
