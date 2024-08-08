import LoginForm from '../components/LoginForm';
import '../assets/styles/login.css';

export default function LoginPage() {
  return (
    <>
      <div className='container'>
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
      </div>
    </>
  );
}
