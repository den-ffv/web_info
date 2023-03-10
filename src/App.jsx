import { useState } from 'react'
import './style/reset.scss'
import './style/App.scss'
import './style/_vars.scss'
import Header from './components/Header/Header'
import ShowDate from './components/Header/Date/ShowDate'

function App() {
  return (
    <>
    <ShowDate/>
    <div className="App">
      <Header/>
    </div>
    </>

    
  )
}

export default App
