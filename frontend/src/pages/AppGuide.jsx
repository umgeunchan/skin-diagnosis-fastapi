// src/pages/AppGuide.jsx
import Header from "../components/Header";
import BackButton from "../components/BackButton";

export default function AppGuide() {
  return (
    <div className="bg-[#FFF8F8] min-h-screen flex flex-col">
      <Header />
      <div className="px-4 mt-2">
        <BackButton />
      </div>

      <div className="px-6 py-6 text-gray-800 space-y-6">
        <h1 className="text-2xl font-bold">앱 사용 가이드</h1>

        <section>
          <h2 className="text-lg font-semibold mb-2"> 중요 알림</h2>
          <p className="text-sm text-red-600 leading-relaxed">
            이 앱은 진단을 보조하기 위한 도구입니다. 
            증상이 지속되거나 의심스러운 경우 가까운 병원에서 전문의 진료를 받으시기 바랍니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">회원가입 및 로그인</h2>
          <p className="text-sm leading-relaxed">
            앱 사용을 위해 회원가입이 필요합니다.  
            회원가입 후 로그인하면 개인 진단 이력을 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">진단 시작</h2>
          <p className="text-sm leading-relaxed">
            홈 화면 하단의 “진단하기” 버튼을 눌러 진단을 시작합니다.  
            먼저 주의사항 팝업을 확인한 후, “다음”을 눌러 이미지 업로드 페이지로 이동합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">사진 제출</h2>
          <p className="text-sm leading-relaxed">
            후면 카메라로 피부 부위를 선명하게 촬영하거나,  
            갤러리에서 저장된 이미지를 선택하여 업로드하세요.  
            촬영 전 조명이 충분한지 확인하면 더 정확한 결과를 얻을 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">진단 결과 확인</h2>
          <p className="text-sm leading-relaxed">
            AI가 이미지를 분석하여 가장 유력한 질환명과 확률을 표시합니다.  
            결과 페이지에서 이미지를 확인하고, 간략 정의를 살펴볼 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">자세한 정보 확인</h2>
          <p className="text-sm leading-relaxed">
            결과 페이지의 “더 알아보기” 버튼을 눌러,  
            해당 질환의 정의·증상·원인·치료법·주의사항 등을 한눈에 확인하세요.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">진단 이력 보기</h2>
          <p className="text-sm leading-relaxed">
            메뉴 버튼 → “최근 진단 이력”에서  
            이전에 진단한 결과들을 확인할 수 있습니다.  
            각 이력을 탭하면 해당 상세 페이지로 이동합니다.
          </p>
        </section>

        
      </div>
    </div>
  );
}
