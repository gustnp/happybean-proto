/* =========================================================
 * 캠페인 템플릿 — 새 캠페인 만들 때 이 파일을 복사하세요
 * ---------------------------------------------------------
 * 1) 이 파일을 campaigns/새캠페인아이디.js 로 복사
 * 2) 아래 "새캠페인아이디"를 파일명과 동일하게 변경
 * 3) index.html 하단에 <script src="campaigns/새캠페인아이디.js"> 추가
 * 4) 접속: index.html?c=새캠페인아이디
 * ========================================================= */
window.CAMPAIGNS = window.CAMPAIGNS || {};
window.CAMPAIGNS["새캠페인아이디"] = {

  meta: {
    id: "새캠페인아이디",
    name: "캠페인명",
    client: "클라이언트사",
    pm: "해피빈 CSR제휴팀",
    status: "시안 v1",
    period: "캠페인 기간",
    beanDate: "콩 지급일: ",
    goal: "캠페인 목표 한 문단",
    kpi: "측정 지표"
  },

  /* 컬러만 바꾸면 전체 톤이 바뀝니다 */
  theme: {
    primary: "#2f7fd4", accent: "#16c265",
    heroFrom: "#cfe7fb", heroTo: "#eef7e9",
    band1: "#eaf4fd", band2: "#eaf7ef",
    mood: "디자인 톤 서술"
  },

  /* type: "counter"(참여수) | "stamps"(미션 스탬프 트래커) */
  floating: { type: "counter", label: "캠페인 참여 수", value: "0", unit: "건" },
  /* stamps 예시: { type:"stamps", label:"미션 트래커", count:3, cta:"기부하기" } */

  hero: {
    org: "주최기관",
    title: "메인 타이틀\n(줄바꿈은 \\n)",
    sub: "서브 카피",
    image: null,               /* 이미지 경로 넣으면 실제 이미지, null이면 플레이스홀더 */
    imageNote: "키 비주얼 설명",
    plan: "기획 의도 (기획 문서 모드에 표시)",
    spec: { assets: ["필요 에셋"], interaction: "인터랙션 정의", note: "비고" }
  },

  /* ---------- 미션 슬롯: 자유롭게 조합 ----------
   * quiz     : 질문 말풍선 + 답변 카드 (answers[].note에 "정답" 포함 시 강조)
   * story    : 헤드라인 + 와이드 일러스트 + CTA
   * channels : 3컬럼 채널/안내 카드 (badge, title, desc, cta)
   * video    : 영상 임베드
   * cards    : 정보 카드 그리드
   * cta      : 단일 버튼 밴드
   * custom   : 이 캠페인 전용 신규 인터랙션 (concept에 서술, spec에 정의)
   * 공통 필드: band("band1"|"band2"|"none"), bean("미션 완료 시 콩 1개"), plan, spec
   */
  missions: [
    {
      type: "custom",
      band: "band1",
      bean: "미션 완료 시 콩 1개",
      title: "커스텀 미션 예시",
      sub: "이 캠페인만의 인터랙션",
      concept: "인터랙션 콘셉트 요약 (예: 방 안 위험요소 3곳을 드래그로 교체)",
      cta: "모두 확인했어요! 콩 받기",
      plan: "기획 의도",
      spec: {
        assets: ["필요 에셋 목록"],
        interaction: "동작 정의 (클릭/드래그 → 결과 → 콩 지급 조건)",
        note: "제작 참고 (레퍼런스: 과거 OO캠페인)"
      }
    }
  ],

  sns: { copy: "SNS 안내 카피", channels: ["홈", "페북", "인스타"], plan: "", spec: { assets: [], interaction: "", note: "" } },

  donation: {
    lead: "여러분의 참여로",
    amount: "최대 0,000,000원",
    desc: "이 기부됩니다. 소중한 기부금은 도움이 필요한 모금함에 전달됩니다.",
    cta: "참여가 기부가 되는 매칭기부 누적 모금함 자세히 보기",
    plan: "", spec: { assets: [], interaction: "", note: "" }
  },

  share: { copy: "공유 유도 카피", channels: ["카카오톡", "블로그", "밴드", "페이스북"], plan: "", spec: { assets: [], interaction: "", note: "" } },

  comments: {
    title: "댓글 참여 질문",
    guide: "댓글에 참여해 주신 모든 분들께 콩 1개를 드립니다.",
    period: "참여기간 : ",
    beanDate: "콩 지급 일자 : ",
    disclaimer: "무성의, 반복, 악성댓글에는 콩이 지급되지 않습니다.",
    plan: "", spec: { assets: [], interaction: "댓글 작성 시 콩 지급(1회/ID)", note: "댓글 영역은 해피빈 공통 디자인 — 커스텀 불가" }
  }
};
