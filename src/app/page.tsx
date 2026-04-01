import { TripApp } from "@/components/TripApp";
import type { DayData } from "@/components/TripApp";
import type { ScheduleItem } from "@/components/DaySchedule";
import type { TransportRoute } from "@/components/TransportInfo";
import type { MealEntry } from "@/components/MealTable";

export default function Home() {
  return (
    <main>
      <TripApp
        days={days}
        flights={flights}
        meals={mealData}
        transportRoutes={transportRoutes}
        budget={{
          total: {
            label: "합계 (1인 기준)",
            amount: "~¥65,500",
            detail: "약 62만원 (환율 ¥100=₩940 기준)",
          },
          items: [
            {
              label: "숙소 (더 라이블리)",
              amount: "~¥26,000",
              detail: "4박 × ~¥13,000 ÷ 2인 · 나카스카와바타역 도보 1분",
              icon: "🏨",
            },
            {
              label: "교통비 총합",
              amount: "~¥8,620",
              detail: "공항↔中洲川端, 시내이동, 기타큐슈 왕복(JR 2025.4·니시테츠 2026.4 운임개정 반영) 포함",
              icon: "🚇",
            },
            {
              label: "식비 총합",
              amount: "~¥27,000",
              detail: "식사 9끼 + 카페·디저트 5곳 (야타이~가라토시장 초밥까지)",
              icon: "🍽️",
            },
            {
              label: "액티비티",
              amount: "~¥3,500",
              detail: "클라이밍(초회 등록료 포함) + 맥주공장 (¥500)",
              icon: "🎯",
            },
          ],
        }}
        checklistItems={checklistItems}
        referenceLinks={referenceLinks}
        icCardInfo="하야카켄(はやかけん), nimoca, SUGOCA 사용 가능. 한국 Suica/ICOCA도 호환됨. 모바일 Suica 있으면 별도 구매 불필요. 없으면 공항 지하철역에서 하야카켄(はやかけん) 구매 (보증금 ¥500)."
      />
    </main>
  );
}

/* ═══════════════════════════════════════════
   Flight Data
   ═══════════════════════════════════════════ */

const flights = [
  {
    direction: "출발" as const,
    airline: "대한항공",
    date: "3월 30일 (월)",
    time: "15:20",
    from: "인천 ICN",
    to: "후쿠오카 FUK",
    color: "sky" as const,
  },
  {
    direction: "귀국" as const,
    airline: "이스타항공",
    date: "4월 3일 (금)",
    time: "20:40",
    from: "후쿠오카 FUK",
    to: "인천 ICN",
    color: "warm" as const,
  },
];

/* ═══════════════════════════════════════════
   Day Schedule Data
   ═══════════════════════════════════════════ */

/* ── Day 1 ── */
const day1Items: ScheduleItem[] = [
  {
    time: "17:00",
    emoji: "✈️",
    text: "후쿠오카 공항 도착 (국제선 터미널)",
    detail:
      "인천 15:20 출발 · 비행 약 1시간 40분 · 입국심사·수하물 약 30~45분",
    location: { lat: 33.5859, lng: 130.4517 },
  },
  {
    time: "17:45",
    emoji: "🚌",
    text: "국제선 → 국내선 터미널 무료 셔틀버스",
    detail: "약 15분 소요, 8~12분 간격 운행",
  },
  {
    time: "18:00",
    emoji: "🚇",
    text: "지하철 공항선 → 나카스카와바타역 (中洲川端)",
    detail: "4정거장, 11분 소요 · 하카타역에서 2정거장 더",
    cost: "¥260",
    location: { lat: 33.5943, lng: 130.4058 },
  },
  {
    time: "18:15",
    emoji: "🏨",
    text: "더 라이블리 후쿠오카 하카타 체크인",
    detail:
      "THE LIVELY 福岡博多 · 나카스카와바타역 도보 1분 · 17:30~18:30 무료 맥주 · 2F 코워킹 24h",
    location: { lat: 33.5943, lng: 130.4065 },
  },
  {
    time: "19:30",
    emoji: "🍜",
    text: "텐진 야타이 코킨짱 (小金ちゃん)",
    detail:
      "야키라멘(焼きラーメン) 발상지 · 1967년 창업 · 오야후코도오리 입구 · 21~22시 피크타임에는 30~40분 대기",
    cost: "¥1,500~2,500",
    location: { lat: 33.5913, lng: 130.3985 },
    restaurant: {
      signature: "야키라멘 (焼きラーメン)",
      tabelog: {
        rating: "3.51",
        url: "https://tabelog.com/fukuoka/A4001/A400103/40000201/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/小金ちゃん+天神+福岡",
      },
    },
  },
  {
    time: "21:00",
    emoji: "🌃",
    text: "나카스 강변 야경 산책",
    detail: "숙소에서 도보 1분 · 나카스 강변 야경과 야타이 불빛",
    location: { lat: 33.5943, lng: 130.4058 },
  },
  {
    time: "21:30",
    emoji: "🍢",
    text: "나카스 야타이 호핑 (2차)",
    detail:
      "라멘, 오뎅, 야키토리 · 1인 최소 음료 1잔 + 음식 1개 주문이 에티켓",
    cost: "¥1,000~2,000",
    location: { lat: 33.5943, lng: 130.4058 },
  },
];

/* ── Day 2 ── */
const day2Items: ScheduleItem[] = [
  {
    time: "09:00",
    emoji: "🌸",
    text: "오호리 공원 산책",
    detail:
      "中洲川端→大濠公園 지하철 3정거장 6분 · 호수 둘레 산책로 · 스타벅스 호수뷰",
    cost: "¥210",
    location: { lat: 33.5864, lng: 130.3792 },
  },
  {
    time: "10:00",
    emoji: "🌸",
    text: "마이즈루 공원 벚꽃 (후쿠오카성 유적)",
    detail:
      "오호리 공원에서 도보 10분 · 벚나무 약 1,000그루 · 후쿠오카성 벚꽃축제(福岡城さくらまつり) 3/25~4/5 개최 (야간 라이트업 18:00~22:00, 유료구역 ¥600/회장 · 3회장 세트 ¥1,500) · 무료 입장 (낮)",
    location: { lat: 33.585, lng: 130.3832 },
  },
  {
    time: "11:00",
    emoji: "🌸",
    text: "니시 공원 벚꽃",
    detail:
      "마이즈루 공원에서 도보 25~30분 또는 버스 ¥230 · 벚나무 약 1,300그루 · 일본 벚꽃 명소 100선 · 하카타만 전망",
    location: { lat: 33.5946, lng: 130.3729 },
  },
  {
    time: "12:30",
    emoji: "🛍️",
    text: "텐진 지하상가 쇼핑 (天神地下街)",
    detail:
      "니시공원에서 버스 15분 또는 도보 30분 · 텐진역 직결 · 약 150개 매장 · 10:00~20:00 · 유럽풍 벽돌 아치 디자인",
    location: { lat: 33.5905, lng: 130.399 },
  },
  {
    time: "13:30",
    emoji: "🍤",
    text: "점심: 텐푸라 히라오 아크로스 후쿠오카점 (天ぷら ひらお)",
    detail:
      "아크로스 후쿠오카 B2F · 10:30~21:00 · 무료 반찬바 (이카노시오카라·이쿠라 등) 전설급 · 예약 불가 · 피크 이후 시간대라 대기 적음",
    cost: "¥1,000~1,200",
    location: { lat: 33.5896, lng: 130.4003 },
    restaurant: {
      signature: "텐푸라 정식 (天ぷら定食)",
      tabelog: {
        rating: "3.61",
        url: "https://tabelog.com/fukuoka/A4001/A400103/40049747/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/天麩羅処ひらお+アクロス福岡",
      },
    },
  },
  {
    time: "15:00",
    emoji: "🏬",
    text: "캐널시티 하카타",
    detail:
      "텐진에서 도보 10~12분 · 10:00~21:00(매장)/~23:00(식당) · 분수쇼 30분 간격 · 5F 라멘 스타디움",
    location: { lat: 33.5895, lng: 130.4112 },
  },
  {
    time: "16:30",
    emoji: "🥚",
    text: "다마고치 쇼핑",
    detail:
      "요도바시카메라 하카타 (하카타역 직결, 9:30~22:00) 또는 아니메이트 텐진 (10:00~21:00) · 돈키호테 나카스점에서도 구매 가능",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "18:30",
    emoji: "🍲",
    text: "저녁: 모츠나베 야마나카 아카사카점 (もつ鍋 やま中 赤坂店)",
    detail:
      "아카사카역(赤坂) 도보 3분 · 평일 16:00~23:00(L.O.22:30) · 미소맛 모츠나베가 인기 No.1 · 마무리에 짬뽕면(ちゃんぽん麺) 추가 · 예약 필수",
    cost: "¥5,000~6,000",
    location: { lat: 33.5879, lng: 130.3925 },
    restaurant: {
      signature: "미소 모츠나베 (みそ味もつ鍋)",
      tabelog: {
        rating: "3.65",
        url: "https://tabelog.com/fukuoka/A4001/A400104/40004383/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/もつ鍋やま中+赤坂店+福岡",
      },
    },
  },
];

/* ── Day 3 ── */
const day3Items: ScheduleItem[] = [
  {
    time: "10:00",
    emoji: "🏨",
    text: "숙소 휴식",
    detail: "오전 여유롭게 휴식 · 오후 맥주공장 방문 전 체력 충전",
  },
  {
    time: "11:30",
    emoji: "🍔",
    text: "점심: KFC / 모스버거",
    detail:
      "하카타역 근처 · 하카타 잇소(博多一双) 웨이팅 과다로 변경 · 간단히 식사 후 맥주공장 이동",
    cost: "¥500~800",
  },
  {
    time: "12:00",
    emoji: "🚃",
    text: "출발 → 키린 맥주 후쿠오카 공장",
    detail:
      "中洲川端→텐진(지하철 1정거장 ¥210) → 니시테츠 텐진→오고리(급행 약 40분, ¥590 · 2026.4.1 운임개정 반영) → 아마기철도 오고리→타치아라이(15분, ¥280) → 도보 15분 또는 무료 셔틀",
    cost: "편도 ¥1,080",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "14:00",
    emoji: "🍺",
    text: "키린 맥주 공장 견학 투어 (예약 완료)",
    detail:
      "아사쿠라시 마다 3601 (朝倉市馬田) · ¥500 · 약 65~75분 · 이치반시보리(一番搾り) 제조공정 견학 + 맥주 시음 2~3잔 포함 · 14:00 예약 확정",
    cost: "¥500",
    location: { lat: 33.3639, lng: 130.7247 },
  },
  {
    time: "15:15",
    emoji: "🚃",
    text: "복귀 출발 (타치아라이 → 텐진/하카타)",
    detail:
      "투어 종료 후 출발 · 타치아라이→오고리(¥280) → 니시테츠 급행→텐진(¥590 · 2026.4.1 운임개정 반영) · 약 1시간~1시간 30분 소요",
    cost: "¥870",
  },
  {
    time: "17:00",
    emoji: "☕",
    text: "카페 브라질레이로 (カフェ ブラジレイロ)",
    detail:
      "1934년 창업 후쿠오카 현존 최고(最古) 카페 · 고후쿠마치역(呉服町) 도보 2분 · 월~토 10:00~19:00(L.O.18:30) · 일·공휴일 휴무 · 쇼와 양관 건물의 정통 킷사텐 분위기 · 자체 로스팅 블렌드 커피",
    cost: "¥500~800",
    location: { lat: 33.5945, lng: 130.4105 },
    restaurant: {
      signature: "자체 로스팅 블렌드 커피",
      tabelog: {
        rating: "3.54",
        url: "https://tabelog.com/fukuoka/A4001/A400106/40002461/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/ブラジレイロ+福岡+博多区店屋町",
      },
    },
  },
  {
    time: "19:00",
    emoji: "🍗",
    text: "저녁: 카와야 시로가네점 (博多かわ屋 白金店)",
    detail:
      "야쿠인역(薬院) 도보 5~6분 · 야키토리 WEST 백명점 2024 선정 (焼き鳥 WEST 百名店) · 6일간 반복 굽기로 만드는 극강 바삭 닭껍질 · 돼지삼겹 꼬치(豚バラ)도 필수 · 예약 필수 (당일 만석 빈번)",
    cost: "¥2,500~4,000",
    location: { lat: 33.5813, lng: 130.3979 },
    restaurant: {
      signature: "닭껍질 꼬치 (とりかわ)",
      tabelog: {
        rating: "3.72",
        url: "https://tabelog.com/fukuoka/A4001/A400104/40005228/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/かわ屋+薬院+福岡",
      },
    },
  },
];

/* ── Day 4 ── */
const day4Items: ScheduleItem[] = [
  {
    time: "10:00",
    emoji: "☕",
    text: "REC COFFEE 텐진 원빌점 (レックコーヒー)",
    detail:
      "텐진역 11번 출구 도보 1분 · 원빌 6F · 월~수,금 8:00~20:00 / 목 ~15:30 (Thursday Gathering 이벤트로 일반 이용 가능 여부 사전 확인) · JBC 우승 바리스타의 스페셜티 커피 · 텐진 교차점이 내려다보이는 전망 · 핸드드립 싱글오리진 추천",
    cost: "¥500~800",
    location: { lat: 33.5905, lng: 130.399 },
    restaurant: {
      signature: "핸드드립 싱글오리진",
      tabelog: {
        rating: "3.80",
        url: "https://tabelog.com/fukuoka/A4001/A400103/40070374/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/REC+COFFEE+天神ワンビル店",
      },
    },
  },
  {
    time: "12:00",
    emoji: "🍜",
    text: "점심: 우동 타이라 (うどん平)",
    detail:
      "하카타구 스미요시 5-10-7 (博多区住吉) · 하카타역 도보 11분 · 월~금 11:15~15:00 · 일·공휴일 정기 휴무 · 부드러운 하카타식 면발 · 예약 불가, 점심 줄 있음 · Tabelog 우동 WEST 백명점 2024",
    cost: "¥600~1,000",
    location: { lat: 33.5853, lng: 130.4175 },
    restaurant: {
      signature: "우엉튀김 우동 (ごぼう天うどん)",
      tabelog: {
        rating: "3.66",
        url: "https://tabelog.com/fukuoka/A4001/A400101/40052349/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/うどん平+博多+住吉",
      },
    },
  },
  {
    time: "13:00",
    emoji: "🚇",
    text: "베어핸즈 클라이밍으로 이동",
    detail:
      "스미요시(うどん平)에서 텐진미나미역 도보 15분 → 나나쿠마선 환승 → 나나쿠마역 (12분)",
    cost: "¥300",
  },
  {
    time: "13:30",
    emoji: "🧗",
    text: "베어핸즈 클라이밍 (Bare Hands / ベアハンズ)",
    detail:
      "조난구 나나쿠마 8-4-8 (城南区七隈) 나나쿠마 패밀리프라자 내 · 평일 13:00~23:00 · 금요 정기휴무(목요 OK!) · 초회 등록료 ¥1,080 + 시간제 · 신발 렌탈 ¥400 · 맥주 없이 컨디션 최상!",
    cost: "~¥2,500~3,500",
    location: { lat: 33.5578, lng: 130.3658 },
  },
  {
    time: "17:00",
    emoji: "🚇",
    text: "야쿠인으로 이동",
    detail: "나나쿠마역 → 야쿠인오도리역 (지하철 나나쿠마선, 10분)",
    cost: "¥260",
  },
  {
    time: "17:30",
    emoji: "🍰",
    text: "amber 파르페 (パフェ&デザート amber)",
    detail:
      "야쿠인오도리역 도보 1분 · 이트인 13:00~22:00 · 카운터에서 눈앞에서 완성해주는 체험형 파르페 · 제철 과일 사용, 2~3개월마다 메뉴 변경 · 클라이밍 후 당 보충에 최적",
    cost: "¥1,500~2,000",
    location: { lat: 33.5815, lng: 130.3979 },
    restaurant: {
      signature: "계절 한정 파르페",
      tabelog: {
        rating: "3.09",
        url: "https://tabelog.com/fukuoka/A4001/A400104/40069269/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/パフェ%26デザート+amber+薬院",
      },
    },
  },
  {
    time: "19:30",
    emoji: "🥩",
    text: "저녁: 니쿠이치 야쿠인점 (薬院焼肉 NIKUICHI)",
    detail:
      "주오구 야쿠인 3-16-34 (中央区薬院) · 야쿠인오도리역 도보 4분 · 16:00~24:00(L.O.23:30) · A4·A5 큐슈산 흑모와규 시치린(七輪) 숯불구이 · 특선 7종 모듬(特選7種盛り) 필수 · 예약 추천",
    cost: "¥3,000~5,000",
    location: { lat: 33.5815, lng: 130.3958 },
    restaurant: {
      signature: "특선 7종 와규 모듬 (特選7種盛り合わせ)",
      tabelog: {
        rating: "3.27",
        url: "https://tabelog.com/fukuoka/A4001/A400104/40039111/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/薬院焼肉NIKUICHI+福岡",
      },
    },
  },
];

/* ── Day 5 ── */
const day5Items: ScheduleItem[] = [
  {
    time: "08:00",
    emoji: "🏨",
    text: "더 라이블리 체크아웃 · 짐 보관",
    detail:
      "호텔 프론트에 짐 보관 요청 · 中洲川端→博多 지하철 1정거장 4분 (¥210)",
  },
  {
    time: "08:20",
    emoji: "🚃",
    text: "하카타 출발 → 모지코 (門司港)",
    detail:
      "JR 가고시마본선 · 하카타→코쿠라→모지코 · 약 1시간 20분 · 직통 또는 코쿠라 환승",
    cost: "편도 ~¥1,690",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "09:40",
    emoji: "🏛️",
    text: "모지코 레트로 지구 산책",
    detail:
      "모지코역(門司港駅, 국가 중요문화재) · 구 모지세관 · 해협플라자 · 레트로한 서양식 건축물 거리 · 여유롭게 40분 산책",
    location: { lat: 33.9478, lng: 130.9625 },
  },
  {
    time: "10:30",
    emoji: "🍛",
    text: "모지코 바나나카레 브런치",
    detail:
      "모지코 명물 야키카레(門司港名物 焼きカレー) · BEAR FRUITS 10:30 오픈 · 바나나맨, 미나토노카레야(港のカレー家) 등은 11:00~ · 가볍게 브런치로 즐기고 가라토 초밥에 대비!",
    cost: "~¥800~1,200",
    location: { lat: 33.9478, lng: 130.9625 },
  },
  {
    time: "11:00",
    emoji: "🚶",
    text: "간몬해협 도보터널 횡단 → 시모노세키",
    detail:
      "모지코에서 터널 입구까지 도보 약 25~30분 (2.3km) · 간몬터널 인도(関門トンネル人道) 전장 780m · 도보 약 15분 · 무료 (6:00~22:00) · 규슈↔혼슈를 걸어서 건너는 체험!",
    location: { lat: 33.9611, lng: 130.9545 },
  },
  {
    time: "11:45",
    emoji: "🍣",
    text: "가라토시장 초밥 (唐戸市場)",
    detail:
      "금요일 이키이키 바칸가이(活きいき馬関街) 운영! · 신선한 초밥을 골라 사서 바다 보며 먹기 · 복어(ふぐ)·참치·광어 등 시모노세키 직송 · 금~일·공휴일 10:00~15:00",
    cost: "~¥1,500~2,500",
    location: { lat: 33.9582, lng: 130.9436 },
    restaurant: {
      signature: "시장 직송 초밥 (市場直送 握り寿司)",
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/唐戸市場+下関",
      },
    },
  },
  {
    time: "12:45",
    emoji: "⛴️",
    text: "간몬 연락선으로 모지코 복귀",
    detail:
      "가라토 선착장(唐戸桟橋) → 모지코 선착장(門司港桟橋) · 약 5분 · 간몬해협 바다 위에서 관부연락선 기분!",
    cost: "¥400",
    location: { lat: 33.9582, lng: 130.9436 },
  },
  {
    time: "13:15",
    emoji: "🚃",
    text: "모지코 출발 → 하카타 복귀",
    detail:
      "JR 모지코→하카타 · 약 1시간 20분 · 직통 또는 코쿠라 환승",
    cost: "편도 ~¥1,690",
    location: { lat: 33.9467, lng: 130.9617 },
  },
  {
    time: "14:40",
    emoji: "🛍️",
    text: "하카타역 도착 · 기념품 쇼핑",
    detail:
      "하카타역 주변 기념품 쇼핑 · 이후 中洲川端 숙소에서 짐 회수 (지하철 1정거장 or 도보 12분)",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "15:15",
    emoji: "🍰",
    text: "데리스 타르트&카페 KITTE 하카타점",
    detail:
      "하카타역 직결 KITTE 하카타 B1F · 9:00~22:00 (금/토 ~22:30) · 제철 과일 타르트 전문점 · 아마오우 딸기 타르트, 프루츠 파르페 · 여행 마무리 디저트 타임",
    cost: "¥800~1,500",
    location: { lat: 33.5897, lng: 130.4207 },
    restaurant: {
      signature: "계절 과일 타르트",
      tabelog: {
        rating: "3.08",
        url: "https://tabelog.com/fukuoka/A4001/A400101/40059695/",
      },
      google: {
        rating: "Map",
        url: "https://www.google.com/maps/search/デリス+タルト%26カフェ+KITTE博多",
      },
    },
  },
  {
    time: "17:00",
    emoji: "🚇",
    text: "숙소 짐 회수 → 공항 이동",
    detail:
      "中洲川端 숙소에서 짐 회수 → 中洲川端→福岡空港 지하철 11분 (¥260) → 무료 셔틀로 국제선 터미널 이동 (15분)",
    cost: "¥260",
  },
  {
    time: "17:45",
    emoji: "🛂",
    text: "국제선 터미널 도착 · 체크인",
    detail:
      "국제선은 출발 2시간 전 도착 권장 · 이스타항공 체크인 카운터 확인",
  },
  {
    time: "20:40",
    emoji: "✈️",
    text: "후쿠오카 출발 → 인천 (이스타항공)",
    location: { lat: 33.5859, lng: 130.4517 },
  },
];

/* ═══════════════════════════════════════════
   Days (structured)
   ═══════════════════════════════════════════ */

const days: DayData[] = [
  {
    day: 1,
    date: "3월 30일 (월)",
    title: "도착 & 야타이 체험",
    items: day1Items,
    transportCost: "¥260",
    mapUrl:
      "https://www.google.com/maps/dir/福岡空港国際線ターミナル/THE+LIVELY+福岡博多/小金ちゃん+天神+福岡/中洲+屋台+福岡",
  },
  {
    day: 2,
    date: "3월 31일 (화)",
    title: "벚꽃 & 쇼핑",
    items: day2Items,
    transportCost: "~¥910",
    mapUrl:
      "https://www.google.com/maps/dir/THE+LIVELY+福岡博多/大濠公園+福岡/舞鶴公園+福岡/西公園+福岡/天麩羅処ひらお+アクロス福岡/天神地下街/キャナルシティ博多/もつ鍋やま中+赤坂+福岡",
  },
  {
    day: 3,
    date: "4월 1일 (수)",
    title: "맥주공장 & 여유 쇼핑",
    items: day3Items,
    transportCost: "~¥2,370",
    mapUrl:
      "https://www.google.com/maps/dir/THE+LIVELY+福岡博多/西鉄福岡天神駅/太刀洗駅/キリンビール福岡工場/太刀洗駅/博多一双+博多駅東本店/ドン・キホーテ中洲店/かわ屋+薬院+福岡",
    note: "💡 오전 맥주공장 견학(¥500) 후 오후 쇼핑. 다음 날 클라이밍과 분리해 안전하게! 돈키호테 면세는 여권 필수 · ¥5,000 이상 구매 시",
  },
  {
    day: 4,
    date: "4월 2일 (목)",
    title: "클라이밍 데이",
    items: day4Items,
    transportCost: "~¥770",
    mapUrl:
      "https://www.google.com/maps/dir/THE+LIVELY+福岡博多/うどん平+博多/ベアハンズクライミングジム+福岡/薬院焼肉NIKUICHI+福岡",
    note: "💡 클라이밍은 평일 13:00 오픈! 전날 맥주와 분리해서 컨디션 최상으로 등반. 13:30~17:00 약 3.5시간 · 이후 야쿠인에서 파르페 타임",
  },
  {
    day: 5,
    date: "4월 3일 (금)",
    title: "기타큐슈 (모지코 & 가라토시장) + 귀국",
    items: day5Items,
    transportCost: "~¥4,300",
    mapUrl:
      "https://www.google.com/maps/dir/THE+LIVELY+福岡博多/博多駅/門司港駅/門司港レトロ/関門トンネル人道入口/唐戸市場/門司港駅/博多駅/THE+LIVELY+福岡博多/福岡空港国際線ターミナル",
    note: "💡 가라토시장 이키이키 바칸가이(活きいき馬関街)는 금요일 10:00~15:00 운영! 오전에 도착하면 여유롭게 즐길 수 있음. 국제선은 출발 2시간 전 도착 권장",
  },
];

/* ═══════════════════════════════════════════
   Transport Routes Data
   ═══════════════════════════════════════════ */

const transportRoutes: TransportRoute[] = [
  {
    from: "공항 (국내선)",
    to: "나카스카와바타역 (숙소)",
    method: "지하철 공항선",
    time: "11분",
    cost: "¥260",
  },
  {
    from: "숙소 (中洲川端)",
    to: "하카타역",
    method: "지하철 공항선",
    time: "4분",
    cost: "¥210",
  },
  {
    from: "숙소 (中洲川端)",
    to: "텐진역",
    method: "지하철 공항선",
    time: "3분",
    cost: "¥210",
  },
  {
    from: "숙소 (中洲川端)",
    to: "오호리공원역",
    method: "지하철 공항선",
    time: "6분",
    cost: "¥210",
  },
  {
    from: "텐진역",
    to: "아카사카역",
    method: "지하철 공항선",
    time: "2분",
    cost: "¥210",
  },
  {
    from: "텐진역",
    to: "오호리공원역",
    method: "지하철 공항선",
    time: "4분",
    cost: "¥210",
  },
  {
    from: "하카타역",
    to: "아카사카역",
    method: "지하철 공항선",
    time: "8분",
    cost: "¥260",
  },
  {
    from: "텐진미나미역",
    to: "나나쿠마역",
    method: "지하철 나나쿠마선",
    time: "12분",
    cost: "¥300",
  },
  {
    from: "텐진역",
    to: "니시테츠 오고리",
    method: "니시테츠 급행",
    time: "약 40분",
    cost: "¥590 (2026.4.1 개정)",
  },
  {
    from: "오고리역",
    to: "타치아라이역",
    method: "아마기 철도",
    time: "15분",
    cost: "¥280",
  },
  {
    from: "하카타역",
    to: "모지코역",
    method: "JR 가고시마본선",
    time: "약 1시간 20분",
    cost: "~¥1,690",
  },
  {
    from: "가라토 선착장 (唐戸桟橋)",
    to: "모지코 선착장 (門司港桟橋)",
    method: "간몬 연락선",
    time: "5분",
    cost: "¥400",
  },
  {
    from: "숙소 (中洲川端)",
    to: "나카스 야타이",
    method: "도보",
    time: "1~3분",
    cost: "무료",
  },
  {
    from: "숙소 (中洲川端)",
    to: "캐널시티",
    method: "도보",
    time: "5~7분",
    cost: "무료",
  },
  {
    from: "숙소 (中洲川端)",
    to: "돈키호테 나카스점",
    method: "도보",
    time: "3~5분",
    cost: "무료",
  },
  {
    from: "텐진",
    to: "캐널시티",
    method: "도보",
    time: "10~12분",
    cost: "무료",
  },
  {
    from: "하카타역",
    to: "야쿠인역",
    method: "지하철 공항선→텐진 환승 or 도보",
    time: "15~20분",
    cost: "~¥260",
  },
  {
    from: "텐진역",
    to: "텐진미나미역",
    method: "도보 (환승)",
    time: "3~5분",
    cost: "무료",
  },
  {
    from: "니시공원",
    to: "텐진",
    method: "니시테츠 버스",
    time: "약 15분",
    cost: "~¥230",
  },
  {
    from: "마이즈루공원",
    to: "니시공원",
    method: "도보",
    time: "25~30분",
    cost: "무료",
  },
];

/* ═══════════════════════════════════════════
   Meal Data
   ═══════════════════════════════════════════ */

const mealData: MealEntry[] = [
  {
    day: "Day 1",
    meal: "저녁",
    theme: "야타이 (屋台)",
    restaurant: "코킨짱 (小金ちゃん) + 나카스 야타이",
  },
  {
    day: "Day 2",
    meal: "점심",
    theme: "텐푸라 (天ぷら)",
    restaurant: "텐푸라 히라오 (天ぷら ひらお)",
  },
  {
    day: "Day 2",
    meal: "저녁",
    theme: "모츠나베 (もつ鍋)",
    restaurant: "모츠나베 야마나카 (もつ鍋 やま中)",
  },
  {
    day: "Day 3",
    meal: "점심",
    theme: "패스트푸드",
    restaurant: "KFC / 모스버거",
  },
  {
    day: "Day 3",
    meal: "저녁",
    theme: "야키토리 (焼き鳥)",
    restaurant: "카와야 시로가네점 (博多かわ屋 白金店)",
  },
  {
    day: "Day 4",
    meal: "점심",
    theme: "우동 (うどん)",
    restaurant: "우동 타이라 (うどん平)",
  },
  {
    day: "Day 4",
    meal: "저녁",
    theme: "야키니쿠 (焼肉)",
    restaurant: "니쿠이치 야쿠인점 (薬院焼肉 NIKUICHI)",
  },
  {
    day: "Day 5",
    meal: "브런치",
    theme: "야키카레 (焼きカレー)",
    restaurant: "모지코 바나나카레",
  },
  {
    day: "Day 5",
    meal: "점심",
    theme: "시장초밥 (市場寿司)",
    restaurant: "가라토시장 (唐戸市場)",
  },
];

/* ═══════════════════════════════════════════
   Checklist & Reference Links
   ═══════════════════════════════════════════ */

const checklistItems = [
  {
    label: "더 라이블리 후쿠오카 하카타 예약 (THE LIVELY 福岡博多, 4박 3/30~4/3)",
    category: "예약",
  },
  {
    label: "키린 맥주 공장 투어 예약 (3/1 오픈, ¥500)",
    category: "예약",
  },
  {
    label: "모츠나베 야마나카 (もつ鍋 やま中) 저녁 예약 (3/31)",
    category: "예약",
  },
  {
    label: "니쿠이치 야쿠인점 (薬院焼肉 NIKUICHI) 저녁 예약 (4/2)",
    category: "예약",
  },
  {
    label: "카와야 시로가네 (博多かわ屋 白金店) 저녁 예약 (4/1)",
    category: "예약",
  },
  { label: "항공편 웹 체크인", category: "준비물" },
  { label: "Wi-Fi / 유심 준비", category: "준비물" },
  { label: "여행자 보험", category: "준비물" },
  {
    label: "엔화 환전 (현금 필요: 야타이·우동·가라토시장 등)",
    category: "준비물",
  },
  {
    label: "IC카드 준비 (모바일 Suica or 현지 구매)",
    category: "준비물",
  },
  { label: "여권 (면세 쇼핑 시 필요)", category: "서류" },
  { label: "Visit Japan Web 사전 등록 (세관 QR코드)", category: "서류" },
  {
    label: "이스타항공 수하물 규정 확인 (LCC 위탁수하물)",
    category: "예약",
  },
  { label: "충전기 / 보조 배터리", category: "준비물" },
  { label: "일본 콘센트 어댑터 (타입 A) 확인", category: "준비물" },
  {
    label: "클라이밍 복장 (운동복·양말, 신발은 렌탈 가능)",
    category: "준비물",
  },
  { label: "상비약 (소화제·진통제·밴드)", category: "준비물" },
  { label: "우산 또는 접이식 우비", category: "준비물" },
  { label: "편한 워킹화 (간몬터널·종일도보 대비)", category: "준비물" },
];

const referenceLinks = [
  {
    title: "가라토시장 공식 (唐戸市場)",
    url: "https://www.karatoichiba.com/",
  },
  {
    title: "키린 맥주 공장 견학 예약",
    url: "https://www.kirin.co.jp/experience/factory/fukuoka/",
  },
  {
    title: "모츠나베 야마나카 공식 (もつ鍋 やま中)",
    url: "https://motsunabe-yamanaka.com/en/",
  },
  {
    title: "텐푸라 히라오 공식 (天ぷら ひらお)",
    url: "https://www.hirao-foods.net/",
  },
  {
    title: "Bare Hands 클라이밍 공식",
    url: "https://barehands.biz/english/",
  },
  {
    title: "모지코 레트로 관광 안내 (門司港レトロ)",
    url: "https://www.mojiko.info/",
  },
  {
    title: "후쿠오카 벚꽃 명소 가이드",
    url: "https://blog.naver.com/hoff_/223795180538",
  },
  {
    title: "다마고치 쇼핑 정보",
    url: "https://www.instagram.com/reel/DUX7dtRklCH",
  },
  {
    title: "후쿠오카 쇼핑 가이드",
    url: "https://blog.naver.com/muk_dori30/223488718710",
  },
  {
    title: "더 라이블리 후쿠오카 하카타 공식",
    url: "https://www.livelyhotels.com/ja/thelivelyfukuoka/",
  },
];
