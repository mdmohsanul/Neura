import { Link } from "react-router-dom";
import Rating from "./Rating";

const ProductCard = ({ product, removeBtn = null }) => {
  const { id, title, image, price, rating } = product;
  return (
    <div className="w-full md:max-w-80 max-w-96 h-96  bg-white border border-gray-200 rounded-lg shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div className="relative">
        <Link
          to={`/products/${id}`}
          className="flex items-center justify-center"
        >
          <img
            className="px-8 py-5 rounded-t-lg h-56 "
            src={image}
            alt="product image"
          />
        </Link>
        <div className="px-5 pb-4 relative">
          <Link to={`/products/${id}`}>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900  truncate">
              {title}
            </h5>
          </Link>
          <div className="flex items-center py-2">
            <Rating value={rating.rate} count={product?.rating?.count} />
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm  ms-3">
              {rating.rate}
            </span>
          </div>

          <p className="text-2xl font-medium text-gray-800 ">₹{price}</p>

          {removeBtn && (
            <button
              onClick={removeBtn}
              className="w-full rounded-full cursor-pointer text-lg bg-red-100 text-red-600 px-2 py-1 mt-2 hover:bg-red-200"
            >
              Remove
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
