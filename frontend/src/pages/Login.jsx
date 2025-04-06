import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "onionmat1@gmail.com") {
      navigate("/home");
    } else {
      alert("이메일이 정확하지 않습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF6F5] flex flex-col items-center justify-center px-6 py-10">
      <h1 className="text-3xl font-semibold mb-2">DermaScan</h1>
      <p className="text-md text-gray-700 mb-8">Create an account</p>
      <p className="text-sm text-gray-500 mb-6">Enter your email to sign up for this app</p>

      <input
        type="email"
        placeholder="email@domain.com"
        className="w-full max-w-xs px-4 py-3 mb-4 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#F94D63]"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        className="w-full max-w-xs py-3 bg-black text-white rounded-lg font-medium text-sm hover:opacity-90 transition mb-4"
        onClick={handleLogin}
      >
        Continue
      </button>

      <div className="w-full max-w-xs space-y-3 mb-6">
  <button className="w-full py-3 bg-white border border-gray-300 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-100 transition">
    <img
      src="https://www.svgrepo.com/show/475656/google-color.svg"
      alt="Google"
      style={{ width: '20px', height: '20px' }}
    />
    Continue with Google
  </button>

  <button className="w-full py-3 bg-gray-100 rounded-lg flex items-center justify-center gap-2 text-sm hover:bg-gray-200 transition">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
      alt="Apple"
      style={{ width: '20px', height: '20px' }}
    />
    Continue with Apple
  </button>
</div>
    </div>
  );
}
