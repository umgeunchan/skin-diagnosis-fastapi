import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import guideImage from "../assets/guide1.png";
import BackButton from "../components/BackButton";

export default function Guide() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#FFF8F8] overflow-hidden">
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

        {/* 이미지 */}
        <img
          src={guideImage}
          alt="주의사항 가이드"
          className="w-[70%] max-w-xs aspect-[3/4] object-contain mt-10"
        />

        {/* 설명 */}
        <p className="text-lg md:text-xl font-bold text-center leading-relaxed mt-6">
          전면 카메라 대신
          <br />
          후면 카메라를 사용해주세요.
        </p>
      </div>

      {/* 하단 고정 버튼 */}
      <div className=" px-4 pb-20 max-w-screen-sm w-full mx-auto">
        <button
          onClick={() => navigate("/guide2")}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition"
        >
          다음
        </button>
      </div>
    </div>
  );
}
