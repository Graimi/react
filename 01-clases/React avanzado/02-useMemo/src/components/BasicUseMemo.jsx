import React, { useMemo, useState } from 'react';

const numbersList = [1, 2, 1, 4, 0, 6];

const mapScores = (scores, caller) => {
  console.log('Llamamos a esta función', caller);

  //   El calculo es de ej, no,le busques el sentido
  return scores.map((num, index) => {
    const calc = (num * 3) / 2;
    const color = calc < 3 ? '🔴' : '🟢';

    return (
      <p key={index}>
        {calc} {color}
      </p>
    );
  });
};

const BasicUseMemo = () => {
  const [rerender, setRerender] = useState(false);

  const marksContent = mapScores(numbersList, 'no-useMemo');

  // Tiene dos parámetros, en el primero añadimos nuestra función o lógica y en el segundo si queremos
  // que esté escuchando el cambio de algún dato para lanzar la función (tipo useEffect)
  const marksContentMemo = useMemo(
    () => mapScores(numbersList, 'usando useMemo'),
    []
  );

  return (
    <div>
      <div>
        <h3>No useMemo</h3>
        {marksContent}
      </div>
      <div>
        <h3>Usando useMemo</h3>
        {marksContentMemo}
      </div>
      <button onClick={() => setRerender(!rerender)}>Rerender</button>
    </div>
  );
};

export default BasicUseMemo;
