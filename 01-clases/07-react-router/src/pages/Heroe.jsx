import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteHeroe, getHeroe } from '../api/data';
import HeroeDetail from '../components/HeroeDetail';

const Heroe = () => {
  const params = useParams();
  const navigate = useNavigate();
  const heroe = getHeroe(params.id);

  return (
    <>
      <h2>Heroe Page</h2>
      <HeroeDetail heroe={heroe} />
      <button
        onClick={() => {
          deleteHeroe(heroe.id).then(() => {
            navigate('/heroes');
          });
        }}
      >
        Delete {heroe.name}
      </button>
    </>
  );
};

export default Heroe;