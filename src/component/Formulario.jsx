import { useForm } from 'react-hook-form';

export const Formulario = ({ resultado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const calculo = (data) => {
    const total = data.costo * (1 + data.propina / 100);
    const totalPorUsuario = total / data.usuarios;
    resultado({
      total: total.toFixed(0),
      cuentaUsuario: totalPorUsuario.toFixed(0),
    });
    console.log(errors);
  };
  return (
    <>
      <form className="formulario" onSubmit={handleSubmit(calculo)}>
        <div className="datos">
          <label htmlFor="usuarios">Usuarios</label>
          <input
            type="number"
            name="usuarios"
            id="usuarios"
            {...register('usuarios', {
              min: { value: 1, message: 'El mínimo de usuarios es 1' },
              max: { value: 12, message: 'El máximo de usuarios es 12' },
              required: {
                value: true,
                message: 'El campo es requerido',
              },
            })}
          />
          {errors.usuarios && (
            <p className="mensajeError">{errors.usuarios.message}</p>
          )}
        </div>
        <div className="datos">
          <label htmlFor="costo">Costo</label>
          <input
            type="number"
            name="costo"
            id="costo"
            {...register('costo', {
              min: { value: 1000, message: 'El mínimo de costo es 1000' },
              max: { value: 1000000, message: 'El máximo de costo es 1000000' },
              required: {
                value: true,
                message: 'El campo es requerido',
              },
            })}
          />
          {errors.costo && (
            <p className="mensajeError">{errors.costo.message}</p>
          )}
        </div>
        <div className="datos">
          <label htmlFor="porcentaje">Propina</label>
          <select name="porcentaje" id="porcentaje" {...register('propina')}>
            <option value="10">10%</option>
            <option value="15">15%</option>
            <option value="20">20%</option>
            <option value="25">25%</option>
            <option value="30">30%</option>
          </select>
        </div>
        <button type="submit">Calcular</button>
      </form>
    </>
  );
};
