import { Phone, Wifi, DollarSign, MapPin, AlertCircle, CheckCircle } from 'lucide-react';
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

      {/* The Easy Option - ISSO Partnership */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Budget Options</h2>
              <p className="text-muted-foreground">Best Value for Students · 학생들을 위한 최고의 가치</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mint Mobile */}
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">RECOMMENDED</span>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-semibold">FREE SIM</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Mint Mobile / CampusSIMS</h3>
              <p className="text-muted-foreground mb-6">민트 모바일 / 캠퍼스심</p>

              <div className="grid gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    Why This Option?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">왜 이 옵션을 선택해야 할까요?</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    Cost & Requirements
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">비용 및 요구사항</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold">Cost:</span> Budget-friendly (approx. $15/month)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold">No contract</span> required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-semibold">No SSN required</span> (perfect for new arrivals)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-primary" />
                  Where to Get It
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Location:</span> ISSO Office, Morrill Hall, Room 3720</p>
                  <p><span className="font-semibold">Hours:</span> Monday-Friday, 8:00 AM - 5:00 PM</p>
                  <p><span className="font-semibold">Address:</span> 3720 Morrill Hall, 515 Morrill Rd, Ames, IA 50011</p>
                  <p className="text-muted-foreground mt-2">
                    📍 Morrill Hall은 캠퍼스 중앙에 위치해 있으며 도보로 쉽게 찾을 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Visible */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-semibold">BEST COVERAGE</span>
              </div>
              
              <h3 className="text-2xl font-bold mb-3">Visible (by Verizon)</h3>
              <p className="text-muted-foreground mb-6">비저블 (베라이즌 네트워크)</p>

              <div className="grid gap-6 mb-6">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-600" />
                    Why Visible?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">왜 비저블인가?</p>
                  <p className="text-sm leading-relaxed">
                    Best coverage in Ames (uses <span className="font-semibold text-red-600">Verizon network</span>) but cheaper than Verizon directly. <span className="font-semibold">$25/month</span> for unlimited data and hotspot included.
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    Ames에서 최고의 통신 품질(베라이즌 네트워크 사용)이지만 베라이즌보다 저렴합니다. 무제한 데이터와 핫스팟 포함.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-red-600" />
                    Cost & Features
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">비용 및 기능</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-semibold">$25/month</span> unlimited everything</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-semibold">Unlimited mobile hotspot</span> included</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-semibold">No contract</span> - cancel anytime</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-semibold">Online only</span> - download app to activate</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <Phone className="w-5 h-5 text-red-600" />
                  How to Get It
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Download:</span> Visible app (iOS or Android)</p>
                  <p><span className="font-semibold">Activation:</span> eSIM - instant activation (no waiting)</p>
                  <p><span className="font-semibold">Website:</span> <a href="https://www.visible.com" target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline">visible.com</a></p>
                  <div className="bg-blue-50 border border-blue-200 rounded p-3 mt-3">
                    <p className="text-xs text-blue-800">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      <span className="font-semibold">Note:</span> Online only - download the app to activate eSIM instantly. Perfect for immediate use upon arrival!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-accent rounded-lg p-6">
            <h4 className="font-semibold mb-3 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Where to Buy Physical SIMs
            </h4>
            <p className="text-sm mb-3">
              You can buy physical SIM cards at <span className="font-semibold">Walmart</span> or <span className="font-semibold">Target (Campustown)</span> while shopping for essentials. You don't need to go all the way to North Grand Mall.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium mb-1">Walmart Supercenter</p>
                <p className="text-muted-foreground">534 S Duff Ave - Take CyRide #1 Red</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <p className="font-medium mb-1">Target (Campustown)</p>
                <p className="text-muted-foreground">320 S 16th St - Walking distance from campus</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Carriers */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Phone className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">The Big Carriers</h2>
              <p className="text-muted-foreground">Unlimited Data Plans · 무제한 데이터 요금제</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold mb-4">Verizon / T-Mobile / AT&T</h3>
            <p className="text-muted-foreground mb-6">미국 3대 이동통신사</p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-accent/30 rounded-lg p-6">
                <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">V</span>
                </div>
                <h4 className="font-semibold mb-2">Verizon</h4>
                <p className="text-sm text-muted-foreground mb-3">베라이즌</p>
                <p className="text-sm">Best overall coverage in rural Iowa. Premium pricing but most reliable.</p>
              </div>

              <div className="bg-accent/30 rounded-lg p-6">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">T</span>
                </div>
                <h4 className="font-semibold mb-2">T-Mobile</h4>
                <p className="text-sm text-muted-foreground mb-3">티모바일</p>
                <p className="text-sm">Good in-town coverage. Often has special international student promotions.</p>
              </div>

              <div className="bg-accent/30 rounded-lg p-6">
                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">AT&T</span>
                </div>
                <h4 className="font-semibold mb-2">AT&T</h4>
                <p className="text-sm text-muted-foreground mb-3">AT&T</p>
                <p className="text-sm">Good balance of coverage and price. Family plan discounts available.</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                  <CheckCircle className="w-5 h-5" />
                  Pros
                </h4>
                <p className="text-sm text-muted-foreground mb-3">장점</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><span className="font-semibold">Better coverage</span> in rural Iowa areas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><span className="font-semibold">Family plan discounts</span> if you group with friends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><span className="font-semibold">Unlimited data</span> plans available</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><span className="font-semibold">More physical stores</span> for support</span>
                  </li>
                </ul>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-800">
                  <AlertCircle className="w-5 h-5" />
                  Important Notes
                </h4>
                <p className="text-sm text-muted-foreground mb-3">유의사항</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">!</span>
                    <span>May require a <span className="font-semibold">deposit</span> if you don't have US credit history yet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">!</span>
                    <span><span className="font-semibold">Higher monthly cost</span> ($50-80/month)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-600">!</span>
                    <span>Some plans require <span className="font-semibold">contracts</span></span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-accent rounded-lg p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location: North Grand Mall
              </h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">Address:</p>
                  <p className="text-muted-foreground">2801 Grand Ave, Ames, IA 50010</p>
                </div>
                <div>
                  <p className="font-medium mb-1">How to Get There:</p>
                  <p className="text-muted-foreground">Take CyRide #1 Red (North)</p>
                </div>
                <div className="sm:col-span-2">
                  <p className="font-medium mb-1">Stores Available:</p>
                  <p className="text-muted-foreground">Verizon, T-Mobile, and AT&T all have retail locations in the mall</p>
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