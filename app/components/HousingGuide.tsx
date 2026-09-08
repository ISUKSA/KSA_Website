import { Building2, Home, Building, MapPin, AlertTriangle, FileText, CheckSquare, ExternalLink, Bus, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export function HousingGuide() {
  // PASTE YOUR WEBSITE LINKS HERE
  const propertyManagers = [
    { name: 'West End Living', url: 'https://www.westendames.com/' }, // Replace with actual URL
    { name: 'Social West', url: 'https://thesocialwestames.com/?gad_source=1&gad_campaignid=15784109261' }, // Replace with actual URL
    { name: 'Hunziker', url: 'https://www.hunziker.com/' }, // Replace with actual URL
    { name: 'The Foundry', url: 'https://www.foundrystudentliving.com/' }, // Replace with actual URL
    { name: 'RES Properties', url: 'https://www.resproperties.com/' }, // Replace with actual URL
  ];

  const searchWebsites = [
    { name: 'Zillow', url: 'https://www.zillow.com' },
    { name: 'Apartments.com', url: 'https://www.apartments.com' },
    { name: 'ApartmentList', url: 'https://www.apartmentlist.com' },
    { name: 'RentCafe', url: 'https://www.rentcafe.com' },
    { name: 'Facebook Marketplace', url: 'https://www.facebook.com/marketplace', warning: true },
  ];

  return (
    <section id="housing" className="py-20 bg-gradient-to-b from-accent/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Housing Guide
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            주거 가이드 - 숙소찾기
          </p>
        </div>


        {/* On-Campus Housing Deep Dive Section */}
        <div className="mt-20">
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-12"></div>

          {/* Section Header & Introduction */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              On-Campus Housing / 교내 기숙사
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              교내 기숙사는 Iowa State University에서 운영하며 대부분 캠퍼스 내에 위치해 있어 수업, 식당, 캠퍼스 시설 접근이 편리합니다. 인기 있는 기숙사는 자리가 빠르게 채워지기 때문에, 가능한 한 빨리 신청하는 것이 좋습니다. 또한, 원하는 생활 스타일이나 성향에 맞는 룸메이트를 직접 구해 함께 입주하는 방법도 고려해 보시기 바랍니다.
            </p>
            <a
              href="https://housing.iastate.edu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
            >
              <span className="font-semibold">Visit ISU Housing Official Site</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          {/* Residence Hall Information Section */}
          <div className="mb-12">
            <div className="text-center mb-8">
              <h4 className="text-2xl font-semibold text-foreground mb-3">
                Residence Hall Information / 기숙사 정보
              </h4>
              <p className="text-base text-muted-foreground">
                각 기숙사별 세부 정보는 학교 웹사이트를 통해 간편하게 확인 및 비교할 수 있습니다.
              </p>
            </div>

            {/* Visual Card for Dorm Info */}
            <div className="bg-white rounded-lg shadow-md p-8 border-2 border-primary/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-xl font-semibold text-foreground">
                  각 기숙사 정보
                </h5>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                각 residence hall의 상세 정보, 평면도, 편의시설 및 비용은 ISU Housing Portal을 통해 확인할 수 있습니다.
                각 기숙사는 고유의 특징과 커뮤니티 분위기를 가지고 있으니, 본인의 학습 스타일과 생활 방식에 맞는 곳을 선택하세요.
              </p>
              <a
                href="https://www.housing.iastate.edu/halls-and-apartments/?pageNum=4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg hover:bg-primary/90 transition-colors shadow-sm hover:shadow-md"
              >
                <span className="font-semibold">View All Residence Halls</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Things to Consider Section */}
          <div className="mb-12">
            <h4 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Things to consider / 고려 사항
            </h4>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Item 1 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">기숙사 종류</p>
                    <p className="text-xs text-muted-foreground">Apartment/Hall/Suite</p>
                  </div>
                </div>
              </div>

              {/* Item 2 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">비용</p>
                    <p className="text-xs text-muted-foreground">Cost</p>
                  </div>
                </div>
              </div>

              {/* Item 3 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">위치</p>
                    <p className="text-xs text-muted-foreground">Location (distance from facilities and buildings)</p>
                  </div>
                </div>
              </div>

              {/* Item 4 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">겨울방학 기간 거주 가능 여부</p>
                    <p className="text-xs text-muted-foreground">Open during Winter Break</p>
                  </div>
                </div>
              </div>

              {/* Item 5 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">에어컨</p>
                    <p className="text-xs text-muted-foreground">Air-Conditioned</p>
                  </div>
                </div>
              </div>

              {/* Item 6 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">학식 강제성 여부</p>
                    <p className="text-xs text-muted-foreground">Meal Plan Requirement</p>
                  </div>
                </div>
              </div>

              {/* Item 7 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">주방 여부</p>
                    <p className="text-xs text-muted-foreground">Kitchenette</p>
                  </div>
                </div>
              </div>

              {/* Item 8 */}
              <div className="bg-white rounded-lg shadow-sm p-5 border border-muted hover:shadow-md transition-shadow">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-foreground mb-1">가구 옵션</p>
                    <p className="text-xs text-muted-foreground">Furnishings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="mt-6 text-center bg-amber-50 border-l-4 border-amber-400 p-4 rounded">
              <p className="text-sm text-foreground italic mb-3">
                학교 <a
                  href="https://iastate.starrezhousing.com/StarRezPortalX/7BC9910D/1/1/Home-Home?UrlToken=3E5D6136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:underline"
                >
                  Housing Portal
                </a>을 통해 희망하는 기숙사를 신청하세요. 신청 취소 및 마감 일정은 반드시 확인하시기 바랍니다.
              </p>
            </div>
          </div>

        {/* Off-Campus Deep Dive Section */}
        <div className="mt-20">
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-12"></div>

          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Off-Campus Housing Guide
            </h3>
            <p className="text-xl text-muted-foreground mb-6">
              교외 거주 상세 가이드
            </p>
            <p className="text-lg text-muted-foreground mb-2">
              Ames 지역의 일반 아파트나 주택을 임대하는 방법과 필수 상식
            </p>
            <p className="text-base text-muted-foreground max-w-3xl mx-auto">
              교외 거주는 대학 기숙사 대신 에임즈(Ames) 지역의 일반 아파트나 주택을 임대하여 생활하는 방식입니다.
              <br />
              많은 학생이 1학년 이후 더 독립적이고 유연한 주거 환경을 위해 선택합니다.
            </p>
          </div>

          {/* Where to Find Apartments */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-foreground mb-3 text-center">
              Where to Find Apartments
            </h4>
            <p className="text-center text-muted-foreground mb-8">
              학생들은 주로 전문 부동산 관리 회사나 렌트 검색 사이트를 활용합니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column: Property Managers */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Building className="w-6 h-6 text-primary" />
                  <h5 className="text-xl font-semibold text-foreground">
                    Property Managers
                  </h5>
                </div>
                <p className="text-sm text-muted-foreground mb-4">부동산 관리 회사</p>
                <ul className="space-y-2 mb-4">
                  {propertyManagers.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <a 
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline hover:text-primary/80 transition-colors"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  Ames 지역의 많은 아파트가 이러한 property manager를 통해 관리됩니다.
                </p>
              </div>

              {/* Right Column: Search Websites */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-secondary" />
                  <h5 className="text-xl font-semibold text-foreground">
                    Search Websites
                  </h5>
                </div>
                <p className="text-sm text-muted-foreground mb-4">렌트 검색 사이트</p>
                <ul className="space-y-2 mb-4">
                  {searchWebsites.map((item, index) => (
                    <li key={index} className="flex items-center gap-2 flex-wrap">
                      <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-yellow-600 hover:underline hover:text-yellow-700 transition-colors"
                      >
                        {item.name}
                      </a>
                      {item.warning && (
                        <span className="text-xs text-red-600 font-semibold">
                          (⚠ 사기주의 / Watch out for scams)
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground italic">
                  여러 아파트를 비교하면서 찾을 수 있는 대표적인 렌트 검색 사이트입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Apartment Types */}
          <div className="mb-16">
            <h4 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Apartment Types
            </h4>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Studio */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-lg font-semibold text-foreground mb-2">Studio</h5>
                <p className="text-sm text-muted-foreground mb-3">원룸</p>
                <p className="text-sm text-muted-foreground">
                  침실, 거실, 부엌 통합
                </p>
              </div>

              {/* Apartment */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-lg font-semibold text-foreground mb-2">Apartment</h5>
                <p className="text-sm text-muted-foreground mb-3">아파트</p>
                <p className="text-sm text-muted-foreground">
                  거실 공유, 개별 방
                </p>
              </div>

              {/* House Rental */}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-primary" />
                </div>
                <h5 className="text-lg font-semibold text-foreground mb-2">House Rental</h5>
                <p className="text-sm text-muted-foreground mb-3">단독 주택</p>
                <p className="text-sm text-muted-foreground">
                  주택 전체 임대
                </p>
              </div>
            </div>
          </div>

          {/* Common Rental Terms */}
          <div className="mb-16">
            <div className="flex items-center justify-center gap-3 mb-8">
              <FileText className="w-6 h-6 text-foreground" />
              <h4 className="text-2xl font-semibold text-foreground text-center">
                Common Rental Terms / 주요 임대 용어 정리
              </h4>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                {/* Deposit */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Deposit</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    보증금. 계약 전 지불하며, 퇴거 시 집 상태에 따라 반환됩니다.
                  </p>
                </div>

                {/* Guarantor / Co-signer */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Guarantor / Co-signer</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    보증인. 현지 신용 기록이 없는 경우 요구될 수 있습니다.
                  </p>
                </div>

                {/* SSN */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">SSN (Social Security Number)</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    사회보장번호. 신분 확인을 위해 SSN을 요구할 수 있습니다.
                  </p>
                </div>

                {/* Credit Score */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Credit Score</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    신용 점수. 신용조회를 위해 요구할 수 있습니다.
                  </p>
                </div>

                {/* Furnished / Unfurnished */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Furnished / Unfurnished</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    가구 포함 / 미포함. 가구의 여부나 상세 가구 구성은 매물에 따라 상이할 수 있습니다.
                  </p>
                </div>

                {/* In-unit Laundry */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">In-unit Laundry</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    세탁기와 건조기가 집 내부에 있는 경우를 의미합니다.
                  </p>
                </div>

                {/* Pet Policy */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Pet Policy</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    반려동물 규정. 반려동물 허용 여부 및 추가 비용 여부를 확인해야 합니다.
                  </p>
                </div>

                {/* Sublease */}
                <div className="border-b border-muted pb-4">
                  <h5 className="text-lg font-bold text-foreground mb-2">Sublease</h5>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    기존 계약자의 남은 기간을 승계하는 방식입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* The Final Checklist */}
          <div className="bg-yellow-50 border-4 border-yellow-400 rounded-lg p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
              <h4 className="text-2xl font-bold text-foreground">The Final Checklist</h4>
            </div>
            
            <div className="bg-yellow-100 border-l-4 border-yellow-600 p-4 mb-6">
              <p className="text-base font-semibold text-foreground">
                ** 가능하면 계약 전에 직접 방문해서 확인하는 것이 좋습니다. **
              </p>
            </div>

            <h5 className="text-lg font-semibold text-foreground mb-4">
              계약 전 확인할 사항 (In-person, 3D room Tour 시)
            </h5>

            <div className="space-y-3">
              {[
                'Lease 기간 (보통 8월부터, 12개월, 상이할 수 있음)',
                'Monthly rent',
                'Utilities 포함 여부 (electricity, water, internet)',
                'Campus까지 교통 접근성 (Cyride 동선)',
                'Laundry in-unit',
                'Pet policy',
                'Parking availability'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-yellow-700 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}