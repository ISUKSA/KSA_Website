import {
  ShoppingBag,
  MapPin,
  Store,
  Smartphone,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Bus,
} from "lucide-react";
import { Link } from "react-router-dom";

export function GroceriesPage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/getting-here"
            className="text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 inline-block"
          >
            ← Back to Getting Here
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Ames 쇼핑 및 마트 가이드 (Shopping in Ames)
          </h1>
          <p className="text-xl text-primary-foreground/90">
            식료품부터 생활용품까지, 에임스(Ames) 지역 마트 완벽
            정리
          </p>
        </div>
      </section>

      {/* Section 1: Grocery (일반 식료품) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Grocery (일반 식료품)
            </h2>
            <p className="text-lg text-muted-foreground">
              에임스(Ames)의 주요 식료품 매장
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Walmart */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Walmart
                </h3>
                <p className="text-blue-100 text-sm">
                  월마트 (대형 종합 슈퍼마켓)
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    지점 (Locations)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• South Duff: 534 S Duff Ave</li>
                    <li>• North Grand: 2801 Grand Ave</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    특징
                  </h4>
                  <p className="text-sm">
                    24시간 운영, 식료품부터 생활용품,
                    전자제품까지 모든 것을 한곳에서 구매 가능
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    브랜드
                  </h4>
                  <p className="text-sm">
                    Great Value (식품), Equate (약품/뷰티),
                    Mainstays (생활용품)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    가격이 저렴하며, 한 번에 모든 물건을 구매할
                    수 있어 편리함
                  </p>
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <Bus className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>버스:</strong> CyRide #1 Red
                      (South Duff), #2 Green (North Grand)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Target */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-red-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Target
                </h3>
                <p className="text-red-100 text-sm">
                  타겟 (중상급 종합 매장)
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    위치
                  </h4>
                  <p className="text-sm">
                    North Grand Mall 내 위치
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    특징
                  </h4>
                  <p className="text-sm">
                    Walmart보다 디자인과 품질이 좋음, 깔끔한
                    매장 분위기
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    브랜드
                  </h4>
                  <p className="text-sm">
                    Good & Gather (식품), Up & Up (생활용품)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    트렌디한 디자인의 생활용품, 식품 품질 우수
                  </p>
                </div>
                <div className="bg-red-100 border border-red-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <Bus className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>버스:</strong> CyRide #1 Red 또는
                      #2 Green
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Hy-Vee */}
            <div className="bg-purple-50 border-2 border-purple-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-purple-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Hy-Vee
                </h3>
                <p className="text-purple-100 text-sm">
                  하이비 (중상급 식료품점)
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    지점 (Locations)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• East Ames: 640 Lincoln Way</li>
                    <li>• West Ames: 3800 Lincoln Way</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-800">
                    특징
                  </h4>
                  <p className="text-sm">
                    신선 식품 품질이 우수하며, 한식용 정육 주문
                    가능 (미리 전화로 요청)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-purple-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    신선한 과일, 야채, 고기, 베이커리, 샐러드 바
                    제공
                  </p>
                </div>
                <div className="bg-purple-100 border border-purple-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <Bus className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>버스:</strong> CyRide #3 Blue
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* ALDI */}
            <div className="bg-green-50 border-2 border-green-400 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-green-700 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  ALDI
                </h3>
                <p className="text-green-100 text-sm">
                  알디 (초저가 식료품점)
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-green-800">
                    위치
                  </h4>
                  <p className="text-sm">
                    520 S 5th St, Ames (Walmart에서 도보 5분)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-800">
                    특징
                  </h4>
                  <p className="text-sm">
                    Ames에서 가장 저렴한 식료품점, 유럽 스타일의
                    할인 매장
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-green-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    계란, 우유, 유제품, 신선 야채 등이 다른 매장
                    대비 50% 저렴
                  </p>
                </div>

                <div className="bg-red-100 border-2 border-red-500 rounded p-4">
                  <h4 className="font-bold mb-2 text-red-800 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    필수 주의사항!
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="bg-white rounded p-2">
                      <p className="font-semibold text-red-700">
                        🪙 25센트 동전 필수
                      </p>
                      <p className="text-xs">
                        장바구니 사용에 25센트 동전이 필요 (반납
                        시 돌려받음)
                      </p>
                    </div>
                    <div className="bg-white rounded p-2">
                      <p className="font-semibold text-red-700">
                        🛍️ 쇼핑백 지참
                      </p>
                      <p className="text-xs">
                        무료 쇼핑백 제공 안 함 (구매 시 10-15¢)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Fareway */}
            <div className="bg-orange-50 border-2 border-orange-300 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-orange-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Fareway
                </h3>
                <p className="text-orange-100 text-sm">
                  페어웨이 (정육 전문 식료품점)
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    지점 (Locations)
                  </h4>
                  <ul className="text-sm space-y-1">
                    <li>• North Ames: 3619 Stange Rd</li>
                    <li>• East Ames: 619 Burnett Ave</li>
                    <li>• West Ames: 3720 Lincoln Way</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-800">
                    특징
                  </h4>
                  <p className="text-sm">
                    정육 코너가 매우 우수하며, 직원이 직접
                    고기를 잘라줌
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    신선한 정육, 저렴한 가격, 친절한 서비스
                  </p>
                </div>
                <div className="bg-orange-100 border border-orange-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <Bus className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>버스:</strong> CyRide #6 Orange
                      또는 차량 이용 권장
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Asian/Korean Grocery (아시안/한인 마트) */}
      <section className="py-16 bg-gradient-to-b from-accent/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Asian/Korean Grocery (아시안/한인 마트)
            </h2>
            <p className="text-lg text-muted-foreground">
              한국 식료품 및 아시안 식재료 구매처
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Uni-Mart */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Uni-Mart
                </h3>
                <p className="text-yellow-100 text-sm">
                  유니마트 (한국/아시안 식료품점)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-2">
                    캠퍼스타운(Lincoln Way)에 위치한 한인
                    학생들의 필수 장소!
                  </p>
                  <p className="text-sm">
                    김치, 떡, 라면, 만두, 고추장, 된장, 간장,
                    참기름 등 한국 식재료 다수 보유
                  </p>
                </div>
                <div className="bg-white border border-yellow-400 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Lincoln Way, Campustown (도보 가능)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Asia Foods Store */}
            <div className="bg-teal-50 border-2 border-teal-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-teal-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Asia Foods Store
                </h3>
                <p className="text-teal-100 text-sm">
                  아시아 푸드 스토어
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    다양한 아시안 식재료 판매 (중국, 일본, 한국
                    식품)
                  </p>
                </div>
                <div className="bg-teal-100 border border-teal-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>Lincoln Way</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Ames Asian Market West */}
            <div className="bg-indigo-50 border-2 border-indigo-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-indigo-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Ames Asian Market West
                </h3>
                <p className="text-indigo-100 text-sm">
                  에임스 아시안 마켓 웨스트
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    아시안 식재료 및 한국 라면, 냉동 만두 등
                    판매
                  </p>
                </div>
                <div className="bg-indigo-100 border border-indigo-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span>Dotson Dr</span>
                  </p>
                </div>
              </div>
            </div>

            {/* C Fresh Market */}
            <div className="bg-pink-50 border-2 border-pink-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-pink-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  C Fresh Market
                </h3>
                <p className="text-pink-100 text-sm">
                  씨 프레시 마켓 (아시안 대형 마트)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <h4 className="font-semibold mb-2 text-pink-800">
                    위치
                  </h4>
                  <p className="text-sm">
                    Des Moines 소재 (차량 필수, Ames에서 약
                    40분)
                  </p>
                </div>
                <div>
                  <p className="text-sm">
                    아시안 식품이 가장 다양하고 풍부한 대형
                    아시안 마트
                  </p>
                </div>
                <div className="bg-pink-100 border border-pink-400 rounded p-3">
                  <p className="text-xs font-semibold text-pink-800">
                    💡 Tip: 차가 있는 친구와 함께 방문 추천!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Weee! Info Box */}
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-400 rounded-lg p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <Smartphone className="w-8 h-8 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Weee! 배달 앱 (한국 식료품 배송)
                </h3>
                <p className="text-sm mb-3">
                  Uni-Mart에 없는 특정 한국 과자나 특산물을
                  배달로 받을 수 있는 앱입니다. 친구들과 함께
                  주문하면 최소 주문 금액을 맞추고 배송비를 나눌
                  수 있어요!
                </p>
                <div className="bg-white rounded p-3">
                  <p className="text-xs">
                    <strong>다운로드:</strong> iOS/Android App
                    Store에서 "Weee!" 검색 |{" "}
                    <strong>웹사이트:</strong>{" "}
                    <a
                      href="https://www.sayweee.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      sayweee.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Bulk/Membership Stores (창고형 매장) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Bulk/Membership Stores (창고형 매장)
            </h2>
            <p className="text-lg text-muted-foreground">
              대량 구매 시 저렴한 창고형 할인 매장
            </p>
            <div className="mt-4 bg-blue-100 border border-blue-300 rounded-lg p-4 inline-block">
              <p className="text-sm font-semibold text-blue-800">
                💡 창고형 매장은 비교적 저렴한 가격으로 주유가
                가능함
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sam's Club */}
            <div className="bg-blue-50 border-2 border-blue-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-blue-700 text-white p-6">
                <h3 className="text-3xl font-bold mb-1">
                  Sam's Club
                </h3>
                <p className="text-blue-100">
                  샘스클럽 (Walmart 계열 창고형 매장)
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    멤버십 필수
                  </h4>
                  <p className="text-sm">
                    연회비: $30-$60 (등급에 따라 상이)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    자체 브랜드
                  </h4>
                  <p className="text-sm">
                    Member's Mark (품질 좋고 가격 저렴)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-800">
                    추천 품목
                  </h4>
                  <p className="text-sm">
                    대용량 쌀, 고기, 스낵, 음료, 생활용품, 주유
                  </p>
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>교통:</strong> Ames 외곽 지역,
                      차량 필수
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Costco */}
            <div className="bg-red-50 border-2 border-red-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-red-700 text-white p-6">
                <h3 className="text-3xl font-bold mb-1">
                  Costco
                </h3>
                <p className="text-red-100">
                  코스트코 (대형 창고형 할인매장)
                </p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    멤버십 필수
                  </h4>
                  <p className="text-sm">
                    연회비: $60 (Gold Star) / $120 (Executive)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    자체 브랜드
                  </h4>
                  <p className="text-sm">
                    Kirkland Signature (높은 품질의 자체 브랜드)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-red-800">
                    추천 품목
                  </h4>
                  <p className="text-sm">
                    한국 쌀, 냉동 만두, 고기, 해산물, 전자제품,
                    피자, 주유
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-500 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    한국 학생 꿀팁!
                  </h4>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-green-800 mb-1">
                      🇰🇷 한국 코스트코 카드 미국에서도 사용
                      가능!
                    </p>
                    <p className="text-xs">
                      한국에서 사용하던 코스트코 회원권이
                      미국에서도 그대로 사용됩니다. 코스트코
                      멤버십은 전 세계 공통입니다!
                    </p>
                  </div>
                </div>

                <div className="bg-red-100 border border-red-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>교통:</strong> Ames 외곽, 차량
                      필수 (선배나 친구와 함께 방문 추천)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Budget/Thrift (가성비/중고 매장) */}
      <section className="py-16 bg-gradient-to-b from-accent/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Budget/Thrift (가성비/중고 매장)
            </h2>
            <p className="text-lg text-muted-foreground">
              저렴한 가격으로 생필품 및 중고 물품 구매
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Goodwill */}
            <div className="bg-amber-50 border-2 border-amber-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-amber-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Goodwill
                </h3>
                <p className="text-amber-100 text-sm">
                  굿윌 (중고 물품 판매점)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    중고 의류, 가구, 주방용품, 책, 전자제품 등을
                    저렴한 가격에 판매
                  </p>
                </div>
                <div className="bg-amber-100 border border-amber-300 rounded p-3">
                  <p className="text-xs font-semibold text-amber-800">
                    <strong>버스:</strong> CyRide #1 Red 또는
                    차량 이용 권장
                  </p>
                </div>
              </div>
            </div>

            {/* Dollar General */}
            <div className="bg-lime-50 border-2 border-lime-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-lime-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Dollar General
                </h3>
                <p className="text-lime-100 text-sm">
                  달러 제너럴 (초저가 생활용품점)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    $1-$5 사이의 저렴한 생필품, 스낵, 청소용품,
                    문구류 판매
                  </p>
                </div>
                <div className="bg-lime-100 border border-lime-300 rounded p-3">
                  <p className="text-xs font-semibold text-lime-800">
                    <strong>버스:</strong> CyRide #1 Red 또는
                    차량 이용 권장
                  </p>
                </div>
              </div>
            </div>

            {/* Dollar Tree */}
            <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-emerald-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Dollar Tree
                </h3>
                <p className="text-emerald-100 text-sm">
                  달러 트리 (균일가 $1.25 매장)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    모든 제품이 $1.25 균일가! 생활용품, 장난감,
                    파티 용품, 간단한 주방용품 판매
                  </p>
                </div>
                <div className="bg-emerald-100 border border-emerald-300 rounded p-3">
                  <p className="text-xs font-semibold text-emerald-800">
                    <strong>버스:</strong> CyRide #1 Red 또는
                    차량 이용 권장
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Tech (전자기기) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-3">
              Tech (전자기기)
            </h2>
            <p className="text-lg text-muted-foreground">
              노트북, 액세서리, 전자제품 구매처
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* ISU Book Store */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg overflow-hidden shadow-lg">
              <div className="bg-gradient-to-r from-primary to-primary/80 text-white p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-xs font-bold">
                    세금 면제!
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">
                  ISU Book Store
                </h3>
                <p className="text-primary-foreground/90 text-sm">
                  아이오와주립대 북스토어
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <p className="text-sm">
                    교재, 문구류, ISU 굿즈, 노트북, 태블릿,
                    전자기기 판매
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-yellow-800">
                    위치
                  </h4>
                  <p className="text-sm">
                    Memorial Union 내부 (캠퍼스 중심부)
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-100 to-green-200 border-2 border-green-500 rounded-lg p-4">
                  <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    엄청난 혜택!
                  </h4>
                  <div className="bg-white rounded p-3">
                    <p className="text-sm font-semibold text-green-800 mb-1">
                      💰 Sales Tax (판매세) 면제!
                    </p>
                    <p className="text-xs">
                      아이오와주립대 북스토어에서 전자기기 구매
                      시 판매세(약 7%)가 면제됩니다. MacBook,
                      iPad 등을 구매하면 수백 달러를 절약할 수
                      있어요!
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Buy */}
            <div className="bg-blue-50 border-2 border-blue-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-blue-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Best Buy
                </h3>
                <p className="text-blue-100 text-sm">
                  베스트바이 (전자제품 전문점)
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    노트북, 태블릿, 카메라, 게임기, TV,
                    스마트폰, 액세서리 등 전자제품 판매
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-800">
                    추천 품목
                  </h4>
                  <p className="text-sm">
                    노트북, 충전기, 헤드폰, 마우스, 키보드, HDMI
                    케이블
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-blue-800">
                    위치
                  </h4>
                  <p className="text-sm">
                    North Grand Mall 근처
                  </p>
                </div>
                <div className="bg-blue-100 border border-blue-300 rounded p-3">
                  <p className="text-xs flex items-start gap-2">
                    <Bus className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>버스:</strong> CyRide #1 Red 또는
                      #2 Green
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Walmart 전자제품 코너 */}
            <div className="bg-slate-50 border-2 border-slate-300 rounded-lg overflow-hidden shadow-md">
              <div className="bg-slate-600 text-white p-5">
                <h3 className="text-2xl font-bold mb-1">
                  Walmart
                </h3>
                <p className="text-slate-100 text-sm">
                  월마트 전자제품 코너
                </p>
              </div>
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-sm">
                    저렴한 전자제품 액세서리 판매 (충전기,
                    케이블, 이어폰 등)
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-800">
                    추천 품목
                  </h4>
                  <p className="text-sm">
                    충전기, USB 케이블, 휴대폰 케이스, 이어폰,
                    마우스
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-1 text-slate-800">
                    장점
                  </h4>
                  <p className="text-sm">
                    Best Buy보다 저렴하지만 제품 종류는 적음
                  </p>
                </div>
                <div className="bg-slate-100 border border-slate-300 rounded p-3">
                  <p className="text-xs font-semibold text-slate-800">
                    💡 Tip: 급하게 필요한 액세서리를 저렴하게
                    구매하기 좋음
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}