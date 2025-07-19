import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animasi reusable
const FadeWhenVisible = ({ children, delay = 0, direction = "up" }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    visible: { opacity: 1, y: 0, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <FadeWhenVisible direction="up">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand + Social */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="text-white font-bold text-xl">ProElite</span>
              </div>
              <p className="text-gray-400">
                Elevating experiences through innovative premium products and
                exceptional service.
              </p>
              <div className="flex space-x-4">
                <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
              </div>
            </div>

            {/* Links */}
            {[
              {
                title: "Products",
                items: [
                  "Elite Pro X1",
                  "Elite Pro X2",
                  "Elite Pro X3",
                  "Accessories",
                ],
              },
              {
                title: "Support",
                items: [
                  "Help Center",
                  "Documentation",
                  "Warranty",
                  "Contact Support",
                ],
              },
              {
                title: "Company",
                items: ["About Us", "Careers", "Press", "Blog"],
              },
            ].map((section, i) => (
              <FadeWhenVisible key={i} delay={0.1 * (i + 1)} direction="up">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">{section.title}</h3>
                  <ul className="space-y-2">
                    {section.items.map((item, j) => (
                      <li key={j}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeWhenVisible>
            ))}
          </div>
        </FadeWhenVisible>

        {/* Bottom Bar */}
        <FadeWhenVisible delay={0.4} direction="up">
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 ProElite. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-500 text-sm transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </FadeWhenVisible>
      </div>
    </footer>
  );
};

export default Footer;
