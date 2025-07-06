import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Ready to elevate your experience? Contact us today and let's discuss how we can help you.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <Mail className="text-red-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Email</h3>
                                <p className="text-gray-300">contact@proelite.com</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <Phone className="text-red-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Phone</h3>
                                <p className="text-gray-300">+1 (555) 123-4567</p>
                            </div>
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-red-600/20 rounded-lg flex items-center justify-center">
                                <MapPin className="text-red-500" size={24} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Address</h3>
                                <p className="text-gray-300">123 Innovation Drive, Tech City, TC 12345</p>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400"
                                placeholder="Enter your full name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent text-white placeholder-gray-400 resize-none"
                                placeholder="Tell us about your project or inquiry"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center space-x-2"
                        >
                            <Send size={20} />
                            <span>Send Message</span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
