// src/pages/PhotoUpload.jsx
import Header from '../components/Header';
import BackButton from '../components/BackButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUpload } from 'react-icons/fa';

export default function PhotoUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
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
      alert('사진을 업로드하거나 촬영해주세요.');
      return;
    }
    navigate('/result', { state: { imageUrl: selectedImage } });
  };

  return (
    <div className="relative h-screen bg-[#FFF8F8] flex flex-col">
      <Header />
      <BackButton />

      <div className="flex-1 flex flex-col items-center justify-center px-4">
        <label htmlFor="file-upload" className="cursor-pointer">
          {selectedImage ? (
            <img src={selectedImage} alt="선택한 이미지" className="w-60 h-60 object-cover rounded-md shadow" />
          ) : (
            <div className="w-60 h-60 bg-white border border-gray-300 rounded-md flex items-center justify-center">
              <FaUpload className="text-3xl text-gray-500" />
            </div>
          )}
        </label>

        <input id="file-upload" type="file" accept="image/*" capture="environment" onChange={handleImageChange} className="hidden" />

        <p className="text-xl mt-6 text-center font-bold text-gray-700">
          사진을 업로드하거나<br />촬영해주세요.
        </p>
      </div>

      <div className="px-4 pb-6">
        <button onClick={handleSubmit} className="w-full py-3 bg-black text-white rounded-lg text-sm font-medium hover:opacity-90 transition">제출</button>
      </div>
    </div>
  );
}