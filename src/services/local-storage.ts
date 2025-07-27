function useLocalStorage() {
  const STORAGE_KEY = 'INPUT-VALUE';

  const setCharacter = (value: string) => {
    localStorage.setItem(STORAGE_KEY, value);
  };

  const getCharacter = () => {
    return localStorage.getItem(STORAGE_KEY);
  };

  const removeCharacter = () => {
    localStorage.removeItem(STORAGE_KEY);
  };

  return {
    setCharacter,
    getCharacter,
    removeCharacter,
  };
}

export default useLocalStorage;
