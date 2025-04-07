import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // firebase.js 위치 기준

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home");
    } catch (err) {
      alert("로그인 실패: " + err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("회원가입 성공! 자동 로그인됩니다.");
      navigate("/home");
    } catch (err) {
      alert("회원가입 실패: " + err.message);
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF6F5] flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-3xl font-semibold mb-6">DermaScan</h1>

      <input
        type="email"
        placeholder="이메일"
        className="w-full max-w-xs px-4 py-3 mb-3 border rounded-lg"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-full max-w-xs px-4 py-3 mb-4 border rounded-lg"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        className="w-full max-w-xs py-3 bg-black text-white rounded-lg mb-3"
        onClick={handleLogin}
      >
        로그인
      </button>

      <button
        className="w-full max-w-xs py-3 border border-black rounded-lg"
        onClick={handleSignup}
      >
        회원가입
      </button>
    </div>
  );
}
