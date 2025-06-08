// src/pages/Detail2.jsx
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

// 흑색점 이미지: assets 폴더에 '흑색점.png'로 추가해주세요
import nevusImg from '../assets/흑색점.png';

export default function Detail2() {
  const location = useLocation();
  // state.diagnosis 무시하고 항상 흑색점 보여줍니다
  const [isExpanded, setIsExpanded] = useState(false);

  const data = {
    title: '흑색점',
    image: nevusImg,
    summary:
      '피부에 멜라닌 색소가 과도하게 침착되어 나타나는 갈색 또는 검은색 반점입니다.',
    description:
      '원형 또는 타원형의 균일한 갈색 또는 검은색 반점으로 대부분 작고 평평하며, 신체 어느 부위든 발생 가능합니다.',
    detail: `증상:
- 원형 또는 타원형의 균일한 갈색 또는 검은색 반점
- 대부분 작고 평평함
- 신체 어느 부위든 발생 가능

원인:
- 유전적 요인
- 자외선 노출
- 피부 노화

대처법·치료법:
- 대부분 치료 불필요 (양성 병변)
- 미용 목적 시 레이저 치료 또는 수술적 제거
- 악성 변화 의심 시 조직검사

추천 약:
- 해당 없음 (약물 치료보다는 제거 시술)

주의사항·생활습관:
- 점의 모양, 크기, 색깔 변화 주시 (비대칭성, 불규칙한 경계, 색깔 변화, 지름 6mm 이상, 크기 변화 - ABCDE 규칙)
- 새로운 점이 생기거나 기존 점에 이상이 있을 시 피부과 진찰

출처:
Google 검색 (대한피부과의사회, 삼성서울병원 관련 자료)`,
  };

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 px-6 pt-6 pb-4 overflow-y-auto max-w-screen-sm w-full mx-auto text-center">
        {/* 확률 & 병명 */}
        <p className="font-bold text-base text-gray-700 mb-2 leading-snug">
          당신의 질환은<br />
          <span className="font-bold">89% 확률로</span>
        </p>
        <h2 className="text-2xl font-bold text-black mb-1">{data.title}</h2>
        <p className="font-bold text-gray-700 mb-4">입니다</p>

        {/* 이미지 */}
        <img
          src={data.image}
          alt={data.title}
          className="w-64 h-48 object-cover rounded-md mb-4 mx-auto"
        />

        {/* 요약/설명 */}
        <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap mb-6">
          <p className="font-semibold mb-1">요약:</p>
          <p className="mb-3">{data.summary}</p>
          <p>{data.description}</p>
        </div>

        {/* 상세 정보 (토글) */}
        {isExpanded && (
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap px-1 mb-6">
            {data.detail}
          </div>
        )}
      </div>

      {/* 더 알아보기 버튼만 */}
      {!isExpanded && (
        <div className="px-6 pb-20">
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
          >
            더 알아보기
          </button>
        </div>
      )}
    </div>
  );
}
