// src/pages/Result.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;


  const info = {
    병명: "화농육아종",
    정의:
      "피부나 점막에 발생하는 양성 혈관 증식성 병변으로, 이름과는 달리 감염이 아닌 과도한 모세혈관 증식에 의해 생깁니다.",
    증상: [
      "빠르게 자라는 붉은색 또는 검붉은색의 혹",
      "표면이 잘 허물어져 쉽게 출혈",
      "주로 손가락, 얼굴, 입술 등에 발생",
    ],
    원인: ["외상 (경미한 상처, 벌레 물림 등)", "호르몬 변화 (임신 중)"],
    대처법_치료법: [
      "수술적 절제",
      "레이저 치료",
      "냉동치료",
      "전기소작술",
    ],
    추천_약: ["해당 없음 (약물 치료보다는 제거 시술)"],
    주의사항_생활습관: [
      "출혈이 잦을 경우 제거 고려",
      "재발 가능성 있음",
    ],
    출처:
      "Google 검색 (대한피부과의사회, 세브란스병원 관련 자료)",
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      {/* 스크롤 가능한 본문 */}
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4 max-w-screen-sm w-full mx-auto">
        {/* 확률 & 병명 */}
        <p className="text-center font-bold text-base text-gray-700 mb-2 leading-snug">
          당신의 질환은
          <br />
          <span className="text-base font-bold">92% 확률로</span>
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

        {/* 항상 전체 정의를 보여줌 */}
        <p className="text-sm text-gray-800 mb-6 text-center">
          {info.정의}
        </p>

        {/* 확장 후에만 자세한 항목들 렌더링 */}
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

      {/* 하단 버튼 묶음: 더 알아보기 + 다시 진단하기 */}
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
          onClick={() => navigate("/guide3")}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
        >
          다시 진단하기
        </button>
      </div>
    </div>
  );
}
