import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../hooks/user';
import { Container } from './styles';

import { CustomButton } from '../../components/CustomButton';

export default function SignUp() {
  const [username, setUserName] = useState('');
  const navigate = useNavigate();
  const { createUser } = useUser();

  function handleSubmit() {
    createUser(username);
    navigate('/main');
  }
  return (
    <Container>
      <div>
        <h1>Welcome to Codeleap network!</h1>
        <label htmlFor="username">Please enter your username</label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Jonh Doe"
          id="username"
          type="text"
        />

        <CustomButton disabled={!username} onClick={handleSubmit} type="button">
          Enter
        </CustomButton>
      </div>
    </Container>
  );
}
