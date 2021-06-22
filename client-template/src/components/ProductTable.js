import React from 'react'
import {Link} from 'react-router-dom'

const ProductTable = ({product, deleteProduct}) => {
  const handleDeleteProduct = () => {
    deleteProduct(product['_id']);
  }
    return (   
      <tr className="table-row">
        <td>{product.title}</td>
        <td>{product.description.slice(0, 150)}...</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.tags}</td>
        <td>
          <Link to={`/admin/UpdateProduct/${product['_id']}`}>
            <button>Edit</button>
          </Link>
          <button onClick={handleDeleteProduct}>Delete</button>
        </td>
      </tr>
 
    )
}

export default ProductTable
