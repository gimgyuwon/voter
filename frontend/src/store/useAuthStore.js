import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  bookmarks: [],

  /** 로그인 처리 */
  login: (userInfo, token) => set({ user: userInfo, accessToken: token }),

  /** 로그아웃 처리 */
  logout: () => set({ user: null, accessToken: null, bookmarks: [] }),

  /** 북마크 추가/제거 toggle */
  toggleBookmark: (policyId) =>
    set((state) => {
      const isBookmarked = state.bookmarks.includes(policyId);
      return {
        bookmarks: isBookmarked
          ? state.bookmarks.filter((id) => id !== policyId)
          : [...state.bookmarks, policyId],
      };
    }),
}));
export default useAuthStore;
