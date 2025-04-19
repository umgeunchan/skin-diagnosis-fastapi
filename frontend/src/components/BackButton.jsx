// src/components/BackButton.jsx
import { useNavigate } from 'react-router-dom';
import { FaChevronLeft } from 'react-icons/fa';

export default function BackButton({ className = '' }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className={`absolute top-14 left-2 text-black text-lg p-2 z-10 ${className}`}
      aria-label="뒤로 가기"
    >
      <FaChevronLeft />
    </button>
  );
}
