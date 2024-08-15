import React from 'react';
import { useParams } from 'react-router-dom';
export default function Order() {
  const { name } = useParams();
  return <div>Bonjour, {name}</div>;
}
