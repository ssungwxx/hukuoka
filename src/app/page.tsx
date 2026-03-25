import { FlightCard } from "@/components/FlightCard";
import { DaySchedule } from "@/components/DaySchedule";
import type { ScheduleItem } from "@/components/DaySchedule";
import { PlaceCard } from "@/components/PlaceCard";
import { SectionTitle } from "@/components/SectionTitle";
import { TransportInfo } from "@/components/TransportInfo";
import type { TransportRoute } from "@/components/TransportInfo";
import { MealTable } from "@/components/MealTable";
import type { MealEntry } from "@/components/MealTable";
import { Hero } from "@/components/Hero";
import { BudgetSection } from "@/components/BudgetSection";
import { ChecklistSection } from "@/components/ChecklistSection";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 pb-24">
      {/* Hero */}
      <Hero />

      {/* 항공편 */}
      <section id="flights" className="mb-12">
        <SectionTitle icon="✈️" title="항공편" />
        <div className="grid gap-4 sm:grid-cols-2">
          <FlightCard
            direction="출발"
            airline="대한항공"
            date="3월 30일 (월)"
            time="15:20"
            from="인천 ICN"
            to="후쿠오카 FUK"
            color="sky"
          />
          <FlightCard
            direction="귀국"
            airline="이스타항공"
            date="4월 3일 (금)"
            time="20:40"
            from="후쿠오카 FUK"
            to="인천 ICN"
            color="warm"
          />
        </div>
      </section>

      {/* 숙소 */}
      <section id="accommodation" className="mb-12">
        <SectionTitle icon="🏨" title="숙소" />
        <div className="rounded-2xl border-2 border-dashed border-foreground/20 p-8 text-center text-foreground/50">
          <p className="text-2xl mb-2">🔍</p>
          <p className="font-medium">숙소 미정</p>
          <p className="text-sm mt-1">하카타역 or 텐진 근처 추천</p>
        </div>
      </section>

      {/* 예산 요약 */}
      <section id="budget" className="mb-12">
        <SectionTitle icon="💰" title="예산 요약 (1인 기준)" />
        <BudgetSection
          total={{ label: "합계 (숙소 제외)", amount: "~¥38,800", detail: "약 35만원 (환율 ¥100=₩900 기준)" }}
          items={[
            { label: "교통비 총합", amount: "~¥16,800", detail: "공항↔시내, 시내이동, 유후인 왕복 포함", icon: "🚇" },
            { label: "식비 총합", amount: "~¥18,000", detail: "8끼 식사 (야타이~스시까지)", icon: "🍽️" },
            { label: "액티비티", amount: "~¥4,000", detail: "클라이밍 + 온천 (맥주공장 무료)", icon: "🎯" },
          ]}
        />
      </section>

      {/* 일정 */}
      <section id="schedule" className="mb-12">
        <SectionTitle icon="📅" title="일정" />
        <div className="space-y-6">
          {/* Day 1 */}
          <DaySchedule
            day={1}
            date="3월 30일 (월)"
            title="도착 & 야타이 체험"
            transportCost="¥260"
            mapUrl="https://www.google.com/maps/dir/福岡空港国際線ターミナル/博多駅/小金ちゃん+天神+福岡/中洲+屋台+福岡"
            items={day1Items}
            defaultOpen
          />

          {/* Day 2 */}
          <DaySchedule
            day={2}
            date="3월 31일 (화)"
            title="벚꽃 & 쇼핑"
            transportCost="~¥960"
            mapUrl="https://www.google.com/maps/dir/博多駅/大濠公園+福岡/舞鶴公園+福岡/西公園+福岡/天麩羅処ひらお+アクロス福岡/天神地下街/キャナルシティ博多/もつ鍋やま中+赤坂+福岡"
            items={day2Items}
          />

          {/* Day 3 */}
          <DaySchedule
            day={3}
            date="4월 1일 (수)"
            title="유후인 온천 당일치기"
            transportCost="~¥12,520"
            mapUrl="https://www.google.com/maps/dir/博多駅/由布院駅/湯の坪街道+由布院/由布まぶし心+由布院/金鱗湖/夢想園+由布院/由布院駅/博多駅/かわ屋+薬院+福岡"
            items={day3Items}
            note="💡 유후인은 해발 ~450m 분지로 후쿠오카보다 기온이 낮음. 4월 초 낮 15~18°C / 밤 5~8°C — 겉옷 필수. 유후인노모리 예약은 3/1(일) 오전에!"
          />

          {/* Day 4 */}
          <DaySchedule
            day={4}
            date="4월 2일 (목)"
            title="맥주공장 & 클라이밍"
            transportCost="~¥2,430"
            mapUrl="https://www.google.com/maps/dir/博多駅/西鉄福岡天神駅/太刀洗駅/キリンビール福岡工場/太刀洗駅/博多駅/うどん平+博多/ベアハンズクライミングジム+福岡/ひょうたん寿司+天神"
            items={day4Items}
            note="💡 클라이밍은 평일 13:00 오픈! 오전에 맥주공장, 오후에 클라이밍으로 배치. 이동이 많은 날이므로 IC카드 충전 확인"
          />

          {/* Day 5 */}
          <DaySchedule
            day={5}
            date="4월 3일 (금)"
            title="마지막 쇼핑 & 귀국"
            transportCost="~¥470"
            mapUrl="https://www.google.com/maps/dir/博多駅/ドン・キホーテ中洲店/博多一双+博多駅東本店/博多駅/福岡空港国際線ターミナル"
            items={day5Items}
            note="💡 국제선은 2시간 전 도착 권장. 숙소에서 17:00 이전 출발. 면세 쇼핑은 공항 내에서도 가능"
          />
        </div>
      </section>

      {/* 교통 정보 */}
      <section id="transport" className="mb-12">
        <SectionTitle icon="🚇" title="교통 안내" />
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] p-5 space-y-4">
          <div>
            <h3 className="font-semibold text-sm mb-2">IC 카드</h3>
            <p className="text-sm text-foreground/60">
              はやかけん(하야카켄), nimoca, SUGOCA 사용 가능. 한국 Suica/ICOCA도 호환됨. 모바일 Suica 있으면 별도 구매 불필요. 없으면 공항 지하철역에서 はやかけん 구매 (보증금 ¥500).
            </p>
          </div>
          <div className="border-t border-foreground/[0.06] pt-4">
            <h3 className="font-semibold text-sm mb-2">주요 구간 요금 (검증 완료)</h3>
            <TransportInfo rows={transportRoutes} />
          </div>
        </div>
      </section>

      {/* 식사 테마 분배 */}
      <section id="meals" className="mb-12">
        <SectionTitle icon="🍽️" title="식사 테마 분배" />
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] overflow-hidden">
          <MealTable meals={mealData} />
        </div>
        <p className="text-xs text-foreground/40 mt-2">* 8가지 후쿠오카 먹거리 테마를 중복 없이 분배</p>
      </section>

      {/* 방문 예정지 */}
      <section id="places" className="mb-12">
        <SectionTitle icon="📍" title="방문 예정지" />
        <div className="grid gap-4 sm:grid-cols-2">
          <PlaceCard
            emoji="🌸"
            title="벚꽃 명소 (Day 2)"
            description="마이즈루 공원 (~1,000그루), 니시 공원 (~1,300그루, 명소100선), 오호리 공원. 3월 말~4월 초 만개 시기."
            tag="필수"
          />
          <PlaceCard
            emoji="🧗"
            title="Bare Hands 클라이밍 (Day 4)"
            description="城南区七隈 · 평일 13:00~23:00 · 금요휴무 · 초회 등록 필요 · 신발 렌탈 ~¥300"
            tag="필수"
            link="https://barehands.biz/english/"
          />
          <PlaceCard
            emoji="🥚"
            title="다마고치 쇼핑 (Day 2)"
            description="요도바시카메라 하카타 (하카타역 직결), 아니메이트 텐진, 돈키호테 나카스점"
            tag="필수"
            link="https://www.instagram.com/reel/DUX7dtRklCH"
          />
          <PlaceCard
            emoji="🛍️"
            title="쇼핑 스팟"
            description="텐진 지하상가 (150개 매장, ~20:00), 돈키호테 나카스 (24h), 하카타 한큐"
            tag="필수"
            link="https://blog.naver.com/muk_dori30/223488718710"
          />
          <PlaceCard
            emoji="🏬"
            title="캐널시티 하카타 (Day 2)"
            description="10:00~21:00(매장) · 분수쇼 30분 간격 · 5F 라멘 스타디움 · 하카타역 도보 10분"
            tag="필수"
          />
          <PlaceCard
            emoji="🍜"
            title="나카스 야타이 거리 (Day 1)"
            description="18:00~02:00 · 야키라멘, 오뎅, 야키토리 · 小金ちゃん(텐진), 나카스 강변 야타이"
            tag="필수"
          />
          <PlaceCard
            emoji="♨️"
            title="유후인 온천 (Day 3)"
            description="유후인노모리 왕복 ¥12,260 · 긴린코 호수 · 유노츠보 거리 · 夢想園 노천온천"
            tag="필수"
          />
          <PlaceCard
            emoji="🍺"
            title="키린 맥주 공장 (Day 4)"
            description="朝倉市 · 무료 견학+시음 · 약 80분 · 사전 예약 필수 (3/1 오픈) · 편도 ~1.5시간"
            tag="필수"
            link="https://www.kirin.co.jp/experience/factory/fukuoka/"
          />
        </div>
      </section>

      {/* 참고 링크 */}
      <section id="links" className="mb-12">
        <SectionTitle icon="🔗" title="참고 링크" />
        <div className="space-y-3">
          <ReferenceLink
            title="유후인노모리 예약 (JR큐슈)"
            url="https://www.jrkyushu.co.jp/trains/yufuinnomori/"
          />
          <ReferenceLink
            title="키린 맥주 공장 견학 예약"
            url="https://www.kirin.co.jp/experience/factory/fukuoka/"
          />
          <ReferenceLink
            title="もつ鍋 やま中 공식"
            url="https://motsunabe-yamanaka.com/en/"
          />
          <ReferenceLink
            title="天ぷら ひらお 공식"
            url="https://www.hirao-foods.net/"
          />
          <ReferenceLink
            title="Bare Hands 클라이밍 공식"
            url="https://barehands.biz/english/"
          />
          <ReferenceLink
            title="由布まぶし 心 공식"
            url="https://yufumabushi-shin.com/"
          />
          <ReferenceLink
            title="후쿠오카 벚꽃 명소 가이드"
            url="https://blog.naver.com/hoff_/223795180538"
          />
          <ReferenceLink
            title="다마고치 쇼핑 정보"
            url="https://www.instagram.com/reel/DUX7dtRklCH"
          />
          <ReferenceLink
            title="후쿠오카 쇼핑 가이드"
            url="https://blog.naver.com/muk_dori30/223488718710"
          />
        </div>
      </section>

      {/* 준비물 체크리스트 */}
      <section id="checklist">
        <SectionTitle icon="✅" title="준비 체크리스트" />
        <ChecklistSection
          items={[
            { label: "숙소 예약", category: "예약" },
            { label: "유후인노모리 열차 예약 (3/1 오전 오픈!)", category: "예약" },
            { label: "키린 맥주 공장 투어 예약 (3/1 오픈)", category: "예약" },
            { label: "もつ鍋 やま中 저녁 예약 (3/31)", category: "예약" },
            { label: "ひょうたん寿司 확인 (3인 이상 시 예약)", category: "예약" },
            { label: "かわ屋 薬院 저녁 예약 (4/1)", category: "예약" },
            { label: "항공편 웹 체크인", category: "준비물" },
            { label: "Wi-Fi / 유심 준비", category: "준비물" },
            { label: "여행자 보험", category: "준비물" },
            { label: "엔화 환전 (현금 필요: 야타이·우동 등)", category: "준비물" },
            { label: "IC카드 준비 (모바일 Suica or 현지 구매)", category: "준비물" },
            { label: "여권 (면세 쇼핑 시 필요)", category: "서류" },
            { label: "겉옷 (유후인 기온 5~18°C)", category: "준비물" },
          ]}
        />
      </section>
    </main>
  );
}

/* ── Day 1 ── */
const day1Items: ScheduleItem[] = [
  {
    time: "15:20",
    emoji: "✈️",
    text: "후쿠오카 공항 도착 (국제선 터미널)",
    detail: "입국심사·수하물 수령 약 30~45분 소요",
    location: { lat: 33.5859, lng: 130.4517 },
  },
  {
    time: "16:00",
    emoji: "🚌",
    text: "국제선 → 국내선 터미널 무료 셔틀버스",
    detail: "약 15분 소요, 5~10분 간격 운행",
  },
  {
    time: "16:20",
    emoji: "🚇",
    text: "지하철 공항선 → 하카타역",
    detail: "2정거장, 5분 소요",
    cost: "¥260",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "16:40",
    emoji: "🏨",
    text: "숙소 체크인 & 짐 정리",
  },
  {
    time: "18:30",
    emoji: "🍜",
    text: "텐진 야타이 小金ちゃん (코킨짱)",
    detail: "焼きラーメン(야키라멘) 발상지 · 1967년 창업 · 오야후코도오리 입구 · 21~22시 피크타임에는 30~40분 대기",
    cost: "¥1,500~2,500",
    location: { lat: 33.5913, lng: 130.3985 },
    restaurant: {
      signature: "焼きラーメン (야키라멘)",
      tabelog: { rating: "3.51", url: "https://tabelog.com/fukuoka/A4001/A400103/40000201/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/小金ちゃん+天神+福岡" },
    },
  },
  {
    time: "20:00",
    emoji: "🌃",
    text: "나카스 강변 야경 산책",
    detail: "하카타역에서 나카스까지 도보 약 12~15분",
    location: { lat: 33.5943, lng: 130.4058 },
  },
  {
    time: "20:30",
    emoji: "🍢",
    text: "나카스 야타이 호핑 (2차)",
    detail: "라멘, 오뎅, 야키토리 · 1인 최소 음료 1잔 + 음식 1개 주문이 에티켓",
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
    detail: "지하철 大濠公園역 하차 · 호수 둘레 산책로 · 스타벅스 호수뷰",
    cost: "¥260",
    location: { lat: 33.5864, lng: 130.3792 },
  },
  {
    time: "10:00",
    emoji: "🌸",
    text: "마이즈루 공원 벚꽃 (후쿠오카성 유적)",
    detail: "오호리 공원에서 도보 10분 · 벚나무 약 1,000그루 · 福岡城さくらまつり 개최 기간 (야간 라이트업, 입장 ~¥300) · 무료 입장 (낮)",
    location: { lat: 33.5850, lng: 130.3832 },
  },
  {
    time: "11:30",
    emoji: "🌸",
    text: "니시 공원 벚꽃",
    detail: "마이즈루 공원에서 도보 25~30분 또는 버스 ¥230 · 벚나무 약 1,300그루 · 일본 벚꽃 명소 100선 · 하카타만 전망",
    location: { lat: 33.5946, lng: 130.3729 },
  },
  {
    time: "12:30",
    emoji: "🍤",
    text: "점심: 天ぷら ひらお 아크로스 후쿠오카점",
    detail: "아크로스 후쿠오카 B2F · 10:30~21:00 · 무료 반찬바 (明太子·いくら·塩辛) 전설급 · 예약 불가, 11시 전이나 13:30 이후 추천",
    cost: "¥800~1,200",
    location: { lat: 33.5896, lng: 130.4003 },
    restaurant: {
      signature: "天ぷら定食 (텐푸라 정식)",
      tabelog: { rating: "3.61", url: "https://tabelog.com/fukuoka/A4001/A400103/40049747/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/天麩羅処ひらお+アクロス福岡" },
    },
  },
  {
    time: "14:00",
    emoji: "🛍️",
    text: "텐진 지하상가 쇼핑 (天神地下街)",
    detail: "텐진역 직결 · 약 150개 매장 · 10:00~20:00 · 유럽풍 벽돌 아치 디자인 · 패션, 코스메틱, 잡화",
    location: { lat: 33.5905, lng: 130.3990 },
  },
  {
    time: "16:00",
    emoji: "🏬",
    text: "캐널시티 하카타",
    detail: "텐진에서 도보 10~12분 · 10:00~21:00(매장)/~23:00(식당) · 분수쇼 30분 간격 · 5F 라멘 스타디움",
    location: { lat: 33.5895, lng: 130.4112 },
  },
  {
    time: "17:30",
    emoji: "🥚",
    text: "다마고치 쇼핑",
    detail: "요도바시카메라 하카타 (하카타역 직결, 9:30~22:00) 또는 아니메이트 텐진 (10:00~21:00) · 돈키호테 나카스점에서도 구매 가능",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "18:30",
    emoji: "🍲",
    text: "저녁: もつ鍋 やま中 赤坂店 (모츠나베 야마나카)",
    detail: "赤坂역 도보 3분 · 평일 16:00~23:00(L.O.22:30) · 미소맛 모츠나베가 인기 No.1 · 마무리에 ちゃんぽん麺 추가 · 예약 필수",
    cost: "¥4,000~5,000",
    location: { lat: 33.5879, lng: 130.3925 },
    restaurant: {
      signature: "みそ味もつ鍋 (미소 모츠나베)",
      tabelog: { rating: "3.70", url: "https://tabelog.com/fukuoka/A4001/A400104/40004383/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/もつ鍋やま中+赤坂店+福岡" },
    },
  },
];

/* ── Day 3 ── */
const day3Items: ScheduleItem[] = [
  {
    time: "09:17",
    emoji: "🚃",
    text: "유후인노모리 1호 출발 (하카타역)",
    detail: "JR 큐다이 본선 경유 · 전석 지정석 · 편도 약 2시간 14분 · 3/1부터 예약 오픈 (1개월 전) · 벚꽃 시즌 매진 주의! · 九州ネットきっぷ 할인 시 ¥5,600",
    cost: "편도 ¥6,130",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "11:31",
    emoji: "♨️",
    text: "유후인역 도착",
    detail: "역사 건물 자체도 포토스팟 · 유후다케(由布岳) 산 전망",
    location: { lat: 33.2683, lng: 131.3633 },
  },
  {
    time: "11:40",
    emoji: "🚶",
    text: "유노츠보 거리 산책 & 식べ歩き",
    detail: "역→긴린코 호수까지 약 1.2km(도보 20~25분) · B-speak 롤케이크(¥1,500, 오전 매진 주의) · Milch 치즈케이크(¥300~500) · 크로켓(¥200~300) · 유후인 플로랄 빌리지",
    location: { lat: 33.2650, lng: 131.3700 },
  },
  {
    time: "12:30",
    emoji: "🍽️",
    text: "점심: 由布まぶし 心 역전점 (유후마부시 신)",
    detail: "역에서 도보 2분 · 10:30~20:30 · 불정기 휴무(전화 확인 추천) · 豊後牛 마부시를 3가지 방식으로 먹기 (그대로/양념/오차즈케)",
    cost: "¥2,500~3,500",
    location: { lat: 33.2680, lng: 131.3627 },
    restaurant: {
      signature: "豊後牛まぶし (분고규 마부시)",
      tabelog: { rating: "3.47", url: "https://tabelog.com/oita/A4402/A440201/44005142/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/由布まぶし+心+駅前支店" },
    },
  },
  {
    time: "13:30",
    emoji: "🏞️",
    text: "긴린코 호수 산책",
    detail: "온천수가 유입되어 아침 물안개가 유명 · 天祖神社 · 호수 일주 약 20~30분",
    location: { lat: 33.2618, lng: 131.3740 },
  },
  {
    time: "14:00",
    emoji: "♨️",
    text: "당일 온천: 夢想園 (무소엔)",
    detail: "대형 노천온천 · 유후다케 전망 · 남녀 분리탕",
    cost: "¥1,000~1,500",
    location: { lat: 33.2590, lng: 131.3600 },
  },
  {
    time: "15:30",
    emoji: "🛍️",
    text: "유노츠보 거리 쇼핑 마무리",
    detail: "가보수 시트러스 제품, 유후인 푸딩 등 오이타현 특산품 구매",
    location: { lat: 33.2650, lng: 131.3700 },
  },
  {
    time: "17:05",
    emoji: "🚃",
    text: "유후인노모리 6호 복귀",
    detail: "유후인역 17:05 → 하카타역 19:16 도착",
    cost: "편도 ¥6,130",
    location: { lat: 33.2683, lng: 131.3633 },
  },
  {
    time: "19:30",
    emoji: "🍗",
    text: "저녁: かわ屋 薬院本店 (카와야)",
    detail: "薬院역 도보 5~6분 · 焼き鳥 WEST 百名店 2024 선정 · 6일간 반복 굽기로 만드는 극강 바삭 닭껍질 · 豚バラ(돼지삼겹 꼬치)도 필수 · 예약 추천",
    cost: "¥2,500~4,000",
    location: { lat: 33.5813, lng: 130.3979 },
    restaurant: {
      signature: "とりかわ (닭껍질 꼬치)",
      tabelog: { rating: "3.72", url: "https://tabelog.com/fukuoka/A4001/A400104/40005228/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/かわ屋+薬院+福岡" },
    },
  },
];

/* ── Day 4 ── */
const day4Items: ScheduleItem[] = [
  {
    time: "08:00",
    emoji: "🚃",
    text: "하카타 출발 → 키린 맥주 후쿠오카 공장",
    detail: "하카타→텐진(지하철 ¥210) → 니시테츠 텐진→오고리(특급 37분, ¥530) → 아마기철도 오고리→타치아라이(15분, ¥280) → 도보 15분 또는 무료 셔틀",
    cost: "편도 ¥1,020",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "10:00",
    emoji: "🍺",
    text: "키린 맥주 공장 견학 투어",
    detail: "朝倉市馬田3601 · 무료 · 약 80분 · 一番搾り 제조공정 견학 + 맥주 시음 2~3잔 포함 · 사전 예약 필수 (3/1부터 오픈) · 목요일 운영 확인됨",
    cost: "무료",
    location: { lat: 33.3639, lng: 130.7247 },
  },
  {
    time: "11:30",
    emoji: "🚃",
    text: "복귀 출발 (타치아라이 → 텐진/하카타)",
    detail: "타치아라이→오고리(¥280) → 니시테츠→텐진(¥530) · 약 1시간~1시간 30분 소요",
    cost: "¥810",
  },
  {
    time: "13:00",
    emoji: "🍜",
    text: "점심: うどん平 (우동 타이라)",
    detail: "博多区住吉5-10-7 · 하카타역 도보 11분 · 月~金 11:30~16:00 · 일·공휴일 정기 휴무 · 부드러운 하카타식 면발 · 예약 불가, 점심 줄 있음",
    cost: "¥600~1,000",
    location: { lat: 33.5853, lng: 130.4175 },
    restaurant: {
      signature: "ごぼう天うどん (우엉튀김 우동)",
      tabelog: { rating: "3.69", url: "https://tabelog.com/fukuoka/A4001/A400101/40052349/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/うどん平+博多+住吉" },
    },
  },
  {
    time: "14:30",
    emoji: "🚇",
    text: "베어핸즈 클라이밍으로 이동",
    detail: "텐진미나미역 → 나나쿠마역 (지하철 나나쿠마선, 12분)",
    cost: "¥300",
  },
  {
    time: "15:00",
    emoji: "🧗",
    text: "Bare Hands 클라이밍 (ベアハンズ)",
    detail: "城南区七隈8-4-8 칠쿠마 패밀리프라자 내 · 평일 13:00~23:00 · 금요 정기휴무(목요 OK!) · 초회 등록 약 10분 · 신발 렌탈 가능",
    cost: "~¥2,000~2,500",
    location: { lat: 33.5578, lng: 130.3658 },
  },
  {
    time: "17:30",
    emoji: "🚇",
    text: "텐진으로 복귀",
    detail: "나나쿠마역 → 텐진미나미역 (지하철 나나쿠마선, 12분)",
    cost: "¥300",
  },
  {
    time: "19:00",
    emoji: "🍣",
    text: "저녁: ひょうたん寿司 (효탄즈시)",
    detail: "天神2-10-20 新大閣ビル 2~3F · 11:30~15:00 / 17:00~21:30(L.O.21:00) · 큐슈산 신선 어패류 · 関サバ·活イカ(활오징어) 추천 · 3인 이상만 예약 가능, 2인 이하는 줄서기",
    cost: "¥3,000~5,000",
    location: { lat: 33.5893, lng: 130.3987 },
    restaurant: {
      signature: "おまかせ寿司セット (오마카세 스시 세트)",
      tabelog: { rating: "3.63", url: "https://tabelog.com/fukuoka/A4001/A400103/40001153/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/ひょうたん寿司+天神+福岡" },
    },
  },
];

/* ── Day 5 ── */
const day5Items: ScheduleItem[] = [
  {
    time: "10:00",
    emoji: "🛍️",
    text: "돈키호테 나카스점 / 드럭스토어 쇼핑",
    detail: "中洲3-7-24 · 24시간 영업 · 면세 가능 (여권 지참, ¥5,000 이상) · 과자, 화장품, 잡화 등",
    location: { lat: 33.5936, lng: 130.4073 },
  },
  {
    time: "12:00",
    emoji: "🍜",
    text: "마지막 라멘: 博多一双 (하카타 잇소)",
    detail: "하카타역 동쪽 도보 5분 · 11:00~24:00 · 泡系(아와케이) 톤코츠 라멘 · 크리미한 거품 육수가 특징 · 替え玉(카에다마) 필수 · 대기 30분+",
    cost: "¥800~1,100",
    location: { lat: 33.5901, lng: 130.4250 },
    restaurant: {
      signature: "泡系豚骨ラーメン (아와케이 톤코츠 라멘)",
      tabelog: { rating: "3.72", url: "https://tabelog.com/fukuoka/A4001/A400101/40032701/" },
      google: { rating: "Map", url: "https://www.google.com/maps/search/博多一双+博多駅東本店" },
    },
  },
  {
    time: "13:30",
    emoji: "🛍️",
    text: "하카타역 주변 마지막 쇼핑",
    detail: "하카타 한큐 (10:00~20:00) · 마이몬 (1F 기념품) · 요도바시카메라 (9:30~22:00)",
    location: { lat: 33.5897, lng: 130.4207 },
  },
  {
    time: "15:00",
    emoji: "🏨",
    text: "숙소 체크아웃 & 짐 정리",
  },
  {
    time: "16:00",
    emoji: "☕",
    text: "여유시간 / 카페 휴식",
    detail: "하카타역 내 카페 또는 텐진 주변에서 마지막 여유",
  },
  {
    time: "17:00",
    emoji: "🚇",
    text: "공항 이동 (국제선 터미널)",
    detail: "지하철 하카타→후쿠오카공항 국내선 (5분, ¥260) → 무료 셔틀로 국제선 터미널 이동 (15분) · 또는 니시테츠 버스로 국제선 직행 (20~30분)",
    cost: "¥260",
  },
  {
    time: "17:45",
    emoji: "🛂",
    text: "국제선 터미널 도착 · 체크인",
    detail: "국제선은 출발 2시간 전 도착 권장 · 이스타항공 체크인 카운터 확인",
  },
  {
    time: "20:40",
    emoji: "✈️",
    text: "후쿠오카 출발 → 인천 (이스타항공)",
    location: { lat: 33.5859, lng: 130.4517 },
  },
];

/* ── Transport Routes Data ── */
const transportRoutes: TransportRoute[] = [
  { from: "공항 (국내선)", to: "하카타역", method: "지하철 공항선", time: "5분", cost: "¥260" },
  { from: "하카타역", to: "텐진역", method: "지하철 공항선", time: "6분", cost: "¥210" },
  { from: "텐진역", to: "아카사카역", method: "지하철 공항선", time: "2분", cost: "¥210" },
  { from: "텐진역", to: "오호리공원역", method: "지하철 공항선", time: "4분", cost: "¥210" },
  { from: "하카타역", to: "아카사카역", method: "지하철 공항선", time: "8분", cost: "¥260" },
  { from: "텐진미나미역", to: "나나쿠마역", method: "지하철 나나쿠마선", time: "12분", cost: "¥300" },
  { from: "텐진역", to: "니시테츠 오고리", method: "니시테츠 특급", time: "37분", cost: "¥530" },
  { from: "오고리역", to: "타치아라이역", method: "아마기 철도", time: "15분", cost: "¥280" },
  { from: "하카타역", to: "유후인역", method: "유후인노모리", time: "2시간 14분", cost: "¥6,130" },
  { from: "하카타역", to: "나카스", method: "도보", time: "12~15분", cost: "무료" },
  { from: "하카타역", to: "캐널시티", method: "도보", time: "10분", cost: "무료" },
  { from: "텐진", to: "캐널시티", method: "도보", time: "10~12분", cost: "무료" },
];

/* ── Meal Data ── */
const mealData: MealEntry[] = [
  { day: "Day 1", meal: "저녁", theme: "屋台 야타이", restaurant: "小金ちゃん + 나카스 야타이" },
  { day: "Day 2", meal: "점심", theme: "天ぷら 텐푸라", restaurant: "天ぷら ひらお" },
  { day: "Day 2", meal: "저녁", theme: "もつ鍋 모츠나베", restaurant: "もつ鍋 やま中" },
  { day: "Day 3", meal: "점심", theme: "湯布院名物 유후인 명물", restaurant: "由布まぶし 心" },
  { day: "Day 3", meal: "저녁", theme: "焼き鳥 야키토리", restaurant: "かわ屋 薬院本店" },
  { day: "Day 4", meal: "점심", theme: "うどん 우동", restaurant: "うどん平" },
  { day: "Day 4", meal: "저녁", theme: "寿司 스시", restaurant: "ひょうたん寿司" },
  { day: "Day 5", meal: "점심", theme: "ラーメン 라멘", restaurant: "博多一双" },
];

function ReferenceLink({ title, url }: { title: string; url: string }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-xl bg-foreground/[0.03] border border-foreground/[0.06] px-5 py-3 hover:bg-foreground/[0.06] transition-colors"
    >
      <span className="font-medium">{title}</span>
      <span className="block text-sm text-foreground/40 truncate mt-0.5">{url}</span>
    </a>
  );
}

