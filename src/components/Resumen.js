import styled from "@emotion/styled";
import { primeraMayuscula } from '../helper';

const DivResumen = styled.div`
  background-color: #00838F;
  padding: 1rem;
  color: white;
  text-align: center;
  margin-top: 1rem;
  display: block;
`;

const Listado = styled.li`
  /* text-transform: uppercase; */
  text-align: center;
`;

const Resumen = ({ datos }) => {
  // Otra forma de cargar condicionalmente un pedazo de componente
  const { marca, plan, year } = datos;

  if (marca === "" || plan === "" || year === "") return null;

  return (
    <DivResumen>
      <h2>Resumen de cotización</h2>
      <ul>
        <Listado>Marca: {primeraMayuscula(marca)}</Listado>
        <Listado>Plan: {primeraMayuscula(plan)}</Listado>
        <Listado>Año: {year}</Listado>
      </ul>
    </DivResumen>
  );
};

export default Resumen;
