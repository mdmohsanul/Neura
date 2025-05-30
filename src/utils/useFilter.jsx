import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const useFilter = (products = []) => {
  const { filters } = useSelector((state) => state.product);
  const {category,priceSort,searchQuery} =filters
  const [productList, setProductList] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(handler);
  }, [searchQuery]);
console.log(searchQuery)
  useEffect(() => {
    if (!products.length) {
      setProductList([]);
      return;
    }
    let filteredList = [...products];
    if (debouncedSearch) {
      filteredList = filteredList.filter((p) =>
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase())
      );
    }
    if (category) {
      filteredList = filteredList.filter((p) => p.category === category);
    }

    if (priceSort === "lowToHigh") {
      filteredList = filteredList.sort((a, b) => a.price - b.price);
    } else if (priceSort === "highToLow") {
      filteredList = filteredList.sort((a, b) => b.price - a.price);
    }

    setProductList(filteredList);
  }, [category, products, priceSort]);

  return productList;
};
