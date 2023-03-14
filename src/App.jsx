import { useState } from 'react'
import './style/reset.scss'
import './style/App.scss'
import './style/_vars.scss'
import Header from './components/Header/Header'
import ShowDate from './components/Header/Date/ShowDate'
import Footer from './components/Footer/Footer'


// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import News from "./pages/News";
// import Blog from "./pages/Blog";
// import Language from "./pages/Language";

function App() {
  console.log('Have a great day! 📣🐢')
  return (
    <div className='conte'>
    <ShowDate/>
    <Header/> 
    </div>

    
  )
}

export default App
