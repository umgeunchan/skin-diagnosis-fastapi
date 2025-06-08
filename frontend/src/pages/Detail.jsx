// src/pages/Detail.jsx
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

// 화농육아종 이미지 (assets 폴더에 hemangioma.jpg로 추가해주세요)
import hemangioma from '../assets/화농성 육아종.png';

const diagnosisData = {
    '화농 육아종': {
    title: '화농 육아종',
    image: hemangioma,
    summary:
      '피부나 점막에 발생하는 양성 혈관 증식성 병변으로, 감염이 아닌 과도한 모세혈관 증식에 의해 생깁니다.',
    description:
      '빠르게 자라는 붉은색 또는 검붉은색의 혹으로, 표면이 쉽게 출혈하며 주로 손가락, 얼굴, 입술 등에 발생합니다.',
    detail: `원인:\n- 외상 (경미한 상처, 벌레 물림 등)\n- 호르몬 변화 (임신 중)\n\n치료:\n- 수술적 절제\n- 레이저 치료\n- 냉동치료\n- 전기소작술\n\n주의사항/생활습관:\n- 출혈이 잦을 경우 제거 고려\n- 재발 가능성 있음\n\n출처:\nGoogle 검색 (대한피부과의사회, 세브란스병원 관련 자료)`,
  },
};

export default function Detail() {
  const location = useLocation();
  const diagnosis = location.state?.diagnosis || '화농 육아종';
  const data = diagnosisData[diagnosis] || diagnosisData['화농 육아종'];
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 px-6 py-4 flex flex-col items-center overflow-auto">
        <p className="text-center font-bold text-m text-gray-700 mb-2">
          당신의 질환은<br />
          <span className="text-m font-bold">92% 확률로</span>
        </p>

        <h2 className="text-2xl font-bold text-black mb-1">
          {data.title}
        </h2>
        <p className="text-m font-bold text-gray-700 mb-4">입니다</p>

        <img
          src={data.image}
          alt={data.title}
          className="w-64 h-48 object-cover rounded-md mb-4"
        />

        <div className="text-m text-gray-800 leading-relaxed text-center mb-4 whitespace-pre-wrap">
          <p className="font-semibold mb-1">요약:</p>
          <p className="mb-3">{data.summary}</p>
          <p className="text-sm">{data.description}</p>
        </div>

        {/* 펼쳐지는 설명 */}
        {isExpanded && (
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap px-1 mb-6">
            {data.detail}
          </div>
        )}
      </div>

      {/* 더 알아보기 버튼만 남김 */}
      {!isExpanded && (
        <div className="px-6 py-4">
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
