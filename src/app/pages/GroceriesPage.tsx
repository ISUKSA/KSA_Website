import { ShoppingBag, MapPin, Store, Smartphone, DollarSign, CheckCircle, AlertCircle, Bus } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GroceriesPage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/getting-here" className="text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 inline-block">
            ← Back to Getting Here
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Stocking Up</h1>
          <p className="text-xl text-primary-foreground/90 mb-2">Where to Buy Food & Essentials in Ames</p>
          <p className="text-lg text-primary-foreground/80">
            Ames에서 식료품 및 생필품 구매하기
          </p>
        </div>
      </section>

      {/* US Supermarkets */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">US Supermarkets</h2>
              <p className="text-muted-foreground">The Big Trips · 대형 마트</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Walmart */}
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xl">W</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Walmart Supercenter</h3>
                    <p className="text-blue-100">North Location · 월마트</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🛒</span> Best For:
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">추천 품목</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Bedding:</span> Sheets, pillows, comforters</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Electronics:</span> Phone chargers, adapters, cables</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Bulk Items:</span> Bottled water, paper towels, toiletries</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Cleaning:</span> Laundry detergent, cleaning supplies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location & Transport
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Address:</span> 534 S Duff Ave, Ames, IA 50010</p>
                    <p><span className="font-medium">Bus:</span> Take <span className="font-semibold text-primary">CyRide #1 Red (North)</span></p>
                    <p><span className="font-medium">Hours:</span> 6:00 AM - 11:00 PM daily</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Tip:</span> Walmart is your one-stop shop for setting up your dorm room. Prices are generally the lowest in Ames.
                  </p>
                </div>
              </div>
            </div>

            {/* Hy-Vee */}
            <div className="bg-red-50 border-2 border-red-200 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-red-600 font-bold text-xl">H</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Hy-Vee</h3>
                    <p className="text-red-100">Lincoln Way · 하이비</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🥗</span> Best For:
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">추천 품목</p>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Fresh Produce:</span> Fruits, vegetables, salad bar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Meat & Seafood:</span> Fresh cuts, fish counter</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">International Aisle:</span> Decent Asian section</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Bakery:</span> Fresh bread, cakes, cookies</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location & Transport
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Address:</span> 3800 Lincoln Way, Ames, IA 50014</p>
                    <p><span className="font-medium">Bus:</span> Take <span className="font-semibold text-primary">CyRide #3 Blue</span></p>
                    <p><span className="font-medium">Hours:</span> 6:00 AM - 11:00 PM daily</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Tip:</span> Hy-Vee has better quality fresh food than Walmart. Great for weekly grocery runs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Asian & International Groceries */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
              <Store className="w-6 h-6 text-secondary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Asian & International Groceries</h2>
              <p className="text-muted-foreground">Find Your Favorite Foods · 한국 식료품</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Uni-Mart */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-400">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">GO-TO SPOT</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Uni-Mart</h3>
                <p className="text-orange-100">Lincoln Way (Campustown) · 유니마트</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🍜</span> Why Uni-Mart?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">왜 유니마트인가?</p>
                  <p className="text-sm leading-relaxed mb-3">
                    The <span className="font-semibold text-orange-600">go-to spot</span> for Korean essentials right in Campustown. Most Korean students shop here for authentic Korean ingredients.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    캠퍼스타운에 위치한 한국 식료품의 필수 장소입니다. 대부분의 한인 학생들이 이곳에서 쇼핑합니다.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Korean Essentials Available:</h4>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Kimchi:</span> 배추김치, 깍두기, 총각김치</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Rice Cakes (Tteok):</span> 떡볶이 떡, 가래떡</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Instant Noodles:</span> Shin Ramyun, Buldak, Jin Ramen</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Frozen Dumplings:</span> 만두 (pork, kimchi, veggie)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Sauces & Condiments:</span> 고추장, 된장, 간장, 참기름</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span><span className="font-medium">Korean Snacks:</span> Honey Butter Chips, Pepero, etc.</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location & Transport
                  </h4>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-medium">Location:</span> Lincoln Way, Campustown</p>
                    <p><span className="font-medium">Bus Options:</span> CyRide #1 Red, #3 Blue, or #11 Cherry</p>
                    <p><span className="font-medium">Distance:</span> Walking distance from central campus</p>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Tip:</span> Check Uni-Mart first for Korean ingredients before ordering from Weee! - it's faster and no delivery fees!
                  </p>
                </div>
              </div>
            </div>

            {/* Weee! App */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  Weee! <Smartphone className="w-6 h-6" />
                </h3>
                <p className="text-green-100">Delivery App · 배달 앱</p>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📦</span> Why Use Weee!?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-2">왜 위 앱을 사용할까요?</p>
                  <p className="text-sm leading-relaxed mb-3">
                    Many Korean students use the <span className="font-semibold text-primary">"Weee!"</span> app for delivery of specific Korean snacks and specialty items that aren't available at Uni-Mart. Great for bulk orders!
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    유니마트에 없는 특정 한국 과자나 특산물을 배달로 받을 수 있습니다. 대량 주문에 좋습니다!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Available Items:</h4>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Korean snacks (Honey Butter Chips, Pepero, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Instant noodles (Shin Ramyun, Buldak, Jjapaguri)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Korean sauces and condiments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Fresh produce and meat (limited availability)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Specialty items not found locally</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-4">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Tip:</span> Order with friends to meet minimum delivery requirements and split shipping costs!
                  </p>
                  <p className="text-xs text-green-700 mt-2">
                    친구들과 함께 주문해서 최소 주문 금액을 맞추고 배송비를 나누세요!
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-medium">Download:</span> Available on iOS and Android app stores
                  </p>
                  <p className="text-sm mt-2">
                    <span className="font-medium">Website:</span> <a href="https://www.sayweee.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sayweee.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget King - Aldi */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Budget King</h2>
              <p className="text-muted-foreground">Cheapest Groceries in Town · 가장 저렴한 마트</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg overflow-hidden">
              <div className="bg-green-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">LOWEST PRICES</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-bold text-2xl">A</span>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">Aldi</h3>
                    <p className="text-green-100">알디 - 초저가 슈퍼마켓</p>
                  </div>
                </div>
              </div>
              
              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                    <span>💰</span> Why Aldi?
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">왜 알디인가?</p>
                  <p className="leading-relaxed">
                    <span className="font-semibold text-green-700">Cheapest groceries in town.</span> Perfect for budget-conscious students. Great for weekly basics like eggs, milk, fresh produce, and pantry staples.
                  </p>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    Ames에서 가장 저렴한 식료품점입니다. 예산을 고려하는 학생들에게 완벽합니다.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white border border-green-200 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-700">
                      <CheckCircle className="w-5 h-5" />
                      Best Buys at Aldi
                    </h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><span className="font-medium">Eggs:</span> Often half the price of other stores</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><span className="font-medium">Milk & Dairy:</span> Butter, cheese, yogurt</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><span className="font-medium">Fresh Produce:</span> Fruits and vegetables</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><span className="font-medium">Bread & Bakery:</span> Fresh baked goods</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-600">•</span>
                        <span><span className="font-medium">Snacks:</span> Chips, chocolate, cookies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-700">
                      <AlertCircle className="w-5 h-5" />
                      CRUCIAL WARNINGS!
                    </h4>
                    <p className="text-sm text-muted-foreground mb-3">필수 주의사항!</p>
                    <div className="space-y-3">
                      <div className="bg-white rounded p-3">
                        <p className="text-sm font-semibold text-red-700 mb-1">🪙 Bring a Quarter (25¢) Coin</p>
                        <p className="text-xs text-muted-foreground">
                          You need a quarter to unlock a shopping cart. You'll get it back when you return the cart.
                        </p>
                        <p className="text-xs text-red-600 mt-1">
                          장바구니를 사용하려면 25센트 동전이 필요합니다. 반납하면 돌려받습니다.
                        </p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="text-sm font-semibold text-red-700 mb-1">🛍️ Bring Your Own Bags</p>
                        <p className="text-xs text-muted-foreground">
                          Aldi doesn't provide free bags. Bring reusable bags or buy them at checkout (10-15¢ each).
                        </p>
                        <p className="text-xs text-red-600 mt-1">
                          무료 쇼핑백이 없습니다. 장바구니를 가져오거나 계산대에서 구매하세요.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-accent rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Location & Transport
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium mb-1">Address:</p>
                      <p className="text-muted-foreground">520 S 5th St, Ames, IA 50010</p>
                    </div>
                    <div>
                      <p className="font-medium mb-1">Transport:</p>
                      <p className="text-muted-foreground">Walking distance from Walmart (5 min walk)</p>
                    </div>
                    <div className="sm:col-span-2">
                      <p className="font-medium mb-1">Pro Tip:</p>
                      <p className="text-muted-foreground">Take CyRide #1 Red to Walmart, shop there, then walk to Aldi for groceries!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Buying - Costco/Sam's Club */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Bulk Buying</h2>
              <p className="text-muted-foreground">Warehouse Clubs · 창고형 할인매장</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-8">
              <h3 className="text-3xl font-bold mb-2">Costco / Sam's Club</h3>
              <p className="text-white/90">코스트코 / 샘스클럽</p>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">C</span>
                    </div>
                    <h4 className="text-xl font-semibold">Costco</h4>
                  </div>
                  <p className="text-sm mb-3">Best for bulk items, electronics, and prepared foods</p>
                  <div className="bg-white rounded p-3 mb-3">
                    <p className="text-xs font-semibold text-red-700 mb-1">Membership Required:</p>
                    <p className="text-xs text-muted-foreground">$60/year (Gold Star)</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">S</span>
                    </div>
                    <h4 className="text-xl font-semibold">Sam's Club</h4>
                  </div>
                  <p className="text-sm mb-3">Walmart's warehouse club, similar to Costco</p>
                  <div className="bg-white rounded p-3 mb-3">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Membership Required:</p>
                    <p className="text-xs text-muted-foreground">$50/year (Club)</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800 text-lg">
                  <CheckCircle className="w-6 h-6" />
                  Korean Students' Pro Tip!
                </h4>
                <p className="text-sm text-muted-foreground mb-3">한국 학생들을 위한 꿀팁!</p>
                <div className="bg-white rounded-lg p-4">
                  <p className="leading-relaxed mb-2">
                    <span className="font-bold text-green-700">Have a membership from Korea?</span> Your <span className="font-semibold text-red-600">Korean Costco card WORKS in the US!</span> Costco memberships are valid worldwide.
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    한국에서 사용하던 코스트코 카드가 미국에서도 그대로 사용 가능합니다! 코스트코 회원권은 전 세계에서 유효합니다.
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">What to Buy in Bulk:</h4>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Rice (Korean rice available at Costco)
                  </div>
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Meat & Seafood (freeze portions)
                  </div>
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Snacks & beverages
                  </div>
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Paper products & toiletries
                  </div>
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Prepared foods (rotisserie chicken, pizza)
                  </div>
                  <div className="bg-accent rounded p-3">
                    <span className="font-medium">• </span>Electronics & appliances
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-800">
                  <AlertCircle className="w-5 h-5" />
                  Transportation Note
                </h4>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">Location:</span> Both are outside of town (requires a car)</p>
                  <p><span className="font-semibold">Transport:</span> No direct bus route - you'll need a friend with a car</p>
                  <p><span className="font-semibold">Pro Tip:</span> Coordinate with Korean upperclassmen or organize a group shopping trip!</p>
                  <p className="text-muted-foreground mt-2">
                    버스가 없으니 차가 있는 친구와 함께 가거나 한인 선배들과 함께 단체로 쇼핑하세요!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Malls */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
              <Store className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Shopping Malls</h2>
              <p className="text-muted-foreground">Clothing & Entertainment · 쇼핑몰</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">NGM</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">North Grand Mall</h3>
                <p className="text-muted-foreground">노스 그랜드 몰</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🛍️</span> Stores Available
                </h4>
                <p className="text-sm text-muted-foreground mb-3">입점 매장</p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="bg-accent/30 rounded p-2">Gap</div>
                  <div className="bg-accent/30 rounded p-2">Old Navy</div>
                  <div className="bg-accent/30 rounded p-2">Target</div>
                  <div className="bg-accent/30 rounded p-2">JCPenney</div>
                  <div className="bg-accent/30 rounded p-2">Famous Footwear</div>
                  <div className="bg-accent/30 rounded p-2">Bath & Body Works</div>
                  <div className="bg-accent/30 rounded p-2">GameStop</div>
                  <div className="bg-accent/30 rounded p-2">Cinemark Cinema</div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6">
                <h4 className="font-semibold mb-3 flex items-center gap-2">
                  <span>🏪</span> Best For
                </h4>
                <p className="text-sm text-muted-foreground mb-3">추천 품목</p>
                <ul className="text-sm space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-medium">Clothing:</span> Casual wear, winter coats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-medium">Shoes:</span> Sneakers, boots, sandals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-medium">Entertainment:</span> Movies, video games</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span><span className="font-medium">Phone Plans:</span> Carrier stores (Verizon, T-Mobile)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                Location & Transport
              </h4>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-medium mb-1">Address:</p>
                  <p className="text-muted-foreground">2801 Grand Ave, Ames, IA 50010</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Bus Options:</p>
                  <p className="text-muted-foreground">CyRide #1 Red or #2 Green</p>
                </div>
                <div>
                  <p className="font-medium mb-1">Hours:</p>
                  <p className="text-muted-foreground">Mon-Sat: 10 AM - 9 PM<br/>Sun: 11 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-primary text-primary-foreground rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
              <span>🚌</span> Shopping Trip Pro Tips
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Use the <span className="font-semibold">MyState app</span> to track CyRide buses in real-time</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Bring reusable bags - most stores charge for plastic bags</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Shop with friends to split costs and make it more fun!</span>
              </li>
              <li className="flex items-start gap-2">
                <span>•</span>
                <span>Check store apps for digital coupons before you go</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Smart Route Strategy */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <Bus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Shopping Route Strategy</h2>
              <p className="text-muted-foreground">The "Bus 3" Hack · 버스 3번 루트 꿀팁</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg overflow-hidden">
            <div className="bg-blue-600 text-white p-8">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <span>🎯</span> Maximize Your Shopping Trip!
              </h3>
              <p className="text-blue-100">효율적인 쇼핑 루트</p>
            </div>

            <div className="p-8">
              <div className="bg-white rounded-lg border-2 border-blue-300 p-6 mb-6">
                <h4 className="font-semibold text-lg mb-4 text-blue-800">The Smart Route:</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Take CyRide #3 Blue to Walmart</p>
                      <p className="text-sm text-muted-foreground">Shop for household items: bedding, electronics, toiletries, cleaning supplies</p>
                      <p className="text-xs text-blue-600 mt-1">월마트에서 생활용품 쇼핑</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-blue-600 text-2xl">↓</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Walk 5 minutes to Aldi</p>
                      <p className="text-sm text-muted-foreground">Buy cheap groceries: eggs, milk, fresh produce, dairy, snacks</p>
                      <p className="text-xs text-blue-600 mt-1">도보 5분 거리의 알디에서 저렴한 식료품 구매</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="text-blue-600 text-2xl">↓</div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold mb-1">Take CyRide #3 Blue back home</p>
                      <p className="text-sm text-muted-foreground">Same bus route returns to campus</p>
                      <p className="text-xs text-blue-600 mt-1">같은 버스로 캠퍼스로 귀가</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-green-800">
                    <CheckCircle className="w-5 h-5" />
                    Why This Route Works
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">왜 이 루트가 좋은가</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><span className="font-semibold">One bus route</span> - no transfers needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><span className="font-semibold">Save money</span> - hit both cheap stores in one trip</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><span className="font-semibold">Save time</span> - stores are 5 min walk apart</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600">✓</span>
                      <span><span className="font-semibold">Cover everything</span> - household + groceries</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 flex items-center gap-2 text-orange-800">
                    <AlertCircle className="w-5 h-5" />
                    Important Reminders
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">중요 사항</p>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span><span className="font-semibold">Bring a quarter</span> for Aldi's cart</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span><span className="font-semibold">Bring bags</span> for Aldi (no free bags)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span><span className="font-semibold">Use MyState app</span> to check bus times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600">!</span>
                      <span><span className="font-semibold">Shop light</span> - you'll carry bags between stores</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-primary text-primary-foreground rounded-lg p-6">
                <h4 className="font-semibold mb-3 text-lg flex items-center gap-2">
                  <span>💡</span> Pro Tips from Korean Students
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Go on <span className="font-semibold">Saturday morning</span> (less crowded, full week to use groceries)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Bring a <span className="font-semibold">backpack + tote bag</span> to carry more items comfortably</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Shop with <span className="font-semibold">roommates or friends</span> - split heavy items and have more hands!</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>•</span>
                    <span>Make a <span className="font-semibold">shopping list</span> before you go to save time and money</span>
                  </li>
                </ul>
                <p className="text-primary-foreground/90 text-xs mt-4">
                  토요일 아침에 친구들과 함께 가세요. 백팩과 장바구니를 챙기고, 미리 쇼핑 리스트를 만드는 것을 잊지 마세요!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}