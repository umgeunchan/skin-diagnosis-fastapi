// src/pages/Guide2.jsx
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import rashImage from '../assets/rash.jpg';
import spotImage from '../assets/spot.jpg';
import BackButton from '../components/BackButton';

export default function Guide2() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-[#FFF8F8]">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="flex flex-col justify-between px-6 py-4 flex-1">
        {/* 상단 텍스트 */}
        <p className="text-base font-semibold text-center">주의사항</p>

        {/* 이미지 블록 */}
        <div className="flex flex-col items-center gap-4 mt-4">
          <div className="flex items-center gap-4">
            <img src={rashImage} alt="발진 병변" className="w-36 h-24 rounded-md object-cover" />
            <span className="text-m font-semibold">발진 병변</span>
          </div>
          <div className="flex items-center gap-4">
            <img src={spotImage} alt="모반 병변" className="w-36 h-24 rounded-md object-cover" />
            <span className="text-m font-semibold">모반 병변</span>
          </div>
        </div>

        {/* 안내 문구 */}
        <div className="text-2xl font-bold text-center text-black leading-relaxed">
          <p>밝은 장소에서 <br />사진을 촬영해주세요.</p>
          <p className="mt-1">
            <br />“발진 병변”은 멀리에서,<br />
            “모반 병변”은 가까이에서 <br />촬영하는 것이 좋습니다.
          </p>
        </div>

        {/* 다음 버튼 */}
        <button
          onClick={() => navigate('/photo')}
          className="w-full mt-6 py-3 bg-black text-white rounded-lg text-m font-medium"
        >
          다음
        </button>
      </div>
    </div>
  );
}
