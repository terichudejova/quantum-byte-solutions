import { useState } from 'react'
import './App.css'
import CountUpCounter from './CountUpCounter'
import PointsCard from './PointsCard'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';

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
                  <div className='line'></div>
                  <div className='counts-container'>
                    <div className='counts'>
                      <CountUpCounter start={0} end={12} duration={2.5}/>
                      <p>let na trhu</p>
                    </div>
                    <div className='counts'>
                      <CountUpCounter start={0} end={37} duration={3}/>
                      <p>odborných certifikací</p>
                    </div>
                    <div className='counts'>
                      <CountUpCounter start={0} end={62} duration={5}/>
                      <p>spokojených klientů</p>
                    </div>
                  </div>
                </div>
                <div className='rightColumn'>
                  <img id='robot' src='images/robot.jpg'/>
                </div>
              </div>
            </div>
        </div>

        
        {/* SECOND SECTION - POINTS */}
        <div className='secondSection-points'>
          <div className='outsideBox'>
            <div className='points'>
              <PointsCard icon={<EmojiObjectsIcon style={{ fontSize: 50 }} />} heading={"Inovativní přístup"} description={"Naše řešení jsou postavena na nejnovějších technologiích, které posouvají hranice možného."}/>
              <PointsCard icon={<SettingsIcon style={{ fontSize: 50 }} />} heading={"Personalizované služby"} description={"Každý projekt přizpůsobujeme specifickým potřebám a cílům vašich podniků."}/>
              <PointsCard icon={<SecurityIcon style={{ fontSize: 50 }} />} heading={"Bezpečnost na prvním místě"} description={"Nabízíme kvantově odolné zabezpečení pro maximální ochranu vašich dat."}/>
              <PointsCard icon={<GroupsIcon style={{ fontSize: 50 }} />} heading={"Špičkový tým"} description={"Náš tým expertů přináší bohaté zkušenosti a odborné znalosti z různých oblastí IT."}/>
            </div>
          </div>
        </div>




        <div className='thirdSection-cards'>

        </div>
      </div>
  )
}

export default App
