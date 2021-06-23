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
  background-color: #ffd005;
  color: white;
  display: flex;
  align-items: center;
  opacity: 1;
  animation-name: footerFade;
  animation-iteration-count: 1;
  animation-timing-function: linear;
  animation-duration: 2s;
}

@keyframes footerFade {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

  p {
    font-weight: 600;
    font-size: 18px;
    margin:auto;
    display:block;    
    text-align: center;
  
  }
   
`;

export default Footer
