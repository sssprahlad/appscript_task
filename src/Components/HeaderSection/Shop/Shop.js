import React, { use, useEffect, useState } from "react";
import "./Shop.css";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import ProductCard from "../../ProductCard/ProductCard";
import Filters from "../../Filters/Filters";
import { useSelector } from "react-redux";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [categoriesFilter, setCategoriesFilter] = useState();
  const [filterData, setFilterData] = useState([]);

  const { cartList } = useSelector((state) => state.user);
  console.log(cartList, "cartlist");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const url = "https://fakestoreapi.com/products";
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        const data = await response.json();
        setProducts(data);
      } else {
        console.log(response);
      }
    } catch (error) {
      console.error(error);
      console.log(error);
    }
  };
  console.log(products);
  console.log(categoriesFilter, "category");
  console.log(filterData, "filterData");

  // useEffect(() => {
  //   if (products) {
  //     setCategoriesFilter(products);
  //   }
  // }, [products]);

  useEffect(() => {
    if (categoriesFilter !== "All" && categoriesFilter?.length > 0) {
      const filterData = products?.filter(
        (eachItem) => eachItem.category === categoriesFilter
      );
      setFilterData(filterData);
    } else {
      setFilterData(products);
    }
  }, [categoriesFilter, products]);

  return (
    <div className="center-container">
      <div className="discover-center-container">
        <div className="discover-our-products-container">
          <h2>DISCOVER OUR PRODUCTS</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus{" "}
            <br />
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        <div className="recommended-container">
          <div className="left-part">
            <h4>{filterData?.length} items</h4>
            <div className="hide-filter-container">
              <MdOutlineKeyboardArrowLeft />
              <p>HIDE FILTER</p>
            </div>
          </div>
          <div className="right-part">
            <p>Recommended</p>
          </div>
        </div>

        <div className="customizble-products-container">
          <div className="customizble-container">
            <h3>Filters</h3>
            <Filters
              setCategoriesFilter={setCategoriesFilter}
              categoriesFilter={categoriesFilter}
            />
          </div>

          <div className="products-container">
            {filterData?.map((eachProduct) => (
              <div key={eachProduct.id}>
                <ProductCard product={eachProduct} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
