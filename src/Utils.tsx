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
