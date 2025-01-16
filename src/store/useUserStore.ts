import { create } from 'zustand';
import { UserInfo } from '@/types/user';

interface UserStoreType {
  userInfo: Partial<UserInfo>;
  actions: {
    setUserInfo: (userInfo: UserInfo) => void;
  };
}

const useUserStore = create<UserStoreType>((set) => ({
  userInfo: {},
  actions: {
    setUserInfo(userInfo) {
      set({ userInfo });
    },
  },
}));

export const useUserInfo = () => useUserStore((state) => state.userInfo);
export const useUserActions = () => useUserStore((state) => state.actions);

export default useUserStore;
