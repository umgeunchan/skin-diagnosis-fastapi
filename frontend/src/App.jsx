// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Guide from "./pages/Guide";
import Guide2 from "./pages/Guide2";
import Menu from "./pages/Menu";
import PhotoUpload from "./pages/PhotoUpload";
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import History from "./pages/History";
import Detail from "./pages/Detail";
import AppGuide from "./pages/AppGuide";
import SkinCare from "./pages/SkinCare";
import SkinCareDetail from "./pages/SkinCareDetail";
import Home2 from "./pages/Home2";
import History2 from "./pages/History2";
import Result2 from "./pages/Result2";
import PhotoUpload2 from "./pages/PhotoUpload2";
import Guide3 from "./pages/Guide3";
import Start from "./pages/Start";
import Detail2 from "./pages/Detail2";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/guide2" element={<Guide2 />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/photo" element={<PhotoUpload />} />
      <Route path="/result" element={<Result />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/history" element={<History />} />
      <Route path="/detail" element={<Detail />} />
      <Route path="/help" element={<AppGuide />} />
      <Route path="/care" element={<SkinCare />} />
      <Route path="/skintip/:id" element={<SkinCareDetail />} />
      <Route path="/home2" element={<Home2/>}/> 
      <Route path="/history2" element={<History2 />} />
      <Route path="/guide3" element={<Guide3 />} />
      <Route path="/" element={<Start />} />
      <Route path="/photo2" element={<PhotoUpload2 />} />
      <Route path="/result2" element={<Result2 />} />
      <Route path="/detail2" element={<Detail2 />} />
    </Routes>
  );
}
