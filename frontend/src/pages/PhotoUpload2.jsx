// src/pages/PhotoUpload2.jsx
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUpload } from "react-icons/fa";

export default function PhotoUpload2() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
    }
  };

  const handleSubmit = () => {
    if (!selectedImage) {
      alert("사진을 업로드하거나 촬영해주세요.");
      return;
    }
    // 로딩 시작
    setIsLoading(true);
    // 4초 뒤 결과 페이지로 이동
    setTimeout(() => {
      navigate("/result2", { state: { imageUrl: selectedImage } });
    }, 2500);
  };

  return (
    <div className="h-screen flex flex-col bg-[#FFF8F8] relative">
      <Header />
      <BackButton />

      {/* 본문 콘텐츠 */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 pt-4 pb-8 overflow-y-auto max-w-screen-sm w-full mx-auto">
        <label htmlFor="file-upload-2" className="cursor-pointer">
          {selectedImage ? (
            <img
              src={selectedImage}
              alt="선택한 이미지"
              className="w-60 h-60 object-cover rounded-md shadow"
            />
          ) : (
            <div className="w-60 h-60 bg-white border border-gray-300 rounded-md flex items-center justify-center">
              <FaUpload className="text-3xl text-gray-500" />
            </div>
          )}
        </label>

        <input
          id="file-upload-2"
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleImageChange}
          className="hidden"
        />

        <p className="text-lg md:text-xl mt-6 text-center font-bold text-gray-700">
          사진을 업로드하거나
          <br /> 촬영해주세요.
        </p>
      </div>

      {/* 하단 고정 버튼 */}
      <div className="px-4 pb-20 max-w-screen-sm w-full mx-auto">
        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className={`w-full py-3 text-white rounded-lg text-sm font-medium transition
            ${isLoading ? "bg-gray-400 cursor-not-allowed" : "bg-black hover:opacity-90"}`}
        >
          제출
        </button>
      </div>

      {/* 로딩 오버레이 */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="text-white text-lg font-medium">
            진단중입니다...
          </div>
        </div>
      )}
    </div>
  );
}
