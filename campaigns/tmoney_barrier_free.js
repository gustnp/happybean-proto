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
      intro: "우리가 매일 이용하는 버스와 지하철, 그 익숙한 길 위에서도 저마다의 특별한 '이동 공식'이 있다는 사실을 알고 계셨나요?\n환승 동선을 꿰뚫는 빠른 발걸음부터, 느리지만 편안한 직행 노선을 고르는 여유까지. 대중교통 이용 습관 속에 담긴 당신의 이동 스타일은 무엇일까요?\n나아가 그 안에 담긴 나만의 다정한 배려 방식도 함께 발견해 보세요.\n\n정답은 없습니다. 그저 평소 내 모습과 가장 가까운 선택지를 편안하게 골라주시면 됩니다.",
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
      type: "dragcta",
      band: "band2",
      title: "내가 바꾸는 배리어프리 서울",
      sub: "각 인물을 해당 장면에 드래그해 보세요.\n그 이동이 더 쉬워진다면, 서울은 달라집니다.",
      bean: "4가지 장면을 모두 완성하면 콩 1개 적립",
      plan: "배리어프리 교통 인프라를 인터랙션으로 체험. 교통약자별 필요 환경을 직접 만들어보는 참여형 미션.",
      spec: {
        interaction: "드래그 앤 드롭: 인물 카드 → 해당 장면. 올바른 매칭 시 장면 전환 애니메이션 재생. 4가지 모두 완성 시 콩 지급.",
        assets: ["인물 이모지 4종 (어르신/유아차/휠체어/시각장애인)", "장면 CSS 애니메이션 (무빙워크/넓은문/경사로/점자지도)"]
      }
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
