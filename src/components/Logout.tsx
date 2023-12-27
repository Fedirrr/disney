import React from 'react';
import styled from 'styled-components';

interface LogOutProps {
    data: string;
}

const LogOut: React.FC<LogOutProps> = ({data}) => {
    function logoutClick() {
        localStorage.clear();
        window.location.reload()
    }

    return (
        <LogOutContainer>
            <img src={data} alt=""/>
            <LogOutContent>
                <LogOutButton onClick={logoutClick}>Log Out</LogOutButton>
            </LogOutContent>
        </LogOutContainer>
    );
};

export default LogOut;

const LogOutContent = styled.div`
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const LogOutContainer = styled.div`
  position: relative;
  display: inline-block;

  img {
    border: none;
    cursor: pointer;
    border-radius: 50%;
    width: 50px;
    margin: 10px;
  }

  &:hover {
    ${LogOutContent} {
      display: block;
    }
  }
`;


const LogOutButton = styled.button`
  padding: 10px;
  text-decoration: none;
  display: block;
  text-align: left;
  text-transform: uppercase;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
`;