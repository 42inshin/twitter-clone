# 트위터 클론 프로젝트

## 개요

이 프로젝트는 React와 Firebase를 이용해 만든 트위터 클론입니다. 사용자는 회원 가입, 로그인, 트윗 작성, 실시간 업데이트 등 트위터의 주요 기능을 경험할 수 있습니다. 이 프로젝트는 최신 웹 기술을 학습하고 풀스택 애플리케이션을 구축하는 데 목적이 있습니다.

## 주요 기능

- **회원 인증**: Firebase Authentication을 이용한 이메일/비밀번호 가입 및 로그인
- **실시간 트윗**: Firestore를 이용한 트윗 작성, 조회, 삭제 기능
- **사용자 프로필**: 프로필 생성 및 편집
- **반응형 디자인**: 모바일 및 데스크톱에 최적화

## 기술 스택

- **프론트엔드**: React, HTML, CSS, JavaScript
- **백엔드**: Firebase (Authentication, Firestore)
- **배포**: Firebase Hosting

## 시작하기

### 사전 준비

- Node.js와 npm이 설치되어 있어야 합니다.
- Firebase 계정 및 프로젝트가 필요합니다.

### 설치 및 실행

1. 레포지토리를 클론합니다:

   ```bash
   git clone https://github.com/42inshin/twitter-clone.git
   ```

2. 프로젝트 디렉토리로 이동합니다:

   ```bash
   cd twitter-clone
   ```

3. 필요한 패키지를 설치합니다:

   ```bash
   npm install
   ```

4. Firebase 설정을 추가합니다:

   - [Firebase 콘솔](https://console.firebase.google.com/)에서 새 프로젝트를 생성합니다.
   - 이메일/비밀번호 인증을 활성화합니다.
   - Firestore 데이터베이스를 생성하고 보안 규칙을 설정합니다.
   - Firebase 설정 파일을 생성하고 `src/firebaseConfig.js` 파일에 복사해 넣습니다.

5. 개발 서버를 시작합니다:

   ```bash
   npm run dev
   ```

   브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 애플리케이션을 확인합니다.

## 사용법

- **회원 가입**: 이메일과 비밀번호로 새로운 계정을 생성합니다.
- **로그인**: 계정에 로그인하여 트윗을 작성합니다.
- **트윗 작성**: 새로운 트윗을 작성하고 타임라인에 공유합니다.
- **프로필 수정**: 프로필 사진과 정보를 업데이트합니다.

## 기여

기여를 환영합니다! 버그 신고, 기능 제안 또는 풀 리퀘스트를 통해 기여해 주세요.

