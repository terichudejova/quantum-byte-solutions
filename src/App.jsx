import { useState } from 'react'
import './App.css'

function App() {

  return (
    <div id='mainContainer'>

        {/* NAVBAR */}
        <div className='navbarSection'>
          <div className='outsideBox'>
            <ul className='menu'>
              <li><a>O nás</a></li>
              <li><a>Služby</a></li>
              <li><a>Tým</a></li>
              <li><a>Recenze</a></li>
              <li><a>Kontakt</a></li>
            </ul>
          </div>
        </div>


        {/* FIRST SECTION - ABOUT */}
        <div className='firstSection-about'>
            <div className='outsideBox'>
              <div className='firstSection-innerBox'>
                <div className='leftColumn'>
                  <h1>QuantumByte<br/><span>Solutions</span></h1>
                  <span className='motto'>Posouváme hranice technických možností.</span>
                </div>
                <div className='rightColumn'>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ipsa dicta aspernatur tempore, ullam incidunt fugit, nisi officiis suscipit consequatur quasi. Molestiae et commodi repellat iure distinctio, quo porro. At?</p>
                </div>
              </div>
            </div>
        </div>

        
        <div className='secondSection-points'>

        </div>
        <div className='thirdSection-cards'>

        </div>
      </div>
  )
}

export default App
