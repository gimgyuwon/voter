import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./components/Common/Header/Header";
import Footer from "./components/Common/Footer/Footer";
import AppRouter from "./routes/AppRouter";
import useAuthStore from "./store/useAuthStore";

function App() {
  const { login } = useAuthStore();

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");
    const refreshToken = localStorage.getItem("refresh_token");
    const nickname = localStorage.getItem("nickname");
    const ideologyScore = localStorage.getItem("ideologyScore");
    const policyMatch = localStorage.getItem("policyMatch");
    const bookmarks = JSON.parse(localStorage.getItem("bookmarks") || "[]");
    const theme = localStorage.getItem("theme");

    if (accessToken && refreshToken && nickname) {
      login({
        user: { nickname },
        accessToken,
        refreshToken,
        testResult: { ideologyScore, policyMatch },
        bookmarks,
        theme,
      });

      useAuthStore.getState().setTheme(theme);
    }
  }, [login]);

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
