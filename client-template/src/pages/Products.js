import React, { useEffect, useState } from "react";
import {motion} from "framer-motion"
import ProductComponent from "../components/ProductComponent";


const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }
      const data = await response.json();
      console.log(data);
      setProducts(data);
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };
  const productsList = {
    start:{opacity:0},
    stop:{opacity:1}
  }
 
  return (
    <div className="maincontainer">
    <h1>Products</h1>
    <motion.div
    initial="start"
    animate="stop"
    transition={{duration:0.8,
                ease:"easeIn"}}
    variants={productsList}>
      <div className="card card-feed">
        {products.map((product) => (
          <ProductComponent key={product["_id"]} 
            product={product} 
            products={products} 
           />
        ))}
      </div>
    </motion.div >
  </div>
  );
};

export default Products;
