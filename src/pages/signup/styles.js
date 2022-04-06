import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 500px;
    background: #fff;

    padding: 28px;

    display: flex;
    flex-direction: column;

    h1 {
      font-size: 22px;
      margin-bottom: 30px;
    }

    label {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      margin-bottom: 13px;
    }

    input {
      width: 444px;
      height: 28px;

      padding: 6px;
      background: #ffffff;
      border: 1px solid #777777;
      box-sizing: border-box;
      border-radius: 4px;

      ::placeholder {
        font-size: 14px;
        color: #ccc;
      }
    }
  }
`;
