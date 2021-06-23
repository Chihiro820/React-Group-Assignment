import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { UpdateButton, DeleteButton } from '../styles/styledComponents/ButtonStyle'

const ProductTable = ({product, deleteProduct}) => {
  const handleDeleteProduct = () => {
    deleteProduct(product['_id']);
  }
    return (   
      <StyledTableRow className="table-row">
        <td>{product.title}</td>
        <td>{product.description.slice(0, 150)}...</td>
        <td>{product.price}</td>
        <td>{product.quantity}</td>
        <td>{product.tags}</td>
        <td>
          <Link to={`/admin/UpdateProduct/${product['_id']}`}>
            <UpdateButton>Edit</UpdateButton>
          </Link>
          <DeleteButton onClick={handleDeleteProduct}>Delete</DeleteButton>
        </td>
      </StyledTableRow>
 
    )
}

const StyledTableRow = styled.tr`
  border-bottom: 3px solid #000000c4;
  padding: 00px 30px;
  
  &:hover{
    background-color:#dbdbdb;
  }
  
  td {
    padding: 10px;
    text-align:center;
  }

 

`;

export default ProductTable

