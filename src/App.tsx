import { Header, Hero, About, Services, CTA, Footer } from './components';
import './styles/layout.css';

function App() {
  return (
    <div className="app">
      <Header />
      
      <main className="main">
        <Hero />
        <About />
        <Services />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}

export default App
