import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  setUserInfo: (info: object) => {
    set(() => ({ user: info }));
  },
}));

export default useAuthStore;
