// src/pages/SkinTipDetail.jsx
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

import news1 from "../assets/news1.jpg";
import news2 from "../assets/news2.jpg";
import news3 from "../assets/news3.jpg";

const tipDetails = [
  {
    title: "여드름 흉터 관리",
    content: `여드름 흉터는 피부 손상 후 자연적으로 회복되지 않은 흔적으로 남습니다. 
세안 후 보습제를 사용하고 자극을 피하는 것이 중요합니다. 
심한 흉터는 피부과 시술이 도움이 될 수 있습니다.`,
    img: news1,
  },
  {
    title: "자외선 차단",
    content: `자외선은 피부 노화, 기미, 주근깨를 유발합니다. 
매일 아침 자외선 차단제를 발라 UVA/UVB로부터 피부를 보호하세요.`,
    img: news2,
  },
  {
    title: "건조한 피부 관리",
    content: `건조한 피부는 수분 부족으로 인한 각질과 갈라짐을 유발합니다. 
충분한 수분 섭취와 수분크림 사용으로 촉촉한 피부를 유지하세요.`,
    img: news3,
  },
];

export default function SkinCareDetail() {
  const { id } = useParams();
  const detail = tipDetails[id];

  return (
    <div className="min-h-screen bg-[#FFF8F8]">
      <Header />
      <div className="px-4 pt-2 pb-20 max-w-screen-sm mx-auto">
        <BackButton />
        <div className="bg-white rounded-lg shadow overflow-hidden mt-4">
          <img
            src={detail.img}
            alt={detail.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{detail.title}</h2>
            <p className="text-sm text-gray-700 whitespace-pre-wrap">
              {detail.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
