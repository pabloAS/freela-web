import styled from 'styled-components'
import { shade } from 'polished';


export const Container = styled.div`
  display: flex;
  height: 100vh;
  
  flex-direction:column;
  background: #eee;
`
export const NavContainer = styled.div`
  display: flex;
  padding: 20px 0;
  
  max-width: 100%;
  background: #f4f4f4;
  justify-content: center;

  .NavBar{
    display: flex;
    justify-content: space-between;
    .NavLogoContainer{
      display: flex;
      position: absolute;
      left: 5%;
      
      .NavLogo{
        height: 30px;
        padding: 0 7px;
      }
      .TittleApp{
        color: #004788;
        font-size:33px ;
      }
    }
    .BtnEntrar{
    position: absolute;
    right: 5%;
    height: 30px;
    width: 100px;
    border-radius: 7%;
    background: #004788;
    transition: background-color 0.3s;
    color: #f4f4f4;
    font-weight: 500;
      &:hover{
        background: ${shade(0.2, '#004788')};
      }
    }  

  }
`


/* export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  .NavLogoContainer{
    justify-content: center;
    align-items: center;
    flex-direction: row;
  }
  .BtnEntrar{
    height: 30px;
    width: 100px;
    border-radius: 7%;
    background: #004788;
    transition: background-color 0.3s;
    color: #f4f4f4;
    font-weight: 500;
      &:hover{
        background: ${shade(0.2, '#004788')};
      }
    }  
` */


export const Title = styled.h1`
  position: relative;
  bottom: 30px;
  font-size: 20px;
  color: #004788;
  font-weight: 400;
  margin-top:70px;
`;
export const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 43%;
align-items: center;
margin-left: 30%;
top: 20%;


/* @media(max-width: 600px) {
  display: flex;
  flex-direction: column;
  padding: 0;
  width: 83%;
  justify-content: center;
  margin-left: 1%;
  top: 20%;
} */
`;

