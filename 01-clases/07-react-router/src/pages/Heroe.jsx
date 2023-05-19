import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteHeroe, getHeroe } from '../api/data';
import HeroeDetail from '../components/HeroeDetail';

const Heroe = () => {
  // Esta era la forma usada para params
  // const params = useParams();
  // const heroe = getHeroe(params.id);
  // Y esta otra que yo entiendo mejor
  const {id} = useParams();
  const heroe = getHeroe(id);

  const navigate = useNavigate();

  return (
    <>
      <h2>Heroe Page</h2>
      <HeroeDetail heroe={heroe} />
      <button
        // Un forma de volver a la pag de antes
        // onClick={() => {
        //   deleteHeroe(heroe.id).then(() => {
        //     navigate('/heroes');
        //   });
        // }}
        // Y otra más simple
        onClick={() => navigate(-1)}
      >
        Delete {heroe.name}
      </button>
    </>
  );
};

export default Heroe;