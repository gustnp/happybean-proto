/* =========================================================
 * 캠페인 데이터 템플릿
 * ---------------------------------------------------------
 * 사용법:
 *   1. 이 파일을 복사해서 campaigns/[캠페인ID].js 로 저장
 *   2. 아래 id: "template" 부분을 파일명과 동일하게 변경
 *   3. 브라우저에서 index.html?c=[캠페인ID] 로 열기
 * ========================================================= */
window.CAMPAIGNS = window.CAMPAIGNS || {};
window.CAMPAIGNS["template"] = {

  meta: {
    id: "template",           // ← 파일명과 동일하게
    name: "캠페인 이름",
    client: "클라이언트명",
    pm: "해피빈 담당자",
    status: "시안 v1",
    period: "2026.00.00 ~ 2026.00.00",
    beanDate: "콩 지급일: 2026.00.00",
    goal: "캠페인 목표를 입력하세요.",
    kpi: "KPI를 입력하세요."
  },

  theme: {
    primary:  "#2f7fd4",
    accent:   "#16c265",
    heroFrom: "#cfe7fb",
    heroTo:   "#eef7e9",
    band1:    "#eaf4fd",
    band2:    "#eaf7ef",
    mood:     "디자인 톤 메모"
  },

  floating: {
    type: "counter",
    label: "캠페인 참여 수",
    value: "0",
    unit: "건"
  },

  hero: {
    org: "주최 기관명",
    title: "캠페인 헤드라인을\n입력하세요",
    sub: "서브 카피를 입력하세요.",
    image: null,
    imageNote: "히어로 이미지 (권장 960×540px)",
    plan: "히어로 기획 의도",
    spec: {
      assets: ["키 비주얼 1식"],
      interaction: "",
      note: ""
    }
  },

  missions: [
    {
      type: "story",
      band: "band1",
      bean: "미션 완료 시 콩 1개",
      title: "미션 제목",
      sub: "미션 설명을 입력하세요.",
      image: null,
      imageNote: "미션 이미지",
      cta: "참여하기",
      plan: "",
      spec: { assets: [], interaction: "", note: "" }
    }
  ],

  sns: {
    copy: "SNS 채널을 팔로우하세요",
    channels: ["홈페이지", "인스타그램"],
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  },

  donation: {
    lead: "여러분의 참여로",
    amount: "최대 0원",
    desc: "이 기부됩니다.",
    cta: "매칭기부 자세히 보기",
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  },

  share: {
    copy: "이 캠페인을 공유해주세요",
    channels: ["카카오톡", "페이스북"],
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  },

  comments: {
    title: "댓글로 참여해주세요",
    guide: "댓글에 참여해 주신 모든 분들께 콩 1개를 드립니다.",
    period: "참여기간 : 2026년 00월 00일 ~ 2026년 00월 00일",
    beanDate: "콩 지급 일자 : 2026년 00월 00일",
    disclaimer: "무성의, 반복, 악성댓글에는 콩이 지급되지 않습니다.",
    sideNote: "",
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  }
};
