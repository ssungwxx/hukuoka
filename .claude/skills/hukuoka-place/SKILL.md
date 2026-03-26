---
name: hukuoka-place
description: >
  후쿠오카 여행 장소(맛집, 관광지, 쇼핑) 리서치 및 관리 skill.
  맛집 추천, 영업시간 확인, 예약 필요 여부, Tabelog/Google 리뷰 조회, 대안 비교를 담당한다.
  Use this skill whenever the user mentions restaurants, cafes, attractions, shops, or any specific place
  in Fukuoka/Kitakyushu/Shimonoseki -- even if they just ask "여기 몇 시에 열어?", "예약 필요해?",
  "다른 데 없어?", "맛집 추천해줘", or want to add/remove/swap a place in the itinerary.
  Also triggers on /hukuoka-place or /place.
---

# Hukuoka Place Research & Management

You help research, evaluate, and manage places (restaurants, attractions, shops) for a 4-night-5-day Fukuoka trip (March 30 - April 3). This is cherry blossom peak season, so hours/crowds/closures all need extra attention.

## How to start

1. Read the current schedule data in `/Users/felix/personal/projects/hukuoka/src/app/page.tsx`
2. Understand which places are already planned (see reference below)
3. Then address the user's request using the workflows described in this skill

## Currently Planned Places

These are already in `page.tsx`. Familiarize yourself so you don't suggest duplicates and so you can reason about proximity and timing.

| Day | Date | Places |
|-----|------|--------|
| 1 | 3/30 (Mon) | 小金ちゃん (yatai, Tenjin), Nakasu yatai hopping |
| 2 | 3/31 (Tue) | Ohori Park, Maizuru Park, Nishi Park, Tenjin Underground, Canal City, 天ぷらひらお (Acros Fukuoka), 다마고치 shopping, もつ鍋やま中 (Akasaka) |
| 3 | 4/1 (Wed) | Kirin Beer Factory (Tachiarai), 博多一双 (Hakata), Don Quijote Nakasu, Hakata station shopping, かわ屋 (Yakuin) |
| 4 | 4/2 (Thu) | うどん平 (Hakata), Bare Hands Climbing (Nanakuma), ひょうたん寿司 (Tenjin) |
| 5 | 4/3 (Fri) | Mojiko Retro, 焼きカレー (Mojiko), Kanmon Tunnel walk, Karato Market sushi (Shimonoseki), return to Hakata, airport |

## Workflow: Researching a Place

When the user asks about a specific place (hours, reviews, reservation, etc.):

1. **Check if it's already in page.tsx** -- if so, share the existing data first
2. **Use WebSearch** to find current information:
   - Search `"[place name] 営業時間"` or `"[place name] 定休日"` for hours/holidays
   - Search `"[place name] tabelog"` for Tabelog rating and reviews
   - Search `"[place name] 予約"` for reservation info
   - Search `"[place name] google maps"` for location/directions
3. **Verify dates carefully** -- the trip spans April 1-3, which can overlap with fiscal year holidays in Japan. Some restaurants close on specific weekdays. Cross-check the day of the week against the place's regular holidays.
4. **Present findings** in a structured card (see Output Format below)

## Workflow: Adding a New Place

When the user wants to add a place to the itinerary:

1. **Research thoroughly** using WebSearch:
   - Name in Japanese + English/Korean
   - Exact address and nearest station (with walking time)
   - Opening hours and regular holidays (match against trip dates!)
   - Cost range per person
   - Tabelog rating + URL
   - Google Maps link
   - Whether reservation is needed (especially for groups of 4+)
   - Any special notes (cash only, counter seating only, etc.)
2. **Check schedule fit**:
   - Read current `page.tsx` to see time slots
   - Consider travel time from the previous/next activity
   - Suggest which day and time slot works best
3. **Propose the addition** with a concrete ScheduleItem object showing how it would look in code
4. **If user approves**, update `page.tsx` with the new item, following the existing data structure:

```typescript
{
  time: "HH:MM",
  emoji: "appropriate emoji",
  text: "Place name in display format",
  detail: "address, hours, key info",
  cost: "price range",
  location: { lat: number, lng: number },
  restaurant: {  // only for restaurants
    signature: "signature dish",
    tabelog: { rating: "X.XX", url: "tabelog URL" },
    google: { rating: "Map", url: "google maps search URL" },
  },
}
```

Also update the `mapUrl` for the relevant DaySchedule if the route changes, and update `mealData` if a meal is being added/swapped.

## Workflow: Comparing Alternatives

When the user asks for alternatives or wants to compare options:

1. **Identify the slot** -- what meal/activity/time is this replacing or filling?
2. **Research 3-5 candidates** using WebSearch, focusing on:
   - Tabelog rating (3.5+ is good, 3.7+ is excellent in Fukuoka)
   - Cost range
   - Distance from previous/next activity
   - Expected wait time (especially for popular spots with no reservation)
   - Whether it fits the schedule (hours, holidays)
3. **Present a comparison table**:

| | Option A | Option B | Option C |
|--|----------|----------|----------|
| Name | JP name (EN) | ... | ... |
| Rating | Tabelog X.XX | ... | ... |
| Cost | price range | ... | ... |
| Distance | from prev activity | ... | ... |
| Wait | estimated | ... | ... |
| Hours | relevant to trip day | ... | ... |
| Reservation | needed? | ... | ... |
| Why | key selling point | ... | ... |

4. **Give a recommendation** based on the overall fit with the existing schedule

## Workflow: Discovering New Places

When the user asks for recommendations (e.g., "맛집 추천", "뭐 먹을까"):

1. **Identify the gap** -- which meal slot or free time are they trying to fill?
2. **Consider what's already planned** -- avoid duplicate cuisine themes (the trip already covers: yatai, tempura, motsunabe, ramen, yakitori, udon, sushi, yakicurry, market sushi)
3. **Search strategically**:
   - `"福岡 [cuisine] おすすめ tabelog"` for restaurant discovery
   - `"福岡 [area] 観光"` for attractions
   - `"天神/博多 ショッピング"` for shops
4. **Present 3-5 options** with the structured card format

## Important Context

- **Cherry blossom season**: Late March through early April is peak tourist season in Fukuoka. Popular restaurants will have longer waits. Book what you can.
- **Group size**: The default assumption is a small group. For 4+ people, many popular restaurants require reservation or may not accommodate easily.
- **Don Quijote tax-free**: Passport required + minimum purchase of 5,000 yen (before tax) for tax-free shopping.
- **Cash vs card**: Yatai stalls and some traditional restaurants are cash-only. Market stalls at Karato are often cash-only too.
- **Reference links already in the project** (in page.tsx):
  - Karato Market: https://www.karatoichiba.com/
  - Kirin Beer Factory: https://www.kirin.co.jp/experience/factory/fukuoka/
  - Motsunabe Yama-Naka: https://motsunabe-yamanaka.com/en/
  - Tenpura Hirao: https://www.hirao-foods.net/
  - Bare Hands Climbing: https://barehands.biz/english/
  - Mojiko Retro: https://www.mojiko.info/

## Output Format

Present place information as structured cards. Use this format:

```
### [Place Name JP] ([Place Name EN/KR])

- **Rating**: Tabelog X.XX / Google X.X
- **Cost**: price range per person
- **Hours**: opening hours (holiday info)
- **Address**: full address
- **Nearest Station**: station name, walking time
- **Reservation**: needed / recommended / not accepted / walk-in only
- **Signature**: signature dish or highlight
- **Payment**: cash only / card OK
- **Map**: [Google Maps link]
- **Tabelog**: [Tabelog link]

> Brief note about why this place is notable or how it fits the trip
```

For quick answers (e.g., "몇 시에 열어?"), skip the full card and just answer directly. Match the depth of your response to the complexity of the question.

## Updating page.tsx

When modifying `page.tsx`, always:
1. Read the current file first to get the latest state
2. Preserve the existing TypeScript structure and coding style exactly
3. Keep location coordinates accurate (verify via Google Maps)
4. Update the DaySchedule `mapUrl` if the route changes (it's a Google Maps directions URL with waypoints)
5. Update `mealData` array if meals change
6. Update `transportRoutes` if new transport info is relevant
7. Keep cost estimates realistic and consistent with the budget section
