import React, { useEffect, useState } from "react";
import Banner from "../components/Banner.jsx";
import Products from "../components/Products.jsx";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const [products, setProducts] = useState([]);
  const data = useLoaderData();
  // console.log(data);
  useEffect(() => {
    setProducts(data);
  }, [data]);
  return (
    <div>
      <Banner />
      <Products products={products} />
    </div>
  );
};

export default Home;
