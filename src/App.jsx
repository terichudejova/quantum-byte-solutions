import FormfacadeEmbed from "@formfacade/embed-react";
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
import ReviewCard from './ReviewCard';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HamburgerMenu from "./HamburgerMenu"


function App() {

  return (
    <div id='mainContainer'>

        {/* NAVBAR */}
        <div className='navbarSection'>
          <div className='outsideBox'>
            <HamburgerMenu />
            <ul className='menu'>
              <li><a href='#onas'>O nás</a></li>
              <li><a href='#sluzby'>Služby</a></li>
              <li><a href='#tym'>Tým</a></li>
              <li><a href='#recenzeLink'>Recenze</a></li>
              <li><a href='#kontakt'>Kontakt</a></li>
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
        <div className='thirdSection-cards'>
          <div className='outsideBox' id='sluzby'>
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
              <p className='popis'>
                Za každým úspěšným projektem stojí silný a dynamický tým, který se skládá z odborníků na špičkové úrovni ve svých oborech. Naše firma se může pochlubit nejen hlubokými znalostmi a technickými dovednostmi, ale i vášní pro inovace a neustálé zlepšování. Každý člen týmu přináší jedinečnou kombinaci zkušeností a znalostí, která nám umožňuje nacházet řešení i pro ty nejnáročnější technologické výzvy.<br/><br/>
                Náš tým zahrnuje specialisty na kvantové technologie, umělou inteligenci, bezpečnost, analýzu dat a mnoho dalších klíčových oblastí. Společně pracujeme na vývoji inovativních řešení, která nejen splňují aktuální potřeby našich klientů, ale také přinášejí konkurenční výhody pro budoucnost. Naši odborníci jsou připraveni poskytovat vám podporu, od prvotního konzultace až po finální implementaci a další rozvoj.<br/><br/>
                Věříme, že síla spočívá v rozmanitosti našich zkušeností a schopností. Seznamte se s týmem, který je připraven proměnit vaše výzvy v příležitosti a přivést vaše projekty k úspěšnému závěru.
              </p>
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
        <div className='fifthSection-recenze'>
            <div className='outsideBox' id='recenzeLink'>
              <h2>Recenze</h2>
              <div className='line'></div>
              <p className='popis'>Naše výsledky hovoří samy za sebe, ale ještě lépe o nás vypovídají zkušenosti našich spokojených klientů. Níže najdete recenze od firem, které díky našim řešením dosáhly svých cílů a překonaly náročné technologické výzvy. Spolupráce s námi jim přinesla nejen konkrétní výsledky, ale také dlouhodobou hodnotu a konkurenční výhodu.</p>
              <div className='recenze'>
                <ReviewCard
                  company={"TechLogix"}
                  review={"Spolupráce s QuantumByte Solutions byla klíčová pro optimalizaci našeho dodavatelského řetězce. Jejich kvantová optimalizace nám umožnila zvýšit efektivitu o více než 30 % a snížit náklady na logistiku. Jejich tým je skutečně špičkový, a to nejen díky odborným znalostem, ale také díky jejich ochotě jít nad rámec našich očekávání."}
                  reviewer={"John Doe, CEO"}
                />
                <ReviewCard
                  company={"NeuroWave Analytics"}
                  review={"Díky AI-driven automatizaci od QuantumByte Solutions jsme dosáhli nové úrovně efektivity. Automatizovali jsme několik klíčových procesů, což nám ušetřilo stovky hodin měsíčně a zvýšilo produktivitu našeho týmu. Tým QuantumByte Solutions nám poskytl komplexní podporu od návrhu až po implementaci."}
                  reviewer={"Jane Doe, CTO"}
                />
                <ReviewCard
                  company={"SafeGuard Financial"}
                  review={"Bezpečnost našich dat je pro nás prioritou, a proto jsme se obrátili na QuantumByte Solutions pro kvantovou bezpečnost. Jejich šifrovací technologie nám poskytly jistotu, že naše citlivé informace jsou v bezpečí i před budoucími kvantovými hrozbami. Spolupráce s jejich týmem byla profesionální a přínosná."}
                  reviewer={"John Doe, Vedoucí IT"}
                />
                <ReviewCard
                  company={"DataMinds"}
                  review={"QuantumByte Solutions nám pomohli převést naše datové analýzy na novou úroveň díky jejich pokročilým simulacím a modelování. Díky tomu jsme dokázali lépe porozumět dynamice trhu a přijímat informovanější strategická rozhodnutí. Jejich tým je profesionální, rychlý a vždy ochotný pomoci."}
                  reviewer={"Jane Doe, Vedoucí analytického oddělení"}
                />
              </div>
            </div>
        </div>



        {/* LAST SECTION - KONTAKT */}
        <div className='sixthSection-contact' id='kontakt'>
          <div className='outsideBox'>
            <h2>Kontaktujte nás</h2>
            <div className='line'></div>
            <p className="popis">Máte otázky, potřebujete poradit nebo hledáte partnera pro řešení vašich technologických výzev? Jsme tu, abychom vám pomohli. Ať už se jedná o konkrétní dotaz, poptávku po našich službách nebo obecnou konzultaci, neváhejte se na nás obrátit. Kontaktujte nás prostřednictvím níže uvedených údajů nebo jednoduše vyplňte kontaktní formulář. Náš tým se vám ozve co nejdříve a společně najdeme nejlepší řešení pro vaše potřeby. Těšíme se na spolupráci s vámi a na to, jak společně posuneme hranice možného.</p>
            <div className='contactPage'>
              <div className="formular">
                <FormfacadeEmbed
                  formFacadeURL="https://formfacade.com/include/107952329843461447605/form/1FAIpQLSfqS0LYJHpjVowh33JVg9l8V3lK1lL8fyWWvQM4KnT5wlfJnw/classic.js/?div=ff-compose"
                  onSubmitForm={() => console.log('Form submitted')}
                />
              </div>
              <div className="kontaktniInformace">
                <div>
                  <div className="dvojice">
                    <a href="mailto:info@qbs.com?subject=Dotaz&body=Dobrý den, zaujalo nás..."><EmailIcon className="contactIcon"/></a>
                    <p>info@qbs.com</p>
                  </div>
                  <div className="dvojice">
                    <a href="tel:+420123456789"><LocalPhoneIcon className="contactIcon"/></a>
                    <p>+420 123 456 789</p>
                  </div>
                  <div className="dvojice">
                    <a href="https://maps.app.goo.gl/NYGmuqYtWa66uWEf6" target="_blank" rel="noopener noreferrer"><LocationOnIcon className="contactIcon"/></a>
                    <p>Pražský hrad, Hradčany, 119 08 Praha 1</p>
                  </div>
                </div>
                <div className="mapa">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2559.742914967492!2d14.399041576392989!3d50.091100013173005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b951e6c24b7c3%3A0x2acf3c88af12259f!2zUHJhxb5za8O9IGhyYWQ!5e0!3m2!1scs!2scz!4v1723972062485!5m2!1scs!2scz" 
                    width="500" 
                    height="300"
                    style={{ border: 0 }} 
                    allowFullScreen="true" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  >
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* FOOTER */}
        <div className="footer">
          <p>© Tereza Chudějová, 2024</p>
        </div>



      </div>
  )
}

export default App
