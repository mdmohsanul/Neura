import { useEffect } from "react";
import ShimmerProductCard from "./ShimmerProductCard";


const ShimerUI_ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const shimmerCardDummyArr = [5, 12, 8, 19, 27, 33, 14, 6, 21, 9, 42, 17];
  return (
    <>
      <div className=" min-h-screen flex justify-around gap-3 mt-24">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 mt-5">
          {shimmerCardDummyArr.map((item, i) => (
            <ShimmerProductCard key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ShimerUI_ProductsPage;
