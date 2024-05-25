import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import SalaryCard from './components/SalaryCard';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-green-100 via-teal-400 to-cyan-600">
      <NavBar />
      <main className="flex-grow mt-20 pt-10">
        <p className="text-slate-500">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
        <SalaryCard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
