import './App.css';
import CardPrice from './components/CardPrice/CardPrice';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LifeStyle from './components/LifeStyleImg/LifeStyle';
import Nav from './components/Nav/Nav';
import ScroolImg from './components/ScroolImg/ScroolImg';

function App() {
  return (
    <div className="App">
    <Nav/>
    <Header/>
    <ScroolImg/>
    <LifeStyle/>
    <CardPrice/>
    {/* <Carousel/> */}
    <Footer/>
    </div>
  );
}

export default App;
