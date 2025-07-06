import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ isMenuOpen, toggleMenu }) => {
    return (
        <header className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-red-600/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-lg">P</span>
                        </div>
                        <span className="text-white font-bold text-xl">ProElite</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-white hover:text-red-500 transition-colors">Home</a>
                        <a href="#products" className="text-white hover:text-red-500 transition-colors">Products</a>
                        <a href="#features" className="text-white hover:text-red-500 transition-colors">Features</a>
                        <a href="#about" className="text-white hover:text-red-500 transition-colors">About</a>
                        <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                            Get Started
                        </button>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 pb-4 border-t border-red-600/20">
                        <nav className="flex flex-col space-y-4 mt-4">
                            <a href="#home" className="text-white hover:text-red-500 transition-colors">Home</a>
                            <a href="#products" className="text-white hover:text-red-500 transition-colors">Products</a>
                            <a href="#features" className="text-white hover:text-red-500 transition-colors">Features</a>
                            <a href="#about" className="text-white hover:text-red-500 transition-colors">About</a>
                            <a href="#contact" className="text-white hover:text-red-500 transition-colors">Contact</a>
                            <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors w-fit">
                                Get Started
                            </button>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
