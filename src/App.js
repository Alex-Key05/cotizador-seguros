import { useState } from 'react';
import Header from './components/Header';
import styled from '@emotion/styled';
import { Formulario } from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContenedorForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      plan: '',
      year: '',
    }
  });

  const { cotizacion, datos } = resumen;

  const [cargando, setCargando] = useState(false);

  return (
    <Contenedor>
      <Header titulo="Cotizador de autos" />
    
      <ContenedorForm>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        />
        <Resumen
          datos={datos}
        />

      { cargando ? <Spinner /> : null }
        
      { !cargando 
        ? 
        <Resultado
          cotizacion={cotizacion}
        />
        :
        null 
      }

      </ContenedorForm>

        
    </Contenedor>

    
  );
}

export default App;
