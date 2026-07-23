import React from "react";
import Wrapper from "../utils/Wrapper";
import { FaClock, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-blue-700 py-20 text-white">
        <Wrapper>
          <div className="text-center px-3 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold">
              Contact Us
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              We'd love to hear from you. Whether you have a question about an
              order, need product assistance, or simply want to share feedback,
              our team is here to help.
            </p>
          </div>
        </Wrapper>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <Wrapper>
          <div className="grid lg:grid-cols-2 gap-12 px-3 md:px-0">

            {/* Contact Form */}
            <div className="bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-blue-600 mb-8">
                Send Us a Message
              </h2>

              <form className="space-y-6" action="https://formspree.io/f/mwvgrkdk" method="POST">

                <div>
                  <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    name="fullName"
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg p-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg p-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"
                    name="subject"
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg p-3 outline-none focus:border-blue-600"
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-800 dark:text-slate-200">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."
                    name="message"
                    className="w-full border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 rounded-lg p-3 outline-none resize-none focus:border-blue-600"
                  />
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-8 py-3 rounded-lg cursor-pointer">
                  Send Message
                </button>

              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-blue-600 mb-8">
                Get In Touch
              </h2>

              <p className="text-gray-600 dark:text-slate-300 leading-8 mb-10">
                Our support team is always ready to assist you. Feel free to
                contact us through any of the following channels, and we'll get
                back to you as soon as possible.
              </p>

              <div className="space-y-6">

                <div className="flex gap-5 items-start bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow rounded-xl p-6">
                  <MapPin className="h-8 w-8 text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">
                      Office Address
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 mt-2">
                      123 Fashion Street,
                      <br />
                      Kolkata, West Bengal,
                      <br />
                      India - 700001
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow rounded-xl p-6">
                  <FaPhoneAlt className="text-3xl text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">
                      Phone Number
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 mt-2">
                      +91 98765 43210
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow rounded-xl p-6">
                  <FaEnvelope className="text-3xl text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">
                      Email Address
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 mt-2">
                      support@voltmart.com
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 shadow rounded-xl p-6">
                  <FaClock className="text-3xl text-blue-600" />

                  <div>
                    <h3 className="font-semibold text-xl text-slate-900 dark:text-slate-100">
                      Working Hours
                    </h3>

                    <p className="text-gray-600 dark:text-slate-400 mt-2">
                      Monday - Saturday
                      <br />
                      9:00 AM - 8:00 PM
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </Wrapper>
      </section>

      {/* CTA */}
      <section className="bg-blue-700 py-20 text-white">
        <Wrapper>
          <div className="text-center max-w-3xl mx-auto px-3 md:px-0">
            <h2 className="text-4xl font-bold mb-5">
              We’re Here to Help
            </h2>

            <p className="text-blue-100 text-lg mb-8">
              Your satisfaction is our priority. Reach out to us anytime, and
              we'll make sure you receive the support you deserve.
            </p>

            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition cursor-pointer">
              Explore Our Collection
            </button>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Contact;