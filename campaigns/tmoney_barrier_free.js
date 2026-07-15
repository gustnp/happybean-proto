/* 티머니 베리어프리 캠페인 */
window.CAMPAIGNS = window.CAMPAIGNS || {};
window.CAMPAIGNS["tmoney_barrier_free"] = {
  meta: {
    id: "tmoney_barrier_free",
    name: "티머니복지재단 × 해피빈 배리어프리 캠페인",
    client: "티머니복지재단",
    pm: "키뮤스튜디오",
    status: "시안 v1",
    period: "2026.05.00 ~ 2026.10.00",
    beanDate: "",
    goal: "서울 대중교통 58년 역사와 배리어프리 이동권에 대한 시민 공감 형성",
    kpi: "캠페인 참여 수 / 투표 참여 / MBTI 완료율",
    clientMust: ""
  },
  theme: {
    primary: "#2f7fd4",
    accent: "#16c265",
    heroFrom: "#cfe7fb",
    heroTo: "#eef7e9",
    band1: "#eaf4fd",
    band2: "#eaf7ef",
    mood: "도시·교통 감성, 포용적 이동권 메시지"
  },
  floating: {
    type: "counter",
    label: "캠페인 참여 수",
    value: "0",
    unit: "건"
  },
  hero: {
    org: "티머니복지재단",
    title: "혁신과 포용의 도시\n서울 대중교통 58년",
    sub: "1968년부터 2025년까지, 속도의 시대에서 모두의 이동권으로.",
    image: null,
    imageNote: "키 비주얼: 서울 대중교통 역사 일러스트 (권장 1920×520px)",
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  },
  missions: [
    {
      type: "mbti",
      band: "band1",
      title: "나의 대중교통 라이프스타일 MBTI",
      sub: "대중교통 이용 습관으로 알아보는 나만의 이동 유형",
      intro: "버스 탈 때도 성격이 나오고, 지하철 기다릴 때도 취향이 드러납니다.\n문 앞에 설지, 창가를 고를지, 환승 2번을 감수할지, 조금 돌아가더라도 편한 길을 택할지.\n\n이 테스트는 대중교통 이용 시 자연스럽게 드러나는 나만의 라이프스타일을 알아보는 테스트입니다. 그리고 그 안에 슬쩍 숨어 있는 나의 배려 방식도 함께 확인할 수 있어요.\n\n정답은 없습니다. 그냥 제일 나다운 쪽을 고르면 됩니다.",
      bean: "미션 완료 시 콩 1개",
      cta: "결과 공유하기",
      plan: "",
      spec: { assets: [], interaction: "", note: "" }
    },
    {
      type: "vote",
      band: "band2",
      title: "미래 교통, 어떤 모습이길 바라나요?",
      sub: "당신의 선택이 미래를 만듭니다. 하나만 골라주세요.",
      mode: "vote",
      options: [
        { ico: "🚂", label: "하늘을 달리는 기차" },
        { ico: "🤖", label: "AI가 감정을 읽는 맞춤 이동 서비스" },
        { ico: "♿", label: "완전한 배리어프리 이동 도시" },
        { ico: "🌿", label: "친환경 자율주행 버스" },
        { ico: "🌊", label: "수상 이동 교통" },
        { ico: "🚀", label: "우주로 연결되는 지하철" }
      ],
      bean: "투표 완료 시 콩 1개",
      cta: "투표하기",
      plan: "",
      spec: { assets: [], interaction: "", note: "" }
    },
    {
      type: "story",
      band: "band1",
      title: "서울 대중교통 58년의 역사",
      sub: "1968년 노면전차 퇴장부터 2025년 배리어프리 강화까지.\n속도의 시대에서 모두의 이동권으로.",
      image: null,
      imageNote: "교통정책 타임라인 인포그래픽 (권장 960×540px)",
      cta: "역사 더 보기",
      bean: "",
      plan: "",
      spec: { assets: [], interaction: "", note: "" }
    }
  ],
  sns: {
    copy: "티머니복지재단 SNS에서 더 많은 이야기를 만나보세요",
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
    copy: "배리어프리 이동권, 더 많은 사람들에게 알려주세요",
    channels: ["카카오톡", "페이스북"],
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  },
  comments: {
    title: "모두가 편하게 이동할 수 있는\n세상을 위해 한 마디 남겨주세요",
    guide: "댓글에 참여해 주신 모든 분들께 콩 1개를 드립니다.",
    period: "",
    beanDate: "",
    disclaimer: "무성의, 반복, 악성댓글에는 콩이 지급되지 않습니다.",
    sideNote: "",
    plan: "",
    spec: { assets: [], interaction: "", note: "" }
  }
};
