// src/pages/Menu.jsx
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";
import { FaChevronRight } from "react-icons/fa";

export default function Menu() {
  const navigate = useNavigate();

  const menuItems = [
    { label: "최근 진단 이력", path: "/history2" },
    { label: "주의사항", path: "/guide" },
    { label: "회원 정보 조회", path: "/profile" },
    { label: "앱 사용 가이드", path: "/help" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />

      <div className="px-6 py-6 space-y-4">
        <h1 className="text-xl font-bold text-gray-800 mb-2">메뉴</h1>

        {menuItems.map(({ label, path }, index) => (
          <div
            key={index}
            onClick={() => navigate(path)}
            className="flex justify-between items-center p-5 bg-white rounded-xl
            shadow border border-gray-200 cursor-pointer hover:bg-gray-50 transition"
          >
            <span className="text-sm font-medium">{label}</span>
            <FaChevronRight className="text-gray-400" />
          </div>
        ))}

        {/* 로그아웃 */}
        <div
          onClick={handleLogout}
          className="flex justify-between items-center p-5 bg-white rounded-xl shadow border border-red-100 cursor-pointer hover:bg-red-50 transition"
        >
          <span className="text-sm font-medium text-red-500">로그아웃</span>
          <FaChevronRight className="text-red-300" />
        </div>
      </div>
    </div>
  );
}
