import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/productThunks";
import ProductCard from "../components/ProductCard";
import ShimerUI_ProductsPage from "../components/ShimmerUI/ShimerUI_ProductsPage";
import Filters from "../components/Filters";
import { useFilter } from "../utils/useFilter";

const Products = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // custom hook for filter functionality
  const productList = useFilter(products);

  if (loading) return <ShimerUI_ProductsPage />;
  if (error) return <p>{error}</p>;
  return (
    <>
      <div className="max-w-5xl mx-auto pt-16 min-h-screen">
        <div className="flex-col md:flex-row items-center justify-between">
          <h1 className="text-3xl lg:py-5 px-5 pb-4">Products</h1>
          <div>
            <Filters />
          </div>
        </div>
        <div className=" flex flex-wrap gap-5 justify-center mx-5 md:mx-0">
          {productList?.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
