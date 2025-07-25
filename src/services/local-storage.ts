function localStorageService() {
  const STORAGE_KEY = 'INPUT-VALUE';

  return {
    setCharacter: (value: string) => {
      localStorage.setItem(STORAGE_KEY, value);
    },
    getCharacter: () => {
      return localStorage.getItem(STORAGE_KEY);
    },
    removeCharacter: () => {
      localStorage.removeItem(STORAGE_KEY);
    },
  };
}

export default localStorageService;
