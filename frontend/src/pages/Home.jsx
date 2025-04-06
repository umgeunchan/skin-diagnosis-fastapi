import { FaBars, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#FCF6F5] min-h-screen px-4 pb-16">
      {/* 상단 헤더 */}
      <header className="flex items-center justify-between py-4">
        <FaBars className="text-xl" />
        <h1 className="text-xl font-bold text-[#111]">DermaScan</h1>
        <div className="w-6" /> {/* 오른쪽 여백용 */}
      </header>

      {/* 검색창 */}
      <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-sm mb-4">
        <FaSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="flex-1 text-sm bg-transparent focus:outline-none"
        />
      </div>

      {/* 커뮤니티 배너 */}
      <div className="rounded-xl overflow-hidden mb-6">
        <img
          src="/assets/community-banner.png"
          alt="커뮤니티"
          className="w-full object-cover"
        />
      </div>

      {/* 스킨케어 팁 */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">스킨 케어 팁</h2>
        <span className="text-sm text-gray-500">{'>'}</span>
      </div>

      {/* 스킨케어 뉴스 가로 스크롤 */}
      <div className="flex space-x-4 overflow-x-auto mb-6">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="min-w-[160px] bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={`/assets/news${item}.jpg`}
              alt={`뉴스${item}`}
              className="h-24 w-full object-cover"
            />
            <div className="p-2 text-xs">
              <p className="text-gray-600 font-semibold mb-1">News</p>
              <p className="text-[11px] text-gray-700 leading-tight">
                여드름 흉터 : 어떻게 없앨 수 있을까?
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 최근 기록 */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold">최근</h2>
        <span className="text-sm text-gray-500">{'>'}</span>
      </div>

      <div className="flex space-x-4 overflow-x-auto mb-6">
        {["여드름", "벌레 물림", "피부암", "대상포진"].map((label, i) => (
          <div key={i} className="flex flex-col items-center">
            <img
              src={`/assets/record${i + 1}.jpg`}
              alt={label}
              className="w-16 h-16 rounded-full object-cover"
            />
            <span className="text-xs mt-1">{label}</span>
          </div>
        ))}
      </div>

      {/* 촬영하기 버튼 */}
      <button className="w-full py-3 bg-black text-white rounded-lg text-center text-sm font-medium hover:opacity-90 transition">
        촬영하기
      </button>
    </div>
  );
}
