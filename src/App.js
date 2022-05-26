import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstud from './Components/Addstud';
import Searchstud from './Components/Searchstud';
import View from './Components/View';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Addstud/>}/>
        <Route path='/search' exact element={<Searchstud/>}/>
        <Route path='/view' exact element={<View/>}/>
      </Routes>
      </BrowserRouter>

    </div>
    
  );
}

export default App;
