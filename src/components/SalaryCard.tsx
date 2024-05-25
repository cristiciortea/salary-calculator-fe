import { useState } from 'react';
import CalculatorResults from './CalculatorResults';

function SalaryCard() {
  const [activeTab, setActiveTab] = useState('Net Salary');

  return (
    <div className="bg-white text-green-600 border border-green-300 shadow-lg rounded-lg p-6 my-8 mx-10">
      <div role="tablist" className="tabs tabs-lifted">
        <button
          role="tab"
          className={`tab ${activeTab === 'Net Salary' ? 'tab-active text-yellow bg-green-600' : ''}`}
          onClick={() => setActiveTab('Net Salary')}
        >
          Net Salary
        </button>

        <button
          role="tab"
          className={`tab ${activeTab === 'Brute Salary' ? 'tab-active text-yellow bg-green-600' : ''}`}
          onClick={() => setActiveTab('Brute Salary')}
        >
          Brute Salary
        </button>

        <button
          role="tab"
          className={`tab ${activeTab === 'Custom Salary' ? 'tab-active text-yellow bg-green-600' : ''}`}
          onClick={() => setActiveTab('Custom Salary')}
        >
          Custom Salary
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {activeTab === 'Net Salary' && (
          <div>
            <h2 className="text-gray-900 text-lg font-semibold mb-4">Calcul Salariu Net</h2>
            <input type="number" placeholder="Salariu Brut" className="input input-bordered w-full mb-4" />
          </div>
        )}

        {activeTab === 'Brute Salary' && (
          <div>
            <h2 className="text-gray-900 text-lg font-semibold mb-4">Calcul Salariu Brut</h2>
            <input type="number" placeholder="Salariu Net" className="input input-bordered w-full mb-4" />
          </div>
        )}

        {activeTab === 'Custom Salary' && (
          <div>
            <h2 className="text-gray-900 text-lg font-semibold mb-4">Calcul Salariu Flexibil</h2>
            <input type="number" placeholder="Enter Custom Value" className="input input-bordered w-full mb-4" />
            <input type="number" placeholder="Enter Tax Rate (%)" className="input input-bordered w-full mb-4" />
          </div>
        )}
        <button className="btn btn-green-600 w-full">Calculeaza</button>
      </div>

      <br></br>
      <CalculatorResults />
    </div>
  );
}

export default SalaryCard;
