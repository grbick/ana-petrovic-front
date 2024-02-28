const storagePrefix = "anaNutri";

const storage = {
  setData: (key: string, value: string | null) => {
    return window.localStorage.setItem(
      `${storagePrefix}${key}`,
      JSON.stringify(value)
    );
  },

  getData: (key: string) => {
    return JSON.parse(
      window.localStorage.getItem(`${storagePrefix}${key}`) as string
    );
  },

  removeData: (key: string) => {
    return window.localStorage.removeItem(`${storagePrefix}${key}`);
  },
};

export default storage;
