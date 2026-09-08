import { Plane, FileCheck, Package, Calendar, MapPin, Car, DollarSign, Wifi, CreditCard, Phone, ShoppingBag, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GettingHerePage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Getting to ISU</h1>
          <p className="text-xl text-primary-foreground/90 mb-2">Your Complete Arrival Guide</p>
          <p className="text-lg text-primary-foreground/80">
            아이오와 주립대학교 도착 가이드
          </p>
        </div>
      </section>

      {/* Before You Travel */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <FileCheck className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">Before You Travel</h2>
              <p className="text-muted-foreground">여행 전 준비사항</p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="mb-8 bg-orange-50 border-2 border-orange-300 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              <h3 className="text-xl font-bold text-orange-900">주의사항 (Important Notes)</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <AlertCircle className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-orange-900 mb-1">Layover Minimum Connection Time</p>
                  <p className="text-sm text-muted-foreground mb-1">최소 환승 시간</p>
                  <p className="text-sm">
                    If you have a connecting flight, make sure you have at least <span className="font-semibold text-orange-700">2-3 hours</span> between flights 
                    for international connections. Domestic connections typically require 1-2 hours minimum.
                  </p>
                  <p className="text-sm text-orange-700 mt-1">
                    환승 시간이 부족하면 다음 항공편을 놓칠 수 있습니다. 국제선-국내선 환승은 최소 2-3시간을 권장합니다.
                  </p>
                </div>
              </div>

              <div className="border-t border-orange-200 pt-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileCheck className="w-4 h-4 text-orange-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-orange-900 mb-1">Required Documents May Vary</p>
                    <p className="text-sm text-muted-foreground mb-1">개인별 요구 서류 상이</p>
                    <p className="text-sm">
                      The required documents listed below are general guidelines. Depending on your specific situation, you may need additional documents. 
                      <span className="font-semibold text-orange-700"> Always verify with ISU International Students & Scholars Office</span> before traveling.
                    </p>
                    <p className="text-sm text-orange-700 mt-1">
                      개인 상황에 따라 필요 서류가 다를 수 있습니다. 출발 전 반드시 ISU 국제학생처에 확인하세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-accent/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span>📋</span> Required Documents
              </h3>
              <p className="text-sm text-muted-foreground mb-3">필수 서류</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">Valid Passport</p>
                    <p className="text-sm text-muted-foreground">유효한 여권</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">F-1 Student Visa</p>
                    <p className="text-sm text-muted-foreground">F-1 학생 비자</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">I-20 Form (original)</p>
                    <p className="text-sm text-muted-foreground">I-20 원본</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">Admission Letter</p>
                    <p className="text-sm text-muted-foreground">입학 허가서</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">Proof of Financial Support</p>
                    <p className="text-sm text-muted-foreground">재정 증명서</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">✓</span>
                  <div>
                    <p className="font-medium">Immunization Records</p>
                    <p className="text-sm text-muted-foreground">예방접종 기록</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-accent/30 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" /> What to Pack
              </h3>
              <p className="text-sm text-muted-foreground mb-3">준비물</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <div>
                    <p className="font-medium">Winter Clothing</p>
                    <p className="text-sm text-muted-foreground">동복 (Iowa winters are cold! -20°C possible)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <div>
                    <p className="font-medium">Essential Medications</p>
                    <p className="text-sm text-muted-foreground">필수 약품 (bring 3-month supply)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <div>
                    <p className="font-medium">Adapters & Chargers</p>
                    <p className="text-sm text-muted-foreground">어댑터 및 충전기 (US uses 110V)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <div>
                    <p className="font-medium">Important Contacts List</p>
                    <p className="text-sm text-muted-foreground">중요 연락처 (printed backup)</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary">•</span>
                  <div>
                    <p className="font-medium">Some US Dollars</p>
                    <p className="text-sm text-muted-foreground">미화 현금 ($200-500 recommended)</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Airport Information */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Plane className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">Airport Information</h2>
              <p className="text-muted-foreground">공항 정보</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-primary">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">RECOMMENDED</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">Des Moines Airport (DSM)</h3>
              <p className="text-sm text-muted-foreground mb-4">데스모인 국제공항</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">45 minutes to Ames</p>
                    <p className="text-sm text-muted-foreground">Closest major airport</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <DollarSign className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">$25 shuttle to campus</p>
                    <p className="text-sm text-muted-foreground">Most economical option</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium">Direct flights limited</p>
                    <p className="text-sm text-muted-foreground">May require connection</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-accent rounded-lg p-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <span>🏢</span> Airport Facilities
            </h4>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <p className="font-medium">Free WiFi</p>
                <p className="text-sm text-muted-foreground">무료 와이파이 available</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">Restaurants & Cafes</p>
                <p className="text-sm text-muted-foreground">식당 및 카페</p>
              </div>
              <div className="text-sm">
                <p className="font-medium">ATM Machines</p>
                <p className="text-sm text-muted-foreground">현금 인출기</p>
              </div>
            </div>
            <div className="mt-4 bg-orange-50 border border-orange-200 rounded p-3">
              <p className="text-xs text-orange-800">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                <span className="font-semibold">Note:</span> DSM is a small domestic airport. No currency exchange or SIM card vendors on-site. Plan to get these in Ames.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transportation Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Car className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">Transportation to Ames</h2>
              <p className="text-muted-foreground">Ames까지 교통편</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-primary/5 border-2 border-primary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-semibold">OFFICIAL</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-semibold">FREE</span>
              </div>
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">ISU New Student Shuttle</h3>
              <p className="text-sm text-muted-foreground mb-4">공식 셔틀 (무료)</p>
              <div className="space-y-3 mb-4">
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  <span className="font-semibold">FREE for new students</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span className="text-sm">Seasonal - August only</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Official ISU shuttle service from DSM airport. Requires advance reservation. Only available during move-in period.
              </p>
              <a 
                href="https://www.housing.iastate.edu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:underline text-sm font-medium"
              >
                Reserve at housing.iastate.edu →
              </a>
            </div>

            <div className="bg-secondary/5 border-2 border-secondary rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded text-xs font-semibold">PRIVATE</span>
                <span className="px-2 py-1 bg-primary text-primary-foreground rounded text-xs font-semibold">RECOMMENDED</span>
              </div>
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚌</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Executive Express</h3>
              <p className="text-sm text-muted-foreground mb-4">민간 셔틀</p>
              <div className="space-y-3 mb-4">
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-secondary" />
                  <span className="font-semibold">$25 one-way</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-secondary" />
                  <span className="text-sm">Year-round availability</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Private shuttle service from DSM airport directly to ISU campus or your housing. Book 24 hours in advance.
              </p>
              <a 
                href="https://www.execexpress.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-secondary hover:underline text-sm font-medium"
              >
                Book at execexpress.com →
              </a>
            </div>

            <div className="bg-accent/50 border-2 border-accent rounded-lg p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-semibold">BUDGET</span>
              </div>
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Intercity Bus</h3>
              <p className="text-sm text-muted-foreground mb-4">시외버스 (저렴)</p>
              <div className="space-y-3 mb-4">
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span className="font-semibold">$20-25</span>
                </p>
                <p className="flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">Requires transfer</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Jefferson Lines or Greyhound buses. Most economical but requires transfer and takes longer (~3-4 hours).
              </p>
              <a 
                href="https://www.jeffersonlines.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-600 hover:underline text-sm font-medium"
              >
                Check schedules →
              </a>
            </div>

            <div className="bg-card rounded-lg shadow-md p-6">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🚗</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Uber / Lyft</h3>
              <p className="text-sm text-muted-foreground mb-4">택시 서비스</p>
              <div className="space-y-3 mb-4">
                <p className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-purple-500" />
                  <span className="font-semibold">$80-100+</span>
                </p>
                <p className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-500" />
                  <span className="text-sm">On-demand</span>
                </p>
              </div>
              <p className="text-sm text-muted-foreground mb-3">
                Flexible timing but more expensive. Download app before arriving.
              </p>
              <div className="bg-orange-50 border border-orange-200 rounded p-3 text-xs text-orange-800 mb-3">
                <AlertCircle className="w-4 h-4 inline mr-1" />
                <span className="font-semibold">Note:</span> Prices fluctuate ($80-$100+). Lyft may have fewer drivers available.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arrival Timeline */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Calendar className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">When to Arrive</h2>
              <p className="text-muted-foreground">도착 시기</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Fall Semester (August)</h3>
                <p className="text-sm text-muted-foreground mb-2">가을 학기</p>
                <p className="mb-2">Recommended arrival: <span className="font-semibold text-primary">Week before orientation</span></p>
                <p className="text-sm text-muted-foreground">
                  Move-in typically starts mid-August. Arrive early to settle in, shop for essentials, and attend orientation.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-6 py-2">
                <h3 className="text-xl font-semibold mb-2">Spring Semester (January)</h3>
                <p className="text-sm text-muted-foreground mb-2">봄 학기</p>
                <p className="mb-2">Recommended arrival: <span className="font-semibold text-secondary">Week before orientation</span></p>
                <p className="text-sm text-muted-foreground">
                  Winter arrival - be prepared for snow and cold! Bring winter clothes.
                </p>
              </div>

              <div className="bg-accent/50 rounded-lg p-4">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-primary" />
                  Arriving Early or Late?
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-medium">Early Arrival:</span> Housing may not be ready. Stay at a hotel (Days Inn, Comfort Inn) for 1-2 days.</p>
                  <p><span className="font-medium">Late Arrival:</span> Contact housing office immediately. You can still check in, but coordinate timing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting & Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <AlertCircle className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">Troubleshooting & Tips</h2>
              <p className="text-muted-foreground">문제 해결 및 팁</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌙</span>
                </div>
                <h3 className="text-xl font-semibold">Late Night Arrival</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">야간 도착</p>
              <div className="bg-white rounded-lg p-4 space-y-3">
                <p className="text-sm">
                  <span className="font-semibold text-blue-700">If arriving after 10 PM:</span>
                </p>
                <p className="text-sm">
                  Check in at the <span className="font-semibold text-primary">Maple-Willow-Larch(MWL) Hall Desk and contact RA on Duty</span>.
                </p>
                <p className="text-sm text-muted-foreground">
                  오후 10시 이후 도착 시 Maple-Willow-Larch Hall 데스크에서 체크인하세요.
                </p>
                <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                  <p className="text-xs font-medium text-blue-800">
                    📍 Maple-Willow-Larch Hall: 224 Beach Rd, Ames, IA 50011
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-xl font-semibold">Airport Tips</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">공항 팁</p>
              <div className="bg-white rounded-lg p-4 space-y-3">
                <div>
                  <p className="text-sm font-semibold text-orange-700 mb-1">Free Wi-Fi at DSM Airport</p>
                  <p className="text-sm">
                    Network Name: <span className="font-mono bg-orange-50 px-2 py-1 rounded text-orange-800">"DSM Free Wi-Fi"</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">No password required</p>
                </div>
                <div className="border-t pt-3">
                  <p className="text-sm font-semibold text-orange-700 mb-1">Lost Luggage?</p>
                  <p className="text-sm">
                    Visit the <span className="font-semibold">Baggage Claim Office immediately</span>.
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    짐을 분실한 경우 즉시 수하물 클레임 오피스를 방문하세요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Steps on Campus */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <MapPin className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">First Steps on Campus</h2>
              <p className="text-muted-foreground">캠퍼스 도착 후 첫 단계</p>
            </div>
          </div>

          <div className="grid gap-4">
            {[
              {
                step: '1',
                title: 'Check in to Housing',
                titleKr: '주거 체크인',
                location: 'Your residence hall front desk',
                items: ['Bring your ID and admission letter', 'Get room keys and mailbox info', 'Sign housing contract', '💡 Tip: If you have many bags, ask an RA for a moving cart (CART)']
              },
              {
                step: '2',
                title: 'Get Your ISU Card',
                titleKr: 'ISU 카드 발급',
                location: 'Memorial Union, Room 1150',
                items: ['Bring photo ID', 'Free for students', 'Used for building access, dining, library']
              },
              {
                step: '3',
                title: 'Connect to WiFi',
                titleKr: '와이파이 연결',
                location: 'Network: ISU-Guest (temporary)',
                items: ['Get ISU NetID activated', 'Connect to ISU-Secure']
              },
              {
                step: '4',
                title: 'Attend Orientation',
                titleKr: '오리엔테이션 참석',
                location: 'Check your ISU email for details',
                items: ['International student orientation', 'Academic advising', 'Destination Iowa State (DIS)']
              },
            ].map((item) => (
              <div key={item.step} className="bg-accent/30 rounded-lg p-6 flex gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-primary-foreground font-bold text-xl">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.titleKr}</p>
                  <p className="text-sm font-medium text-primary mb-3">📍 {item.location}</p>
                  <ul className="space-y-1">
                    {item.items.map((text, i) => (
                      <li key={i} className="text-sm flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* First Week Essentials */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <ShoppingBag className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">First Week To-Do List</h2>
              <p className="text-muted-foreground">첫 주 해야 할 일</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Link to="/getting-here/mobile-plans" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Get a US Phone Number</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">미국 전화번호 개통</p>
              <ul className="space-y-2 text-sm mb-4">
                <li><span className="font-medium">Options:</span> AT&T, T-Mobile, Mint Mobile (budget-friendly)</li>
                <li><span className="font-medium">Location:</span> North Grand Mall or online</li>
                <li><span className="font-medium">Bring:</span> Passport, ISU Card, payment method</li>
                <li><span className="font-medium">Tip:</span> Start with prepaid plan, switch later if needed</li>
              </ul>
              <div className="text-primary font-medium text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold">Open a Bank Account</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">은행 계좌 개설</p>
              <ul className="space-y-2 text-sm">
                <li><span className="font-medium">Banks:</span> US Bank (on campus), Wells Fargo, Chase</li>
                <li><span className="font-medium">Bring:</span> Passport, I-20, proof of address, initial deposit</li>
                <li><span className="font-medium">Get:</span> Checking account + debit card</li>
                <li><span className="font-medium">Tip:</span> Ask about student accounts (often fee-free)</li>
              </ul>
            </div>

            <Link to="/getting-here/groceries" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-2 mb-4">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Shop for Essentials</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">필수품 쇼핑</p>
              <ul className="space-y-2 text-sm mb-4">
                <li><span className="font-medium">Bedding:</span> sheets, pillows, comforter</li>
                <li><span className="font-medium">Kitchen:</span> Plates, utensils, microwave containers</li>
                <li><span className="font-medium">Toiletries:</span> Toothpaste, Tooth brush, Toilet paper</li>
              </ul>
              <div className="text-primary font-medium text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>

            <Link to="/getting-here/essential-apps" className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group">
              <div className="flex items-center gap-2 mb-4">
                <Wifi className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">Set Up Technology</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-3">기술 설정</p>
              <ul className="space-y-2 text-sm mb-4">
                <li><span className="font-medium">Canvas:</span> Learning management system - check syllabus</li>
                <li><span className="font-medium">ISU Email:</span> Check daily for important updates</li>
                <li><span className="font-medium">Apps:</span> Download MyState , Bank app</li>
              </ul>
              <div className="text-primary font-medium text-sm group-hover:underline">
                Learn more →
              </div>
            </Link>
          </div>

          <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>🎉</span> Connect with KSA!
            </h3>
            <p className="mb-4">
              Don't navigate this alone! KSA members are here answer any questions.
            </p>
            <p className="text-primary-foreground/90">
              혼자 고민하지 마세요! KSA 선배들이 질문에 답변해드립니다.
            </p>
            <a href="#contact" className="inline-block mt-4 px-6 py-2 bg-white text-primary rounded-lg hover:bg-white/90 transition-colors font-semibold">
              Contact KSA →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}