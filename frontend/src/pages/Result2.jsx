// src/pages/Result2.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function Result2() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  // 흑색점 정보
  const info = {
    병명: "흑색점",
    정의:
      "피부에 멜라닌 색소가 과도하게 침착되어 나타나는 갈색 또는 검은색 반점입니다. 일반적인 '점'의 한 형태이며, 악성 흑색종과는 구별됩니다.",
    증상: [
      "원형 또는 타원형의 균일한 갈색 또는 검은색 반점",
      "대부분 작고 평평함",
      "신체 어느 부위든 발생 가능",
    ],
    원인: ["유전적 요인", "자외선 노출", "피부 노화"],
    대처법_치료법: [
      "대부분 치료 불필요 (양성 병변)",
      "미용 목적 시 레이저 치료 또는 수술적 제거",
      "악성 변화 의심 시 조직검사",
    ],
    추천_약: ["해당 없음 (약물 치료보다는 제거 시술)"],
    주의사항_생활습관: [
      "점의 모양, 크기, 색깔 변화 주시 (비대칭성, 불규칙한 경계, 색깔 변화, 지름 6mm 이상, 크기 변화 - ABCDE 규칙)",
      "새로운 점이 생기거나 기존 점에 이상이 있을 시 피부과 진찰",
    ],
    출처:
      "Google 검색 (대한피부과의사회, 삼성서울병원 관련 자료)",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4 max-w-screen-sm w-full mx-auto">
        {/* 확률 & 병명 */}
        <p className="text-center font-bold text-base text-gray-700 mb-2 leading-snug">
          당신의 질환은
          <br />
          <span className="text-base font-bold">89% 확률로</span>
        </p>
        <h2 className="text-2xl font-bold text-black mb-1">{info.병명}</h2>
        <p className="text-base font-bold text-gray-700 mb-4">입니다</p>

        {/* 업로드 이미지 */}
        {imageUrl && (
          <div className="flex justify-center mb-6">
            <img
              src={imageUrl}
              alt="진단 이미지"
              className="w-[85%] max-w-xs h-auto object-cover rounded-md shadow"
            />
          </div>
        )}

        {/* 정의 (전체) */}
        <p className="text-sm text-gray-800 mb-6 text-center">{info.정의}</p>

        {/* 상세 정보 (버튼 클릭 시) */}
        {isExpanded && (
          <>
            {/* 증상 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">증상</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {info.증상.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </section>

            {/* 원인 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">원인</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {info.원인.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </section>

            {/* 대처법·치료법 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                대처법·치료법
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {info.대처법_치료법.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </section>

            {/* 추천 약 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">추천 약</h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {info.추천_약.map((m, i) => (
                  <li key={i}>{m}</li>
                ))}
              </ul>
            </section>

            {/* 주의사항·생활습관 */}
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2">
                주의사항·생활습관
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                {info.주의사항_생활습관.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </section>

            {/* 출처 */}
            <section className="mb-10">
              <h3 className="text-lg font-semibold mb-2">출처</h3>
              <p className="text-sm text-gray-600">{info.출처}</p>
            </section>
          </>
        )}
      </div>

      {/* 하단 버튼 그룹 (10px 간격) */}
      <div className="px-6 pb-20 max-w-screen-sm w-full mx-auto flex flex-col gap-y-2.5">
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
          >
            더 알아보기
          </button>
        )}
        <button
          onClick={() => navigate("/guide2")}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
        >
          다시 진단하기
        </button>
      </div>
    </div>
  );
}
