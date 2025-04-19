// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Login  from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home    from "./pages/Home";
import Guide from './pages/Guide';
import Guide2 from './pages/Guide2';
import Menu from './pages/Menu';
import PhotoUpload from './pages/PhotoUpload';
import Result from './pages/Result';


export default function App() {
  return (
    <Routes>
      <Route path="/login"  element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/"       element={<Home />} />
      <Route path="/guide" element={<Guide />} />
      <Route path="/guide2" element={<Guide2 />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/photo" element={<PhotoUpload />} />
      <Route path="/result" element={<Result />} />
    </Routes>
  );
}
