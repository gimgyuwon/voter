import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  accessToken: null,
  bookmarks: [],
  testResult: null,

  /** 로그인 처리 */
  login: ({ user, token, testResult, bookmarks = [] }) =>
    set({
      user,
      accessToken: token,
      testResult: testResult || null,
      bookmarks,
    }),

  /** 로그아웃 처리 */
  logout: () =>
    set({
      user: null,
      accessToken: null,
      bookmarks: [],
      testResult: null,
    }),

  /** 북마크 추가/제거 toggle */
  toggleBookmark: (policyId) =>
    set((state) => {
      const isBookmarked = state.bookmarks.includes(policyId);
      const updated = isBookmarked
        ? state.bookmarks.filter((id) => id !== policyId)
        : [...state.bookmarks, policyId];

      return { bookmarks: updated };
    }),

  /** 성향 테스트 결과 수동 업데이트 */
  setTestResult: (testResult) => set({ testResult }),
}));
export default useAuthStore;
