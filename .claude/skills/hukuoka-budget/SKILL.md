---
name: hukuoka-budget
description: >
  후쿠오카 여행 예산 관리 skill. 카테고리별(교통/식비/액티비티) 비용 집계, JPY-KRW 환율 변환,
  일자별 지출 추적, 예산 초과 경고를 담당한다.
  이 skill은 사용자가 예산, 비용, 지출, 환율에 대해 물어볼 때 반드시 사용해야 한다.
  "예산 확인", "비용 계산", "얼마야", "환율", "총 비용", "예산 초과", "budget",
  "how much", "cost" 같은 표현이 나오면 이 skill을 사용한다.
  일정에 새 항목을 추가하거나 레스토랑을 변경할 때 비용 영향을 파악하고 싶을 때도 사용한다.
  JPY와 KRW 간 환산이 필요할 때도 이 skill을 사용한다.
---

# Hukuoka Budget Manager

후쿠오카 4박 5일 여행의 예산을 관리한다. 모든 금액은 1인 기준이며 숙소비는 별도이다.

## Data Source

예산 데이터는 `/Users/felix/personal/projects/hukuoka/src/app/page.tsx`에 있다.

- **BudgetSection props** (lines 131-142): 전체 예산 요약
- **day1Items ~ day5Items**: 각 일정 항목의 `cost` 필드에 개별 비용이 있다
- **transportRoutes**: 주요 교통 구간별 요금 목록
- **mealData**: 식사 테마 배분표 (비용은 dayItems에서 확인)

예산을 확인하거나 수정할 때는 반드시 이 파일을 Read tool로 읽어서 최신 데이터를 기준으로 계산한다.

## Current Budget Snapshot (1인, 숙소 제외)

| Category | JPY | KRW (at 100:900) | Notes |
|----------|-----|-------------------|-------|
| Transport | ~7,800 | ~70,200 | 공항, 시내이동, 기타큐슈 왕복 포함 |
| Food | ~18,200 | ~163,800 | 9끼 식사 (야타이~가라토시장 초밥) |
| Activities | ~2,500 | ~22,500 | 클라이밍 (맥주공장 무료) |
| **Total** | **~28,500** | **~256,500** | 쇼핑비 별도 |

## Detailed Cost Breakdown by Day

### Day 1 (3/30 월) - 도착 & 야타이 체험
| Item | Cost |
|------|------|
| 지하철 공항→하카타 | 260 |
| 야타이 小金ちゃん | 1,500~2,500 |
| 나카스 야타이 2차 | 1,000~2,000 |
| **Day 1 subtotal** | **~2,760~4,760** |
| Transport: 260 / Food: 2,500~4,500 |

### Day 2 (3/31 화) - 벚꽃 & 쇼핑
| Item | Cost |
|------|------|
| 지하철→오호리공원 | 260 |
| (니시공원→텐진 버스) | ~230 |
| (텐진→아카사카 지하철) | 210 |
| (아카사카→하카타 지하철) | 260 |
| 텐푸라 ひらお | 800~1,200 |
| もつ鍋 やま中 | 4,000~5,000 |
| **Day 2 subtotal** | **~5,760~7,160** |
| Transport: ~960 / Food: 4,800~6,200 |

### Day 3 (4/1 수) - 맥주공장 & 여유 쇼핑
| Item | Cost |
|------|------|
| 하카타→타치아라이 편도 | 1,020 |
| 타치아라이→하카타 복귀 | 810 |
| 맥주공장 투어 | 무료 |
| 博多一双 라멘 | 800~1,100 |
| かわ屋 야키토리 | 2,500~4,000 |
| **Day 3 subtotal** | **~5,130~6,930** |
| Transport: ~1,830 (+ 하카타-텐진 210*2) / Food: 3,300~5,100 |

### Day 4 (4/2 목) - 클라이밍 데이
| Item | Cost |
|------|------|
| 지하철→나나쿠마 | 300 |
| 클라이밍 Bare Hands | 2,000~2,500 |
| 지하철 복귀 | 300 |
| うどん平 | 600~1,000 |
| ひょうたん寿司 | 3,000~5,000 |
| **Day 4 subtotal** | **~6,200~9,100** |
| Transport: ~600 (+ 하카타-텐진 210) / Food: 3,600~6,000 / Activities: 2,000~2,500 |

### Day 5 (4/3 금) - 기타큐슈 + 귀국
| Item | Cost |
|------|------|
| JR 하카타→모지코 | ~1,500 |
| 간몬 연락선 | 400 |
| JR 모지코→하카타 | ~1,500 |
| 지하철 하카타→공항 | 260 |
| 모지코 바나나카레 | 800~1,200 |
| 가라토시장 초밥 | 1,500~2,500 |
| **Day 5 subtotal** | **~5,960~7,360** |
| Transport: ~3,660 / Food: 2,300~3,700 |

## Key Cost References

식사 가격대 참고:
- 저렴: 600~1,200 (우동, 텐푸라, 라멘, 카레)
- 중간: 1,500~2,500 (야타이, 시장초밥, 야키토리)
- 고급: 3,000~5,000 (모츠나베, 스시)

교통 가격대 참고:
- 시내 지하철 1회: 210~300
- 니시테츠+아마기(맥주공장): 편도 1,020
- JR 하카타↔모지코: 편도 ~1,500
- 간몬 연락선: 400

## How to Calculate

### When asked for budget summary:
1. Read page.tsx to get the latest cost data
2. Sum costs by category (transport, food, activities)
3. Sum costs by day
4. Convert to KRW using the exchange rate

### When asked about exchange rate:
1. Use WebSearch to look up the current JPY-KRW exchange rate
2. If WebSearch is unavailable or fails, use the default rate: 100 = 900
3. Always show both JPY and KRW amounts

### When a schedule change affects costs:
1. Read the current data from page.tsx
2. Calculate the cost difference (delta) between old and new
3. Show the impact on category totals and overall budget
4. Warn if the change pushes any category or total over the planned amount
5. If the user confirms, update the cost data in page.tsx

### When comparing options (e.g., restaurant A vs B):
1. Show side-by-side cost comparison
2. Include the price range for each option
3. Show the budget impact of switching

## Output Format

Always present budget information in clear tables. Include both JPY and KRW amounts. Use these patterns:

**Budget summary table:**
```
| Category    |      JPY |       KRW | vs Plan |
|-------------|----------|-----------|---------|
| Transport   |   ~7,800 |   ~70,200 |    --   |
| Food        |  ~18,200 |  ~163,800 |    --   |
| Activities  |   ~2,500 |   ~22,500 |    --   |
| **Total**   | ~28,500  |  ~256,500 |    --   |
```

**When budget changes occur**, show the delta clearly:
- Under budget: show the amount saved
- Over budget: warn with the overage amount
- Example: "Transport +500 -> 8,300 (planned: 7,800, +500 over)"

**Per-day summary:**
```
| Day | Transport | Food | Activities | Day Total |
|-----|-----------|------|------------|-----------|
| 1   |       260 | 3,500|          0 |     3,760 |
| ... |       ... |  ... |        ... |       ... |
```

When presenting ranges (e.g., 1,500~2,500), use the midpoint for totals and note the range in parentheses.
