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
          <h2 className="text-lg font-semibold mb-2">1. 진단 시작</h2>
          <p className="text-sm leading-relaxed">
            홈 화면 하단의 진단하기 버튼을 눌러 진단을 시작합니다. 이후
            주의사항을 확인한 후 사진을 촬영하거나 업로드할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">2. 사진 제출</h2>
          <p className="text-sm leading-relaxed">
            피부 부위가 선명하게 보이도록 후면 카메라로 촬영하거나, 저장된
            사진을 선택하여 업로드할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">3. 진단 결과 확인</h2>
          <p className="text-sm leading-relaxed">
            제출된 이미지는 AI가 분석하며, 가장 유력한 피부 질환과 확률이 화면에
            표시됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold mb-2">4. 후속 조치</h2>
          <p className="text-sm leading-relaxed">
            “더 알아보기”버튼을 눌러 해당 질환에 대한 상세 정보를 확인할 수
            있고, “다시 진단하기” 버튼을 통해 새로운 사진으로 재진단할 수
            있습니다.
          </p>
        </section>
      </div>
    </div>
  );
}
