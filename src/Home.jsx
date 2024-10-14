import { useState } from 'react';
import { Formulario } from './component/Formulario';

export const Home = () => {
  const [datos, setDatos] = useState();
  console.log(datos);
  console.log(`Total: ${datos?.total}`);
  console.log(`Cuenta por usuario: ${datos?.cuentaUsuario}`);
  return (
    <>
      <h3>Calculo de propina</h3>
      <Formulario resultado={setDatos} />
      <div className="resultado">
        <div className="resultadoDatos">
          <h4>Total</h4>
          <p>${datos?.total}</p>
        </div>
        <div className="resultadoDatos">
          <h4>Por usuario</h4>
          <p>${datos?.cuentaUsuario}</p>
        </div>
      </div>
    </>
  );
};
