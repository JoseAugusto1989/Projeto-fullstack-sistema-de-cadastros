import styled from "styled-components";

export const FloatContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;

  position: relative;
  transform-origin: top left;
  transition: all 0.2s ease-out;
`;

export const InputFloat = styled.input`
  width: 26%;
  height: 56px;
  margin-left: 20px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
`;

export const LabelFloat = styled.label`
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 35px;
  color: #999;
  pointer-events: none;

  position: absolute;
  transform: translate(0, 26px) scale(1.25);
`;
