import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ComplaintsPage from "./pages/ComplaintsPage/ComplaintsPage";
import AnnouncementsPage from "./pages/AnnouncementsPage/AnnouncementsPage";
import PollsPage from "./pages/PollsPage/PollsPage";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route
          path="/dashboard"
          element={
            <IsPrivate>
              <DashboardPage />
            </IsPrivate>
          }
        />
        <Route
          path="/complaints"
          element={
            <IsPrivate>
              <ComplaintsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/announcements"
          element={
            <IsPrivate>
              <AnnouncementsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/polls"
          element={
            <IsPrivate>
              <PollsPage />
            </IsPrivate>
          }
        />{" "}
      </Routes>
    </div>
  );
}

export default App;
