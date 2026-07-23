import { Clock, Lock, RefreshCcw, Truck } from "lucide-react";
import React from "react";
import Wrapper from "../utils/Wrapper";

const Shipping = () => {
  const shippingItems = [
    {
      icon: <Truck size={35} className=" text-gray-600 dark:text-slate-100"/>,
      title: "Free Shipping",
      subTitle: "On orders over $100",
    },
    {
      icon: <Lock  size={35} className=" text-gray-600 dark:text-slate-100"/>,
      title: "Secure Payment",
      subTitle: "100% protected payments",
    },
    {
      icon: <RefreshCcw  size={35} className=" text-gray-600 dark:text-slate-100" />,
      title: "Easy Returns",
      subTitle: "30-day return policy",
    },
    {
      icon: <Clock  size={35} className=" text-gray-600 dark:text-slate-100" />,
      title: "24/7 Support",
      subTitle: "Dedicated customer service",
    },
  ];
  console.log(shippingItems);
  return (
    <div className="py-8">
      <Wrapper>
        <div className="grid grid-cols-2 gap-4 md:gap-0 md:grid-cols-4 px-4 md:px-0s">
          {shippingItems.map((item,idx) => (
            <div className="flex items-center justify-center gap-3" key={idx}>
              {item.icon}
              <div>
                <p className="text-gray-900 dark:text-slate-100 font-semibold">{item.title}</p>
                <p className="text-[14px] text-gray-500 dark:text-slate-100">{item.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Shipping;
