import LoginForm from '../components/LoginForm';
import styled from 'styled-components';

export default function LoginPage() {
  return (
    <>
      <LoginPageStyled>
        <div className='background-overlay'>
          <div className='logo'>
            <h1 className='logo-text'>Crazee</h1>
            <img src='../src/assets/images/logo.png' />
            <h1 className='logo-text'>Burger</h1>
          </div>
          <div className='form'>
            <h1>Bienvenue chez nous ! </h1>
            <span className='line'></span>
            <h2>Connectez-vous</h2>
            <LoginForm />
          </div>
        </div>
      </LoginPageStyled>
    </>
  );
}

const LoginPageStyled = styled.div`
  width: 100%;
  height: 100svh;
  background-image: url('../src/assets/images/background-login.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;

  .background-overlay {
    width: 100%;
    height: 100svh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
  }

  .logo {
    display: flex;
    gap: 20px;
  }

  .logo img {
    width: 200px;
  }

  .logo-text {
    font-family: 'Amatic SC', sans-serif;
    font-weight: 700;
    font-size: 110px;
    color: #ff9f1b;
  }

  .form {
    width: 464px;
    height: 438px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .form h1,
  h2 {
    color: #fff;
    font-family: 'Amatic SC', sans-serif;
  }

  .form h2 {
    font-size: 36px;
  }

  .form h1 {
    font-size: 48px;
  }

  .line {
    width: 400px;
    height: 3px;
    background-color: #f56a2c;
    margin-top: 32px;
    margin-bottom: 40px;
  }
`;
