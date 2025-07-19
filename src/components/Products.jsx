import React from "react";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Wrapper animasi reusable
const FadeUpWhenVisible = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

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

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Elite Pro X1",
      category: "Premium Series",
      price: "$299",
      image:
        "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.9,
      reviews: 234,
      features: ["Advanced Technology", "Premium Materials", "2-Year Warranty"],
    },
    {
      id: 2,
      name: "Elite Pro X2",
      category: "Professional Series",
      price: "$499",
      image:
        "https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 4.8,
      reviews: 156,
      features: ["Professional Grade", "Ultra Performance", "3-Year Warranty"],
    },
    {
      id: 3,
      name: "Elite Pro X3",
      category: "Executive Series",
      price: "$799",
      image:
        "https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=800",
      rating: 5.0,
      reviews: 89,
      features: ["Executive Design", "Limited Edition", "Lifetime Support"],
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeUpWhenVisible delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Collection
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Carefully crafted products that combine innovation, quality, and
              elegance to exceed your expectations.
            </p>
          </div>
        </FadeUpWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <FadeUpWhenVisible key={product.id} delay={index * 0.2}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-2xl font-bold text-red-600">
                      {product.price}
                    </span>
                  </div>

                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${
                            i < Math.floor(product.rating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </FadeUpWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
