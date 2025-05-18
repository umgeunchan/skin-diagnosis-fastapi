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

      <div className="flex flex-col items-center px-6 py-4 flex-1 justify-between">
        <div className="flex flex-col items-center">
          <p className="text-base font-semibold text-center">주의사항</p>
          <img src={guideImage} alt="주의사항 가이드" className="w-full max-w-[240px] aspect-[3/4] object-contain mt-4" />
          <p className="text-xl font-bold text-center leading-relaxed mt-4">
            전면 카메라 대신<br />후면 카메라를 사용해주세요.
          </p>
        </div>

        <div className="w-full px-6 absolute bottom-6 left-0">
  <button
    onClick={() => navigate('/guide2')}
    className="w-full py-3 bg-black text-white rounded-lg text-m font-medium"
  >
    다음
  </button>
</div>
      </div>
    </div>
  );
}