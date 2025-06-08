import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

import acne from "../assets/acne.jpg";
import mosquito from "../assets/mosquitobite.jpg";
import shingles from "../assets/shingles.jpg";
import skincancer from "../assets/skincancer.jpg";

export default function History() {
  const navigate = useNavigate();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("history") || "[]");
    setHistory(stored);
  }, []);

  const imgMap = {
    여드름: acne,
    "벌레 물림": mosquito,
    대상포진: shingles,
    피부암: skincancer,
  };

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="flex-1 p-4 sm:p-6">
        <h1 className="text-xl font-bold mb-6">최근 진단 이력</h1>

        {history.length === 0 ? (
          <p className="text-center text-gray-500 mt-10">
            진단 이력이 없습니다.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {history.map((label, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center cursor-pointer"
                onClick={() =>
                  navigate("/detail", { state: { diagnosis: label } })
                }
              >
                <img
                  src={imgMap[label]}
                  alt={label}
                  className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border shadow"
                />
                <span className="mt-3 text-sm sm:text-base font-semibold">
                  {label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
