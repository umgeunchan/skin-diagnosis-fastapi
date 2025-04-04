보기 쉽게 Chat GPT로 정리했어요

# 🧪 Skin Diagnosis FastAPI

피부 질환 자동 감지를 위한 FastAPI 기반 백엔드 프로젝트입니다.  
사용자가 업로드한 피부 이미지를 받아 AI 모델로 진단하는 API를 제공합니다.

---

## 📂 프로젝트 구조

```bash
skin-diagnosis-fastapi/
│
├── uploads/                # 업로드된 이미지 저장 디렉토리
│   └── alpha-Go.jpg        # 샘플 이미지
│
├── main.py                 # FastAPI 엔트리포인트
├── requirements.txt        # Python 의존성 목록
├── .gitignore              # Git에서 무시할 파일 목록
└── README.md               # 프로젝트 설명 파일 (← 여기가 바로 이 파일!)

## 🚀 실행 방법 (로컬)

1. 저장소 클론

```bash
git clone https://github.com/2025-SSU-opensource-team2/skin-diagnosis-fastapi.git
cd skin-diagnosis-fastapi

2. 가상환경 설정
python -m venv venv
source venv/bin/activate      # macOS/Linux
venv\Scripts\activate         # Windows

3. 패키지 설치

pip install -r requirements.txt

4. 서버 실행

uvicorn main:app --reload

서버 주소: http://127.0.0.1:8000

Swagger 문서: http://127.0.0.1:8000/docs
