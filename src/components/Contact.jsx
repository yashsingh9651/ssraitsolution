"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

// Validation schema using Yup
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name is too short")
    .max(50, "Name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(10, "Message is too short")
    .max(1000, "Message is too long")
    .required("Message is required"),
});

const InputField = ({ label, name, type = "text", placeholder, errors, touched, handleChange, handleBlur, values }) => (
  <div className="mb-4">
    <label 
      htmlFor={name} 
      className="block mb-2 text-sm font-medium"
      style={{ color: "var(--foreground)" }}
    >
      {label} <span style={{ color: "var(--primary)" }}>*</span>
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-lg text-base outline-none transition-all duration-200 border ${
        errors[name] && touched[name] ? "border-red-500" : "border-transparent"
      }`}
      style={{ 
        backgroundColor: "var(--gray-light)",
        color: "var(--foreground)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)"
      }}
      required
    />
    {errors[name] && touched[name] && (
      <div className="mt-1 text-sm font-medium text-red-500">{errors[name]}</div>
    )}
  </div>
);

const TextareaField = ({ label, name, placeholder, rows = 5, errors, touched, handleChange, handleBlur, values }) => (
  <div className="mb-6">
    <label 
      htmlFor={name} 
      className="block mb-2 text-sm font-medium"
      style={{ color: "var(--foreground)" }}
    >
      {label} <span style={{ color: "var(--primary)" }}>*</span>
    </label>
    <textarea
      name={name}
      id={name}
      rows={rows}
      value={values[name]}
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder={placeholder}
      className={`w-full px-4 py-3 rounded-lg text-base outline-none transition-all duration-200 border ${
        errors[name] && touched[name] ? "border-red-500" : "border-transparent"
      } resize-none`}
      style={{ 
        backgroundColor: "var(--gray-light)",
        color: "var(--foreground)",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)" 
      }}
      required
    />
    {errors[name] && touched[name] && (
      <div className="mt-1 text-sm font-medium text-red-500">{errors[name]}</div>
    )}
  </div>
);

const ContactInfoItem = ({ icon, title, content, delay = 0 }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={itemRef}
      className="flex items-start mb-8"
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay }}
    >
      <div 
        className="flex items-center justify-center mr-5 mt-1 w-12 h-12 rounded-full flex-shrink-0"
        style={{ backgroundColor: "var(--gray-light)" }}
      >
        {icon}
      </div>
      <div>
        <h4 
          className="text-lg font-semibold mb-1"
          style={{ color: "var(--foreground)" }}
        >
          {title}
        </h4>
        <p 
          className="opacity-80"
          style={{ color: "var(--foreground)" }}
        >
          {content}
        </p>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef();
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Form field animation sequence
  const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section 
      id="contact" 
      className="relative py-20 min-h-screen overflow-x-hidden"
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
      <motion.div
        className="absolute -right-20 bottom-1/4 w-60 h-60 rounded-full opacity-10 z-0"
        style={{ backgroundColor: "var(--primary)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
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
              Get In Touch
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <span className="block">Let's Start a </span>
            <span style={{ color: "var(--primary)" }}>Conversation</span>
            <span className="relative ml-3">
              Today
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
            className="text-lg opacity-80 max-w-2xl mx-auto"
            style={{ color: "var(--foreground)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            Have a project in mind or want to know more about our services? 
            We're here to help turn your digital vision into reality.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info Column */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 
              className="text-2xl font-bold mb-8"
              style={{ color: "var(--foreground)" }}
            >
              Contact Information
            </h3>

            <div className="mb-12">
              <ContactInfoItem
                icon={<Phone size={24} style={{ color: "var(--primary)" }} />}
                title="Phone"
                content="+91 7428961025"
                delay={0.3}
              />
              
              <ContactInfoItem
                icon={<Mail size={24} style={{ color: "var(--primary)" }} />}
                title="Email"
                content="santmax2010@gmail.com"
                delay={0.4}
              />
              
              <ContactInfoItem
                icon={<MapPin size={24} style={{ color: "var(--primary)" }} />}
                title="Office"
                content="Greater Noida, India"
                delay={0.5}
              />
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div 
            className="lg:col-span-3 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
              style={{ backgroundColor: "var(--background)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 
                className="text-2xl font-bold mb-6"
                style={{ color: "var(--foreground)" }}
              >
                Send us a message
              </h3>

              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  message: '',
                }}
                validationSchema={ContactSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    await emailjs.sendForm(
                      "hBpNLyRgMukbaXoXI",
                      "template_7m9vkrk", 
                      formRef.current, 
                      process.env.NEXT_PUBLIC_EMAIL_KEY 
                    );
                    
                    resetForm();
                    toast.success(
                      "Thanks for contacting. We'll get back to you as soon as possible", 
                      {
                        duration: 5000,
                        position: "top-center",
                      }
                    );
                  } catch (error) {
                    console.error("Error sending email:", error);
                    toast.error("There was a problem sending your message. Please try again.", {
                      duration: 5000,
                      position: "top-center",
                    });
                  } finally {
                    setSubmitting(false);
                  }
                }}
              >
                {({ isSubmitting, errors, touched, handleChange, handleBlur, values }) => (
                  <Form ref={formRef}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <motion.div
                        custom={0}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={formFieldVariants}
                      >
                        <InputField
                          label="Full Name"
                          name="name"
                          placeholder="Your name"
                          errors={errors}
                          touched={touched}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          values={values}
                        />
                      </motion.div>
                      
                      <motion.div
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={formFieldVariants}
                      >
                        <InputField
                          label="Email Address"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          errors={errors}
                          touched={touched}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          values={values}
                        />
                      </motion.div>
                    </div>
                    <motion.div
                      custom={3}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={formFieldVariants}
                    >
                      <TextareaField
                        label="Your Message"
                        name="message"
                        placeholder="Tell us about your project, goals, or questions..."
                        rows={5}
                        errors={errors}
                        touched={touched}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                        values={values}
                      />
                    </motion.div>

                    <motion.div
                      custom={4}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      variants={formFieldVariants}
                      className="mt-6"
                    >
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-8 py-3 rounded-lg font-medium w-full md:w-auto flex items-center justify-center gap-2"
                        style={{
                          backgroundColor: "var(--primary)",
                          color: "var(--background)",
                        }}
                        whileHover={{
                          scale: 1.03,
                          boxShadow: "0 10px 25px rgba(99, 102, 241, 0.5)",
                        }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {isSubmitting ? (
                          <span className="inline-flex items-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending Message...
                          </span>
                        ) : (
                          <>
                            Send Message <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </motion.button>
                    </motion.div>
                  </Form>
                )}
              </Formik>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;