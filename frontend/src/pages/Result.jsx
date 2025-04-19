// src/pages/Result.jsx
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col ">
      <Header />
      <BackButton />

      <div className="flex-1 px-6 py-4 flex flex-col items-center overflow-auto">

  {/* 상단 설명: 아래로 내리기 */}
  <p className="text-center font-bold text-base text-gray-700 mt-20 mb-2">
    당신의 질환은<br />
    <span className="text-base font-bold">85% 확률로</span>
  </p>

  <h2 className="text-2xl font-bold text-black mb-1">벌레물림</h2>
  <p className="text-base font-bold text-gray-700 mb-4">입니다</p>

  {/* 업로드된 이미지 사용 */}
  {imageUrl ? (
    <img
      src={imageUrl}
      alt="진단 이미지"
      className="w-60 h-60 object-cover rounded-md mt-10 mb-6"
    />
  ) : (
    <p className="text-red-500 text-sm mb-4">이미지가 없습니다</p>
  )}

  {/* 요약 */}
  <div className="text-base font-bold leading-relaxed text-center mt-20 mb-6">
    벌레물림은 곤충에 의해 발생하며, 피부가 붉게 부어오르고 가려움을 동반합니다.
    <br />
    대부분 자연적으로 치유되지만 감염 예방을 위해 긁지 않는 것이 중요합니다.
  </div>
</div>


      {/* 하단 버튼들 */}
      <div className="flex flex-col px-6 py-4 gap-3">
        <button
          onClick={() => alert('상세 설명 페이지로 이동 예정')}
          className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium"
        >
          더 알아보기
        </button>

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
