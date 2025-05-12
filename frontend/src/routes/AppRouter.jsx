import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import QuestionPage from "../pages/QuestionPage";
import ResultPage from "../pages/ResultPage";
import ComparePage from "../pages/Compare/ComparePage";
import CheerPage from "../pages/Cheer/CheerPage";
import SettingPage from "../pages/Setting/SettingPage";
import BookmarkPage from "../pages/BookmarkPage";
import CandidatePage from "../pages/Candidate/CandidatePage";
import Jaemyeong from "../pages/Candidate/Jaemyeong/Jaemyeong";
import Munsu from "../pages/Candidate/Munsu/Munsu";
import Junseok from "../pages/Candidate/Junseok/Junseok";
import KakaoRedirectPage from "../pages/KakaoRedirectPage";
import CreditsPage from "../pages/CreditPage/CreditPage";

const AppRouter = () => {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/cheer" element={<CheerPage />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/bookmark" element={<BookmarkPage />} />
        <Route path="/credit" element={<CreditsPage />} />

        {/* Oauth routes form kakao login */}
        <Route path="/oauth/kakao/callback" element={<KakaoRedirectPage />} />

        {/* Nested routes for /candidate */}
        <Route path="/candidate" element={<CandidatePage />}>
          <Route path="jaemyeong" element={<Jaemyeong />} />
          <Route path="munsu" element={<Munsu />} />
          <Route path="junseok" element={<Junseok />} />
        </Route>
      </Routes>
    </div>
  );
};

export default AppRouter;
