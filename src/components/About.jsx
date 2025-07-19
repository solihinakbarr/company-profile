import React from "react";
import { Target, Eye, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const About = () => {
  const stats = [
    { label: "Years Experience", value: "8+" },
    { label: "Happy Customers", value: "50K+" },
    { label: "Products Launched", value: "100+" },
    { label: "Countries Served", value: "25+" },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <FadeWhenVisible direction="right">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About ProElite
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Founded in 2015, ProElite has been at the forefront of
                innovation, creating premium products that redefine industry
                standards. Our commitment to excellence and customer
                satisfaction has made us a trusted name globally.
              </p>

              <div className="space-y-6">
                {[
                  {
                    icon: Target,
                    title: "Our Mission",
                    desc: "To create exceptional products that enhance lives and drive innovation forward.",
                  },
                  {
                    icon: Eye,
                    title: "Our Vision",
                    desc: "To be the world's most trusted brand for premium, innovative products.",
                  },
                  {
                    icon: Heart,
                    title: "Our Values",
                    desc: "Quality, innovation, integrity, and customer-centricity guide everything we do.",
                  },
                ].map((item, i) => (
                  <FadeWhenVisible key={i} delay={0.1 + i * 0.1}>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="text-red-600" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  </FadeWhenVisible>
                ))}
              </div>
            </div>
          </FadeWhenVisible>

          {/* Image */}
          <FadeWhenVisible direction="left" delay={0.2}>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="About Us"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
            </div>
          </FadeWhenVisible>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          {stats.map((item, i) => (
            <FadeWhenVisible key={i} delay={0.1 + i * 0.1}>
              <div className="space-y-2">
                <div className="text-4xl font-bold text-red-600">
                  {item.value}
                </div>
                <div className="text-gray-600">{item.label}</div>
              </div>
            </FadeWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
