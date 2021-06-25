import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import ProductForm from "../../components/ProductForm";
import { RightButton } from '../../styles/styledComponents/ButtonStyle'

const UpdateProduct = ({ match }) => {
  const [product, setProduct] = useState({});
  const history = useHistory();

  useEffect(() => {
    fetchProduct();
  }, []);

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

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/products/" + match.params.productId
      );
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }

      const data = await response.json();
      console.log(data);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await fetch("http://localhost:5000/products/" + product["_id"], {
        method: "PATCH",
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

  console.log(match.params.productId);
  return (
    <div className="maincontainer">
      <Link to="/admin/ManageProducts">
        <RightButton>&#x2190; back </RightButton>
      </Link>
      <ProductForm
        pageId="update-product"
        product={product}
        submitHandler={submitHandler}
        handleTitle={handleTitle}
        handlePrice={handlePrice}
        handleDescription={handleDescription}
        handleQuantity={handleQuantity}
        handleTags={handleTags}
        handleImg={handleImg}
      />
    </div>
  );
};

export default UpdateProduct;
