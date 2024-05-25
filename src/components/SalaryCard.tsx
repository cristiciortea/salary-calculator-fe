import { useState } from 'react';
import CalculatorResults from './CalculatorResults';
import InputWithCurrency from './reusable/CalculatorInput';

function SalaryCard() {
  const [activeTab, setActiveTab] = useState('Net Salary');
  const [salary, setSalary] = useState<string>('');

  return (
    <div className="bg-white text-green-600 border border-green-300 shadow-lg rounded-lg p-6 my-8 mx-10">
      <p>{salary}</p>
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
          <InputWithCurrency
            title="Calcul Salariu Net"
            placeholder="Salariu Brut"
            salary={salary}
            setSalary={setSalary}
          />
        )}

        {activeTab === 'Brute Salary' && (
          <InputWithCurrency
            title="Calcul Salariu Brut"
            placeholder="Salariu Net"
            salary={salary}
            setSalary={setSalary}
          />
        )}

        {activeTab === 'Custom Salary' && (
          <div className="mt-6 space-y-4">
            <InputWithCurrency
              title="Calcul Salariu Flexibil"
              placeholder="Salariu Brut"
              salary={salary}
              setSalary={setSalary}
            />
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
