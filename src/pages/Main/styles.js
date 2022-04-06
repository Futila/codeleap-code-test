import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  margin: 0 auto 50px;
  background: #fff;

  header {
    background: #000000;
    color: #fff;
    padding: 27px 37px 27px;
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    display: flex;
    justify-content: space-between;

    button {
      background: none;
      border: 0;
      color: #fff;
      font-size: 16px;
      font-weight: bold;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 723px;
  height: 349px;
  padding: 30px;
  margin: 44px auto;
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
`;

export const PostList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 723px;
  margin: 44px auto;
  background: #ffffff;

  list-style: none;
`;
export const PostItem = styled.li`
  border: 1px solid #999999;
  margin-bottom: 30px;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  div {
    display: flex;
    align-items: center;
    gap: 33px;
  }
  button {
    background: none;
    border: 0;
    svg {
      fill: #fff;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
    padding: 23px 30px 0;
    display: flex;
    justify-content: space-between;

    strong {
      font-size: 18px;
      color: #777777;
    }

    span {
      font-size: 18px;
      color: #777777;
    }
  }

  p {
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #000000;
    width: 662px;

    text-align: justify;
    margin-bottom: 10px;
  }
`;
