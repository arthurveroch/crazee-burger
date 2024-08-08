import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function Order() {
  const { name } = useParams();
  return (
    <>
      <h1>Bonjour {name}</h1>
      <Link to='/'>
        <button>Déconnexion</button>
      </Link>
    </>
  );
}
