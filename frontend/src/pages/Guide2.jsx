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

      <div className="flex flex-col items-center px-6 py-4 flex-1 justify-between">
        <div className="flex flex-col items-center">
          <p className="text-base font-semibold text-center">주의사항</p>
          <div className="flex flex-col items-center gap-4 mt-4">
            {[
              { img: rashImage, label: '발진 병변' },
              { img: spotImage, label: '모반 병변' }
            ].map(({ img, label }) => (
              <div className="flex items-center gap-4" key={label}>
                <img src={img} alt={label} className="w-36 h-24 rounded-md object-cover" />
                <span className="text-m font-semibold">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-xl font-bold text-center leading-relaxed mt-6">
            밝은 장소에서 사진을 촬영해주세요.
            <br /><br />
            “발진 병변”은 멀리에서,<br />
            “모반 병변”은 가까이에서 촬영하는 것이 좋습니다.
          </p>
        </div>

        <div className="w-full px-4 pb-6">
          <button onClick={() => navigate('/photo')} className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium">다음</button>
        </div>
      </div>
    </div>
  );
}