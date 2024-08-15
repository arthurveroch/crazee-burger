import styled from 'styled-components';

export default function Logo() {
  return (
    <LogoStyled>
      <h1>Crazee</h1>
      <img src='./images/login-page/burger-logo.png' />
      <h1>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  font-family: 'Amatic SC', sans-serif;
  h1 {
    font-size: 110px;
    color: #ffa01b;
  }

  img {
    width: 200px;
    height: 150px;
  }
`;
