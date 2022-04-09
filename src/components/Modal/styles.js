import styled from 'styled-components';

export const Container = styled.div`
  background: rgba(119, 119, 119, 0.8);
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 999;

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 723px;
    height: 349px;
    padding: 30px;
    background: #ffffff;
    border: 1px solid #999999;

    h1 {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
      margin-bottom: 34px;
    }

    label {
      margin-bottom: 7px;
    }

    input {
      height: 28px;
      border: 1px solid #777777;
      margin-bottom: 19px;
    }
    input,
    textarea {
      padding: 6px;
      border-radius: 4px;
      border: 1px solid #777;

      ::placeholder {
        font-size: 14px;
        color: #ccc;
      }
    }
    textarea {
      height: 74px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      gap: 10px;
    }
  }
`;
