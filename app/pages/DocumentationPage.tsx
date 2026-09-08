import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface NavItem {
  id: string;
  title: string;
  children?: NavItem[];
}

const navigationStructure: NavItem[] = [
  {
    id: 'getting-here',
    title: 'Getting here',
    children: [
      { id: 'before-travel', title: 'Before You Travel' },
      { id: 'airport-info', title: 'Airport Information' },
      { id: 'transportation', title: 'Transportation to Ames' },
      { id: 'when-arrive', title: 'When to Arrive' },
      { id: 'troubleshooting', title: 'Troubleshooting & Tips' },
      { id: 'first-steps', title: 'First Steps on Campus' },
      { id: 'first-week', title: 'First Week To-Do List' },
    ],
  },
  {
    id: 'campus-guide',
    title: 'Campus Guide',
    children: [
      { id: 'buildings', title: 'Important Buildings' },
      { id: 'tour', title: 'Official Campus Tour' },
    ],
  },
  {
    id: 'housing',
    title: 'Housing',
    children: [
      { id: 'on-campus', title: 'On Campus' },
      { id: 'off-campus', title: 'Off Campus' },
      { id: 'checklist', title: 'The Final Checklist for Off Campus' },
    ],
  },
  {
    id: 'transportation-routes',
    title: 'Transportation',
    children: [
      { id: 'cyride-routes', title: 'Popular CyRide Routes' },
      { id: 'map', title: 'Map' },
    ],
  },
  {
    id: 'restaurants',
    title: 'Restaurants',
    children: [
      { id: 'on-campus-food', title: 'On Campus - 학교 내 푸드트럭' },
      { id: 'near-campus-food', title: 'Near Campus - 학교 근처 도보 거리' },
    ],
  },
  {
    id: 'phone-carriers',
    title: 'Phone Carriers',
    children: [
      { id: 'before-buy', title: 'Before You Buy' },
      { id: 'esim', title: 'eSIM vs. Physical SIM' },
      { id: 'carrier-guide', title: '통신사 선택 가이드' },
      { id: 'major-carriers', title: '대형 & 중형 통신사' },
      { id: 'mvno', title: '알뜰폰' },
      { id: 'wifi', title: 'Wi-Fi on Campus' },
    ],
  },
  {
    id: 'useful-apps',
    title: 'Useful Apps',
    children: [
      { id: 'school-apps', title: '학교 관련 앱' },
      { id: 'communication', title: '커뮤니케이션 & SNS' },
      { id: 'daily-life', title: '데일리 라이프' },
      { id: 'safety', title: 'Safety & Emergency' },
    ],
  },
  {
    id: 'supermarkets',
    title: 'Supermarkets',
    children: [
      { id: 'grocery', title: 'Grocery' },
      { id: 'asian-grocery', title: 'Asian/Korean Grocery' },
      { id: 'bulk-stores', title: 'Bulk/Membership Stores' },
      { id: 'budget-thrift', title: 'Budget/Thrift' },
      { id: 'tech', title: 'Tech' },
    ],
  },
  {
    id: 'korean-orgs',
    title: 'Korean Organizations',
    children: [
      { id: 'kasi', title: 'KASI' },
      { id: 'korean-church', title: 'Korean Church' },
      { id: 'student-groups', title: 'Student Groups' },
    ],
  },
  {
    id: 'banking',
    title: 'Banking & Money',
    children: [
      { id: 'account-opening', title: '계좌 개설' },
      { id: 'credit-cards', title: '신용카드 및 신용점수' },
      { id: 'credit-score', title: '신용점수 관리' },
      { id: 'remittance', title: '송금 및 결제' },
      { id: 'banking-tips', title: '유의사항 및 추천 앱' },
    ],
  },
];

// --- Reusable doc components ---
function TipBox({ color, emoji, title, children }: { color: 'blue'|'orange'|'green'|'red'|'yellow', emoji: string, title: string, children: React.ReactNode }) {
  const styles: Record<string, string> = {
    blue:   'bg-blue-50 border-blue-400 text-blue-900',
    orange: 'bg-orange-50 border-orange-400 text-orange-900',
    green:  'bg-green-50 border-green-400 text-green-900',
    red:    'bg-red-50 border-red-400 text-red-900',
    yellow: 'bg-yellow-50 border-yellow-400 text-yellow-900',
  };
  return (
    <div className={`border-l-4 rounded-r p-3 my-3 text-sm ${styles[color]}`}>
      <p className="font-semibold mb-1">{emoji} {title}</p>
      <div>{children}</div>
    </div>
  );
}

function SectionAnchor({ id }: { id: string }) {
  return <div id={id} style={{ scrollMarginTop: '24px' }} />;
}

function H2({ children }: { children: React.ReactNode }) {
  return null;
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="text-base font-semibold text-gray-900 mt-5 mb-2">{children}</h3>;
}

function Tag({ color, children }: { color: string, children: React.ReactNode }) {
  return <span className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mr-1 ${color}`}>{children}</span>;
}

function Table({ headers, rows }: { headers: string[], rows: (string | React.ReactNode)[][] }) {
  return (
    <div className="overflow-x-auto my-3">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h, i) => (
              null
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, j) => (
                null
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// --- Main content sections ---
function GettingHereContent() {
  return (
    <div className="m-[0px] px-[0px] py-[30px]">
      <SectionAnchor id="getting-here" />
      <h1 className="font-bold text-gray-900 mb-1 text-[32px]">Getting Here</h1>
      <p className="text-gray-500 mb-6 text-[16px]">아이오와 주립대학교 도착 가이드</p>

      {/* Before You Travel */}
      <SectionAnchor id="before-travel" />
      <H2>Before You Travel · 여행 전 준비사항</H2>

      <TipBox color="orange" emoji="⚠️" title="주의사항 (Important Notes)">
        <p className="mb-1"><strong>Layover Minimum Connection Time:</strong> 국제선-국내선 환승은 최소 <strong>2–3시간</strong>을 확보하세요. 환승 시간이 부족하면 다음 항공편을 놓칠 수 있습니다.</p>
        <p><strong>Required Documents May Vary:</strong> 아래 서류는 일반적인 가이드라인입니다. 개인 상황에 따라 필요 서류가 다를 수 있으니, 출발 전 반드시 <strong>ISU International Students &amp; Scholars Office</strong>에 확인하세요.</p>
      </TipBox>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-[0px] my-[12px]">
        <div className="bg-gray-50 rounded p-3 border border-gray-200">
          <H3>📋 Required Documents · 필수 서류</H3>
          <ul className="space-y-1.5 text-sm">
            {[
              ['Valid Passport', '유효한 여권'],
              ['F-1 Student Visa', 'F-1 학생 비자'],
              ['I-20 Form (original)', 'I-20 원본'],
              ['Admission Letter', '입학 허가서'],
              ['Proof of Financial Support', '재정 증명서'],
              ['Immunization Records', '예방접종 기록'],
              ['SEVIS Fee Payment Receipt', 'SEVIS 납부 영수증'],
            ].map(([en, kr], i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span><span className="font-medium">{en}</span> <span className="text-gray-500">— {kr}</span></span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 rounded border border-gray-200 p-[12px]">
          <H3>🧳 What to Pack · 준비물</H3>
          <ul className="space-y-1.5 text-sm text-gray-700">
            <li className="text-[13px]">• <strong>Winter Clothing</strong> — 동복 (Iowa 겨울 –20°C 가능)</li>
            <li className="text-[13px]">• <strong>Essential Medications</strong> — 필수 약품 (3개월치 권장)</li>
            <li className="text-[13px]">• <strong>Adapters &amp; Chargers</strong> — 어댑터 및 충전기 (미국 110V)</li>
            <li className="text-[13px]">• <strong>Warm Boots &amp; Waterproof Shoes</strong> — 방수 신발</li>
            <li>• <strong>Gloves, Scarves, Winter Hats</strong> — 방한용품</li>
            <li>• <strong>Laptop</strong> — 대부분 전공에서 필수</li>
            <li className="text-[13px]">• <strong>Important Contacts List (printed)</strong> — 중요 연락처</li>
            <li className="text-[13px]">• <strong>Some US Dollars</strong> — 미화 현금 ($200–500 권장)</li>
          </ul>
          <TipBox color="orange" emoji="💡" title="Note">
            전자제품은 미국이 대체로 저렴합니다. 무거운 모니터나 프린터는 도착 후 구매를 고려하세요.
          </TipBox>
        </div>
      </div>

      {/* Airport Information */}
      <SectionAnchor id="airport-info" />
      <H2>Airport Information · 공항 정보</H2>

      <div className="bg-primary/5 border-2 border-primary/30 rounded p-3 mb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag color="bg-primary text-white">RECOMMENDED</Tag>
          <span className="font-bold text-gray-900">Des Moines Airport (DSM) · 데스모인 국제공항</span>
        </div>
        <ul className="text-sm space-y-1 text-gray-700">
          <li>Ames까지 약 45분 거리 — 가장 가까운 주요 공항</li>
          <li>Executive Express 셔틀 $25 one-way로 캠퍼스 직행 가능</li>
          <li>직항편이 제한적 — 환승이 필요할 수 있음</li>
        </ul>
      </div>

      <TipBox color="orange" emoji="⚠️" title="DSM Airport 주의사항">
        DSM은 소규모 국내선 공항입니다. <strong>환전소 및 SIM 카드 판매점 없음</strong> — Ames 도착 후 이용 필요. 공항 내 무료 WiFi: <code className="bg-orange-100 px-1 rounded">DSM Free Wi-Fi</code> (비밀번호 불필요).
      </TipBox>

      <H3>Airport Facilities · 공항 시설</H3>
      <ul className="text-sm space-y-1 text-gray-700">
        <li>• 무료 와이파이 (Free WiFi)</li>
        <li>• 식당 및 카페 (Restaurants &amp; Cafes)</li>
        <li>• ATM 현금 인출기</li>
        <li>• <strong>환전소 없음</strong> — 미화 현금 미리 준비 필수</li>
      </ul>

      {/* Transportation to Ames */}
      <SectionAnchor id="transportation" />
      <H2>Transportation to Ames · Ames까지 교통편</H2>

      <Table
        headers={['방법', '비용', '특징']}
        rows={[
          [
            <span key="a"><Tag color="bg-primary text-white">OFFICIAL</Tag><Tag color="bg-green-100 text-green-800">FREE</Tag><strong>ISU New Student Shuttle</strong></span>,
            '무료 (신입생)',
            '공식 ISU 셔틀. 8월 이사 기간에만 운행. 사전 예약 필수 (housing.iastate.edu)',
          ],
          [
            <span key="b"><Tag color="bg-yellow-100 text-yellow-800">RECOMMENDED</Tag><strong>Executive Express</strong></span>,
            '$25 one-way',
            '연중 운행. DSM 공항 → ISU 캠퍼스 직행. 24시간 전 예약 권장 (execexpress.com)',
          ],
          [
            <span key="c"><Tag color="bg-green-100 text-green-800">BUDGET</Tag><strong>Intercity Bus</strong> (Jefferson Lines / Greyhound)</span>,
            '$20–25',
            '가장 저렴하지만 환승 필요, 약 3–4시간 소요 (jeffersonlines.com)',
          ],
          [
            <span key="d"><strong>Uber / Lyft</strong></span>,
            '$80–100+',
            '가격 변동 큼. 편리하지만 비쌈. 앱 사전 설치 필요. Lyft는 드라이버 수가 적음',
          ],
        ]}
      />

      {/* When to Arrive */}
      <SectionAnchor id="when-arrive" />
      <H2>When to Arrive · 도착 시기</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
        <div className="border-l-4 border-primary pl-3 py-1 text-sm">
          <p className="font-semibold">Fall Semester (August) · 가을 학기</p>
          <p className="text-gray-600">권장 도착: <strong className="text-primary">오리엔테이션 1주일 전</strong></p>
          <p className="text-gray-500 text-xs mt-1">이사 시작일은 보통 8월 중순. 일찍 도착해서 필수품 쇼핑과 오리엔테이션 준비를 하세요.</p>
        </div>
        <div className="border-l-4 border-secondary pl-3 py-1 text-sm">
          <p className="font-semibold">Spring Semester (January) · 봄 학기</p>
          <p className="text-gray-600">권장 도착: <strong>오리엔테이션 1주일 전</strong></p>
          <p className="text-gray-500 text-xs mt-1">겨울 도착 — 눈과 추위 대비 필수! 방한 용품 충분히 준비하세요.</p>
        </div>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
        <p className="font-semibold mb-1">Early or Late Arrival?</p>
        <p className="text-gray-700">• <strong>일찍 도착 시:</strong> 기숙사가 아직 준비되지 않을 수 있음. Days Inn, Comfort Inn 등 인근 호텔에서 1–2일 숙박 가능.</p>
        <p className="text-gray-700 mt-1">• <strong>늦게 도착 시:</strong> 주거 오피스에 즉시 연락하세요. 체크인은 가능하지만 시간 조율이 필요합니다.</p>
      </div>

      {/* Troubleshooting */}
      <SectionAnchor id="troubleshooting" />
      <H2>Troubleshooting &amp; Tips · 문제 해결 및 팁</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3">
        <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm">
          <p className="font-semibold text-blue-800 mb-1">Late Night Arrival · 야간 도착</p>
          <p className="text-gray-700 mb-2"><strong>오후 10시 이후 도착 시:</strong></p>
          <p className="text-gray-700">→ <strong className="text-primary">Maple-Willow-Larch (MWL) Hall</strong> 데스크에서 체크인 후 당직 RA에게 연락하세요.</p>
          <p className="text-xs text-gray-500 mt-2">MWL Hall: 224 Beach Rd, Ames, IA 50011</p>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded p-3 text-sm">
          <p className="font-semibold text-orange-800 mb-1">Airport Tips · 공항 팁</p>
          <p className="text-gray-700 mb-1">• Free Wi-Fi: <code className="bg-orange-100 px-1 rounded">DSM Free Wi-Fi</code> (비밀번호 없음)</p>
          <p className="text-gray-700">• 수하물 분실 시 → <strong>Baggage Claim Office</strong> 즉시 방문</p>
          <p className="text-xs text-gray-500 mt-2">짐을 분실한 경우 즉시 수하물 클레임 오피스를 방문하세요.</p>
        </div>
      </div>

      {/* First Steps on Campus */}
      <SectionAnchor id="first-steps" />
      <H2>First Steps on Campus · 캠퍼스 도착 후 첫 단계</H2>

      <div className="space-y-3 my-3">
        {[
          {
            step: '1',
            title: 'Check in to Housing · 주거 체크인',
            location: '거주 기숙사 프런트 데스크',
            items: [
              'ID 및 입학 허가서 지참',
              '방 열쇠 및 우편함 정보 수령',
              '주거 계약서 서명',
              '💡 짐이 많으면 RA에게 이동 카트(CART) 요청',
            ],
          },
          {
            step: '2',
            title: 'Get Your ISU Card · ISU 카드 발급',
            location: 'Memorial Union, Room 1150',
            items: ['사진이 있는 ID 지참', '학생 무료 발급', '건물 출입, 식당, 도서관 이용 카드'],
          },
          {
            step: '3',
            title: 'Connect to WiFi · 와이파이 연결',
            location: '임시: ISU-Guest 사용',
            items: ['ISU NetID 활성화', 'Eduroam (ISU-Secure) 연결 — 빠르고 안전'],
          },
          {
            step: '4',
            title: 'Attend Orientation · 오리엔테이션 참석',
            location: 'ISU 이메일에서 세부 내용 확인',
            items: ['International Student Orientation', 'Academic Advising', 'Destination Iowa State (DIS)'],
          },
        ].map((item) => (
          <div key={item.step} className="flex gap-3 bg-gray-50 border border-gray-200 rounded p-3 text-sm">
            <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">{item.step}</div>
            <div>
              <p className="font-semibold">{item.title}</p>
              <p className="text-xs text-primary font-medium">{item.location}</p>
              <ul className="mt-1 space-y-0.5">
                {item.items.map((t, i) => <li key={i} className="text-gray-600">• {t}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* First Week */}
      <SectionAnchor id="first-week" />
      <H2>First Week To-Do List · 첫 주 해야 할 일</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-sm">
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-semibold mb-1">Get a US Phone Number · 미국 전화번호 개통</p>
          <ul className="space-y-0.5 text-gray-700">
            <li>• 통신사: AT&amp;T, T-Mobile, Mint Mobile (저가)</li>
            <li>• 위치: North Grand Mall 또는 온라인</li>
            <li>• 지참: 여권, ISU Card, 결제 수단</li>
            <li>• 선불(Prepaid) 요금제로 시작 후 변경 가능</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-semibold mb-1">🏦 Open a Bank Account · 은행 계좌 개설</p>
          <ul className="space-y-0.5 text-gray-700">
            <li>• 은행: US Bank (캠퍼스 내), Wells Fargo, Chase</li>
            <li>• 지참: 여권, I-20, 주소 증명, 초기 입금</li>
            <li>• 목표: 체킹 계좌 + 직불카드 발급</li>
            <li>• 학생 계좌 문의 (수수료 없는 경우 많음)</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-semibold mb-1">🛍️ Shop for Essentials · 필수품 쇼핑</p>
          <ul className="space-y-0.5 text-gray-700">
            <li>• 침구: 시트, 베개, 이불</li>
            <li>• 주방: 접시, 식기, 전자레인지 용기</li>
            <li>• 생필품: 치약, 칫솔, 화장지</li>
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-semibold mb-1">💻 Set Up Technology · 기술 설정</p>
          <ul className="space-y-0.5 text-gray-700">
            <li>• Canvas: 강의 자료 및 과제 확인</li>
            <li>• ISU Email: 매일 확인 필수</li>
            <li>• Apps: MyState, 은행 앱 설치</li>
          </ul>
        </div>
      </div>

      <TipBox color="green" emoji="🎉" title="Connect with KSA!">
        혼자 고민하지 마세요! KSA 선배들이 질문에 답변해드립니다. Don't navigate this alone — KSA members are here to help.
        <br /><a href="mailto:ksa@iastate.edu" className="underline font-medium">ksa@iastate.edu</a>
      </TipBox>
    </div>
  );
}

function CampusGuideContent() {
  return (
    <div>
      <SectionAnchor id="campus-guide" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Campus Guide</h1>
      <p className="text-sm text-gray-500 mb-6">캠퍼스 가이드 — 주요 건물 및 장소</p>

      <SectionAnchor id="buildings" />
      <H2>Important Buildings · 주요 건물</H2>

      <Table
        headers={['건물', '한국어', '설명']}
        rows={[
          ['Parks Library', '파크스 도서관', '광범위한 학습 공간과 자료를 갖춘 중앙 도서관'],
          ['Memorial Union', '메모리얼 유니언', '식당, 서점(ISU Card 발급), 회의 공간을 갖춘 학생 센터'],
          ['State Gym', '스테이트 체육관', '학생들을 위한 레크리에이션 및 피트니스 시설 (학생 무료)'],
          ['Maple-Willow-Larch (MWL)', 'MWL 기숙사', '야간 도착 시 체크인 가능 — 224 Beach Rd, Ames'],
          ['Carver Hall', '카버 홀', '수업 건물 — 푸드트럭 위치 근처'],
          ['Kildee / Hoover Hall', '킬디/후버 홀', '강의 건물 — Carlos Quesadillas 푸드트럭 근처'],
        ]}
      />

      <SectionAnchor id="tour" />
      <H2>Official Campus Tour · 공식 캠퍼스 투어</H2>
      <p className="text-sm text-gray-700 mb-3">
        아래 공식 캠퍼스 투어 영상을 통해 Iowa State University 캠퍼스를 미리 둘러보세요.
      </p>
      <div className="bg-gray-100 rounded border border-gray-200 overflow-hidden my-3" style={{ aspectRatio: '16/9' }}>
        <iframe
          src="https://www.youtube.com/embed/h_x0aPoVqB8"
          title="ISU Campus Tour"
          className="w-full h-full"
          allowFullScreen
        />
      </div>
      <p className="text-xs text-gray-400">출처: ISU Official Campus Tour Video</p>
    </div>
  );
}

function HousingContent() {
  return (
    <div>
      <SectionAnchor id="housing" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Housing Guide</h1>
      <p className="text-sm text-gray-500 mb-6">주거 가이드 — 숙소 찾기</p>

      <SectionAnchor id="on-campus" />
      <H2>On Campus Housing · 교내 기숙사</H2>

      <p className="text-sm text-gray-700 mb-3">
        교내 기숙사는 Iowa State University에서 운영하며 대부분 캠퍼스 내에 위치해 있어 수업, 식당, 캠퍼스 시설 접근이 편리합니다. 인기 있는 기숙사는 자리가 빠르게 채워지기 때문에 <strong>가능한 한 빨리 신청</strong>하는 것이 좋습니다.
      </p>

      <H3>Things to Consider · 고려 사항</H3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-3 text-xs">
        {[
          ['기숙사 종류', 'Apartment / Hall / Suite'],
          ['비용', 'Cost'],
          ['위치', 'Location (distance from facilities)'],
          ['겨울방학 거주 가능 여부', 'Open during Winter Break'],
          ['에어컨', 'Air-Conditioned'],
          ['학식 강제성 여부', 'Meal Plan Requirement'],
          ['주방 여부', 'Kitchenette'],
          ['가구 옵션', 'Furnishings'],
        ].map(([kr, en], i) => (
          <div key={i} className="bg-gray-50 border border-gray-200 rounded p-2">
            <p className="font-semibold text-gray-800">{kr}</p>
            <p className="text-gray-500">{en}</p>
          </div>
        ))}
      </div>

      <TipBox color="blue" emoji="🔗" title="공식 사이트">
        <a href="https://housing.iastate.edu" target="_blank" rel="noopener noreferrer" className="underline font-medium">housing.iastate.edu</a>에서 기숙사 종류, 평면도, 편의시설, 비용을 비교하고 신청할 수 있습니다. 신청 취소 및 마감 일정은 반드시 확인하세요.
      </TipBox>

      <SectionAnchor id="off-campus" />
      <H2>Off Campus Housing · 교외 거주</H2>

      <p className="text-sm text-gray-700 mb-3">
        교외 거주는 Ames 지역의 일반 아파트나 주택을 임대하는 방식입니다. 많은 학생이 1학년 이후 더 독립적이고 유연한 주거 환경을 위해 선택합니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
          <H3>Property Managers · 부동산 관리 회사</H3>
          <ul className="space-y-1">
            {[
              ['West End Living', 'https://www.westendames.com/'],
              ['Social West', 'https://thesocialwestames.com/'],
              ['Hunziker', 'https://www.hunziker.com/'],
              ['The Foundry', 'https://www.foundrystudentliving.com/'],
              ['RES Properties', 'https://www.resproperties.com/'],
            ].map(([name, url], i) => (
              <li key={i}><a href={url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">• {name}</a></li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
          <H3>🔍 Search Websites · 렌트 검색 사이트</H3>
          <ul className="space-y-1">
            {[
              ['Zillow', 'https://www.zillow.com', false],
              ['Apartments.com', 'https://www.apartments.com', false],
              ['ApartmentList', 'https://www.apartmentlist.com', false],
              ['RentCafe', 'https://www.rentcafe.com', false],
              ['Facebook Marketplace', 'https://www.facebook.com/marketplace', true],
            ].map(([name, url, warn], i) => (
              <li key={i} className="flex items-center gap-1">
                <a href={url as string} target="_blank" rel="noopener noreferrer" className="text-yellow-700 hover:underline">• {name as string}</a>
                {warn && <span className="text-xs text-red-600 font-semibold">(⚠ 사기주의)</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <H3>Apartment Types · 주거 유형</H3>
      <Table
        headers={['유형', '한국어', '특징']}
        rows={[
          ['Studio', '원룸', '침실, 거실, 부엌 통합'],
          ['Apartment', '아파트', '거실 공유, 개별 방'],
          ['House Rental', '단독 주택', '주택 전체 임대'],
        ]}
      />

      <H3>Common Rental Terms · 주요 임대 용어 정리</H3>
      <Table
        headers={['용어', '뜻']}
        rows={[
          ['Deposit', '보증금. 계약 전 지불, 퇴거 시 집 상태에 따라 반환'],
          ['Guarantor / Co-signer', '보증인. 현지 신용 기록이 없는 경우 요구될 수 있음'],
          ['SSN (Social Security Number)', '사회보장번호. 신분 확인용으로 요구 가능'],
          ['Credit Score', '신용 점수. 신용조회를 위해 요구 가능'],
          ['Furnished / Unfurnished', '가구 포함 / 미포함. 매물에 따라 구성 상이'],
          ['In-unit Laundry', '세탁기와 건조기가 집 내부에 있는 경우'],
          ['Pet Policy', '반려동물 규정. 허용 여부 및 추가 비용 확인 필요'],
          ['Sublease', '기존 계약자의 남은 기간을 승계하는 방식'],
        ]}
      />

      <SectionAnchor id="checklist" />
      <H2>The Final Checklist for Off Campus · 계약 전 확인 사항</H2>

      <TipBox color="yellow" emoji="⚠️" title="중요">
        ** 가능하면 계약 전에 <strong>직접 방문</strong>해서 확인하는 것이 좋습니다. ** (In-person 또는 3D Room Tour)
      </TipBox>

      <div className="my-3 space-y-2 text-sm">
        {[
          'Lease 기간 (보통 8월부터, 12개월, 상이할 수 있음)',
          'Monthly rent',
          'Utilities 포함 여부 (electricity, water, internet)',
          'Campus까지 교통 접근성 (CyRide 동선)',
          'Laundry in-unit',
          'Pet policy',
          'Parking availability',
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-yellow-600 mt-0.5">☐</span>
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function TransportationContent() {
  const routes = [
    { number: '1 Red', name: 'Central Campus [East ↔ West]', nameKr: '중앙 캠퍼스 [동부 ↔ 서부]', color: '#DC2626' },
    { number: '2 Green', name: 'Northern Campus [East ↔ West]', nameKr: '북부 캠퍼스 [동부 ↔ 서부]', color: '#16A34A' },
    { number: '3 Blue', name: 'Shopping & Services', nameKr: '쇼핑 및 서비스', color: '#2563EB' },
    { number: '6 Brown', name: 'Campus [North ↔ South]', nameKr: '캠퍼스 [남북]', color: '#92400E' },
    { number: '21 Cardinal', name: 'Main Campus Loop', nameKr: '메인 캠퍼스 순환', color: '#C8102E' },
    { number: '23 Orange', name: 'Main Campus ↔ Stadium', nameKr: '메인 캠퍼스 ↔ 스타디움', color: '#EA580C' },
  ];

  return (
    <div>
      <SectionAnchor id="transportation-routes" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Transportation</h1>
      <p className="text-sm text-gray-500 mb-6">대중교통 — CyRide 버스 시스템</p>

      <div className="grid grid-cols-3 gap-3 my-3 text-sm text-center">
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-bold text-primary text-lg">FREE</p>
          <p className="font-medium">For Students</p>
          <p className="text-xs text-gray-500">ISU ID 제시 시 무료 탑승</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-bold text-primary text-lg">10–30분</p>
          <p className="font-medium">Frequent Service</p>
          <p className="text-xs text-gray-500">피크 타임 배차 간격</p>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded p-3">
          <p className="font-bold text-primary text-lg">전 Ames</p>
          <p className="font-medium">Wide Coverage</p>
          <p className="text-xs text-gray-500">캠퍼스 및 Ames 전역 운행</p>
        </div>
      </div>

      <SectionAnchor id="cyride-routes" />
      <H2>Popular CyRide Routes · 주요 버스 노선</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-3">
        {routes.map((route, i) => (
          <div key={i} className="flex items-center gap-3 border border-gray-200 rounded p-3 text-sm bg-gray-50">
            <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-xs text-center"
              style={{ backgroundColor: route.color }}>
              {route.number.split(' ')[0]}
            </div>
            <div>
              <p className="font-semibold" style={{ color: route.color }}>{route.number}</p>
              <p className="text-gray-700">{route.name}</p>
              <p className="text-xs text-gray-500">{route.nameKr}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionAnchor id="map" />
      <H2>Map · 노선도</H2>
      <p className="text-sm text-gray-700 mb-3">
        실시간 버스 노선 및 도착 정보는 <strong>MyState 앱</strong>에서 확인하거나 아래 공식 사이트를 이용하세요.
      </p>
      <div className="bg-gray-50 border border-gray-200 rounded p-4 text-sm">
        <a href="https://www.cyride.com/routes" target="_blank" rel="noopener noreferrer"
          className="text-primary hover:underline font-medium">CyRide 공식 노선도 → cyride.com/routes</a>
        <p className="text-gray-500 text-xs mt-2">MyState 앱 내에서도 실시간 CyRide 버스 위치를 확인할 수 있습니다.</p>
      </div>
    </div>
  );
}

function RestaurantsContent() {
  return (
    <div>
      <SectionAnchor id="restaurants" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Restaurants · 추천 맛집</h1>
      <p className="text-sm text-gray-500 mb-3 italic">
        학교 근처 맛집을 소개합니다. 운영 시간과 메뉴 등 자세한 정보는 해당 웹사이트나 구글맵을 참고하세요. 아래에 적힌 운영 시간은 경우에 따라 정확하지 않을 수 있습니다.
      </p>

      <SectionAnchor id="on-campus-food" />
      <H2>On Campus — 학교 내 푸드트럭 <span className="text-sm font-normal text-gray-500">(주중 점심때만 운영)</span></H2>

      <Table
        headers={['푸드트럭', '종류', '운영시간', '위치']}
        rows={[
          ['Carlos Quesadillas Food Truck', '간단하고 빠른 멕시코식', '11:00–15:00', 'Kildee 또는 Hoover Hall 근처'],
          ['The Cheese Steak Factory', '즉석 Cheesesteak 샌드위치', '12:00–14:30', 'Carver Hall 근처'],
        ]}
      />

      <SectionAnchor id="near-campus-food" />
      <H2>Near Campus — 학교 근처 도보 거리 <span className="text-sm font-normal text-gray-500">(5–10분)</span></H2>

      <Table
        headers={['식당', '가격대', '특징', '운영시간']}
        rows={[
          ['Blue Fish Hawaii Poke Bowl', '$', '빠르고 깔끔한 포케집', '11:00–21:00'],
          ['Ichiban Japanese Restaurant', '$$', '인기 스시/라멘집', '12:00–21:00'],
          ['Cafe Beaudelaire', '$$', '분위기 좋은 브라질 카페, 주말 브런치 인기', '10:00–22:00'],
          ['Mr. Burrito', '$', '가성비 멕시코 음식점', '11:00–21:00'],
          ["Jeff's Pizza Shoppe", '$', '늦은 밤까지 여는 대학가 인기 피자집', '10:30–01:00am'],
          ['Potbelly Sandwich Shop', '$$', '레트로 감성 서브웨이 형식 체인 샌드위치집', '10:00–22:00'],
        ]}
      />
    </div>
  );
}

function PhoneCarriersContent() {
  return (
    <div>
      <SectionAnchor id="phone-carriers" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Phone Carriers · 휴대폰 요금제</h1>
      <p className="text-sm text-gray-500 mb-6">유학생을 위한 휴대폰 요금제 가이드</p>

      <SectionAnchor id="before-buy" />
      <H2>Before You Buy · 구매 전 필수 확인</H2>

      <div className="bg-red-50 border-2 border-red-400 rounded p-4 my-3 text-sm">
        <p className="font-bold text-red-800 mb-2">📵 Check if Your Phone is Unlocked · 휴대폰 잠금 해제 확인</p>
        <p className="text-gray-700 mb-2">
          한국 휴대폰을 미국에서 사용하려면 <strong>국가 잠금 해제(Country Unlock)</strong>가 반드시 필요합니다. <strong>출국 전</strong> 통신사에 연락해 잠금 해제를 요청하세요.
        </p>
        <div className="grid grid-cols-3 gap-2 mt-3">
          {[['SK Telecom'], ['KT'], ['LG U+']].map(([abbr, emoji, name]) => (
            <div key={abbr} className="bg-white border border-red-200 rounded p-2 text-center">
              <p className="font-bold">{emoji} {abbr}</p>
              <p className="text-xs text-gray-500">{name}</p>
              <p className="text-xs text-gray-600 mt-1">고객센터 또는 매장 방문 요청</p>
            </div>
          ))}
        </div>
      </div>

      <TipBox color="blue" emoji="✅" title="Pro Tip">
        최근 2–3년 내 구입한 휴대폰은 대부분 이미 잠금 해제되어 있습니다. 통신사에 확인해보세요!
      </TipBox>

      <SectionAnchor id="esim" />
      <H2>eSIM vs. Physical SIM · 자신에게 맞는 방식 선택</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-sm">
        <div className="bg-blue-50 border border-blue-300 rounded p-3">
          <p className="font-semibold text-blue-800 mb-2">eSIM · 디지털 심카드</p>
          <ul className="space-y-1 text-gray-700">
            <li>✓ <strong>즉시 개통</strong> — 몇 분 안에 다운로드 및 활성화 (Mint, Visible)</li>
            <li>✓ <strong>Dual SIM</strong> — 한국 번호 유지로 2FA/뱅킹 사용 가능</li>
            <li>✓ <strong>분실 위험 없음</strong> — 물리적 카드 불필요</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">✓ 호환: iPhone XS 이상, Samsung S20 이상, Google Pixel 3 이상</p>
        </div>
        <div className="bg-green-50 border border-green-300 rounded p-3">
          <p className="font-semibold text-green-800 mb-2">Physical SIM · 실물 심카드</p>
          <ul className="space-y-1 text-gray-700">
            <li>✓ <strong>폰 교체 용이</strong> — 카드를 새 기기에 옮기면 됨</li>
            <li>✓ <strong>쇼핑하면서 구매 가능</strong> — Ames의 Walmart, Target에서 구입</li>
            <li>✓ <strong>구형 폰 지원</strong> — eSIM 기능 불필요</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">✓ 구형 폰이거나 실물 카드를 선호하는 경우 적합</p>
        </div>
      </div>

      <TipBox color="orange" emoji="⚠️" title="Note">
        eSIM 지원 여부를 폰 설정에서 확인하세요. 2018년 이후 출시된 대부분의 폰은 eSIM을 지원합니다.
      </TipBox>

      <SectionAnchor id="carrier-guide" />
      <H2>통신사 선택 가이드 · Choosing a Carrier</H2>

      <div className="bg-blue-50 border border-blue-300 rounded text-sm m-[0px] p-[16px]">
        <p className="text-gray-800 leading-relaxed m-[0px]">
          각 통신사별로 제공하는 혜택과 이벤트가 다르기에 <strong>직접 비교조사</strong>를 통해 개인의 상황과 성향에 맞춰 선택하는 것을 추천합니다.
        </p>
        
      </div>

      <SectionAnchor id="major-carriers" />
      <H2>대형 &amp; 중형 통신사 · Major &amp; Regional Carriers</H2>

      <Table
        headers={['통신사', '특징', '무제한 기준 가격']}
        rows={[
          [<span key="v" className="font-bold text-red-700">Verizon</span>, '가장 넓은 coverage와 안정적인 통신 품질. 가장 비쌈', '월 $70–$90+'],
          [<span key="a" className="font-bold text-blue-700">AT&T</span>, 'Verizon에 준하는 coverage, 전반적으로 무난한 성능', '월 $65–$85'],
          [<span key="t" className="font-bold text-pink-700">T-Mobile</span>, 'Ames에서는 안정적이지만 그 외 지역은 편차 큼', '월 $60–$85'],
          [<span key="u" className="font-bold text-purple-700">UScellular</span>, '중서부(Iowa 등) 지역 강한 coverage를 제공하는 지역 기반 통신사', '월 $60–$80'],
        ]}
      />

      <SectionAnchor id="mvno" />
      <H2>알뜰폰 · MVNO — Budget Options</H2>

      <TipBox color="orange" emoji="⚠️" title="주의사항">
        알뜰폰은 어떠한 망을 사용하는지에 따라 연결 성능 차이가 생깁니다. 사용자가 많은 경우 임의로 연결 성능에 제한을 둬 불편함을 겪을 수 있음에 유의하세요.
      </TipBox>

      <Table
        headers={['통신사', '사용 망', '무제한 기준 가격', '특징']}
        rows={[
          ['Mint Mobile', 'T-Mobile', '월 $15–$30', '최저가 옵션'],
          ['Visible', 'Verizon', '월 $25–$45', 'Verizon 망 저가 옵션'],
          ['US Mobile', 'Verizon / T-Mobile / AT&T', '월 $25–$50', '망 직접 선택 가능'],
          ['Google Fi Wireless', 'T-Mobile', '월 $50–$65', '해외 여행 시 유용'],
        ]}
      />

      <SectionAnchor id="wifi" />
      <H2>Wi-Fi on Campus · 캠퍼스 와이파이</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-sm">
        <div className="bg-green-50 border-2 border-green-400 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <Tag color="bg-green-600 text-white">USE THIS</Tag>
            <span className="font-bold text-green-800">Eduroam · 공식 캠퍼스 네트워크</span>
          </div>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Network Name:</strong> <code className="bg-green-100 px-1 rounded">Eduroam</code></li>
            <li>• <strong>Login:</strong> ISU NetID + 비밀번호</li>
            <li>• ✓ 빠르고 안정적</li>
            <li>• ✓ ISU 모든 건물에서 사용 가능</li>
            <li>• ✓ 암호화된 보안 연결</li>
            <li>• ✓ 전 세계 다른 대학에서도 사용 가능</li>
          </ul>
        </div>
        <div className="bg-red-50 border-2 border-red-300 rounded p-3">
          <div className="flex items-center gap-2 mb-2">
            <Tag color="bg-red-600 text-white">AVOID</Tag>
            <span className="font-bold text-red-800">ISU-Guest · 게스트 네트워크 (비추천)</span>
          </div>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Network Name:</strong> <code className="bg-red-100 px-1 rounded">ISU-Guest</code></li>
            <li>• 임시 방문객 또는 NetID 활성화 전에만 사용</li>
            <li>• ✗ 매우 느린 속도</li>
            <li>• ✗ 자주 끊김</li>
            <li>• ✗ ISU 리소스 접근 제한</li>
            <li>• ✗ 보안 취약</li>
          </ul>
        </div>
      </div>

      <TipBox color="blue" emoji="💡" title="Pro Tip">
        ISU NetID를 활성화하자마자 Eduroam을 설정하세요. 캠퍼스 전체에서 모바일 데이터 없이 인터넷을 사용할 수 있습니다.
      </TipBox>
    </div>
  );
}

function UsefulAppsContent() {
  return (
    <div>
      <SectionAnchor id="useful-apps" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Useful Apps · 필수 앱</h1>
      <p className="text-sm text-gray-500 mb-4">Download These Immediately · 필수 앱 다운로드</p>

      <div className="bg-orange-50 border-2 border-orange-400 rounded p-4 mb-4 text-sm">
        <p className="font-bold text-orange-800 mb-2">다운로드하기 전에 꼭 읽어주세요!</p>
        <ul className="space-y-2 text-gray-700">
          <li>• 미국 앱(Venmo, US Bank 등) 중에는 <strong>한국 앱 스토어에서 검색되지 않는 앱</strong>들도 존재합니다.</li>
          <li>• <strong className="text-red-700">구글 플레이 스토어</strong>의 경우 국가를 변경하면 180일(약 6개월) 동안 재변경이 어렵습니다.</li>
          <li>• <strong className="text-red-700">애플 앱 스토어</strong>는 국가 변경 시 기존 구독 항목 등을 정리해야 합니다.</li>
          <li className="bg-green-50 border border-green-300 rounded p-2">✅ <strong className="text-green-800">The Solution:</strong> 기존 계정은 그대로 두고, 필요한 국가의 계정을 <strong>하나 더 만드는 것</strong>을 추천드립니다. 앱을 받은 후 원래 한국 계정으로 다시 로그인해도 앱 업데이트 및 사용에 지장이 없습니다.</li>
        </ul>
      </div>

      <SectionAnchor id="school-apps" />
      <H2>학교 관련 앱 · University Administration &amp; Academic Tools</H2>

      <Table
        headers={['앱', '주요 기능', '비고']}
        rows={[
          ['MyState', '시간표 조회, CyRide 실시간 정보, 학식 메뉴 및 다이닝 운영 여부, 학교 이벤트, 지도, 동아리 정보', ''],
          ['Get Mobile', '밀플랜/Dining Dollars 잔액 및 내역 확인, 학식 온라인 주문 (일부만)', '결제 수단 필요'],
          ['Speed Queen', '기숙사 세탁기, 건조기 사용 및 결제', '결제 수단 필요'],
          ['ISU VPN', '캠퍼스 밖에서 대학 네트워크에 안전하게 접속', ''],
          ['Canvas', '강의 자료 확인, 과제 확인 및 제출', ''],
          ['Outlook', '학교 이메일 확인/작성, 일정/캘린더 관리', ''],
          ['Workday', '수강 신청, 학비 및 행정 정보, 교내 근로 급여 및 서류 관리', '앱보다 웹사이트 사용이 더 일반적'],
          ['Microsoft Authenticator', '학교 계정 보안 인증 (2FA)', ''],
        ]}
      />

      <SectionAnchor id="communication" />
      <H2>커뮤니케이션 &amp; SNS · Communication</H2>

      <Table
        headers={['앱', '특징']}
        rows={[
          ['GroupMe', '메신저 앱. 기숙사에서 많이 사용되며 그룹 채팅에 적합'],
          ['WhatsApp', '전 세계적으로 사용되는 무료 문자/전화 앱'],
          ['Snapchat', '메시지 자동 삭제 기능, 사진/영상 중심 소통, 스토리 및 streak 문화, 위치 공유 기능'],
        ]}
      />

      <SectionAnchor id="daily-life" />
      <H2>데일리 라이프 · Daily Life Services</H2>

      <H3>이동 서비스 (Rideshare)</H3>
      <Table
        headers={['앱', '특징']}
        rows={[
          ['Uber', '기사 수가 많아 차량 호출이 용이함 (한국의 카카오택시 포지션)'],
          ['Lyft', 'Uber와 유사하며 경우에 따라 더 저렴함 (Ames → Des Moines 구간 등)'],
        ]}
      />
      <TipBox color="blue" emoji="💡" title="Tip">두 앱 모두 가격과 대기시간이 다르므로 비교 후 이용 추천.</TipBox>

      <H3>음식 배달 (Food Delivery)</H3>
      <Table
        headers={['앱', '특징']}
        rows={[
          ['DoorDash', 'DashPass 구독 시 배달비 무료 및 수수료 할인 (학생용 할인 제공)'],
          ['Uber Eats', 'Uber와 연동되며 프로모션이 자주 있음 (학생용 Uber One 할인 제공)'],
        ]}
      />

      <H3>쇼핑 서비스 (Shopping)</H3>
      <Table
        headers={['앱', '특징']}
        rows={[
          ['Amazon', 'Prime Student 가입 시 무료 및 빠른 배송, 거의 모든 상품 구매 가능'],
          ['Walmart App', '지점별 재고 및 매장 내 물품 위치 확인 가능, 픽업/배달 가능'],
        ]}
      />

      <SectionAnchor id="safety" />
      <H2>Safety &amp; Emergency · 안전</H2>

      <div className="bg-red-50 border-2 border-red-400 rounded overflow-hidden my-3">
        <div className="bg-red-600 text-white p-3">
          <div className="flex items-center gap-2">
            <Tag color="bg-white/20 text-white">MUST DOWNLOAD</Tag>
            <span className="font-bold">Iowa State Safe · Official Safety App</span>
          </div>
        </div>
        <div className="p-4 text-sm space-y-3">
          <p className="font-semibold text-red-700">The only safety app you need — 필요한 유일한 안전 앱입니다.</p>
          <div className="space-y-2">
            <div className="flex gap-3">
              <span>🚗</span>
              <div>
                <p className="font-semibold">SafeRide Request</p>
                <p className="text-gray-600">앱을 통해 <strong>무료 귀가 서비스</strong> 직접 요청 (오후 6시 – 오전 5시 30분 / 6:00 PM – 5:30 AM)</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span>👥</span>
              <div>
                <p className="font-semibold">Friend Walk</p>
                <p className="text-gray-600">친구에게 위치를 전송하여 실시간으로 귀가하는 모습을 지도에서 확인 가능. Send your location so a friend can watch you walk home in real-time.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span>🚨</span>
              <div>
                <p className="font-semibold">Mobile Blue Light</p>
                <p className="text-gray-600">휴대폰을 긴급 신호로 전환하여 ISU 경찰에게 즉시 위치 공유. Turn your phone into an emergency beacon.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span>📞</span>
              <div>
                <p className="font-semibold">Emergency Contacts</p>
                <p className="text-gray-600">ISU 경찰, 응급 서비스 등 긴급 연락처 원터치 연결</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SupermarketsContent() {
  return (
    <div>
      <SectionAnchor id="supermarkets" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Supermarkets · Ames 쇼핑 가이드</h1>
      <p className="text-sm text-gray-500 mb-6">식료품부터 생활용품까지 에임스(Ames) 지역 마트 완벽 정리</p>

      <SectionAnchor id="grocery" />
      <H2>Grocery · 일반 식료품</H2>

      <Table
        headers={['마트', '위치', '특징', '버스']}
        rows={[
          ['Walmart', '534 S Duff Ave / 2801 Grand Ave', '24시간 운영, 식료품·생활용품·전자제품. 자체 브랜드: Great Value, Equate. 가격이 저렴하며 한 번에 모든 물건 구매 가능', 'CyRide #1 Red (South Duff), #2 Green (North Grand)'],
          ['Target', 'North Grand Mall 내', 'Walmart보다 디자인과 품질 우수. 자체 브랜드: Good & Gather, Up & Up. 깔끔한 매장 분위기', 'CyRide #1 Red 또는 #2 Green'],
          ['Hy-Vee', '640 Lincoln Way / 3800 Lincoln Way', '신선 식품 품질 우수, 한식용 정육 주문 가능 (미리 전화 요청). 신선한 과일·야채·고기·베이커리·샐러드 바', 'CyRide #3 Blue'],
          ['ALDI', '520 S 5th St (Walmart 도보 5분)', 'Ames에서 가장 저렴한 식료품점. 계란·우유·유제품·신선 야채가 타 매장 대비 50% 저렴', 'Walmart 근처 도보'],
          ['Fareway', '3619 Stange Rd / 619 Burnett Ave / 3720 Lincoln Way', '정육 코너가 매우 우수, 직원이 직접 고기를 잘라줌. 신선한 정육, 저렴한 가격, 친절한 서비스', 'CyRide #6 Orange 또는 차량 권장'],
        ]}
      />

      <TipBox color="red" emoji="🪙" title="ALDI 필수 주의사항!">
        <p>• <strong>25센트 동전 필수:</strong> 장바구니 사용에 25¢ 동전이 필요 (반납 시 돌려받음)</p>
        <p>• <strong>쇼핑백 지참:</strong> 무료 쇼핑백 제공 안 함 (구매 시 10–15¢)</p>
      </TipBox>

      <SectionAnchor id="asian-grocery" />
      <H2>Asian/Korean Grocery · 아시안/한인 마트</H2>

      <Table
        headers={['마트', '위치', '특징']}
        rows={[
          ['Uni-Mart', 'Lincoln Way, Campustown (도보 가능)', '한인 학생들의 필수 장소! 김치, 떡, 라면, 만두, 고추장, 된장, 간장, 참기름 등 한국 식재료 다수 보유'],
          ['Asia Foods Store', 'Lincoln Way', '다양한 아시안 식재료 판매 (중국, 일본, 한국 식품)'],
          ['Ames Asian Market West', 'Dotson Dr', '아시안 식재료 및 한국 라면, 냉동 만두 등 판매'],
          ['C Fresh Market', 'Des Moines 소재 (Ames에서 약 40분, 차량 필수)', '아시안 식품이 가장 다양하고 풍부한 대형 아시안 마트. 차가 있는 친구와 함께 방문 추천!'],
        ]}
      />

      <TipBox color="green" emoji="📱" title="Weee! 배달 앱 (한국 식료품 배송)">
        Uni-Mart에 없는 특정 한국 과자나 특산물을 배달로 받을 수 있는 앱입니다. 친구들과 함께 주문하면 최소 주문 금액을 맞추고 배송비를 나눌 수 있어요!
        <br /><a href="https://www.sayweee.com" target="_blank" rel="noopener noreferrer" className="underline">sayweee.com</a>
      </TipBox>

      <SectionAnchor id="bulk-stores" />
      <H2>Bulk/Membership Stores · 창고형 매장</H2>
      <TipBox color="blue" emoji="💡" title="참고">창고형 매장은 비교적 저렴한 가격으로 주유가 가능합니다.</TipBox>

      <Table
        headers={['매장', '멤버십', '자체 브랜드', '추천 품목', '교통']}
        rows={[
          ["Sam's Club", '연회비 $30–$60', "Member's Mark (품질 좋고 가격 저렴)", '대용량 쌀, 고기, 스낵, 음료, 생활용품, 주유', 'Ames 외곽, 차량 필수'],
          ['Costco', '연회비 $60 (Gold) / $120 (Executive)', 'Kirkland Signature (높은 품질)', '한국 쌀, 냉동 만두, 고기, 해산물, 전자제품, 피자, 주유', 'Ames 외곽, 차량 필수 (선배/친구와 방문 추천)'],
        ]}
      />

      <TipBox color="green" emoji="🇰🇷" title="한국 학생 꿀팁!">
        <strong>한국 코스트코 카드 미국에서도 사용 가능!</strong> 한국에서 사용하던 코스트코 회원권이 미국에서도 그대로 사용됩니다. 코스트코 멤버십은 전 세계 공통입니다!
      </TipBox>

      <SectionAnchor id="budget-thrift" />
      <H2>Budget/Thrift · 가성비/중고 매장</H2>

      <Table
        headers={['매장', '특징', '버스']}
        rows={[
          ['Goodwill', '중고 의류, 가구, 주방용품, 책, 전자제품 등을 저렴한 가격에 판매', 'CyRide #1 Red 또는 차량 권장'],
          ['Dollar General', '$1–$5 사이의 저렴한 생필품, 스낵, 청소용품, 문구류 판매', 'CyRide #1 Red 또는 차량 권장'],
          ['Dollar Tree', '모든 제품이 $1.25 균일가! 생활용품, 장난감, 파티 용품, 간단한 주방용품', 'CyRide #1 Red 또는 차량 권장'],
        ]}
      />

      <SectionAnchor id="tech" />
      <H2>Tech · 전자기기</H2>

      <Table
        headers={['매장', '위치', '특징']}
        rows={[
          [<span key="isu" className="font-bold">ISU Book Store 🌟 <Tag color="bg-green-600 text-white">세금 면제!</Tag></span>, 'Memorial Union 내부 (캠퍼스 중심부)', '교재, 문구류, ISU 굿즈, 노트북, 태블릿. 전자기기 구매 시 Sales Tax(약 7%) 면제! MacBook, iPad 등 수백 달러 절약 가능'],
          ['Best Buy', 'North Grand Mall 근처', '노트북, 태블릿, 카메라, 게임기, TV, 스마트폰, 액세서리 등 전자제품 전문. CyRide #1 Red 또는 #2 Green'],
          ['Walmart (전자제품 코너)', '534 S Duff Ave / 2801 Grand Ave', '저렴한 전자제품 액세서리 (충전기, 케이블, 이어폰 등). Best Buy보다 저렴하지만 제품 종류 적음'],
        ]}
      />
    </div>
  );
}

function KoreanOrgsContent() {
  return (
    <div>
      <SectionAnchor id="korean-orgs" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Korean Organizations</h1>
      <p className="text-sm text-gray-500 mb-6">ISU 한인 커뮤니티 · Korean Community at Iowa State</p>

      <SectionAnchor id="kasi" />
      <H2>KASI · Korean American Student Institution</H2>
      
      

      <SectionAnchor id="korean-church" />
      <H2>Korean Church · 한인 교회</H2>
      <p className="text-sm text-gray-700 mb-3">
        Ames 및 Des Moines 지역에는 한인 교회들이 있으며, 교회를 통해 한인 커뮤니티와 연결되고 정착에 큰 도움을 받을 수 있습니다. 많은 유학생들이 교회를 통해 생활 정보를 얻고 선배들의 도움을 받습니다.
      </p>
      <TipBox color="blue" emoji="💡" title="Tip">
        한인 교회는 단순한 종교 공간을 넘어 한인 커뮤니티 허브 역할을 합니다. 식사 나눔, 교통편 지원, 생활 정보 공유 등 다양한 도움을 받을 수 있습니다.
        정보는 KSA를 통해 문의하거나 선배들에게 직접 물어보세요.
      </TipBox>

      <SectionAnchor id="student-groups" />
      <H2>Student Groups · 학생 단체</H2>
      <p className="text-sm text-gray-700 mb-3">
        Iowa State University에는 KSA 외에도 다양한 한인 및 아시안 학생 단체가 활동하고 있습니다.
      </p>
      <Table
        headers={['단체', '설명']}
        rows={[
          ['KSA (Korean Student Association)', 'ISU 한국 학생 협회. 한국 문화 행사, 교류 활동, 신입생 지원 프로그램 운영'],
          ['KASI', '한국계 미국인 학생 단체. 문화 교류 및 네트워킹'],
          ['Asian Pacific American Students Association', '아시안 학생 전체를 아우르는 단체'],
          ['ISU International Students Club', '다양한 국적의 국제 학생 교류 단체'],
        ]}
      />
      <TipBox color="green" emoji="🎉" title="KSA에 가입하세요!">
        KSA는 한국 유학생들의 캠퍼스 생활 적응을 도와주는 단체입니다. 선배들이 직접 질문에 답해드립니다.
        <br /><a href="mailto:ksa@iastate.edu" className="underline font-medium">ksa@iastate.edu</a>로 연락하세요.
      </TipBox>
    </div>
  );
}

function BankingContent() {
  return (
    <div>
      <SectionAnchor id="banking" />
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Banking &amp; Money Guide</h1>
      <p className="text-sm text-gray-500 mb-6">미국에서의 금융 생활을 위한 필수 정보</p>

      <SectionAnchor id="account-opening" />
      <H2>계좌 개설 · Bank Account</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
        <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm">
          <H3>왜 필요한가</H3>
          <ul className="space-y-1 text-gray-700">
            <li>• 학비 및 월세 납부</li>
            <li>• 송금 및 입금</li>
            <li>• 해외 결제 수수료 절약</li>
          </ul>
          <H3>추천 은행</H3>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>US Bank</strong> — ISU 캠퍼스 내 위치</li>
            <li>• <strong>Chase</strong></li>
            <li>• <strong>Wells Fargo</strong></li>
          </ul>
        </div>

        <div className="bg-primary/5 border-2 border-primary/20 rounded p-3 text-sm">
          <H3>준비물 체크리스트 · Required Documents</H3>
          <ul className="space-y-1.5 text-gray-700">
            {[
              '여권 (Passport)',
              'I-20',
              '주소 (기숙사 주소 가능)',
              '주소 증빙서류 (2개)',
              '초기 입금 ($25–$100)',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-primary">☐</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="text-xs text-gray-400 mt-2 italic">*개인에 따라 일부 차이가 있음</p>
        </div>
      </div>

      <SectionAnchor id="credit-cards" />
      <H2>신용카드 및 신용점수 · Credit Card &amp; Score</H2>

      <div className="bg-gray-50 border border-gray-200 rounded p-3 text-sm mb-3">
        <H3>개념</H3>
        <p className="text-gray-700">카드사에서 먼저 대금을 지불하고 보증하고 고객이 금액을 상환하는 제도</p>
        <H3>필요성</H3>
        <ul className="space-y-2 text-gray-700">
          <li>• <strong>금융 혜택:</strong> 높은 신용점수는 추후 자동차 할부, 학자금 대출(Student Loan) 시 낮은 이자율을 보장합니다.</li>
          <li>• <strong>생활 편의:</strong> 주거 계약 시 보증금(Deposit)이 줄어들거나 보증인(Guarantor) 요구가 면제될 수 있습니다.</li>
          <li>• <strong>부가 가치:</strong> 점수가 쌓이면 더 좋은 혜택(캐시백, 마일리지)을 가진 프리미엄 카드 발급이 가능해집니다.</li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 my-3 text-sm">
        <div className="bg-white border-2 border-primary/20 rounded p-3">
          <p className="font-bold mb-2">Secured Credit Card</p>
          <p className="text-gray-600">일정 금액의 보증금을 먼저 예치하고 그 한도 내에서 사용하는 카드로, 신용 기록이 전혀 없는 초기에 승인받기 쉽습니다.</p>
        </div>
        <div className="bg-white border-2 border-secondary/20 rounded p-3">
          <p className="font-bold mb-2">Student Credit Card</p>
          <p className="text-gray-600">대학생 신분을 증명하면 보증금 없이도 발급 가능한 경우가 많으며, 일반 카드보다 심사 기준이 낮아 유학생에게 가장 보편적인 선택지입니다.</p>
        </div>
      </div>

      <TipBox color="blue" emoji="ℹ️" title="일반 신용카드와의 차이">
        일반 카드는 소득과 기존 신용 기록을 엄격히 따지지만, 위 두 유형은 '신용을 쌓기 시작하는 단계'에 최적화되어 있습니다.
      </TipBox>

      <SectionAnchor id="credit-score" />
      <H2>신용점수 관리 · Credit Score Management</H2>

      <div className="bg-gray-50 border border-gray-200 rounded p-4 my-3 text-sm">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-1">
            <span className="font-semibold">Credit Score Range</span>
            <span className="font-bold text-primary">300 – 850</span>
          </div>
          <div className="h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-full" />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>300 (낮음)</span>
            <span className="font-bold text-primary">700이상 시 좋은 점수</span>
            <span>850 (높음)</span>
          </div>
        </div>

        <H3>신용점수 결정 주요 요소</H3>
        <div className="grid grid-cols-3 gap-2 mb-3">
          {['결제 이력', '카드 사용 비율', '사용 기간'].map((item, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded p-2 text-center text-xs font-semibold">{item}</div>
          ))}
        </div>

        <H3>신용 점수 관리 방법</H3>
        <ul className="space-y-1 text-gray-700">
          <li>• 결제 연체 방지</li>
          <li>• 사용 금액을 한도의 <strong>30% 이하</strong>로 유지</li>
          <li>• 과도한 카드 발급 자제</li>
        </ul>
      </div>

      <SectionAnchor id="remittance" />
      <H2>송금 및 결제 · Payment Apps</H2>

      <Table
        headers={['앱', '특징']}
        rows={[
          ['Venmo', "한국의 '토스(Toss)'와 유사한 소셜 기반 송금 앱. 친구들과 식사비를 나누거나(Split) 소액 송금을 할 때 가장 대중적으로 사용"],
          ['Zelle', '별도의 가입 없이 본인의 은행 앱(US Bank, Chase 등) 내에서 바로 사용 가능. 은행 간 직접 송금 방식이라 보안성이 높고 전송 속도가 매우 빠름. (※ 일부 은행의 경우 서비스 이용에 제한이 있을 수 있으니 확인이 필요합니다.)'],
          ['PayPal', "온라인 쇼핑 및 해외 결제 시 강력한 '구매자 보호 프로그램'을 제공하여 사기 방지에 유리"],
        ]}
      />

      <TipBox color="orange" emoji="⚠️" title="주의">
        주로 개인 간 송금 및 공동 결제에 사용됩니다. 미국 은행 계좌나 직불 카드가 없어도 가입은 가능할 수 있으나, 실제 송금 및 잔액 인출을 위해서는 <strong>미국 내 은행 계좌 연동이 필수</strong>입니다. 따라서 입국 후 계좌 개설을 최우선으로 권장합니다.
      </TipBox>

      <SectionAnchor id="banking-tips" />
      <H2>유의사항 및 추천 앱 · Warnings &amp; Tools</H2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3 text-sm">
        <div className="bg-red-50 border-2 border-red-300 rounded p-3">
          <p className="font-bold text-red-800 mb-2">⚠️ 유의사항</p>
          <ul className="space-y-1.5 text-gray-700">
            <li>• 잔액 부족 수수료(Overdraft Fee) 주의</li>
            <li>• 결제 연체 방지</li>
            <li>• 계좌 수수료 확인</li>
            <li>• 계좌 및 카드 정보 보호</li>
          </ul>
        </div>
        <div className="bg-green-50 border-2 border-green-300 rounded p-3">
          <p className="font-bold text-green-800 mb-2">추천 앱</p>
          <div className="space-y-2">
            <div className="bg-white rounded p-2 border border-green-200">
              <p className="font-semibold">US Bank</p>
              <p className="text-xs text-gray-500 italic">*로그인이 필요합니다.</p>
            </div>
            <div className="bg-white rounded p-2 border border-green-200">
              <p className="font-semibold">Credit Karma</p>
              <p className="text-xs text-gray-500">지출 관리 및 신용점수 확인에 활용 가능하다.</p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-8 italic">Last updated: May 2026 · Need help? Contact KSA at ksa@iastate.edu</p>
    </div>
  );
}

// --- Main DocumentationPage ---
export function DocumentationPage() {
  const navigate = useNavigate();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(navigationStructure.map(item => item.id))
  );
  const [activeItem, setActiveItem] = useState('getting-here');
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleSection = (id: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedSections(newExpanded);
  };

  const scrollToSection = (id: string) => {
    setActiveItem(id);
    const el = document.getElementById(id);
    if (el && contentRef.current) {
      const top = el.getBoundingClientRect().top + contentRef.current.scrollTop - 24;
      contentRef.current.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const allIds: string[] = [];
    navigationStructure.forEach(item => {
      allIds.push(item.id);
      item.children?.forEach(child => allIds.push(child.id));
    });

    const handleScroll = () => {
      const containerTop = content.getBoundingClientRect().top;
      let current = allIds[0];
      for (const id of allIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top - containerTop <= 40) {
            current = id;
          }
        }
      }
      setActiveItem(current);
    };

    content.addEventListener('scroll', handleScroll, { passive: true });
    return () => content.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.has(item.id);
    const isActive = activeItem === item.id;
    const isParentOfActive = item.children?.some(c => c.id === activeItem);

    return (
      <div key={item.id}>
        <div
          className={`
            flex items-center gap-1.5 py-1 cursor-pointer rounded transition-colors select-none
            ${isActive || isParentOfActive
              ? 'bg-red-50 text-red-800'
              : 'hover:bg-gray-100 text-gray-600'}
            ${level > 0 ? 'text-xs' : 'text-sm font-medium'}
          `}
          style={{ paddingLeft: `${level * 14 + 10}px`, paddingRight: '10px' }}
          onClick={() => {
            if (hasChildren) {
              toggleSection(item.id);
              if (!expandedSections.has(item.id)) scrollToSection(item.id);
            } else {
              scrollToSection(item.id);
            }
          }}
        >
          {hasChildren ? (
            isExpanded
              ? <ChevronDown className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
              : <ChevronRight className="w-3.5 h-3.5 flex-shrink-0 text-gray-400" />
          ) : (
            <span className="w-3.5 flex-shrink-0" />
          )}
          <span className={`truncate ${isActive ? 'font-semibold text-primary' : ''} text-[15px]`}>{item.title}</span>
        </div>
        {hasChildren && isExpanded && (
          <div>
            {item.children!.map((child) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex bg-white overflow-hidden" style={{ height: '100vh' }}>
      {/* Left Sidebar */}
      <div className="w-[360px] h-full bg-gray-50 border-r border-gray-200 overflow-y-auto flex-shrink-0 px-[25px] py-[0px] p-[0px] m-[0px]">
        <div className="p-3 m-[0px]">
          {/* Header */}
          <div className="px-2.5 pt-2 pb-3 mb-2 border-b border-gray-200">
            <p className="font-bold uppercase tracking-wider text-[16px] text-[#000000]">KSA Guide</p>
            
          </div>
          <nav className="space-y-0.5">
            {navigationStructure.map((item) => renderNavItem(item))}
          </nav>
          <div className="mt-4 pt-3 border-t border-gray-200 px-2.5">
            <p className="text-xs text-gray-400 italic">Updated May 2026</p>
          </div>
        </div>
      </div>

      {/* Right Content Area */}
      <div ref={contentRef} className="flex-1 h-full overflow-y-auto p-[0px]">
        <div className="max-w-3xl mx-auto px-[0px] py-[32px] mx-[240px] my-[0px] mx-[244px]">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-gray-500 hover:text-gray-800 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Main</span>
          </button>
          <GettingHereContent />
          <div className="my-10 border-t border-gray-200" />
          <CampusGuideContent />
          <div className="my-10 border-t border-gray-200" />
          <HousingContent />
          <div className="my-10 border-t border-gray-200" />
          <TransportationContent />
          <div className="my-10 border-t border-gray-200" />
          <RestaurantsContent />
          <div className="my-10 border-t border-gray-200" />
          <PhoneCarriersContent />
          <div className="my-10 border-t border-gray-200" />
          <UsefulAppsContent />
          <div className="my-10 border-t border-gray-200" />
          <SupermarketsContent />
          <div className="my-10 border-t border-gray-200" />
          <KoreanOrgsContent />
          <div className="my-10 border-t border-gray-200" />
          <BankingContent />
          <div className="h-16" />
        </div>
      </div>
    </div>
  );
}
