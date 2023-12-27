import React from 'react';
import styled from 'styled-components';

interface LoginProps {
    handleLogin: () => void;
};

const Login: React.FC<LoginProps> = ({handleLogin}) => {
    return (
        <>
            <LoginBtn onClick={handleLogin}>Login</LoginBtn>
        </>
    );
};

export default Login;

const LoginBtn = styled.button`
  background-color: rgba(0,0,0,0.6);
  color: rgb(249, 249, 249);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  margin-left: 10px;
  
  &:hover {
    background-color: #f9f9f9;
    color:#000;
    border-color: transparent;
    
  }
`