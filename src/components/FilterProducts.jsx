import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/dataThunk/dataThunk";

const FilterProducts = ({
  products,
  inputData,
  setInputData,
  category,
  setCategory,
  brand,
  setBrand,
  price,
  setPrice,
  resetFilter
}) => {
  const categoryProducts = [
    "ALL",
    ...new Set(products.map((item) => item.category)),
  ];
  const brands = ["ALL", ...new Set(products.map((item) => item.brand))];
  console.log(products);

  return (
    <div className="w-[250px] bg-gray-200 dark:bg-slate-800 p-4 rounded md:flex flex-col gap-4 justify-center hidden">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded bg-white dark:bg-slate-600 border border-gray-400 dark:border-gray-950 dark:text-slate-200 p-2 outline-0"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />

      <div>
        <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Category</h1>

        <div>
          {categoryProducts.map((item) => (
            <div className="flex gap-2">
              <input
                type="checkbox"
                id={item}
                value={item.toUpperCase()}
                checked={category == item.toUpperCase()}
                onChange={(e) =>
                  e.target.checked ? setCategory(item.toUpperCase()) : "ALL"
                }
              />
              <label htmlFor={item} className="uppercase dark:text-slate-100">
                {item}
              </label>
            </div>
          ))}
        </div>

        <div className="my-4">
          <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Brands</h1>
          <div>
            <select
              className="outline-2 outline-gray-600 bg-white dark:bg-slate-600 dark:text-slate-200 w-full p-2 rounded"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              {brands.map((item) => (
                <option className="uppercase" value={item.toUpperCase()}>
                  {item.toUpperCase()}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <h1 className="text-xl font-semibold mb-3 dark:text-slate-100">Price Range</h1>
          <p className="dark:text-slate-100">Price range: ₹0 to ₹{price[1]}</p>
          <input type="range" min={price[0]} max={1000} value={price[1]} step={100} className="w-full" onChange={(e)=> setPrice([0,e.target.value])} />
        </div>

        <button className="bg-blue-600 text-white px-4 py-2 rounded mt-5 cursor-pointer" onClick={resetFilter}>
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default FilterProducts;
