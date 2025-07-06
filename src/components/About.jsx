import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">About ProElite</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Founded in 2015, ProElite has been at the forefront of innovation, creating premium products that redefine industry standards. Our commitment to excellence and customer satisfaction has made us a trusted name globally.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600">To create exceptional products that enhance lives and drive innovation forward.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Eye className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600">To be the world's most trusted brand for premium, innovative products.</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Heart className="text-red-600" size={24} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Values</h3>
                                    <p className="text-gray-600">Quality, innovation, integrity, and customer-centricity guide everything we do.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="About Us"
                            className="rounded-2xl shadow-2xl w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-red-600/20 to-transparent rounded-2xl"></div>
                    </div>
                </div>

                <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-red-600">8+</div>
                        <div className="text-gray-600">Years Experience</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-red-600">50K+</div>
                        <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-red-600">100+</div>
                        <div className="text-gray-600">Products Launched</div>
                    </div>
                    <div className="space-y-2">
                        <div className="text-4xl font-bold text-red-600">25+</div>
                        <div className="text-gray-600">Countries Served</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;