import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
// Icons at the top.. icons at hashtag.. make the entire product-div clickable
const ProductComponent = ({ product,products}) => {
  return (
    <motion.article 
      whileHover={{
      scale: 1.02,
      transition: { duration:0.3 },
    }}
      className="product">
      <Link to={{ 
      pathname: `/Product/${product["_id"]}`,
       state: { allData: products.map((product)=>(
         product
       )) } }}>
        <img className="card__img" src={product.img} alt="product image" />
        <div className="card__info">
          <h2 className="card__title">{product.title}</h2>
          <p className="card__price">{product.price}€</p>
          <div className="position-info">
            <p className="card__description">
              {product.description.slice(0, 100)}....{" "}
              <Link to={`/Product/${product["_id"]}`}>Read more »</Link>
              <br />
              <br />
            </p>

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
            {product.tags ? <p className="card__tags">#{product.tags}</p> : ""}
          </div>

          <button className="card__button"  whileHover={{
            boxShadow: "inset 700px 0 0 0 #F3D75D", backgroundColor:"#F3D75D", color:"black"}}>Add to cart</button>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProductComponent;
