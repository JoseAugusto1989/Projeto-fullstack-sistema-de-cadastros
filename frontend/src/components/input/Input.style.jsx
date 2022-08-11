import styled from "styled-components";

export const FloatContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 350px;
  position: relative;
  padding: 10px;
`;

export const InputFloat = styled.input`
  width: 300px;
  height: 56px;
  padding: 14px 16px 0 10px;
  outline: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: #fff;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 22px;
  margin-left: 10px;
`;

export const LabelFloat = styled.label`
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  padding: 0 12px;
  color: #999;
  pointer-events: none;
  margin-left: 8px;
  position: absolute;
  transform: translate(0, 26px) scale(1);
  transform-origin: top left;
  transition: all 0.2s ease-out;

  &:focus-within {
    transform: translate(0, 12px) scale(0.75);
  }

  #float-label .Active {
    transform: translate(0, 12px) scale(0.75);
  }
`;
