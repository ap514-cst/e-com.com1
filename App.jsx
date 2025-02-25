

import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Navbar/Navbar'
import Futter from './Componat/Futter/Futter'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Populer from './Componat/Populer/Populer'
function App() {
  

 return(
  <div>
   

    <Navbar/>
    <Outlet></Outlet>
    <Futter/>
  </div>
 )
}

export default App
