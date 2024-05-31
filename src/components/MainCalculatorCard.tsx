import { useState } from 'react';
import CalculatorResults from './CalculatorResults';
import InputWithCurrency from './reusable/CalculatorInput';
import { createNumOnlyInputChangeHandler } from '../Utils';

function MainCalculatorCard() {
  const [activeTab, setActiveTab] = useState('Net Salary');
  const [salary, setSalary] = useState<string>('');
  const [customTax, setCustomTax] = useState<string>('');

  const handleCustomTaxChange = createNumOnlyInputChangeHandler(setCustomTax);

  return (
    <div className="flex flex-col flex-initial w-8/12 place-items-start items-center bg-white text-green-600 border border-green-300 shadow-lg rounded-lg p-6 my-8">
      {/* Tab definition */}
      <div role="tablist" className="tabs tabs-lifted w-full">
        <button
          role="tab"
          className={`tab ${activeTab === 'Net Salary' ? 'tab-active text-yellow' : ''}`}
          onClick={() => setActiveTab('Net Salary')}
        >
          Salariu Net
        </button>

        <button
          role="tab"
          className={`tab ${activeTab === 'Brute Salary' ? 'tab-active text-yellow' : ''}`}
          onClick={() => setActiveTab('Brute Salary')}
        >
          Salariu Brut
        </button>

        <button
          role="tab"
          className={`tab ${activeTab === 'Custom Salary' ? 'tab-active text-yellow' : ''}`}
          onClick={() => setActiveTab('Custom Salary')}
        >
          Salariu cu taxa personalizata
        </button>
      </div>

      {/* Net salary tab */}
      <div className="flex flex-col w-full my-6 space-y-4">
        {activeTab === 'Net Salary' && (
          <InputWithCurrency
            title="Calcul Salariu Net"
            placeholder="Salariu Brut"
            salary={salary}
            setSalary={setSalary}
          />
        )}

        {/* Brute salary tab */}
        {activeTab === 'Brute Salary' && (
          <InputWithCurrency
            title="Calcul Salariu Brut"
            placeholder="Salariu Net"
            salary={salary}
            setSalary={setSalary}
          />
        )}

        {/* Custom salary tab */}
        {activeTab === 'Custom Salary' && (
          <div className="space-y-4">
            <InputWithCurrency
              title="Calcul Salariu Taxa Personalizata"
              placeholder="Salariu Brut"
              salary={salary}
              setSalary={setSalary}
            />
            <input
              type="string"
              placeholder="Rata de impozitare (%)"
              className="input input-bordered w-10/12 mb-4"
              value={customTax}
              onChange={handleCustomTaxChange}
            />
          </div>
        )}
      </div>
      <button className="btn btn-green-600 flex flex-initial w-60">Calculeaza</button>

      <br></br>
      {/* <CalculatorResults /> */}
    </div>
  );
}

export default MainCalculatorCard;
