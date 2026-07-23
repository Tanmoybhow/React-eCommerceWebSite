import React from "react";
import Wrapper from "../utils/Wrapper";
import {
  FaTruck,
  FaShieldAlt,
  FaHeadset,
  FaTshirt,
} from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
      {/* Hero Section */}
      <section className="bg-blue-600 py-20 text-white">
        <Wrapper>
          <div className="text-center px-3 md:px-0">
            <h1 className="text-4xl md:text-6xl font-bold">
              About VoltMart
            </h1>

            <p className="mt-6 max-w-3xl mx-auto text-lg text-blue-100">
              Discover fashion that combines quality, comfort, and affordability.
              At VoltMart, we help you express your unique style with confidence.
            </p>
          </div>
        </Wrapper>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <Wrapper>
          <div className="grid lg:grid-cols-2 gap-12 items-center px-3 md:px-0">
            <div>
              <img
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
                alt="Fashion Store"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            <div>
              <h2 className="text-4xl font-bold text-blue-600 mb-6">
                Our Story
              </h2>

              <p className="text-gray-600 dark:text-slate-300 leading-8 mb-5">
                VoltMart was founded with one simple goal—to make online fashion
                shopping enjoyable, affordable, and accessible for everyone.
                We believe everyone deserves stylish clothing without paying
                premium prices.
              </p>

              <p className="text-gray-600 dark:text-slate-300 leading-8">
                From everyday essentials to the latest fashion trends, we
                carefully curate every product to ensure quality, comfort, and
                value. Our mission is to give every customer an enjoyable
                shopping experience from browsing to doorstep delivery.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 dark:bg-slate-900 py-20 transition-colors">
        <Wrapper>
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-14">
            Why Choose VoltMart?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-3 md:px-0">
            <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl p-8 shadow hover:-translate-y-2 transition">
              <FaTshirt className="text-5xl text-blue-600 mb-5" />

              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                Premium Quality
              </h3>

              <p className="text-gray-600 dark:text-slate-400">
                Carefully selected clothing made with quality materials for
                everyday comfort.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl p-8 shadow hover:-translate-y-2 transition">
              <FaTruck className="text-5xl text-blue-600 mb-5" />

              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                Fast Delivery
              </h3>

              <p className="text-gray-600 dark:text-slate-400">
                Quick and reliable shipping to get your favorite styles to your
                doorstep.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl p-8 shadow hover:-translate-y-2 transition">
              <FaShieldAlt className="text-5xl text-blue-600 mb-5" />

              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                Secure Shopping
              </h3>

              <p className="text-gray-600 dark:text-slate-400">
                Shop with confidence using secure payments and trusted checkout.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl p-8 shadow hover:-translate-y-2 transition">
              <FaHeadset className="text-5xl text-blue-600 mb-5" />

              <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-slate-100">
                Customer Support
              </h3>

              <p className="text-gray-600 dark:text-slate-400">
                Our friendly support team is always ready to help whenever you
                need us.
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* Mission */}
      <section className="py-20">
        <Wrapper>
          <div className="text-center max-w-4xl mx-auto px-3 md:px-0">
            <h2 className="text-4xl font-bold text-blue-600 mb-8">
              Our Mission
            </h2>

            <p className="text-gray-600 dark:text-slate-300 text-lg leading-9">
              Our mission is to provide fashionable clothing at affordable
              prices while delivering exceptional customer service. We are
              committed to making online shopping simple, secure, and enjoyable
              for everyone. Every collection is designed to help our customers
              look great, feel confident, and express their personal style.
            </p>
          </div>
        </Wrapper>
      </section>

      {/* Stats */}
      <section className="bg-blue-600 py-20 text-white">
        <Wrapper>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center px-3 md:px-0">
            <div>
              <h2 className="text-5xl font-bold">10K+</h2>
              <p className="mt-2">Happy Customers</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">500+</h2>
              <p className="mt-2">Fashion Products</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">50+</h2>
              <p className="mt-2">Top Brands</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold">24/7</h2>
              <p className="mt-2">Customer Support</p>
            </div>
          </div>
        </Wrapper>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <Wrapper>
          <div className="bg-blue-600 rounded-2xl p-12 text-center text-white mx-3 md:mx-0">
            <h2 className="text-4xl font-bold mb-5">
              Join the VoltMart Family
            </h2>

            <p className="max-w-2xl mx-auto text-blue-100 mb-8">
              Explore the latest fashion collections and discover clothing that
              fits your style, personality, and lifestyle.
            </p>

            <button className="bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              Shop Now
            </button>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default About;