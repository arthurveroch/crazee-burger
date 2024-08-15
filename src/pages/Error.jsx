import React from 'react';
import Button from '../assets/reusable-ui/Button';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      Page introuvable
      <Link to='/'>
        <Button content={'Déconnexion'} />
      </Link>
    </div>
  );
}
