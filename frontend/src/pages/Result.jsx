import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { useState } from 'react';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const diagnosis = location.state?.diagnosis || '벌레 물림';

  // 진단별 상세 설명
  const detailDescriptions = {
    '벌레 물림': `벌레 물림은 모기, 진드기, 벼룩 등 다양한 곤충에 의해 발생합니다.
가려움증과 부종이 주된 증상이며, 대부분은 며칠 내 자연 치유됩니다.
하지만 물린 부위를 긁거나 2차 감염이 생기면 심해질 수 있으므로 관찰이 필요합니다.`,
    // 다른 병명도 원하면 추가 가능
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 px-6 py-4 flex flex-col items-center overflow-auto">
        <p className="text-center font-bold text-m text-gray-700 mb-2">
          당신의 질환은<br />
          <span className="text-m font-bold">85% 확률로</span>
        </p>

        <h2 className="text-2xl font-bold text-black mb-1">{diagnosis}</h2>
        <p className="text-m font-bold text-gray-700 mb-4">입니다</p>

        {imageUrl ? (
          <img
            src={imageUrl}
            alt="진단 이미지"
            className="w-64 h-48 object-cover rounded-md mb-4"
          />
        ) : (
          <p className="text-red-500 text-sm mb-4">이미지가 없습니다</p>
        )}

        <div className="text-m text-gray-800 leading-relaxed text-center mb-6">
          벌레물림은 곤충에 의해 발생하며, 피부가 붉게 부어오르고 가려움을 동반합니다.
          대부분 자연적으로 치유되지만 감염 예방을 위해 긁지 않는 것이 중요합니다.
        </div>

        {isExpanded && (
          <div className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap px-1 mb-6">
            {detailDescriptions[diagnosis]}
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
