import { Filter } from "lucide-react";
import React, { useEffect, useState } from "react";
import FilterProducts from "../components/FilterProducts";
import Wrapper from "../utils/Wrapper";
import ProductList from "../components/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../store/dataThunk/dataThunk";
import Loader from "../components/Loader";
import { IoPricetagsOutline } from "react-icons/io5";
import MobileFilterProducts from "../components/MobileFilterProducts";

const Products = () => {
  const productsList = useSelector((state) => state.dataSlice.data);
  const loader = useSelector((state) => state.dataSlice.loader);
  const [page, setPage] = useState(1);
  const [inputData, setInputData] = useState("");
  const [category, setCategory] = useState("ALL");
  const [brand, setBrand] = useState("ALL");
  const [price, setPrice] = useState([0, 0]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllProducts());
    window.scrollTo(0,0)
  }, []);

  const resetFilter = () => {
    setInputData("");
    setCategory("ALL");
    setBrand("ALL");
    setPrice([0, 0]);
  };
  const filteredProducts = productsList.filter(
    (item) =>
      item.title.toLowerCase().includes(inputData.toLowerCase()) &&
      (category == "ALL" || item.category.toUpperCase() == category) &&
      (brand == "ALL" || item.brand.toUpperCase() == brand) &&
      item.price >= price[1],
  );
  return (
    <div className="bg-gray-100 dark:bg-slate-900">
      {productsList?.length > 0 ? (
        <Wrapper>
          <div className="px-4 md:px-0 py-3 mx:py-0">
            <MobileFilterProducts
              products={productsList}
              inputData={inputData}
              setInputData={setInputData}
              category={category}
              setCategory={setCategory}
              brand={brand}
              setBrand={setBrand}
              price={price}
              setPrice={setPrice}
              resetFilter={resetFilter}
            />

            <div className="py-4 flex gap-4">
              <div>
                <FilterProducts
                  products={productsList}
                  inputData={inputData}
                  setInputData={setInputData}
                  category={category}
                  setCategory={setCategory}
                  brand={brand}
                  setBrand={setBrand}
                  price={price}
                  setPrice={setPrice}
                  resetFilter={resetFilter}
                />
              </div>
              <div>
                <ProductList
                  products={filteredProducts}
                  page={page}
                  setPage={setPage}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
