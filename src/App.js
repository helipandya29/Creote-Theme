import './App.css';
import { BrowserRouter } from 'react-router-dom';
import PagePreHeader from './components/PagePreHeader';
import Header from './components/Header';
import Slider from './components/Slider';
import Service from './components/Service';
import Team from './components/Team';
import TabSection from './components/Tab';
import TestimonialSection from './components/TestimonialSection';
import Blog from './components/Blog';
import Footer from './components/Footer';
import Price from './components/Price';

function App() {
  return (
    <BrowserRouter>
    <PagePreHeader/>
    <Header/>
    <Slider/>
    <Service/>
    <Team/>
    <TabSection/>
    <Price/>
    <TestimonialSection/>
    <Blog/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
