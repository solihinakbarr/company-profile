import React from "react";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Wrapper komponen animasi
const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(220,38,38,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Kiri */}
          <div className="space-y-8">
            <FadeInWhenVisible delay={0}>
              <div className="inline-block px-4 py-2 bg-red-600/10 border border-red-600/20 rounded-full">
                <span className="text-red-400 text-sm font-medium">
                  🚀 New Product Launch
                </span>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Elevate Your{" "}
                <span className="text-red-500 block">Experience</span>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-xl text-gray-300 leading-relaxed">
                Discover our premium collection of cutting-edge products
                designed to transform your lifestyle. Innovation meets elegance
                in every detail.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Explore Products</span>
                  <ArrowRight size={20} />
                </button>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                  <Play size={20} />
                  <span>Watch Demo</span>
                </button>
              </div>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50K+</div>
                  <div className="text-gray-400">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">99.9%</div>
                  <div className="text-gray-400">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">24/7</div>
                  <div className="text-gray-400">Support</div>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Kanan */}
          <FadeInWhenVisible delay={0.5}>
            <div className="relative">
              <div className="relative z-10">
                <img
                  loading="lazy"
                  src="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Premium Product"
                  className="rounded-2xl shadow-2xl w-full"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-600/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-600/10 rounded-full blur-3xl"></div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>
    </section>
  );
};

export default Hero;
