import styled, { css } from 'styled-components'
import Tooltip from '../Tooltip';

interface ConatinerProps {
  isFocused: boolean
  isFilled: boolean
  isErrors: boolean
}

export const Container = styled.div<ConatinerProps>`
  display: flex;
  align-items: center;
  height: 30px;
  width: 400px;
  border-radius: 10px;
  border: 0.3px solid #004788;
  
  background: #fff;
  /* @media(max-width: 600px){
    height: 28px;
    width: 200px;
    
  }
  @media(max-width: 400px){
    height: 28px;
    width: 150px;
    
  } */
  &+div{
    margin-top: 8px;
  }

  ${props => props.isErrors && css`
    border-color: #D10000;
  `}
  ${props => props.isFocused && css`
    color: #004788;
    border-color: #004788;
  `}
  ${props => props.isFilled && css`
    color: #004788;
  `}
  input{
  background: #fff;
  font-size: 16px;
  padding: 0 5px;
  width: 80%;
  
 
  ::-webkit-input-placeholder  { 
    color: #e9e9e9;; 
  }
  &:focus{
    box-shadow: 0000;
    border: 0 none;
    outline: 0;
  }
 }
 svg{
  
  margin-left: 10px;
 }
`;


export const ErrorTooltip = styled(Tooltip)`
height: 20px;
  svg{
    
 }
 span{
  background: #D10000;
    padding: 8px;
    width: 160px;
    border-radius: 4px;
    font-size: 14px;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.4s;
    visibility: hidden;

    position: absolute;
    bottom: calc(100% + 12px);
    left: 50%;
    transform: translateX(-50%);
    color: #eee;
    text-align: center;
  ::before{
    content: '';
      border-style: solid;
      border-color: #D10000 transparent;
      border-width: 6px 6px 0 6px;
      top: 100%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);

  }
 }
 &:hover span{
    opacity: 1;
    visibility: visible;

  }
`;