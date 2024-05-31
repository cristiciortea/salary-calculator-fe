import { stringInputCallable, createNumOnlyInputChangeHandler } from '../../Utils';

type InputWithCurrencyProps = {
  title: string;
  placeholder: string;
  salary: string;
  setSalary: stringInputCallable;
};

function InputWithCurrency({ title, placeholder, salary, setSalary }: InputWithCurrencyProps) {
  const currencies = ['LEI', 'EUR', 'USD'];
  const defaultCurrency = 'LEI';
  const handleInputChange = createNumOnlyInputChangeHandler(setSalary);

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
            defaultValue={defaultCurrency}
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 font-semibold focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm"
          >
            {currencies.map((currency, index) => (
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
