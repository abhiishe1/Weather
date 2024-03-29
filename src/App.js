import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './component/Home';
import Info from './component/Info';
import { formControlClasses } from '@mui/material';
import Shop from './component/Shop';

function App() {
  return (
  
<BrowserRouter>
<Routes>
<Route path="/Info" element={<Info />} /> 
<Route path="/Home" element={<Home />} /> 
<Route path="/Shop" element={<Shop />} /> 
<Route path="/" element={<Shop />} /> 
</Routes>
</BrowserRouter>

   
  )
    
  
}

export default App;
