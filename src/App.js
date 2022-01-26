import './App.css';
import Hero from './Components/Hero/Hero'
import InfoSection from './Components/InfoSection/InfoSection'
import Testimonials from './Components/Testimonials/Testimonials'
import ImageGallery from './Components/ImageGallery/ImageGallery'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Hero />
      <InfoSection />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </div>
  );
}

export default App;
