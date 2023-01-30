import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
  const { handleSubmit, register, formState, watch } = useForm({
    defaultValues: {
      superhero: '',
      superpower: '',
      country: '',
      terms: false,
    },
  });

  const country = watch('country');

  console.log(country);

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Eiii</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="superhero">Nombre del superhéroe:</label>
        <input
          {...register('superhero', {
            required: {
              value: true,
              message:
                'Necesitas un nombre de superhéroe para poder continuar ⛔',
            },
            minLength: {
              value: 2,
              message:
                'El tamaño del nombre tiene que tener mínimo 2 caracteres',
            },
          })}
          type="text"
          id="superhero"
        />
        {formState.errors.superhero ? (
          <p>{formState.errors.superhero.message} </p>
        ) : null}

        <br />

        <label htmlFor="superpower">Escribe un superpoder:</label>
        <input {...register('superpower')} type="text" id="superpower" />

        <br />

        <label htmlFor="country">¿De qué país eres?</label>
        <select {...register('country')} name="country" id="country">
          <option value="">-</option>
          <option value="spain">Spain</option>
          <option value="other">Other</option>
        </select>

        <br />

        {country === 'spain' ? (
          <>
            <input
              {...register('terms', {
                required: {
                  value: true,
                  message: 'Para continuar tiene que aceptar las condiciones',
                },
              })}
              type="checkbox"
              id="terms"
            />
            <label htmlFor="term">Acepto los términos y condiciones</label>

            <br />

            {formState.errors.terms ? formState.errors.terms.message : null}
          </>
        ) : null}

        <br />

        <button type="submit" disabled={!formState.isDirty}>
          Enviar!
        </button>
      </form>
    </div>
  );
};

export default Form;
