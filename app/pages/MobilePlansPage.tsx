import { Phone, Wifi, DollarSign, MapPin, AlertCircle, CheckCircle, ExternalLink, Signal } from 'lucide-react';
import { Link } from 'react-router-dom';

export function MobilePlansPage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/getting-here" className="text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 inline-block">
            ← Back to Getting Here
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Getting Connected</h1>
          <p className="text-xl text-primary-foreground/90 mb-2">Phone Plans for International Students</p>
          <p className="text-lg text-primary-foreground/80">
            유학생을 위한 휴대폰 요금제
          </p>
        </div>
      </section>

      {/* Before You Buy - CRITICAL */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-red-600 text-white rounded-t-lg p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-10 h-10 flex-shrink-0" />
              <div>
                <h2 className="text-3xl font-bold mb-2">Before You Buy</h2>
                <p className="text-red-100">Crucial Step - Do This First! · 먼저 확인하세요!</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-lg shadow-lg border-2 border-red-600 border-t-0 p-8">
            <h3 className="text-2xl font-bold mb-4 text-red-800">Check if Your Phone is Unlocked</h3>
            <p className="text-muted-foreground mb-6">휴대폰 잠금 해제 확인</p>

            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 mb-6">
              <p className="text-lg leading-relaxed mb-4">
                Your Korean phone <span className="font-bold text-red-700">MUST be 'Country Unlocked'</span> to use a US SIM card. Contact your Korean carrier (SKT/KT/LGU+) <span className="font-bold">before you leave Korea</span> to request an unlock.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                한국에서 사용하던 휴대폰을 미국에서 사용하려면 <span className="font-semibold">국가 잠금 해제</span>가 반드시 필요합니다. 출국 전에 통신사(SKT/KT/LGU+)에 연락하여 잠금 해제를 요청하세요.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg p-6 border border-pink-200">
                <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">SK</span>
                </div>
                <h4 className="font-semibold mb-2">SK Telecom</h4>
                <p className="text-sm text-muted-foreground">Call customer service or visit a store to request unlock</p>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-lg p-6 border border-red-200">
                <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">KT</span>
                </div>
                <h4 className="font-semibold mb-2">KT</h4>
                <p className="text-sm text-muted-foreground">Request unlock through KT app or customer service</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border border-purple-200">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-lg">LG</span>
                </div>
                <h4 className="font-semibold mb-2">LG U+</h4>
                <p className="text-sm text-muted-foreground">Visit LG U+ store or call to unlock device</p>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm text-blue-800">
                <CheckCircle className="w-4 h-4 inline mr-2" />
                <span className="font-semibold">Pro Tip:</span> Most phones purchased in the last 2-3 years are already unlocked. Ask your carrier to confirm!
              </p>
              <p className="text-xs text-blue-700 mt-2">
                최근 2-3년 내에 구입한 휴대폰은 대부분 이미 잠금 해제되어 있습니다. 통신사에 확인해보세요!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* eSIM vs Physical SIM Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <Phone className="w-10 h-10 text-primary" />
            <div>
              <h2 className="text-3xl font-bold">eSIM vs. Physical SIM</h2>
              <p className="text-muted-foreground">Choose What Works for You · 자신에게 맞는 방식 선택</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-semibold">eSIM</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">디지털 심카드</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Instant Activation</p>
                    <p className="text-muted-foreground">Download and activate within minutes (Mint, Visible)</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Dual SIM Use</p>
                    <p className="text-muted-foreground">Keep your Korean number active for 2FA/banking</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">No Physical Card</p>
                    <p className="text-muted-foreground">Nothing to lose or damage</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-2">✓ Best for:</p>
                <p className="text-sm">iPhone XS/newer, Samsung S20/newer, Google Pixel 3/newer</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💳</span>
                </div>
                <h3 className="text-xl font-semibold">Physical SIM</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">실물 심카드</p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Easy to Switch Phones</p>
                    <p className="text-muted-foreground">Just move the card to a new device</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Available While Shopping</p>
                    <p className="text-muted-foreground">Buy at Walmart or Target in Ames</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p className="font-medium">Works with Older Phones</p>
                    <p className="text-muted-foreground">No eSIM support needed</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4">
                <p className="text-xs text-muted-foreground mb-2">✓ Best for:</p>
                <p className="text-sm">Older phones, or if you prefer physical cards</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-orange-50 border border-orange-200 rounded-lg p-4">
            <p className="text-sm text-orange-800">
              <AlertCircle className="w-4 h-4 inline mr-2" />
              <span className="font-semibold">Note:</span> Check if your phone supports eSIM before choosing. Most phones from 2018+ support eSIM, but verify in your phone settings.
            </p>
          </div>
        </div>
      </section>

      {/* NEW INTRO BLOCK: 통신사 선택 가이드 */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-100 to-indigo-100 border-2 border-blue-400 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <Signal className="w-10 h-10 text-blue-600" />
              <h2 className="text-3xl font-bold text-foreground">통신사 선택 가이드</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">Choosing a Carrier</p>

            <p className="text-base text-foreground leading-relaxed mb-6">
              각 통신사별로 제공하는 혜택과 이벤트가 다르기에 직접 비교조사를 통해 개인의 상황과 성향에 맞춰 선택하는 것을 추천합니다.
            </p>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-800 font-semibold hover:underline"
            >
              <span>더욱 자세한 통신사별 비교분석은 링크 참고</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* NEW SECTION: 대형 & 중형 통신사 (Major & Regional Carriers) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">대형 & 중형 통신사</h2>
              <p className="text-muted-foreground">Major & Regional Carriers</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1: Verizon */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-red-300 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">V</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Verizon</h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  가장 넓은 coverage(서비스 지역 범위)와 안정적인 통신 품질
                </p>
                <div className="bg-red-50 rounded-lg p-4 border-l-4 border-red-500">
                  <p className="text-sm font-semibold text-foreground">
                    가격대: 무제한 기준 월 $70~$90+로 제일 비쌈
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: AT&T */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-blue-300 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AT&T</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">AT&T</h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Verizon에 준하는 coverage, 전반적으로 무난한 성능
                </p>
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <p className="text-sm font-semibold text-foreground">
                    가격대: 무제한 기준 약 $65~$85
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: T-Mobile */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-pink-300 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground">T-Mobile</h3>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  에임스에서는 안정적으로 연결되지만 그 외 지역은 편차 큼
                </p>
                <div className="bg-pink-50 rounded-lg p-4 border-l-4 border-pink-500">
                  <p className="text-sm font-semibold text-foreground">
                    가격대: 무제한 기준 월 $60~$85
                  </p>
                </div>
              </div>
            </div>

            {/* Card 4: UScellular */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-purple-300 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">US</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">UScellular</h3>
                  <span className="text-xs text-purple-600 font-semibold">중형 통신사</span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  대형 통신사가 아닌 지역 기반 통신사로, 특히 중서부(Iowa 등) 지역에서 강한 coverage를 제공
                </p>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <p className="text-sm font-semibold text-foreground">
                    가격대: 무제한 기준 월 $60 ~ $80
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: 알뜰폰 (MVNO - Budget Options) */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">알뜰폰</h2>
              <p className="text-muted-foreground">MVNO - Budget Options</p>
            </div>
          </div>

          {/* Warning Note */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6 mb-8 shadow-md">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-base font-semibold text-amber-900 mb-2">주의사항:</p>
                <p className="text-sm text-amber-800 leading-relaxed">
                  알뜰폰은 어떠한 망을 사용하는지에 따라 연결 성능 차이가 생깁니다. 또한 사용자가 많은 경우 임의로 연결 성능에 제한을 둬 불편함을 겪을 수 있음에 유의하세요.
                </p>
              </div>
            </div>
          </div>

          {/* MVNO Options - Horizontal Rows */}
          <div className="space-y-4">
            {/* Row 1: Mint Mobile */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Mint Mobile</h4>
                    <p className="text-sm text-muted-foreground">T-mobile 망 | 무제한 기준 월 $15~$30 <span className="text-green-600 font-semibold">(최저가)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 2: Visible */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">V</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Visible</h4>
                    <p className="text-sm text-muted-foreground">Verizon 망 | 무제한 기준 월 $25~$45</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 3: US Mobile */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">US</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">US Mobile</h4>
                    <p className="text-sm text-muted-foreground">Verizon / T-Mobile / AT&T 망 선택 가능 | 무제한 기준 월 $25~$50</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Row 4: Google Fi Wireless */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">Fi</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-foreground">Google Fi Wireless</h4>
                    <p className="text-sm text-muted-foreground">T-Mobile 망 | 무제한 기준 월 $50~$65</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wi-Fi on Campus */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <Wifi className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Wi-Fi on Campus</h2>
              <p className="text-muted-foreground">캠퍼스 와이파이</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-300 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
                <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-semibold">USE THIS</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-green-800">Eduroam</h3>
              <p className="text-sm text-muted-foreground mb-6">공식 캠퍼스 네트워크</p>
              
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Network Name:</p>
                  <p className="font-mono bg-green-50 px-3 py-2 rounded text-green-800 text-lg">"Eduroam"</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Login Credentials:</p>
                  <p className="text-sm">Use your <span className="font-semibold text-primary">ISU NetID and password</span></p>
                </div>
                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <p className="text-sm font-semibold text-green-800 mb-2">✓ Benefits:</p>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Fast and reliable</li>
                    <li>• Works across all ISU buildings</li>
                    <li>• Secure encrypted connection</li>
                    <li>• Works at other universities worldwide</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-300 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle className="w-8 h-8 text-red-600" />
                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">AVOID</span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-red-800">ISU-Guest</h3>
              <p className="text-sm text-muted-foreground mb-6">게스트 네트워크 (비추천)</p>
              
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div>
                  <p className="font-semibold mb-2">Network Name:</p>
                  <p className="font-mono bg-red-50 px-3 py-2 rounded text-red-800 text-lg">"ISU-Guest"</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">When to Use:</p>
                  <p className="text-sm">Only for <span className="font-semibold">temporary visitors</span> or before your NetID is activated</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded p-4">
                  <p className="text-sm font-semibold text-red-800 mb-2">✗ Problems:</p>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Very slow speeds</li>
                    <li>• Disconnects frequently</li>
                    <li>• Limited access to ISU resources</li>
                    <li>• Not secure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>💡</span> Pro Tip
            </h3>
            <p className="mb-2">
              Set up Eduroam on your phone as soon as you activate your ISU NetID. This way, you'll have internet access across campus without using mobile data.
            </p>
            <p className="text-primary-foreground/90 text-sm">
              ISU NetID를 활성화하자마자 Eduroam을 설정하세요. 캠퍼스 전체에서 모바일 데이터 없이 인터넷을 사용할 수 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}