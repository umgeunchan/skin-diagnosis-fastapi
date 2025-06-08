import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

export default function Profile() {
  const [username, setUsername] = useState('user1');
  const [address, setAddress] = useState('');

  useEffect(() => {
    // 이메일은 고정값으로 설정
  }, []);

  const handleChangeUsername = () => {
    const newName = prompt('새 사용자명을 입력하세요', username);
    if (newName && newName.trim()) {
      setUsername(newName.trim());
    }
  };

  const handleAddressSearch = () => {
    new window.daum.Postcode({
      oncomplete: function (data) {
        setAddress(data.address);
      },
    }).open();
  };

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="px-6 py-4 space-y-5 text-sm text-gray-800">
        <h2 className="text-xl font-bold mb-2">회원 정보</h2>

        {/* 이메일 */}
        <div className="space-y-1">
          <p className="font-medium">이메일</p>
          <div className="bg-gray-100 rounded px-4 py-3 text-black">
            user1@gmail.com
          </div>
        </div>

        {/* 사용자명 */}
        <div className="space-y-1">
          <p className="font-medium">사용자명</p>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded px-4 py-3 text-black flex-1">
              {username}
            </div>
            <button
              onClick={handleChangeUsername}
              className="text-sm bg-black text-white px-3 py-1.5 rounded"
            >
              이름 변경
            </button>
          </div>
        </div>

        {/* 주소 */}
        <div className="space-y-1">
          <p className="font-medium">주소</p>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded px-4 py-3 text-black flex-1">
              {address || '주소를 입력해주세요'}
            </div>
            <button
              onClick={handleAddressSearch}
              className="text-sm bg-black text-white px-3 py-1.5 rounded"
            >
              주소 입력
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
