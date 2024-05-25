const numRegex = /^\d{0,9}\.?\d{0,3}$/;

type InputWithCurrencyProps = {
  title: string;
  placeholder: string;
  salary: string;
  setSalary: (newValue: string) => void;
};

function InputWithCurrency({ title, placeholder, salary, setSalary }: InputWithCurrencyProps) {
  const currencies = ['LEI', 'EUR', 'USD'];
  const defaultCurrency = 'LEI';
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.currentTarget.value;
    if (numRegex.test(inputValue)) {
      setSalary(inputValue);
    }
  };

  return (
    <div>
      <h2 className="text-gray-900 text-lg font-semibold mb-4">{title}</h2>

      <div className="relative">
        <input
          type="text"
          placeholder={placeholder}
          className="input input-bordered w-full"
          onChange={handleInputChange}
          value={salary}
        />

        <div className="absolute inset-y-0 right-0 flex items-center">
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
