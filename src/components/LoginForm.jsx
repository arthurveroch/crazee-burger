import React, { useState } from 'react';

export default function LoginForm() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${name}`);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleChange}
          required
          type='text'
          placeholder='Entrez votre prénom...'
        ></input>
        <button onClick={handleSubmit}>Accédez à votre espace</button>
      </form>
    </>
  );
}
