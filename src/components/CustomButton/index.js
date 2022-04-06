import styled, { css } from 'styled-components';

export const CustomButton = styled.button`
  width: 111px;
  height: 33px;
  text-transform: uppercase;
  margin-top: 20px;
  background: #000000;
  border: 0;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  align-self: flex-end;

  ${(props) =>
    props.inverted &&
    css`
      background: #ffffff;
      border: 1px solid #000000;
      color: #000000;
    `}

  &[disabled] {
    cursor: not-allowed;
    background: #cccccc;
  }
`;
