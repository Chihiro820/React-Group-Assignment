import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <StyledFooter>
          <p>&copy; Green Touch Plant Shop</p>
        </StyledFooter>
    )
}

const StyledFooter = styled.footer`
  height: 140px;  
  color: black;
  display: flex;
  align-items: center;
  opacity: 1;
  background-color: #f2dc42;
  
  p {
    font-weight: 400;
    font-size: 16px;
    margin:auto;
    display:block;    
    text-align: center;  
  }   
`;

export default Footer
