import styled from 'styled-components'
import { shade } from 'polished';



export const ModalBg = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  

`

export const ModalBodyLogin = styled.div`
  background:#f4f4f4; 
  height: 50%;
  width: 40%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  img{
    height: 80px;
    margin-top: 15px;
  }

  .TitleLogin{
    color: #004788;
    margin-top: 3%;
  }
  form{
    height: 30%;
    display: flex;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    margin-bottom: 15%;
  }
  button{
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
  
  @media(max-width: 600px){
    display: flex;
    height: 60%;
    width: 400px;
    .NavLogo{
    display: flex;
    height: 60px;
    bottom: 400px;
    }

    h1{
    color: #004788;
    font-size: 18px;
    }
    .lb-cadastro{
    display: flex;
    position: fixed;
    top: 20%;
    left: 51.5%;
    height: 60px;
    width: 40%;
    background-color: #f4f4f4;
    color: #004788;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;

    :focus{
      background: #004788;
      color: #f4f4f4;
    }
    &:hover{
      color: #f4f4f4;
    }
  }
  }
`
export const GoToCadastro = styled.div`
  margin-bottom: 15px;
  cursor: pointer;
  color: #004788;
  &:hover{
    color: ${shade(0.2, '#004788')};
  }
  
`
//estilos dos cadastro

export const ModalBodyCadastro = styled.div`
  background:#f4f4f4; 
  height: 50%;
  width: 40%;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  img{
    position: fixed;
    height: 80px;
    bottom: 64%;
  }

  .TitleCadastro{
    position: fixed;
    bottom: 60%;
    color: #004788;
    
  }
  form{
    display: flex;
    position: relative;
    justify-content: center;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    top: 10%;
    
  }
  .BtnCadastro{
    height: 30px;
    width: 100px;
    margin-top: 10px;
    border-radius: 7%;
    background: #004788;
    transition: background-color 0.3s;
    color: #f4f4f4;
    font-weight: 500;
    &:hover{
      background: ${shade(0.2, '#004788')};
    }
  }
  
`
export const GoBack = styled.div`
  position: fixed;
  left: 610px;
  bottom: 680px;
  cursor: pointer;
  color: #004788;
  &:hover{
    color: ${shade(0.2, '#004788')};
  }

`