import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";
import acne from "../assets/acne.jpg";
import mosquito from "../assets/mosquitobite.jpg";
import shingles from "../assets/shingles.jpg";
import skincancer from "../assets/skincancer.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col bg-[#FCF6F5]">
      <Header />

      <div className="flex-1 overflow-y-auto px-4 pb-4 max-w-screen-sm mx-auto w-full">
        {/* 스킨케어 팁 섹션 */}
        <div className="flex items-center justify-between mt-20 mb-2">
          <h2 className="text-lg font-semibold">스킨 케어 팁</h2>
          <span
            onClick={() => navigate("/care")}
            className="text-sm text-gray-500 cursor-pointer"
          >
            {">"}
          </span>
        </div>

        {/* 뉴스 카드 */}
        <div className="flex space-x-4 overflow-x-auto mb-8">
          {[news1, news2, news3].map((img, idx) => {
            const titles = [
              "여드름 흉터 : 어떻게 없앨 수 있을까?",
              "자외선 차단제 : 올바르게 선택하고 바르는 방법",
              "자외선이 피부에 끼치는 영향을 알아보자",
            ];

            return (
              <div
                key={idx}
                onClick={() => navigate(`/skintip/${idx}`)} // 클릭 시 이동
                className="min-w-[160px] bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={`뉴스${idx + 1}`}
                  className="h-24 w-full object-cover"
                />
                <div className="p-2 text-xs">
                  <p className="text-gray-600 font-semibold mb-1">News</p>
                  <p className="text-[11px] text-gray-700 leading-tight">
                    {titles[idx]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 최근 진단 */}
        <div className="flex items-center justify-between mt-20 mb-2">
          <h2 className="text-lg font-semibold">최근 진단 이력</h2>
          <span
            onClick={() => navigate("/history")}
            className="text-sm text-gray-500 cursor-pointer"
          >
            {">"}
          </span>
        </div>

        <div className="flex space-x-4 overflow-x-auto mb-10">
          {[
            { img: acne, label: "여드름" },
            { img: mosquito, label: "벌레 물림" },
            { img: shingles, label: "대상포진" },
            { img: skincancer, label: "피부암" },
          ].map(({ img, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer"
              onClick={() =>
                navigate("/detail", { state: { diagnosis: label } })
              }
            >
              <img
                src={img}
                alt={label}
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="text-xs mt-1">{label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* 진단 버튼 - 하단 고정 */}
      <div className="px-4 pb-20 max-w-screen-sm w-full mx-auto">
        <button
          onClick={() => navigate("/guide")}
          className="w-full py-3 bg-black text-white rounded-lg text-m font-medium hover:opacity-90 transition"
        >
          진단하기
        </button>
      </div>
    </div>
  );
}
