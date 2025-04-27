'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];
  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300`}
      style={{
        backgroundColor: scrolled ? 'var(--background)' : 'transparent',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none',
        padding: scrolled ? '1rem 0' : '1.5rem 0'
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link href="/" className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
            <span style={{ color: 'var(--primary)' }}>SSRA</span> IT Solutions
          </Link>
        </motion.div>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link 
                href={link.href}
                className="text-base font-medium transition-all"
                style={{
                  color: pathname === link.href ? 'var(--primary)' : 'var(--foreground)',
                  borderBottom: pathname === link.href ? '2px solid var(--primary)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if(pathname !== link.href) {
                    e.currentTarget.style.color = 'var(--primary)';
                  }
                }}
                onMouseLeave={(e) => {
                  if(pathname !== link.href) {
                    e.currentTarget.style.color = 'var(--foreground)';
                  }
                }}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none"
            aria-label="Toggle menu"
            style={{ color: 'var(--foreground)' }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
          style={{ background: 'var(--background)' }}
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium px-4 py-2 rounded-md transition-colors"
                style={{
                  color: pathname === link.href ? 'var(--primary)' : 'var(--foreground)',
                  backgroundColor: pathname === link.href ? 'var(--gray-light)' : 'transparent',
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => {
                  if(pathname !== link.href) {
                    e.currentTarget.style.backgroundColor = 'var(--gray-light)';
                  }
                }}
                onMouseLeave={(e) => {
                  if(pathname !== link.href) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;