import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';

import acne from '../assets/acne.jpg';
import mosquito from '../assets/mosquitobite.jpg';
import shingles from '../assets/shingles.jpg';
import skincancer from '../assets/skincancer.jpg';

const diagnosisData = {
  여드름: {
    title: '여드름',
    image: acne,
    summary: '피지선 과다로 발생하는 염증성 피부 질환입니다.',
    description: '여드름은 피지 과다분비, 모공 막힘, 세균 증식으로 생기며, 손으로 짜면 흉터를 남길 수 있습니다. 식습관, 스트레스, 호르몬 변화가 영향을 미치며, 적절한 세안과 약물 치료가 필요합니다.',
    detail:
      `여드름은 다양한 형태로 나타납니다. 면포, 구진, 농포, 결절 등으로 발전하며, 특히 염증성 여드름은 조기 치료가 중요합니다.\n\n치료 방법은 국소 치료제, 경구 항생제, 레티노이드 등 다양하며, 피부 타입과 상태에 따라 전문적인 진료가 권장됩니다.\n\n일상생활에서는 자극적인 음식, 수면 부족, 스트레스 등을 피하는 것이 도움이 됩니다.`,
  },
  // 다른 항목도 동일 구조로 작성
  '벌레 물림': {
    title: '벌레 물림',
    image: mosquito,
    summary: '곤충에 의해 발생하는 피부 반응입니다.',
    description: '물린 부위가 붓고 가려우며, 대부분 며칠 내 자연 치유됩니다. 심한 반응이 나타나면 병원 진료가 필요합니다.',
    detail:
      `벌레 물림은 모기, 벼룩, 진드기, 개미, 벌 등에 의해 발생할 수 있습니다. 알레르기 반응이나 감염이 발생할 경우 심각해질 수 있어 증상 관찰이 필요합니다.\n\n가려움증 완화를 위한 냉찜질, 항히스타민제 사용이 일반적이며, 증상이 오래 지속되면 전문 진료가 필요합니다.`,
  },
  // ...대상포진, 피부암 등 생략
};

export default function Detail() {
  const location = useLocation();
  const diagnosis = location.state?.diagnosis || '여드름';
  const data = diagnosisData[diagnosis] || diagnosisData['여드름'];
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 px-6 py-4 flex flex-col items-center overflow-auto">
        <p className="text-center font-bold text-m text-gray-700 mb-2">
          당신의 질환은<br />
          <span className="text-m font-bold">85% 확률로</span>
        </p>

        <h2 className="text-2xl font-bold text-black mb-1">{data.title}</h2>
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

      <div className="flex flex-col px-6 py-4 gap-3">
        {!isExpanded && (
          <button
            onClick={() => setIsExpanded(true)}
            className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
          >
            더 알아보기
          </button>
        )}

        <button
            onClick={() => navigate('/photo')}
            className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
        >
        다시 진단하기
        </button>
      </div>
    </div>
  );
}
