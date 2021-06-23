import styled from 'styled-components'



/************** PRODUCT PAGES BUTTONS ************* */

export const BackButton = styled.button`
  background-color: transparent;
  color: black;
  text-decoration:none;
  &:hover{
    text-decoration:underline;
    cursor:pointer;
  }
`;

export const ProductButton = styled.button`
  text-decoration: none;
  padding: 7px;
  width: 100%;
  text-align: center;
  margin-top: 10px;
  color: white;
  background-color: #e1122c;
  font-weight: 600;
  line-height: 1.8;
  font-size:22px;
  margin-top: 42px;
  transition:1.1s;
 

  &:hover{
      box-shadow: inset 700px 0 0 0 #F3D75D; 
      background-color:#F3D75D;
      color:black;
      transition:1.1s;
      cursor:pointer;

  }
  `;


export const CardButton = styled(ProductButton)`
  margin-top:0px;
  font-size:18px;
  line-height:1.5;

  &:hover {
    box-shadow: inset 300px 0 0 0 #F3D75D; 
  }


`;

/************* ADMIN PAGES BUTTONS ************** */

export const AdminButton = styled.button`
  color: black;
  background-color: rgb(235, 220, 12);
  padding: 10px;
  text-decoration: none;
  border: none;
  border-radius: 2px;
  font-weight: 500;
  cursor: pointer;
  text-transform: capitalize;
  transition: 0.13s ease-in;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    cursor:pointer;
  }
`;

export const RightButton = styled(AdminButton)`
  float: right;
`;


/** TABLE BUTTONS */
export const UpdateButton = styled.button`
  width: 100%;
  line-height: 2;
  background-color:#575856;
  color:white; 
  margin-bottom:10px;
  font-weight:500;
  border-radius: 3px;
  &:hover{
    font-weight: 700;
    cursor:pointer;
  }
}
`;
 

export const DeleteButton = styled(UpdateButton)`
    background-color:#e1122c;
`;






