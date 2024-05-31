import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import MainCalculatorCard from './components/MainCalculatorCard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0a493a] to-[#0b5e4c] overflow-hidden">
      <NavBar />
      <main className="flex mt-5 justify-center">
        <MainCalculatorCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
