import { Currency } from './constants/CalculatorInput';

const numRegex = /^\d{0,9}\.?\d{0,3}$/;
export type stringInputCallable = (value: string) => void;
type eventInputCallable = (event: React.ChangeEvent<HTMLInputElement>) => void;

export function createNumOnlyInputChangeHandler(updaterFunc: stringInputCallable): eventInputCallable {
  return function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const inputValue = event.currentTarget.value;
    if (numRegex.test(inputValue)) {
      updaterFunc(inputValue);
    }
  };
}

export function stringToCurrencyEnum(currency: string): Currency | undefined {
  switch (currency) {
    case Currency.Lei:
      return Currency.Lei;
    case Currency.Eur:
      return Currency.Eur;
    case Currency.Usd:
      return Currency.Usd;
    default:
      throw new Error(`Currency ${currency} is not valid`);
  }
}
