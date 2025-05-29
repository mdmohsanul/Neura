import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProducts } from "../features/productThunks";
import Rating from "../components/Rating";
import { setfavProducts } from "../features/productSlice";
import { ToastContainer, toast } from "react-toastify";
const Products_Details = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { products, favProducts } = useSelector((state) => state.product);

  const product = products.find(
    (product) => product.id === parseInt(productId)
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const favHandler = (product) => {
    if (!product) return;

    const isAlreadyFavorite = favProducts?.some((p) => p.id === product.id);

    if (isAlreadyFavorite) {
      toast.info("Product is already in your Favorites");
      return;
    }

    dispatch(setfavProducts(product));
    toast.success("Product added to Favorites!");
  };
  return (
    <div className="max-w-5xl mx-auto pt-24 min-h-screen ">
      <div className="mx-10">
        <ToastContainer />
        <h1 className="text-2xl md:text-3xl font-semibold pb-6 text-gray-800">
          {product?.title}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="flex items-center justify-center bg-gray-50 p-6 rounded shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]">
            <img
              src={product?.image}
              alt={product?.title}
              loading="lazy"
              className="max-h-96 object-contain"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col gap-6 md:pt-10">
            <p className="text-gray-700 leading-relaxed ">
              {product?.description}
            </p>
            <Rating
              value={product?.rating.rate}
              count={product?.rating.count}
            />
            <p className="text-2xl text-gray-800 font-medium">
              ₹{product?.price}
            </p>
            <button
              className="rounded-md px-3 py-2 cursor-pointer bg-gray-200 mt-7 hover:bg-gray-300"
              onClick={() => favHandler(product)}
            >
              Add To Favorites
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_Details;
