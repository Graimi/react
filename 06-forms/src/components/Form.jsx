import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { handleSubmit, register } = useForm({
    defaultValues: {
      superhero: '',
      superpower: '',
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Eiii</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="superhero">Nombre del superhéroe:</label>
        <input {...register('superhero')} type="text" id="superhero" />

        <br />

        <label htmlFor="superpower">Escribe un superpoder:</label>
        <input {...register('superpower')} type="text" id="superpower" />

        <br />

        <button type="submit">Enviar!</button>
      </form>
    </div>
  );
};

export default Form;
