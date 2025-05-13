/* eslint-disable react/no-unescaped-entities */
// app/contact/page.tsx
import React from "react";
import { Mail, MapPin, Phone, Clock, Instagram, Facebook, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6 text-pink-500" />,
      title: "Email Us",
      details: "hello@makeupstore.com",
      action: "mailto:hello@makeupstore.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-pink-500" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: <MapPin className="h-6 w-6 text-pink-500" />,
      title: "Visit Us",
      details: "123 Beauty Ave, Makeup City, MC 12345",
      action: "https://maps.google.com",
    },
    {
      icon: <Clock className="h-6 w-6 text-pink-500" />,
      title: "Store Hours",
      details: "Mon-Sat: 10AM - 8PM\nSun: 11AM - 6PM",
      action: "",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      url: "https://instagram.com/makeupstore",
    },
    {
      icon: <Facebook className="h-5 w-5" />,
      name: "Facebook",
      url: "https://facebook.com/makeupstore",
    },
    {
      icon: <Twitter className="h-5 w-5" />,
      name: "Twitter",
      url: "https://twitter.com/makeupstore",
    },
  ];

  return (
    <div className="bg-pink-50 dark:bg-pink-900/10">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-pink-600 dark:text-pink-300 mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have a question about products or just want to say hi.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-6">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <Input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full"
                />
              </div>
              <Button type="submit" className="bg-pink-500 hover:bg-pink-600 text-white">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-pink-600 dark:text-pink-300 mb-6">
              Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              Have questions about our products or need beauty advice? Our team is here to help you find your perfect look.
            </p>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1">{method.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {method.title}
                    </h3>
                    {method.action ? (
                      <a
                        href={method.action}
                        className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400"
                      >
                        {method.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400 whitespace-pre-line">
                        {method.details}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-100 dark:bg-gray-700 p-3 rounded-full text-pink-600 dark:text-pink-300 hover:bg-pink-200 dark:hover:bg-gray-600 transition-colors"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="pb-16 container mx-auto px-6">
        <div className="rounded-xl overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573291234!2d-73.9878449245377!3d40.7484409713898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1712345678901!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="dark:grayscale-[50%]"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;