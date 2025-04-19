// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import { FaBars, FaHome } from 'react-icons/fa';

export default function Header() {
  const navigate = useNavigate();

  return (
    <header className="absolute top-0 left-0 w-full flex justify-between items-center px-4 py-3 bg-[#FFF8F8] border-b border-gray-300">
      <button onClick={() => navigate('/menu')}>
        <FaBars size={20} />
      </button>
      <h1 className="text-lg font-bold">DermaScan</h1>
      <button onClick={() => navigate('/')}>
        <FaHome size={20} />
      </button>
    </header>
  );
}
