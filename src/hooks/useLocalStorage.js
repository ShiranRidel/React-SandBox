import { useState } from "react";

function useLocalStorage(key, initialValue) {
  const [localStorageValue, setlocalStorageValue] = useState(() =>
    getLocalStorageValue(key, initialValue)
  );

  const setValue = (value) => {
    // chack if function
    const valueToStore =
      value instanceof Function ? value(localStorageValue) : value;
    //set to state
    setlocalStorageValue(value);
    //set to local storage
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [localStorageValue, setValue];
}

function getLocalStorageValue(key, initialValue) {
  const itemFromStorage = localStorage.getItem(key);
  return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue;
}

export default useLocalStorage;
