import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set, _get) => ({
      user: null,
      setUserInfo: (info: object) => {
        set(() => ({ user: info }));
      },
    }),
    {
      name: "erecipe-auth-user-info",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useAuthStore;

// setUserInfo: (info: object) => {set(() => ({ user: info }))}
