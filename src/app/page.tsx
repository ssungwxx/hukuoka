import { FlightCard } from "@/components/FlightCard";
import { DaySchedule } from "@/components/DaySchedule";
import { PlaceCard } from "@/components/PlaceCard";
import { SectionTitle } from "@/components/SectionTitle";

export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8 pb-20">
      {/* Hero */}
      <header className="text-center mb-12">
        <p className="text-4xl mb-2">🌸</p>
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          후쿠오카 여행
        </h1>
        <p className="text-lg text-foreground/60">
          2026. 3. 30 (월) ~ 4. 3 (금) · 4박 5일
        </p>
      </header>

      {/* 항공편 */}
      <section className="mb-12">
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
      <section className="mb-12">
        <SectionTitle icon="🏨" title="숙소" />
        <div className="rounded-2xl border-2 border-dashed border-foreground/20 p-8 text-center text-foreground/50">
          <p className="text-2xl mb-2">🔍</p>
          <p className="font-medium">숙소 미정</p>
          <p className="text-sm mt-1">하카타역 or 텐진 근처 추천</p>
        </div>
      </section>

      {/* 일정 */}
      <section className="mb-12">
        <SectionTitle icon="📅" title="일정" />
        <div className="space-y-6">
          <DaySchedule
            day={1}
            date="3월 30일 (월)"
            title="도착 & 하카타 탐방"
            items={[
              { time: "15:20", emoji: "✈️", text: "후쿠오카 공항 도착" },
              { time: "17:00", emoji: "🏨", text: "숙소 체크인" },
              { time: "18:00", emoji: "🍜", text: "나카스 포장마차 거리 (야타이)" },
              { time: "20:00", emoji: "🌃", text: "나카스 강변 야경 산책" },
            ]}
          />
          <DaySchedule
            day={2}
            date="3월 31일 (화)"
            title="벚꽃 & 쇼핑"
            items={[
              { time: "09:00", emoji: "🌸", text: "마이즈루 공원 벚꽃 구경" },
              { time: "11:00", emoji: "🌸", text: "니시 공원 벚꽃 구경" },
              { time: "13:00", emoji: "🍱", text: "점심" },
              { time: "14:00", emoji: "🛍️", text: "텐진 지하상가 쇼핑" },
              { time: "16:00", emoji: "🏬", text: "캐널시티 하카타" },
              { time: "18:00", emoji: "🥚", text: "다마고치 관련 쇼핑" },
            ]}
          />
          <DaySchedule
            day={3}
            date="4월 1일 (수)"
            title="유후인 온천 여행"
            items={[
              { time: "08:00", emoji: "🚃", text: "유후인노모리 열차 출발 (하카타역)" },
              { time: "10:15", emoji: "♨️", text: "유후인 도착" },
              { time: "10:30", emoji: "🚶", text: "유노츠보 거리 산책 & 긴린코 호수" },
              { time: "12:00", emoji: "🍽️", text: "유후인 맛집 탐방" },
              { time: "14:00", emoji: "♨️", text: "온천 즐기기" },
              { time: "16:30", emoji: "🚃", text: "하카타역으로 복귀 (당일치기 시)" },
            ]}
            note="💡 당일치기 vs 1박 숙박 고민 중"
          />
          <DaySchedule
            day={4}
            date="4월 2일 (목)"
            title="클라이밍 & 맥주공장"
            items={[
              { time: "09:00", emoji: "🧗", text: "베어 핸즈 클라이밍" },
              { time: "12:00", emoji: "🍱", text: "점심" },
              { time: "14:00", emoji: "🍺", text: "맥주공장 투어 (아사히/기린)" },
              { time: "17:00", emoji: "🛍️", text: "추가 쇼핑 & 자유시간" },
              { time: "19:00", emoji: "🍣", text: "저녁 식사" },
            ]}
          />
          <DaySchedule
            day={5}
            date="4월 3일 (금)"
            title="마지막 쇼핑 & 귀국"
            items={[
              { time: "10:00", emoji: "🛍️", text: "돈키호테 / 마지막 쇼핑" },
              { time: "12:00", emoji: "🍜", text: "마지막 후쿠오카 라멘" },
              { time: "14:00", emoji: "🏨", text: "숙소 체크아웃" },
              { time: "18:00", emoji: "🚌", text: "공항 이동" },
              { time: "20:40", emoji: "✈️", text: "후쿠오카 출발 (이스타항공)" },
            ]}
          />
        </div>
      </section>

      {/* 방문 예정지 */}
      <section className="mb-12">
        <SectionTitle icon="📍" title="방문 예정지" />
        <div className="grid gap-4 sm:grid-cols-2">
          <PlaceCard
            emoji="🌸"
            title="벚꽃 명소"
            description="마이즈루 공원, 니시 공원, 오호리 공원 등 후쿠오카 벚꽃 스팟"
            tag="필수"
            link="https://blog.naver.com/hoff_/223795180538"
          />
          <PlaceCard
            emoji="🧗"
            title="베어 핸즈 클라이밍"
            description="후쿠오카 볼더링 클라이밍 체험"
            tag="필수"
          />
          <PlaceCard
            emoji="🥚"
            title="다마고치 쇼핑"
            description="다마고치 관련 굿즈 & 한정판 쇼핑"
            tag="필수"
            link="https://www.instagram.com/reel/DUX7dtRklCH"
          />
          <PlaceCard
            emoji="🛍️"
            title="쇼핑 스팟"
            description="텐진 지하상가, 돈키호테, 드럭스토어 등"
            tag="필수"
            link="https://blog.naver.com/muk_dori30/223488718710"
          />
          <PlaceCard
            emoji="🏬"
            title="캐널시티 하카타"
            description="쇼핑몰, 분수쇼, 라멘 스타디움"
            tag="필수"
          />
          <PlaceCard
            emoji="🍜"
            title="나카스 포장마차 거리"
            description="야타이에서 라멘, 오뎅, 야키토리 즐기기"
            tag="필수"
          />
          <PlaceCard
            emoji="♨️"
            title="유후인 온천"
            description="긴린코 호수, 유노츠보 거리, 노천온천"
            tag="필수"
          />
          <PlaceCard
            emoji="🍺"
            title="맥주공장 투어"
            description="아사히 or 기린 맥주공장 견학 & 시음"
            tag="필수"
          />
        </div>
      </section>

      {/* 참고 링크 */}
      <section className="mb-12">
        <SectionTitle icon="🔗" title="참고 링크" />
        <div className="space-y-3">
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
      <section>
        <SectionTitle icon="✅" title="준비 체크리스트" />
        <div className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.06] p-6 space-y-3">
          <CheckItem label="숙소 예약" />
          <CheckItem label="유후인 당일치기 / 1박 결정" />
          <CheckItem label="맥주공장 투어 예약" />
          <CheckItem label="유후인노모리 열차 예약" />
          <CheckItem label="항공편 웹 체크인" />
          <CheckItem label="Wi-Fi / 유심 준비" />
          <CheckItem label="여행자 보험" />
          <CheckItem label="엔화 환전" />
        </div>
      </section>
    </main>
  );
}

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

function CheckItem({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-5 h-5 rounded-md border-2 border-foreground/20 shrink-0" />
      <span className="text-sm">{label}</span>
    </div>
  );
}
