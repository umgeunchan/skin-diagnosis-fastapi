import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BackButton from "../components/BackButton";

// assets 폴더에 미리 추가해 두셔야 합니다
import hemangiomaImg from "../assets/화농성 육아종.png";
import nevusImg       from "../assets/흑색점.png";

export default function History2() {
  const navigate = useNavigate();
  const diagnoses = [
    { img: nevusImg, label: "흑색점" },
    { img: hemangiomaImg,      label: "화농육아종" },
  ];

  const handleClick = (label) => {
    const path = label === "흑색점" ? "/detail2" : "/detail";
    navigate(path, { state: { diagnosis: label } });
  };

  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="flex-1 p-4 sm:p-6">
        <h1 className="text-xl font-bold mb-6">최근 진단 이력</h1>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {diagnoses.map(({ img, label }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer"
              onClick={() => handleClick(label)}
            >
              <img
                src={img}
                alt={label}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover border shadow"
              />
              <span className="mt-3 text-sm sm:text-base font-semibold">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
