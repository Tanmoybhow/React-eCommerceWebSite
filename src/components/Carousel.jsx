import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Wrapper from "../utils/Wrapper";
import { useNavigate } from "react-router";
const Carousel = ({ products }) => {
  const categoryProducts = [...new Set(products?.map((item) => item.category))];
  const navigate = useNavigate();
  return (
    <div>
      <Swiper
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        {products.slice(0, 6).map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-linear-to-r  from-indigo-50 via-white to-purple-100 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
              <Wrapper>
                <div className="flex flex-col md:flex-row justify-center items-start px-5 md:items-center gap-10 md:gap-36 min-h-[400px] py-8">
                  <div className="w-full flex items-center justify-center h-[270px] md:w-[350px] md:h-[350px] shadow-2xl shadow-blue-500 rounded-full">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[270px] h-[270px] md:w-[470px] md:h-[470px] object-cover rounded-full"
                    />
                  </div>
                  <div className="flex flex-col items-start  gap-4">
                    <h1 className="text-[1rem] text-blue-600">
                      Your Style, Your Story.
                    </h1>
                    <h1 className="text-pink-500 font-semibold uppercase">
                      {item.category}
                    </h1>
                    <h1 className="text-5xl font-bold mt-3 text-slate-900 dark:text-slate-100">{item.brand}</h1>
                    <p className="w-[200px] md:w-[400px]  text-left text-gray-600 dark:text-slate-300 mt-5 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-4 mt-6">
                      <span className="text-3xl font-bold dark:text-white">₹{item.price}</span>

                      <span className="line-through text-gray-500 dark:text-slate-400">
                        ₹{item.oldPrice}
                      </span>

                      <span className="px-2 py-1 text-black bg-amber-500 rounded">
                        {Math.floor(
                          ((item.oldPrice - item.price) / item.oldPrice) * 100,
                        )}
                        % Off
                      </span>
                    </div>

                    <button
                      className="mt-8 bg-linear-to-r from-blue-600 to-blue-800 text-white text-[15px] px-4 py-3 rounded-lg hover:bg-linear-to-l transition-all cursor-pointer"
                      onClick={() => navigate(`/product/${item._id}`)}
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              </Wrapper>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className=" bg-gray-800 dark:bg-slate-950">
        <Wrapper>
          <div className="flex h-[80px] items-center justify-around">
            {categoryProducts.map((item,idx) => (
              <button
                key={idx}
                className="uppercase bg-linear-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg hover:bg-linear-to-l transition-all cursor-pointer"
                onClick={() => navigate(`/categoryProduct/${item}`)}
              >
                {item}
              </button>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default Carousel;
