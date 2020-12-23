import styled from '@emotion/styled';
import { primeraMayuscula } from '../helper';

const DivResumen = styled.div`
  background-color: #00838f;
  color: white;
  text-align: center;
  margin-top: 1rem;
  padding: 1rem;
`;

const Resumen = ({datos}) => {
    
    const { year, plan, marca } = datos;
    if( year === '' ||  plan === '' ||  marca === '' ) return null;

  return (
    <DivResumen>
      <h2>Resumen cotización</h2>
      <ul>
        <li>Marca: {primeraMayuscula(marca)} </li>
        <li>Plan: {primeraMayuscula(plan)} </li>
        <li>Año: {year} </li>
      </ul>
    </DivResumen>
  );
};

export default Resumen;
