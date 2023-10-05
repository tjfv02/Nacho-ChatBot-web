import Chat from './pages/Chat';
import { CssBaseline } from '@mui/material'; // Importa CssBaseline y Container de Material-UI

const App = () => {
  return (
    <>
      <CssBaseline /> {/* Agrega CssBaseline para restablecer los estilos predeterminados */}
      <div style={{ backgroundColor: '#f0f0f0c8', minHeight: '100vh' }}>
        {/* Establece el color de fondo y altura mínima */}
          <Chat />
      </div>
    </>
  );
}

export default App;
