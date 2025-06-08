// src/pages/Guide2.jsx
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import rashImage from "../assets/rash.jpg";
import spotImage from "../assets/spot.jpg";
import BackButton from "../components/BackButton";

export default function Guide2() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#FFF8F8]">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      {/* 본문 콘텐츠 */}
      <div className="flex-1 flex flex-col items-center px-6 pt-4 pb-8 overflow-y-auto max-w-screen-sm mx-auto w-full">
        {/* 안내 텍스트 */}
        <p className="text-base font-semibold text-center mt-2 mb-4">
          주의사항
        </p>

        {/* 이미지 블록 */}
        <div className="flex flex-col items-center gap-6 mt-10 mb-8">
          {[
            { img: rashImage, label: "발진 병변" },
            { img: spotImage, label: "모반 병변" },
          ].map(({ img, label }) => (
            <div className="flex items-center gap-4" key={label}>
              <img
                src={img}
                alt={label}
                className="w-36 h-24 md:w-48 md:h-32 rounded-md object-cover"
              />
              <span className="text-sm md:text-base font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* 안내 문구 */}
        <div className="text-center text-gray-800 text-lg md:text-xl font-bold leading-relaxed">
          <p className="mb-2">밝은 장소에서 사진을 촬영해주세요.</p>
          <p className="mt-2">
            “발진 병변”은 멀리에서,
            <br />
            “모반 병변”은 가까이에서 촬영하는 것이 좋습니다.
          </p>
        </div>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="px-4 pb-20 max-w-screen-sm w-full mx-auto">
        <button
          onClick={() => navigate("/photo2")}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          다음
        </button>
      </div>
    </div>
  );
}
