export const createLocalStorage = <T>(key: string) => {
  const set = (data: T) => {
    localStorage.setItem(key, JSON.stringify(data));
  };
  const get = () => {
    const value = localStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  };
  return {
    get,
    set,
    append<K extends keyof T>(key: K, value: T[K]) {
      const data = get();
      if (!value) throw new Error("value is null");
      if (data) {
        set({ ...data, [key]: value } as unknown as T);
      } else {
        set({ [key]: value } as unknown as T);
      }
    },
    remove<K extends keyof T>(key: K) {
      const data = get();
      const { [key]: _, ...rest } = data;
      set(rest as T);
    },
  };
};
