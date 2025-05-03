// src/pages/History.jsx
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { useNavigate } from 'react-router-dom';
import acne from '../assets/acne.jpg';
import mosquito from '../assets/mosquitobite.jpg';
import shingles from '../assets/shingles.jpg';
import skincancer from '../assets/skincancer.jpg';

export default function History() {
  const navigate = useNavigate();
  const diagnoses = [
    { img: acne, label: "여드름" },
    { img: mosquito, label: "벌레 물림" },
    { img: shingles, label: "대상포진" },
    { img: skincancer, label: "피부암" },
  ];

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="flex-1 p-4 sm:p-6">
        <h1 className="text-xl font-bold mb-6">최근 진단 이력</h1>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {diagnoses.map(({ img, label }, idx) => (
    <div
      key={idx}
      className="flex flex-col items-center cursor-pointer"
      onClick={() => navigate('/detail', { state: { diagnosis: label } })}
    >
      <img
        src={img}
        alt={label}
        className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border shadow"
      />
      <span className="mt-3 text-sm sm:text-base font-semibold">{label}</span>
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
