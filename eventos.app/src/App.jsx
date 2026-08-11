import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About' 
import ForYou  from './components/ForYou'
import Takeaways from './components/Takeaways'
import Dynamics from './components/Dynamics'
import Includes from './components/Includes'
import Acompanamiento from './components/Acompanamiento'
import Counter from './components/Counter'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <>
      <Navbar />
      
      <div id="inicio"><Hero /></div>
      <div id="sobre-mi"><About /></div>
      
      <section className="image-divider-container">
        <img src="/images/6.webp" alt="Momento de conexión en la naturaleza" className="divider-img" />
      </section>

      <div id="para-ti"><ForYou/></div>
      <div id="takeaways"><Takeaways /></div>
      <div id="dinamicas"><Dynamics /></div>
      <div id="transformacion"><Takeaways/></div>
      <div id="acompanamiento"><Acompanamiento/></div>
      <div id="coach"><Counter /></div>
    <Includes/>
      <WhatsAppFloat/>
      <Footer />
    </>
  )
}

export default App