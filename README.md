# Wedding Invitation Publishing

이번 버전은 사용자가 제공한 모바일 청첩장 이미지/영상 레퍼런스를 기준으로 퍼블리싱을 다시 조정한 버전입니다.

## 반영 내용

- Hero Getting Married 스크립트 텍스트 등장/상승 애니메이션
- 전체 섹션 scroll reveal 애니메이션
- 흰색 중심의 모바일 청첩장 UI
- 달력 + D-Day
- 기존 Naver Map API 호출 방식 유지
- Naver Map / Tmap / KakaoNavi 버튼
- 갤러리 3열 + 더보기/접기 + 확대
- 방명록
- 마음 전하실 곳: 신랑측/신부측 각각 1개 아코디언
- 신랑측/신부측 내부 부/모/신랑·신부 계좌
- 맨 아래 카카오톡 공유하기

## 환경변수

`.env.example`을 참고하세요.

- `NEXT_PUBLIC_NAVER_MAP_CLIENT_ID`
- `NEXT_PUBLIC_KAKAO_JS_KEY`

카카오톡 공유하기는 카카오 개발자 JavaScript 키가 설정되면 Kakao.Share를 사용합니다. 키가 없는 경우 모바일 Web Share 또는 링크 복사로 fallback 됩니다.
