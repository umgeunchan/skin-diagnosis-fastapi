import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Guide() {
  const [step, setStep] = useState(1);

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`선택된 파일: ${file.name}`);
      // 👉 여기서 API 전송 or 미리보기 페이지로 이동 가능
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF6F5] px-6 py-4 flex flex-col">
      {/* 상단 바 */}
      <div className="flex items-center justify-between mb-6">
        {step > 1 ? (
          <button onClick={handleBack} className="text-xl">{'<'}</button>
        ) : <div className="w-6" />} {/* 왼쪽 비워두기 */}
        <p className="text-sm text-gray-600">사진 촬영 가이드</p>
        <div className="w-6" /> {/* 오른쪽 비워두기 */}
      </div>

      {/* 본문 */}
      <div className="flex-1 flex flex-col justify-center items-center text-center">
        {step === 1 && <p>✅ 얼굴 전체가 잘 보이도록 촬영해주세요.</p>}
        {step === 2 && <p>💡 밝은 환경에서 그림자 없이 촬영해주세요.</p>}
        {step === 3 && (
          <>
            <p className="mb-4">사진을 찍거나, 기존 사진을 첨부해주세요.</p>
            <label className="bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:opacity-90 transition">
              사진 제출하기
              <input
                type="file"
                accept="image/*"
                capture="environment"
                onChange={handleFileChange}
                className="hidden"
              />
            </label>
          </>
        )}
      </div>

      {/* 하단 버튼 */}
      {step < 3 && (
        <button
          onClick={handleNext}
          className="mt-10 w-full py-3 bg-[#F94D63] text-white rounded-lg"
        >
          다음
        </button>
      )}
    </div>
  );
}
