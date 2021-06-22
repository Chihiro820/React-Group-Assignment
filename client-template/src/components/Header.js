import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from 'styled-components'


const Header = () => {
  

  // const menuList = {
  //   hoverEffect: {
  //     boxShadow: "inset 700px 0 0 0 #F3D75D",
  //     backgroundColor: "#F3D75D",
  //     color: "black",
  //   },
  // };

  // const menuHover = {
  //   borderBottom: "solid",
  //   borderBottomWidth: "4px",
  //   borderBottomColor:"black"
  // }
  // const menuInitial = {
  //   borderBottom: "solid",
  //   borderBottomWidth: "4px",
  //   borderBottomColor:"transparent"
  // } 

  return (
    <nav>
      <ul className="admin-bar">
        <Link to="/">
          <li className="admin-bar__listitem">Products</li>
        </Link>
        |
        <Link to="/admin/ManageProducts">
          <li className="admin-bar__listitem">Admin</li>
        </Link>
      </ul>

      <ul className="info-bar">
        <li className="info-bar__listitem">
          <span>
            <i class="fa fa-plane"></i>
          </span>
          Free CO2-compensated shipping on all orders above 50€
        </li>
        <li className="info-bar__listitem">
          <span>
            <i class="fa fa-question-circle"></i>
          </span>{" "}
          Free consultation{" "}
        </li>
        <li className="info-bar__listitem">
          <span>
            <i class="fa fa-comment"></i>
          </span>{" "}
          All inquiries answered within 24 hours
        </li>
      </ul>
      <div className="middle-container">
        <div className="logo-container">
          <img src="https://i.ibb.co/G2DR038/Untitled-Design-22.png"></img>
        </div>

        <div className="search-container1">
          <div className="search-container2">
            <i class="fa fa-user"></i> <i class="fa fa-shopping-cart"></i>{" "}
          </div>
          <div className="search-container3">
            <input
              type="text"
              placeholder="Search products"
              className="search-bar"
            ></input>
            <button className="search-button">
              <i class="fa fa-search"></i>
            </button>
          </div>
        </div>
      </div>

      <div className="top-menu-container">
        <StyledNav>
          <li className="top-menu--list-item">
            Potted Plants  <span><i class="fa fa-chevron-down"></i></span>
          </li>

          <li className="top-menu--list-item">Pottery <span><i class="fa fa-chevron-down"></i></span> </li>
 
          <li className="top-menu--list-item">
            Garden Equipment  <span><i class="fa fa-chevron-down"></i></span>
          </li>

          <li className="top-menu--list-item">
            Trees <span><i class="fa fa-chevron-down"></i></span>
          </li>

          <li className="top-menu--list-item">Cultivation <span><i class="fa fa-chevron-down"></i></span></li>
        </StyledNav>
      </div> 
    </nav>
  );
};

const StyledNav = styled.ul`
  width: 1200px;
  margin: auto;
  display: flex;
  padding: 0 30px;
  border-top: 3.5px solid transparent;
  
  li {
    line-height: 1.4;
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    display: block;
    width: 100%;
    padding: 8px 0;
    transition: 0.4s;
    display: inline;
    line-height: 1;
    border-bottom: 3.5px solid transparent;

    span{
      padding-left:10px;
    }
    
    i{
      font-size:11px;
    }
    &:hover {
      border-bottom: 3.5px solid #4b5f08;
    }
  } 
`;


export default Header;
