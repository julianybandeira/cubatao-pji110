import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './routes';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
