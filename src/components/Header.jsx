import { useEffect, useState } from "react";

import { CiSearch } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../features/productSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { favProducts } = useSelector((state) => state.product);
  const [searchTerm, setSearchTerm] = useState("");
  // const handleInputChange = (value) => {
  //   dispatch(setSearchQuery(value));
  //   navigate("/");
  // };

  return (
    <>
      <header className="w-full fixed top-0 bg-white z-30 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex justify-between items-center py-2 md:px-7 px-3">
            <Link to="/">
              <h1 className="text-3xl">Neura</h1>
            </Link>
            <div className=" md:flex relative ">
              <div className="absolute end-0 inset-y-0 flex items-center ps-3 pointer-events-none">
                <CiSearch className="text-slate-500 font-semibold" size={20} />
              </div>
              {/* <input
                type="text"
                name=""
                value={searchTerm}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={`Search`}
                className="py-2 pr-4  hover:outline-none outline-none  border-b border-slate-600"
              /> */}
              <input
                type="text"
                placeholder="Search by title..."
                onChange={(e) => dispatch(setSearchQuery(e.target.value))}
                className="border px-2 py-1 rounded"
              />
            </div>
            <Link
              to="/favorites"
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              <IoIosHeartEmpty size={20} className="text-slate-700" />{" "}
              <span className="text-lg hidden md:block">Favorites </span>
              <span className="bg-gray-900 text-white px-1  rounded-4xl">
                {favProducts.length}
              </span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
