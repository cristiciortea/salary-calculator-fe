import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SalaryCard from './components/SalaryCard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-[#0a493a] to-[#0b5e4c] overflow-hidden">
      <NavBar />
      <main className="flex-grow mt-5">
        <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <SalaryCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
