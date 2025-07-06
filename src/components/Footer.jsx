import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">P</span>
                            </div>
                            <span className="text-white font-bold text-xl">ProElite</span>
                        </div>
                        <p className="text-gray-400">
                            Elevating experiences through innovative premium products and exceptional service.
                        </p>
                        <div className="flex space-x-4">
                            <Facebook className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                            <Twitter className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                            <Instagram className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                            <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                            <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Products</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Elite Pro X1</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Elite Pro X2</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Elite Pro X3</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Accessories</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Support</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Help Center</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Warranty</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Contact Support</a></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Company</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Careers</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Press</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-red-500 transition-colors">Blog</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2024 ProElite. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-red-500 text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;