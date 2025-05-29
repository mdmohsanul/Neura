import { useState } from "react";

import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { favProducts } = useSelector((state) => state.product);

  const [searchTerm, setSearchTerm] = useState("");
  const [nav, setNav] = useState(false);
  const handleInputChange = (value) => {
    setSearchTerm(value);
  };

  //   useEffect(() => {
  //     dispatch(setSearchFilter(searchTerm));
  //   }, [searchTerm]);
  return (
    <>
      <header className="w-full fixed top-0 bg-white z-30 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="max-w-[1200px] mx-auto ">
          <div className="flex justify-between items-center py-2 px-7">
            <Link to="/">
              <h1 className="text-3xl">Neura</h1>
            </Link>
            <div className="hidden md:flex relative ">
              <div className="absolute end-0 inset-y-0 flex items-center ps-3 pointer-events-none">
                <CiSearch className="text-slate-500 font-semibold" size={20} />
              </div>
              <input
                type="text"
                name=""
                value={searchTerm}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={`Search`}
                className="py-2 pr-4  hover:outline-none outline-none  border-b border-slate-600"
              />
            </div>
            <Link
              to="/favorites"
              className="flex items-center justify-center gap-2 cursor-pointer"
            >
              <IoIosHeartEmpty size={20} className="text-slate-700" />{" "}
              <span className="text-lg ">Favorites </span>
              <span className="bg-gray-900 text-white px-1  rounded-4xl">
                {favProducts.length}
              </span>
            </Link>
            {/* Mobile Menu */}

            {/* one more way to do */}
            {/* nav &&  */}
            <div className="md:hidden cursor-pointer text-black   mr-5">
              <div onClick={() => setNav(!nav)}>
                {nav ? (
                  <FaTimes size={30} className="text-slate-700" />
                ) : (
                  <FaBars size={30} className="text-slate-700" />
                )}

                <ul
                  className={`
        md:hidden bg-white z-10 fixed w-full md:w-fit sm:w-fit text-xl top-16 overflow-y-auto bottom-0 py-16  pl-4
        duration-500 ${nav ? "left-0" : "left-[-100%]"}
        `}
                >
                  <div className="flex flex-col justify-between items-center gap-9 pt-2">
                    <div className=" relative inline-block ">
                      <div className="absolute end-0 inset-y-0 flex items-center ps-3 pointer-events-none">
                        <CiSearch
                          className="text-slate-500 font-semibold"
                          size={20}
                        />
                      </div>
                      <label htmlFor="searchBar">
                        <input
                          type="text"
                          name="searchBar"
                          value={searchTerm}
                          onChange={handleInputChange}
                          placeholder={`Search`}
                          className="py-2 pr-4  hover:outline-none outline-none  border-b border-slate-600"
                        />
                      </label>
                    </div>
                    <Link to="/login">
                      {" "}
                      <span className="flex items-center gap-4">
                        <BsPerson size={30} className="text-slate-700" />
                        Sign Up
                      </span>
                    </Link>{" "}
                    <Link to="/wishlist">
                      {" "}
                      <span className="flex items-center gap-4">
                        <IoIosHeartEmpty size={30} className="text-slate-700" />
                        WishList
                      </span>
                    </Link>
                    <Link to="/cart">
                      {" "}
                      <span className="flex items-center gap-4">
                        <PiShoppingCartSimpleLight
                          size={30}
                          className="text-slate-700"
                        />
                        Cart
                      </span>
                    </Link>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
