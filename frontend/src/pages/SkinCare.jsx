// src/pages/SkinCare.jsx
import Header from "../components/Header";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const tips = [
  {
    title: "여드름 흉터 관리",
    content: "여드름이 악화되지 않도록 세안 후 보습제를 꾸준히 사용하세요.",
    img: news1,
  },
  {
    title: "자외선 차단",
    content: "자외선 차단제를 매일 아침 발라 피부 노화를 예방하세요.",
    img: news2,
  },
  {
    title: "건조한 피부 관리",
    content: "수분크림과 충분한 수분 섭취는 필수입니다.",
    img: news3,
  },
];

export default function SkinCare() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#FFF8F8]">
      <Header />
      <div className="px-4 pt-2 pb-20 max-w-screen-sm mx-auto">
        <BackButton />
        <h1 className="text-xl font-bold mt-4 mb-6">스킨 케어 팁</h1>

        {tips.map((tip, idx) => (
          <div
            key={idx}
            className="mb-6 bg-white rounded-lg shadow cursor-pointer"
            onClick={() => navigate(`/skintip/${idx}`)}
          >
            <img
              src={tip.img}
              alt={tip.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-md font-semibold mb-1">{tip.title}</h2>
              <p className="text-sm text-gray-700">{tip.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
