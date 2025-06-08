import { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {
  const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]       = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/login"); // 가입 후 홈으로
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white px-4">
      <form
        onSubmit={handleSignUp}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-[390px]"
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
          회원가입
        </h2>
        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="이메일"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 sm:p-4 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="비밀번호"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 sm:p-4 border rounded mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button
          type="submit"
          className="w-full py-3 sm:py-4 bg-blue-600 text-white text-base sm:text-lg font-semibold rounded hover:bg-blue-700 transition"
        >
          회원가입
        </button>

        <p className="mt-4 text-center text-sm">
          
          <Link
            to="/login"
            className="text-blue-600 font-medium hover:underline"
          >
            로그인
          </Link>
        </p>
      </form>
    </div>
  );
}
