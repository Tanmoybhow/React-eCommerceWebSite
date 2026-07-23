import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice/cartSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const ProductsCard = ({ item, products }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(null);
  const navigate = useNavigate();
  const handleAddToCart = (e, item) => {
    e.stopPropagation();
    const cartItem = {
      ...item,
      selectedSize: size || item.size[0],
      quantity: 1,
      isfromSingleProduct:false
    };
    dispatch(addToCart(cartItem));
  };
  useEffect(() => {
    console.log(size);
  }, [size]);
  return (
    <div
      className="bg-white dark:bg-slate-950 p-3 rounded cursor-pointer hover:scale-110 hover:shadow transition-all"
      onClick={() => navigate(`/product/${item._id}`)}
    >
      <img
        src={item.image}
        alt=""
        className="w-full aspect-square object-fill rounded"
      />
      <h1 className="font-bold text-l line-clamp-1 md:line-clamp-2 mb-2 dark:text-slate-200">{item.title}</h1>
      <div className="flex gap-2 items-center mb-1">
        <span className="font-bold dark:text-slate-200">₹{item.price}</span>
        <span className="text-[14px] text-gray-600 dark:text-gray-400 line-through">
          ₹{item.oldPrice}
        </span>
      </div>

      <div className="flex gap-1.5 my-3">
        <span className="dark:text-slate-200">Size:</span>
        <span className="flex items-center flex-wrap gap-1">
          {item.size.map((s) => (
            <div
              className={`w-6 h-6 rounded flex items-center justify-center cursor-pointer ${s == size ? "bg-blue-600 text-white" : "bg-gray-300"}`}
              onClick={(e) => {
                e.stopPropagation();
                setSize(s);
              }}
            >
              {s}
            </div>
          ))}
        </span>
      </div>
      <button
        className="flex justify-center items-center gap-2 bg-blue-600 text-white w-full s py-2 rounded cursor-pointer"
        onClick={(e) => handleAddToCart(e, item)}
      >
        <BsCart3 className="text-xl" />
        Add to cart
      </button>
    </div>
  );
};

export default ProductsCard;
