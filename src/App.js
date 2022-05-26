import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstud from './Components/Addstud';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Addstud/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
