import styled from "styled-components";
import { shade } from "polished";

export const Container = styled.div`
  display: flex;
  width: 100vh;
  justify-content: center;
    
`

export const ContainerCard = styled.button`
  display: flex;
  width: 84%;
  padding: 10px 0;
  background: #f4f4f4;
  transition: background-color 0.3s;
  border-radius: 10px;
  color: #004788;
  &:hover{
      background: ${shade(0.2, '#004788')};
      color: #f4f4f4;
    }
 
    @media(max-width: 400px){
    display: flex;
    flex-direction: row;
    width: 99%;
    justify-content: center;
    margin-left: 1%;
    top: 20%;
  }
  
  
`;

export const CardImg = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

export const ContainerIfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  text-align: start;
  
`;
export const TitleText = styled.h2``;
export const SubTitleText = styled.h3``;
export const EnderecoText = styled.p``;

