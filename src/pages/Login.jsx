import styled from 'styled-components';
import Logo from '../components/login-page/Logo';
import LoginForm from '../components/login-page/LoginForm';

export default function () {
  return (
    <LoginStyled>
      <div className='background-overlay'>
        <Logo />
        <LoginForm />
      </div>
    </LoginStyled>
  );
}

const LoginStyled = styled.div`
  width: 100%;
  min-height: 100svh;
  background-image: url('./images/login-page/background.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  .background-overlay {
    width: 100%;
    min-height: 100svh;
    background: rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
