// src/pages/Guide1.jsx
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import guideImage from '../assets/guide1.png';
import BackButton from '../components/BackButton';

export default function Guide() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#FFF8F8]">
      <Header />

      <div className="px-4 mt-2">
              <BackButton />
            </div>

      <div className="flex flex-col items-center px-6 py-4 flex-1 ">
        {/* 안내 텍스트 */}
        <p className="text-base font-semibold text-center">주의사항</p>

        {/* 이미지 */}
        <img
          src={guideImage}
          alt="주의사항 가이드"
          className="w-7/5 max-w-xs aspect-[3/4] object-contain"
        />

        {/* 설명 */}
        <p className="text-2xl font-bold text-center leading-relaxed mt-4">
          전면 카메라 대신<br />
          후면 카메라를 사용해주세요.
        </p>

        {/* 버튼 */}
        <button
          onClick={() => navigate('/guide2')}
          className="w-full mt-4 py-3 bg-black text-white rounded-lg text-m font-medium"
        >
          다음
        </button>
      </div>
    </div>
  );
}
