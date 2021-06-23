import React, { useState, useEffect } from "react";
import {useLocation,Link } from "react-router-dom";
import {motion} from "framer-motion"
import { ProductButton, BackButton } from '../styles/styledComponents/ButtonStyle'

const Product = ({ match }) => {
  const [product, setProduct] = useState({});
  const location=useLocation();
  console.log(location.state.allData);
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/products/" + match.params.productId
      );

      if (!response.ok) {
        throw new Error(`HTTP Error! status: ${response.status}`);
      }

      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="longDayDiv">
       <Link to="/" >
        <BackButton>&#x2190; back </BackButton>
        </Link>
      </div> 
      
            <div className="maincontainer" id="maincontainer-productpage">
          
          <main className="single-product">
            {/* <Link to="/">&#x2190;back</Link>  */}
            <motion.img
              initial={{x: -400
                      }} 
              animate={{x: 0
                      }} transition={{duration: 1.3, ease: 'easeInOut'}}
              src={product.img}
              alt="product image"
              className="single-product__image"
            />
            <motion.div 
              initial={{x: 400}} animate={{x: 0}} transition={{duration: 1.3, ease: 'easeInOut'}}
              className="single-product-info">
              <h1 className="single-product__title">{product.title}</h1>
              <p className="single-product__price">{product.price}€</p>
              {product.quantity < 1 ? (
                <p className="out-of-stock">
                  <small>Out of stock</small>
                </p>
              ) : product.quantity < 5 ? (
                <p className="low-in-stock">
                  <small>Low in stock</small>
                </p>
              ) : (
                <p className="in-stock">
                  <small>In stock (10+ items)</small>
                </p>
              )}

              <p className="single-product__description">{product.description}</p>

              {product.tags ? (
                <p className="single-product__tags">#{product.tags}</p>
              ) : (
                ""
              )}
            
              <ProductButton>Add to cart</ProductButton>
            </motion.div>

            <aside className="single-product-related-products"> 
              <h3>Related Products</h3> 
              {   
                  location.state.allData.map((products,index)=>
                  (
                    index < 4 ?(
                      <motion.article className="card-related-product"
                        whileHover={{
                          scale: 1.04,
                          transition: { duration:0.2 },
                        }}>
                        <img src={products.img} />
                        <h4>{products.title}</h4>
                        <p>{products.price}€</p>
                    </motion.article>
                    ) : ""
                  
                  ))
              }
            </aside>
          </main>
        </div>
    </div>
  );
};

export default Product;
