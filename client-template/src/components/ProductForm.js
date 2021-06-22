import React, {useState} from "react";
import Style from "../styles/ProductForm.module.css";

const ProductForm = ({product,submitHandler, handleTags, handleTitle, handleDescription, handleQuantity, handleImg, handlePrice, pageId}) => {

  const btnLabel = pageId === 'create-product' ? 'Create' : 'Update'
  const pageTitle = pageId === 'create-product' ? 'Create product' : 'Update product'
  return (
    <div className={Style.formContainer}>
      <form className={Style.form} onSubmit={submitHandler}>
        <h1>{pageTitle}</h1>
      <label>
          Product name
          <input type="text" value={product.title} onChange={handleTitle} />
        </label>

        <label>
          Price
          <input  step=".01" type="number" min="0" value={product.price} onChange={handlePrice}/>
        </label>

        <label>
          Quantity
          <input type="number" min="0" value={product.quantity} onChange={handleQuantity} />
        </label>

        <label>
          Tags
          <input type="text" value={product.tags} onChange={handleTags}/>
        </label>

        <label>
          Description
          <textarea type="text" rows="5" colspan="10" value={product.description} onChange={handleDescription} />
        </label>

        <label>
        
          Image url
          <input type="text" value={product.img} onChange={handleImg} />
        </label>

        <input type="submit" value={btnLabel} />
 
      </form>
    </div>
  );
};

export default ProductForm;



 