import styled from 'styled-components';
import Input from '../../assets/reusable-ui/Input';
import Button from '../../assets/reusable-ui/Button';
import { IoPersonCircleOutline } from 'react-icons/io5';
import { GoChevronRight } from 'react-icons/go';

export default function LoginForm() {
  return (
    <LoginFormStyled>
      <h2>Bienvenue chez nous !</h2>
      <span></span>
      <form>
        <h3>Connectez-vous</h3>
        <Input
          type={'text'}
          placeholder={'Entrez votre prénom'}
          icon={<IoPersonCircleOutline />}
        />
        <Button content={'Accéder à mon espace'} icon={<GoChevronRight />} />
      </form>
    </LoginFormStyled>
  );
}

const LoginFormStyled = styled.div`
  width: 464px;
  height: 438px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 72px;

  h2 {
    font-size: 48px;
    color: #fff;
    font-family: 'Amatic SC', sans-serif;
    margin-bottom: 32px;
  }

  span {
    width: 400px;
    height: 3px;
    background: #f56a2c;
    margin-bottom: 40px;
  }

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 18px;
  }

  h3 {
    font-family: 'Amatic SC', sans-serif;
    color: #fff;
    font-size: 36px;
    text-align: center;
  }
`;
