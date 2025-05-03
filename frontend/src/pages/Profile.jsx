import { useEffect, useState } from 'react';
import Header from '../components/Header';
import BackButton from '../components/BackButton';

export default function Profile() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('user1');
  const [address, setAddress] = useState('');

  // 비밀번호 변경 모달 상태
  const [showModal, setShowModal] = useState(false);
  const [currentPw, setCurrentPw] = useState('');
  const [newPw, setNewPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser?.email) {
      setEmail(storedUser.email);
    }
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

  const handlePasswordChange = () => {
    if (!currentPw || !newPw || !confirmPw) {
      alert('모든 필드를 입력해주세요.');
      return;
    }
    if (newPw !== confirmPw) {
      alert('새 비밀번호가 일치하지 않습니다.');
      return;
    }

    // 여기에 실제 백엔드 요청 로직을 추가할 수 있음
    alert('비밀번호가 성공적으로 변경되었습니다.');
    setShowModal(false);
    setCurrentPw('');
    setNewPw('');
    setConfirmPw('');
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
          <div className="bg-gray-100 rounded px-4 py-3 text-gray-600">
            {email || '로그인 정보를 불러올 수 없습니다'}
          </div>
        </div>

        {/* 사용자명 */}
        <div className="space-y-1">
          <p className="font-medium">사용자명</p>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded px-4 py-3 text-gray-800 flex-1">
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
            <div className="bg-gray-100 rounded px-4 py-3 text-gray-500 flex-1">
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

        {/* 비밀번호 변경 */}
        <div className="space-y-1">
          <p className="font-medium">비밀번호</p>
          <div className="flex items-center gap-2">
            <div className="bg-gray-100 rounded px-4 py-3 text-gray-500 flex-1">
              ••••••••
            </div>
            <button
              onClick={() => setShowModal(true)}
              className="text-sm bg-black text-white px-3 py-1.5 rounded"
            >
              비밀번호 변경
            </button>
          </div>
        </div>
      </div>

      {/* 모달 */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-80 shadow-md">
            <h2 className="text-lg font-bold mb-4">비밀번호 변경</h2>

            <input
              type="password"
              placeholder="현재 비밀번호"
              value={currentPw}
              onChange={(e) => setCurrentPw(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded text-sm"
            />
            <input
              type="password"
              placeholder="새 비밀번호"
              value={newPw}
              onChange={(e) => setNewPw(e.target.value)}
              className="w-full mb-2 px-3 py-2 border rounded text-sm"
            />
            <input
              type="password"
              placeholder="새 비밀번호 확인"
              value={confirmPw}
              onChange={(e) => setConfirmPw(e.target.value)}
              className="w-full mb-4 px-3 py-2 border rounded text-sm"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm px-3 py-1 bg-gray-300 rounded"
              >
                취소
              </button>
              <button
                onClick={handlePasswordChange}
                className="text-sm px-3 py-1 bg-black text-white rounded"
              >
                변경
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
