import styled from 'styled-components';
import Logo from '../../assets/reusable-ui/Logo';
import { reload } from '../../utils/Reload';
import NavbarRightSide from './NavbarRightSide';

export default function Navbar({ name }) {
  return (
    <NavbarStyled>
      <Logo
        textSize={{ fontSize: '36px' }}
        imgSize={{ width: '80px', height: '60px' }}
        src={'/images/login-page/burger-logo.png'}
        onClick={reload}
      />
      <NavbarRightSide name={name} />
    </NavbarStyled>
  );
}

const NavbarStyled = styled.div`
  width: 100%;
  height: 98px;
  background: #ffffff;
  padding: 0 70px 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px 15px 0px 0px;
`;
