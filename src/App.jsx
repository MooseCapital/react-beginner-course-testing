import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./Header.jsx";
import {Footer} from "./Footer.jsx";
import OrderList from "./OrderList.jsx";


function App() {


  return (
        <div>
            <Header></Header>
            <OrderList></OrderList>
            <Footer></Footer>
        </div>
  )
}









export default App
