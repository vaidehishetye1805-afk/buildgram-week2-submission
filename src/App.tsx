import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
    </>
  );
}

export default App;