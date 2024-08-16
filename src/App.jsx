import { useState } from 'react'
import './App.css'
import CountUpCounter from './CountUpCounter'
import PointsCard from './PointsCard'
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import GroupsIcon from '@mui/icons-material/Groups';
import ServiceCard from './ServiceCard';
import InsightsIcon from '@mui/icons-material/Insights';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import HubIcon from '@mui/icons-material/Hub';


function App() {

  return (
    <div id='mainContainer'>

        {/* NAVBAR */}
        <div className='navbarSection'>
          <div className='outsideBox'>
            <ul className='menu'>
              <li><a href='#onas'>O nás</a></li>
              <li><a href='#sluzby'>Služby</a></li>
              <li><a href='#tym'>Tým</a></li>
              <li><a href='#recenzeLink'>Recenze</a></li>
              <li><a>Kontakt</a></li>
            </ul>
          </div>
        </div>


        {/* FIRST SECTION - ABOUT */}
        <div className='firstSection-about' id='onas'>
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
                      <CountUpCounter start={0} end={21} duration={3}/>
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
              <PointsCard icon={<SettingsIcon style={{ fontSize: 50 }} />} heading={"Personalizované služby"} description={"Každý projekt přizpůsobujeme specifickým potřebám a cílům vašeho podniku."}/>
              <PointsCard icon={<SecurityIcon style={{ fontSize: 50 }} />} heading={"Bezpečnost na prvním místě"} description={"Nabízíme kvantově odolné zabezpečení pro maximální ochranu vašich dat."}/>
              <PointsCard icon={<GroupsIcon style={{ fontSize: 50 }} />} heading={"Špičkový tým"} description={"Náš tým expertů přináší bohaté zkušenosti a odborné znalosti z různých oblastí IT."}/>
            </div>
          </div>
        </div>



        {/* THIRD SECTION - SLUŽBY */}
        <div className='thirdSection-cards' id='sluzby'>
          <div className='outsideBox'>
            <h2>Služby</h2>
            <div className='line'></div>
            <div className='bigCard'>
              <ServiceCard icon={<InsightsIcon style={{ fontSize: 40 }} />} serviceTitle={"Kvantová optimalizace"} serviceDescriptionFront={"Využití kvantových algoritmů k nalezení optimálních řešení pro složité problémy, jako je optimalizace dodavatelských řetězců, alokace zdrojů nebo predikce trhu."} serviceDescriptionBack={"S kvantovou optimalizací dokážeme rychle a efektivně řešit náročné úkoly, které klasickým algoritmům trvají neúměrně dlouho. Pomáháme firmám dosáhnout lepších výsledků v oblastech, jako je logistika, plánování zdrojů nebo analýza trhu."} />
              <ServiceCard icon={<SecurityIcon style={{ fontSize: 40 }} />} serviceTitle={"Kvantová bezpečnost"}  serviceDescriptionFront={"Poskytování kvantově odolných šifrovacích metod a bezpečnostních protokolů, které chrání data a komunikaci před hrozbami budoucích kvantových počítačů."} serviceDescriptionBack={"Zabezpečujeme vaše data a komunikaci pomocí technologií odolných vůči budoucím kvantovým útokům, abychom zajistili jejich bezpečnost i v nadcházejících letech."}/>
              <ServiceCard icon={<PrecisionManufacturingIcon style={{ fontSize: 40 }} />} serviceTitle={"AI-driven Automatizace"} serviceDescriptionFront={"Vývoj a implementace automatizačních řešení řízených umělou inteligencí, která pomáhají podnikům zefektivnit procesy, snížit náklady a zvýšit produktivitu."} serviceDescriptionBack={"Naše automatizační řešení využívají umělou inteligenci k automatizaci rutinních procesů, což firmám umožňuje šetřit čas, minimalizovat chyby a soustředit se na strategické úkoly."}/>
              <ServiceCard icon={<AccountTreeIcon style={{ fontSize: 40 }} />} serviceTitle={"Simulace a modelování"} serviceDescriptionFront={"Vytváření realistických simulací složitých systémů, jako je predikce klimatických změn, modelování finančních rizik nebo simulace nových lékařských terapií."} serviceDescriptionBack={"Naše simulace vám umožní přesně modelovat a předvídat chování komplexních systémů, což pomáhá při rozhodování a minimalizaci rizik v různých oblastech."}/>
              <ServiceCard icon={<AutoStoriesIcon style={{ fontSize: 40 }} />} serviceTitle={"Poradenství"} serviceDescriptionFront={"Pomoc firmám při přechodu na kvantové technologie a jejich integraci do stávajících IT infrastruktur."} serviceDescriptionBack={"Nabízíme odborné poradenství pro firmy, které chtějí využít potenciál kvantových technologií. Pomůžeme vám s jejich nasazením a integrací do vašich současných systémů."}/>
              <ServiceCard icon={<HubIcon style={{ fontSize: 40 }} />} serviceTitle={"Analýza Big Data"} serviceDescriptionFront={"Zpracování rozsáhlých datových sad pro získání klíčových obchodních informací."} serviceDescriptionBack={"Využíváme pokročilé nástroje k odhalení skrytých vzorů a trendů, které podporují strategická rozhodnutí v oblastech jako marketing, finance a operace."}/>
            </div>
          </div>
        </div>



        {/* FOURT SECTION - TÝM */}
        <div className='fourthSection-team' id='tym'>
            <div className='outsideBox'>
              <h2>Tým</h2>
              <div className='line'></div>
              <p className='popis'>Za každým úspěšným projektem stojí silný a dynamický tým, který se skládá z odborníků na špičkové úrovni ve svých oborech. Naše firma se může pochlubit nejen hlubokými znalostmi a technickými dovednostmi, ale i vášní pro inovace a neustálé zlepšování. Každý člen týmu přináší jedinečnou kombinaci zkušeností a znalostí, která nám umožňuje nacházet řešení i pro ty nejnáročnější technologické výzvy.<br/><br/>

Náš tým zahrnuje specialisty na kvantové technologie, umělou inteligenci, bezpečnost, analýzu dat a mnoho dalších klíčových oblastí. Společně pracujeme na vývoji inovativních řešení, která nejen splňují aktuální potřeby našich klientů, ale také přinášejí konkurenční výhody pro budoucnost. Naši odborníci jsou připraveni poskytovat vám podporu, od prvotního konzultace až po finální implementaci a další rozvoj.<br/><br/>

Věříme, že síla spočívá v rozmanitosti našich zkušeností a schopností. Seznamte se s týmem, který je připraven proměnit vaše výzvy v příležitosti a přivést vaše projekty k úspěšnému závěru.</p>
              <div className='teamCards'>
                <div className='teamMember'>
                  <img src='images/person1.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>John Doe</p>
                    <p className='position'>Výkonný ředitel firmy</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person2.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>John Doe</p>
                    <p className='position'>Technický ředitel</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person3.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>Jane Doe</p>
                    <p className='position'>Vedoucí kvantového výzkumu</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person4.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>Jane Doe</p>
                    <p className='position'>Projektová manažerka</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person5.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>John Doe</p>
                    <p className='position'>AI inženýr</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person9.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>John Doe</p>
                    <p className='position'>Bezpečnostní analytik</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person7.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>Jane Doe</p>
                    <p className='position'>Data analytička</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person6.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>Jane Doe</p>
                    <p className='position'>Simulační inženýr</p>
                  </div>
                </div>
                <div className='teamMember'>
                  <img src='images/person8.jpg'/>
                  <div className='teamMember-description'>
                    <p className='name'>John Doe</p>
                    <p className='position'>Softwarový vývojář</p>
                  </div>
                </div>
              </div>
            </div>
        </div>


        {/* FIFTH SECTION - RECENZE */}
        <div className='fifthSection-recenze' id='recenzeLink'>
            <div className='outsideBox'>
              <h2>Recenze</h2>
              <div className='line'></div>
              <div className='recenze'>

              </div>
            </div>
        </div>


      </div>
  )
}

export default App
