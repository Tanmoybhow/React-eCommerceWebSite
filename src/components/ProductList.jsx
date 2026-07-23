import React from "react";
import ProductsCard from "./ProductsCard";
import Pagination from "./Pagination";

const ProductList = ({ products, page, setPage }) => {
  const productsLength = Math.floor(products.length / 8) + 1;
  return (
    <div className="flex flex-col">
      <div className="min-h-[550px]">
        <div
          className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 
flex-grow: 1"
        >
          {products.slice(page * 8 - 8, 8 * page).map((item) => (
            <ProductsCard item={item} />
          ))}
        </div>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        productsLength={productsLength}
        products={products}
      />
    </div>
  );
};

export default ProductList;
