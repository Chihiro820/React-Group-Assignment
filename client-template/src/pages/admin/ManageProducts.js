import React, { useEffect, useState } from "react";
import ProductTable from "../../components/ProductTable";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products");
      if (!response.ok) {
        throw new Error("Server error: " + response.status);
      }

      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      await fetch("http://localhost:5000/products/" + productId, {
        method: "DELETE",
      });

      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="maincontainer">
      <h1 className="h1-admin">
        Manage products
        <Link to="/create-product">
          <button className="admin-button-right">Create new product</button>
        </Link>
      </h1>

      <div className="product-table">
        <table>
          <thead>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Tags</th>
            <th>Action</th>
          </thead>
          <tbody>
            {products.map((product) => (
              <ProductTable
                key={product["_id"]}
                deleteProduct={deleteProduct}
                product={product}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
