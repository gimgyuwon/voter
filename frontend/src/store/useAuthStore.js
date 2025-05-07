import { create } from "zustand";

const useAuthStore = create((set, get) => ({
  user: null,
  accessToken: null,
  refreshToken: null,
  bookmarks: [],
  testResult: null,

  /** 로그인 처리 */
  login: ({ user, accessToken, refreshToken, testResult, bookmarks = [] }) =>
    set({
      user,
      accessToken,
      refreshToken,
      testResult: testResult || null,
      bookmarks,
    }),

  /** 로그아웃 처리 */
  logout: () =>
    set({
      user: null,
      accessToken: null,
      refreshToken: null,
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

  /** refreshtoken 자동 갱신 */
  getValidAccessToken: async () => {
    const { accessToken, refreshToken, logout } = get();
    if (!accessToken || !refreshToken) throw new Error("No tokens");

    const now = Math.floor(Date.now() / 1000);
    const payload = JSON.parse(atob(accessToken.split(".")[1]));
    const isExpired = now >= payload.exp;

    if (!isExpired) return accessToken;

    try {
      const res = await fetch(
        `${process.env.REACT_APP_API_URL}/api/token/refresh/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ refresh: refreshToken }),
        }
      );

      if (!res.ok) throw new Error("Token refresh failed");

      const data = await res.json();
      set({ accessToken: data.access });
      return data.access;
    } catch (err) {
      logout();
      throw err;
    }
  },
}));
export default useAuthStore;
