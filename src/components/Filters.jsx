import { useDispatch } from "react-redux";
import { setCategory, setSortPrice } from "../features/productSlice";

const Filters = () => {
  const dispatch = useDispatch();
  const categoryHandler = (e) => {
    const category = e.target.value;
    if (category) {
      dispatch(setCategory(category));
    }
  };
  const sortHandler = (e) => {
    const price = e.target.value;
    if (price) {
      dispatch(setSortPrice(price));
    }
  };
  return (
    <>
      <div className="flex  mb-7 md:ml-5 gap-4 px-7 md:px-0">
        <div className="">
          <label
            htmlFor="category"
            className="text-sm font-medium text-gray-700  w-32"
          >
            Filter by Category:
          </label>
          <select
            id="category"
            name="category"
            onChange={categoryHandler}
            className=" w-full text-sm md:w-60 px-3 md:ml-2 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
          >
            <option value="">All Categories</option>
            <option value="men's clothing">Men's </option>
            <option value="women's clothing">Women's </option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
          </select>
        </div>
        <div className="">
          <label
            htmlFor="sortPrice"
            className=" text-sm font-medium text-gray-700 mb-1  w-32"
          >
            Sort by Price:
          </label>
          <select
            id="sortPrice"
            name="sortPrice"
            onChange={sortHandler}
            className="md:ml-2 text-sm w-full md:w-60 px-3 py-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 bg-white"
          >
            <option value="">Select</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default Filters;
