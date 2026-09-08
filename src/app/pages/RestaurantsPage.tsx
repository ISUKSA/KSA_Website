import { MapPin, Clock, DollarSign, Utensils, Truck } from 'lucide-react';
import { OrgFooter } from '@/app/components/OrgFooter';

export function RestaurantsPage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Places to Eat / 추천 맛집</h1>
          <p className="text-lg text-white/90 italic leading-relaxed max-w-3xl">
            학교 근처 맛집을 소개합니다. 운영 시간과 메뉴 등 자세한 정보는 해당 웹사이트나 구글맵을 참고하세요. 아래에 적힌 운영 시간은 경우에 따라 정확하지 않을 수 있습니다.
          </p>
        </div>
      </section>

      {/* Section 1: On Campus Food Trucks */}
      <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">On Campus - 학교 내 푸드트럭</h2>
              <p className="text-muted-foreground">(주중 점심때만 운영)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Carlos Quesadillas */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-yellow-900">Carlos Quesadillas Food Truck</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold">$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-base mb-4 text-yellow-900">
                  간단하고 빠른 멕시코식 푸드트럭
                </p>
                <div className="bg-white border border-yellow-300 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="w-4 h-4 text-yellow-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Hours:</strong> 11:00~15:00</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-yellow-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> Kildee 또는 Hoover Hall 근처</span>
                  </div>
                </div>
              </div>
            </div>

            {/* The Cheese Steak Factory */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-400 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-orange-900">The Cheese Steak Factory</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold">$</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-base mb-4 text-orange-900">
                  즉석에서 만들어주는 Cheesesteak 샌드위치 푸드트럭
                </p>
                <div className="bg-white border border-orange-300 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Hours:</strong> 12:00~14:30</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-orange-700 flex-shrink-0 mt-0.5" />
                    <span><strong>Location:</strong> Carver Hall 근처</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Near Campus */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Utensils className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Near Campus - 학교 근처 도보 거리</h2>
              <p className="text-muted-foreground">(5-10분)</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Blue Fish Hawaii Poke Bowl */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                <h3 className="text-xl font-bold text-white">Blue Fish Hawaii Poke Bowl</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  빠르고 깔끔한 포케집
                </p>
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-blue-700" />
                    <span className="font-medium">11:00~21:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Ichiban Japanese Restaurant */}
            <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4">
                <h3 className="text-xl font-bold text-white">Ichiban Japanese Restaurant</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  인기 스시/라멘집
                </p>
                <div className="bg-red-100 border border-red-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-red-700" />
                    <span className="font-medium">12:00~21:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cafe Beaudelaire */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-purple-500 to-violet-500 p-4">
                <h3 className="text-xl font-bold text-white">Cafe Beaudelaire</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  분위기 좋은 브라질 카페, 주말 브런치 인기
                </p>
                <div className="bg-purple-100 border border-purple-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-purple-700" />
                    <span className="font-medium">10:00~22:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mr. Burrito */}
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 border-2 border-yellow-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-yellow-600 to-amber-600 p-4">
                <h3 className="text-xl font-bold text-white">Mr. Burrito</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  가성비 멕시코 음식점
                </p>
                <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-yellow-700" />
                    <span className="font-medium">11:00~21:00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Jeff's Pizza Shoppe */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4">
                <h3 className="text-xl font-bold text-white">Jeff's Pizza Shoppe</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  늦은 밤까지 여는 대학가 인기 피자집
                </p>
                <div className="bg-green-100 border border-green-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-green-700" />
                    <span className="font-medium">10:30~01:00am</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Potbelly Sandwich Shop */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4">
                <h3 className="text-xl font-bold text-white">Potbelly Sandwich Shop</h3>
                <div className="mt-2">
                  <span className="px-3 py-1 bg-green-600 text-white rounded-full text-sm font-bold inline-flex items-center gap-1">
                    <DollarSign className="w-4 h-4" />
                    <DollarSign className="w-4 h-4" />
                  </span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                <p className="text-sm leading-relaxed">
                  레트로 감성 써브웨이 형식의 미국 체인 샌드위치집
                </p>
                <div className="bg-orange-100 border border-orange-300 rounded-lg p-3 mt-auto">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-orange-700" />
                    <span className="font-medium">10:00~22:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OrgFooter />
    </div>
  );
}
