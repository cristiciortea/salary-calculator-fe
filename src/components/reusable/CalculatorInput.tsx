import { stringInputCallable, createNumOnlyInputChangeHandler } from '../../Utils';
import { Currency, available_currencies } from '../../constants/CalculatorInput';

type InputWithCurrencyProps = {
  title: string;
  placeholder: string;
  salary: string;
  setSalary: stringInputCallable;
  currency: Currency;
  setCurrency: (currency: Currency) => void;
};

function InputWithCurrency({ title, placeholder, salary, setSalary, currency, setCurrency }: InputWithCurrencyProps) {
  const handleInputChange = createNumOnlyInputChangeHandler(setSalary);
  const handleOnCurrencySelect = (event: any) => {
    const currentValue = event.currentTarget.value;
    setCurrency(currentValue);
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-teal-800 text-lg font-semibold mb-4 self-start">{title}</h2>

      <div className="flex flex-row flex-wrap">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered basis-10/12"
          onChange={handleInputChange}
          value={salary}
        />

        <div className="inset-y-0 right-0">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>

          <select
            id="currency"
            name="currency"
            defaultValue={currency}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 font-semibold focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm"
            onChange={handleOnCurrencySelect}
          >
            {available_currencies.map((currency, index) => (
              <option key={index} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default InputWithCurrency;
