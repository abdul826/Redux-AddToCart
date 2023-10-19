import logo from './logo.svg';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Header';
import CartDetails from './components/CartDetails';
import { DarkModeContext } from './context/DarkModeContext';
import {Routes,Route} from "react-router-dom"

import './style/style.css';
import './style/dark.css';
import { useContext } from 'react';

function App() {
  const {darkMode} = useContext(DarkModeContext);
  return (
    <>
    <div className={darkMode? 'dark' : 'light'}>
    <Headers />
     <Routes>
      <Route  path='/' element={<Home />}/>
      <Route  path='/cart' element={<CartDetails />}/>
       {/*<Route  path='/success' element={<Success />}/>
      <Route  path='/cancle' element={<Cancle />}/> */}
     </Routes>
     {/* <Toaster /> */}
     {/* <Footer /> */}
     </div>
    </>
  );
}

export default App;
