import React from "react";
import Wrapper from "../utils/Wrapper";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-slate-950 pt-15">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 px-4 md:px-0 md:gap-0 md:grid-cols-4 mb-8">
          <div className="text-gray-200 text-[14px]">
            <h1 className="text-2xl font-bold text-blue-600">VoltMart</h1>
            <p className="text-white py-5">Fashion That Speaks for You</p>
            <div>
              <p>Sister Nivedita Road, Bolpur, PIN-731204</p>
              <p>Email:support@VoltMart.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>

          <div className="text-gray-200 text-[14px] space-y-2">
            <h1 className="text-xl font-semibold">Customer Service</h1>
            <p>Contact Us</p>
            <p>FAQs</p>
            <p>Order Tracking</p>
            <p>Size Guide</p>
          </div>

          <div>
            <h1 className="text-xl text-gray-200 font-semibold">Follow Us</h1>
            <div className="flex items-center gap-2 mt-4">
                <FaFacebook size={20} className="text-white"/>
                <FaInstagram size={20} className="text-white"/>
                <AiFillTwitterCircle size={20} className="text-white"/>
                <FaPinterest size={20} className="text-white"/>
            </div>
          </div>

          <div>
            <h1 className="text-xl text-gray-200 font-semibold">Stay in the Loop</h1>
            <p className="text-gray-200 text-[14px] my-4">Subscribe to get special offers, free giveaways, and more</p>
            <div className="flex">
                <input type="text" placeholder="Your email address" className="bg-gray-100 text-gray-500 py-3 px-2 rounded-l"/>
                <button className="px-4 py-3 bg-blue-600 text-white rounded-r">Subscribe</button>
            </div>
          </div>
        </div>
      </Wrapper>

      <hr className="text-gray-400 "/>

      <div className="flex items-center justify-center py-4">
          <p className="text-gray-50">Made with ❤️ by Tanmoy Bhowmik</p>
      </div>


    </div>
  );
};

export default Footer;
