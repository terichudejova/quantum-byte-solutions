import { useState } from 'react'
import './App.css'
import CountUpCounter from './CountUpCounter'
import PointsCard from './PointsCard'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import ServiceCard from './ServiceCard';

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
                  <p className='popis'>Jsme špičková IT společnost poskytující inovativní technologie a služby zaměřené na optimalizaci a automatizaci podnikových procesů prostřednictvím kvantových výpočtů a umělé inteligence. Specializujeme se na vytváření personalizovaných řešení pro komplexní problémy v oblastech finančního modelování, logistiky, zdravotnictví a bezpečnosti.</p>
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
          <div className='outsideBox'>
            <h2>Služby</h2>
            <div className='line'></div>
            <div className='bigCard'>
              <ServiceCard serviceTitle={"Kvantová optimalizace"} serviceDescription={"Využití kvantových algoritmů k nalezení optimálních řešení pro složité problémy, jako je optimalizace dodavatelských řetězců, alokace zdrojů nebo predikce trhu. S kvantovou optimalizací dokážeme rychle a efektivně řešit náročné úkoly, které klasickým algoritmům trvají neúměrně dlouho. Pomáháme firmám dosáhnout lepších výsledků v oblastech, jako je logistika, plánování zdrojů nebo analýza trhu."} />
              <ServiceCard serviceTitle={"Kvantová bezpečnost"}  serviceDescription={"Poskytování kvantově odolných šifrovacích metod a bezpečnostních protokolů, které chrání data a komunikaci před hrozbami budoucích kvantových počítačů. Zabezpečujeme vaše data a komunikaci pomocí technologií odolných vůči budoucím kvantovým útokům, abychom zajistili jejich bezpečnost i v nadcházejících letech."}/>
              <ServiceCard serviceTitle={"AI-driven Automatizace"} serviceDescription={"Vývoj a implementace automatizačních řešení řízených umělou inteligencí, která pomáhají podnikům zefektivnit procesy, snížit náklady a zvýšit produktivitu. Naše automatizační řešení využívají umělou inteligenci k automatizaci rutinních procesů, což firmám umožňuje šetřit čas, minimalizovat chyby a soustředit se na strategické úkoly."}/>
              <ServiceCard serviceTitle={"Simulace a modelování"} serviceDescription={"Vytváření realistických simulací složitých systémů, jako je predikce klimatických změn, modelování finančních rizik nebo simulace nových lékařských terapií. Naše simulace vám umožní přesně modelovat a předvídat chování komplexních systémů, což pomáhá při rozhodování a minimalizaci rizik v různých oblastech."}/>
              <ServiceCard serviceTitle={"Poradenství"} serviceDescription={"Pomoc firmám při přechodu na kvantové technologie a jejich integraci do stávajících IT infrastruktur. Nabízíme odborné poradenství pro firmy, které chtějí využít potenciál kvantových technologií. Pomůžeme vám s jejich nasazením a integrací do vašich současných systémů."}/>
              <ServiceCard serviceTitle={"Analýza Big Data"} serviceDescription={"Zpracování rozsáhlých datových sad pro získání klíčových obchodních informací. Využíváme pokročilé nástroje k odhalení skrytých vzorů a trendů, které podporují strategická rozhodnutí v oblastech jako marketing, finance a operace."}/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default App
