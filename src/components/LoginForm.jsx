import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/login.css';

export default function LoginForm() {
  const [name, setName] = useState('');

  const navigation = useNavigate();

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigation(`/order/${name}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <img src='../src/assets/images/icon-name.png' />
          <input
            required
            value={name}
            onChange={handleChange}
            type='text'
            placeholder='Entrez votre prénom'
          ></input>
        </div>
        <button>
          Accédez à votre espace <img src='../src/assets/images/chevron.png' />
        </button>
      </form>
    </>
  );
}
