
import './App.css';
import Hero from './components/Hero';
import Footer from './components/footer/Footer';
import Join from './components/join/Join';
import Plans from './components/plans/Plans';
import Programs from './components/programs/Programs';
import Reasons from './components/reasons/Reasons';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <div className="App">
       <Hero />
       <Programs />
       <Reasons />
       <Plans />
       <Testimonial />
       <Join />
       <Footer />
    </div>
    
  );
}

export default App;
