import styled from 'styled-components';

export default function Logo({ textSize, imgSize, src, onClick }) {
  return (
    <LogoStyled onClick={onClick}>
      <h1 style={textSize}>Crazee</h1>
      <img style={imgSize} src={src} />
      <h1 style={textSize}>Burger</h1>
    </LogoStyled>
  );
}

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  font-family: 'Amatic SC', sans-serif;
  cursor: pointer;
  h1 {
    color: #ffa01b;
    letter-spacing: 1.5px;
  }
`;
