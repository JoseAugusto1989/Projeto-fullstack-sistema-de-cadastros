import styled from "styled-components";

export const Button = styled.button`
  background-color: #444944;
  border-radius: 4px;
  color: white;
  padding: 18px 80px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition-duration: 0.4s;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-family: "Arial";
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #444944;
  }
`;

export const ButtonCheckList = styled.button`
  background-color: white;
  border-radius: 4px;
  color: #444944;
  padding: 18px 60px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  transition-duration: 0.4s;
  align-items: center;
  text-transform: uppercase;
  font-family: "Arial";
  cursor: pointer;

  &:hover {
    background-color: #444944;
    color: white;
  }
`
