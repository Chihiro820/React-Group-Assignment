import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { RightButton } from '../../styles/styledComponents/ButtonStyle'

const CreateProduct = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();

  const handleTitle = (e) => {
    setProduct({ ...product, title: e.target.value });
  };
  const handlePrice = (e) => {
    setProduct({ ...product, price: e.target.value });
  };
  const handleDescription = (e) => {
    setProduct({ ...product, description: e.target.value });
  };
  const handleQuantity = (e) => {
    setProduct({ ...product, quantity: e.target.value });
  };
  const handleTags = (e) => {
    setProduct({ ...product, tags: e.target.value });
  };
  const handleImg = (e) => {
    setProduct({ ...product, img: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(product);

    try {
      await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      history.push("/admin/ManageProducts");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="maincontainer">
      <Link to="/admin/ManageProducts">
        <RightButton>&#x2190; back</RightButton>
      </Link>
      <ProductForm
        pageId="create-product"
        product={product}
        handleTitle={handleTitle}
        handlePrice={handlePrice}
        handleDescription={handleDescription}
        handleQuantity={handleQuantity}
        handleTags={handleTags}
        submitHandler={submitHandler}
        handleImg={handleImg}
      />
    </div>
  );
};

export default CreateProduct;
