import React from "react";
import { Shield, Zap, Award, Users, Headphones, Globe } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animasi reusable
const FadeUpWhenVisible = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Premium Quality",
      description:
        "Every product undergoes rigorous testing to ensure exceptional quality and durability.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description:
        "Stay ahead with our innovative solutions powered by the latest technological advancements.",
    },
    {
      icon: Award,
      title: "Award-Winning Design",
      description:
        "Our products have received multiple design awards for their elegance and functionality.",
    },
    {
      icon: Users,
      title: "Customer-Centric",
      description:
        "We prioritize your needs and continuously improve based on valuable customer feedback.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "We serve customers worldwide with reliable shipping and local support in major markets.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <FadeUpWhenVisible delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Choose ProElite?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're committed to delivering excellence in every aspect of our
              products and services.
            </p>
          </div>
        </FadeUpWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FadeUpWhenVisible key={index} delay={index * 0.15}>
              <div className="bg-gray-800 p-8 rounded-2xl border border-red-600/20 hover:border-red-600/40 transition-all duration-300 transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-red-600/20 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="text-red-500" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeUpWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
