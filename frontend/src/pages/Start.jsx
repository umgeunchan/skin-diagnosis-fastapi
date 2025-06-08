// src/pages/Start.jsx
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import logo from "../assets/logo.png";

export default function Start() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-[#FCF6F5]">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <img src={logo} alt="Logo" className="w-64 h-auto mb-8" />
        <button
          onClick={() => navigate("/login")}
          className="w-full max-w-xs py-3 bg-blue-600 text-white rounded-lg mb-4 text-center"
        >
          로그인
        </button>
        <button
          onClick={() => navigate("/signup")}
          className="w-full max-w-xs py-3 border border-black text-black rounded-lg text-center"
        >
          회원 가입
        </button>
      </div>
    </div>
  );
}
