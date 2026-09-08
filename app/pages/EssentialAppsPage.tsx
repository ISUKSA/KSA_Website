import { Smartphone, BookOpen, Shield, Shirt, Utensils, Bus, Briefcase, Mail, Calendar, AlertCircle, CheckCircle, Map, PhoneCall, Heart, Languages, MessageSquare, Car, ShoppingBag, CreditCard, ShieldCheck, GraduationCap, Users, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export function EssentialAppsPage() {
  return (
    <div className="pt-16 bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/getting-here" className="text-primary-foreground/80 hover:text-primary-foreground text-sm mb-4 inline-block">
            ← Back to Getting Here
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Digital Survival Kit</h1>
          <p className="text-xl text-primary-foreground/90 mb-2">Download These Immediately</p>
          <p className="text-lg text-primary-foreground/80">
            필수 앱 다운로드
          </p>
        </div>
      </section>

      {/* Tech Warning - CRITICAL - KEEP THIS SECTION */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-4 border-orange-500 rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">다운로드하기 전에 꼭 읽어주세요!</h2>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="bg-white rounded-lg border-2 border-orange-300 p-6">
                <p className="text-lg leading-relaxed mb-3">
                  <span className="font-semibold text-orange-700">                  
                    미국 앱(Venmo, US Bank 등)들중에는 한국 앱 스토어에서 검색되지 않는 앱들도 존재합니다.
                  </span>
                </p>
              </div>

              <div className="bg-red-50 rounded-lg border-2 border-red-400 p-6">
                <p className="text-lg leading-relaxed mb-3 font-semibold text-red-700">
                  구글 플레이 스토어의 경우 국가를 변경하면 180일(약 6개월) 동안 재변경이 어렵지만, 애플 앱 스토어는 국가 변경 시 기존 구독 항목 등을 정리해야 합니다                
                </p>
              </div>

              <div className="bg-green-50 rounded-lg border-2 border-green-400 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  The Solution:
                </h3>
                <p className="text-lg leading-relaxed mb-3 font-semibold text-green-700">
                  기존 계정은 그대로 두고, 필요한 국가의 계정을 하나 더 만드는 것을 추천드립니다.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  앱스토어에서 필요한 앱을 받은 후, 다시 원래 한국 계정으로 로그인해도 앱 업데이트 및 사용에 지장이 없습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 학교 관련 앱 (Campus Life & Academics) */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">학교 관련 앱</h2>
              <p className="text-muted-foreground">University Administration & Academic Tools · Campus Life & Academics</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* MyState */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-primary/20">
                  <img src="https://play-lh.googleusercontent.com/q-S4-W91JAkBumnxUA53LAUsZeRatj9GV2CRc2XzcH66tHrP5LvshFlEH7DBUMpwOos" alt="MyState logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">MyState</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                시간표 조회, Cyride 실시간 정보, 학식 메뉴 + 다이닝 운영 여부, 학교 이벤트, 박람회 정보, 도서관 자료 대출, 지도, 학교 뉴스, 사진첩, 동아리 정보, Testing Center 정보.
              </p>
            </div>

            {/* Get Mobile */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-secondary/30">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-secondary/20">
                  <img src="https://play-lh.googleusercontent.com/5Siz9Oo-DnJUyL8_RlQbRkGAhwfcbPcxIXyvwIh8O1O7lCdAD4-EfUiPc0xxbssrVg" alt="Get Mobile logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Get Mobile</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                밀플랜/Dining Dollars 잔액 및 내역 확인, 학식 온라인 주문 (일부 학식만).
              </p>
              <p className="text-xs text-amber-600 font-semibold">결제 수단 필요</p>
            </div>

            {/* Speed Queen */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-blue-200">
                  <img src="https://play-lh.googleusercontent.com/Kr7AhewaYJ9nBOfXfza3ShSaRg5ZZFwJUrPkhBoGhAxdfTPdCorKIhaXemiws4uN1Q" alt="Speed Queen logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Speed Queen</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                기숙사 세탁기, 건조기 사용 및 결제.
              </p>
              <p className="text-xs text-amber-600 font-semibold">결제 수단 필요</p>
            </div>

            {/* ISU VPN */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-purple-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-purple-200">
                  <img src="https://it.wustl.edu/app/uploads/2024/04/20240304-Cisco-AnyConnect-Upgrade-Pilot-WashU-IT-mgerst-Image-2.png" alt="ISU VPN logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">ISU VPN</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                캠퍼스 밖에서도 대학 네트워크에 안전하게 접속해야 할 때 사용.
              </p>
            </div>

            {/* Canvas */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-orange-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-orange-200">
                  <img src="https://assets.topadvisor.com/media/_solution_logo_03202023_46576647.png" alt="Canvas logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Canvas</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                강의 자료 확인, 과제 확인 및 제출.
              </p>
            </div>

            {/* Outlook */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-blue-200">
                  <img src="https://static.vecteezy.com/system/resources/previews/060/587/623/non_2x/rectangle-microsoft-outlook-new-icon-logo-symbol-free-png.png" alt="Outlook logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Outlook</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                학교 이메일 확인/작성, 일정/캘린더 관리.
              </p>
            </div>

            {/* Workday */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-green-200">
                  <img src="https://www.bowdoin.edu/workday/images/wd-logo.png" alt="Workday logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Workday</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-2">
                수강 신청 및 수업 정보, 학비 및 행정 정보, 교내 근로 급여 및 서류 관리.
              </p>
              <p className="text-xs text-blue-600 italic">Note: 앱보다는 웹사이트 사용이 더 일반적</p>
            </div>

            {/* Microsoft Authenticator */}
            <div className="bg-white rounded-lg shadow-md p-6 border-2 border-indigo-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-indigo-200">
                  <img src="https://play-lh.googleusercontent.com/_1CV99jklLbXuun-6E7eCPR-sKKeZc602rhw_QHZz-qm7xrPdgWsJVc7NtFkkliI8No" alt="Microsoft Authenticator logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Microsoft Authenticator</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                학교 계정 보안 인증.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: 커뮤니케이션 & SNS (Communication) */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">커뮤니케이션 & SNS</h2>
              <p className="text-muted-foreground">Communication</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* GroupMe */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg shadow-md p-6 border-2 border-blue-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-blue-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/GroupMe_gradient_logo.svg/250px-GroupMe_gradient_logo.svg.png" alt="GroupMe logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">GroupMe</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                메신저앱. 기숙사에서 많이 사용되며 그룹 채팅에 적합.
              </p>
            </div>

            {/* WhatsApp */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg shadow-md p-6 border-2 border-green-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-green-200">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/960px-WhatsApp.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="WhatsApp logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">WhatsApp</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                전 세계적으로 사용되는 무료 문자/전화 앱.
              </p>
            </div>

            {/* Snapchat */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-lg shadow-md p-6 border-2 border-yellow-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-yellow-200">
                  <img src="data:image/png;base64,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" alt="Snapchat logo" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold">Snapchat</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                메시지 자동 삭제 기능, 사진/영상 중심 소통, 스토리 및 streak 문화, 위치 공유 기능.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: 데일리 라이프 (Daily Life Services) */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-12">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">데일리 라이프</h2>
              <p className="text-muted-foreground">Daily Life Services</p>
            </div>
          </div>

          {/* Sub-section: 이동 서비스 (Rideshare) */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Car className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">이동 서비스 (Rideshare)</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Uber */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-gray-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-gray-200">
                    <img src="https://via.placeholder.com/48" alt="Uber logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Uber</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  기사 수가 많아 차량 호출이 용이함 (한국의 카카오택시 포지션).
                </p>
              </div>

              {/* Lyft */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-pink-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-pink-200">
                    <img src="https://via.placeholder.com/48" alt="Lyft logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Lyft</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uber와 유사하며 경우에 따라 더 저렴함 (Ames → Des Moines 구간 등).
                </p>
              </div>
            </div>

            {/* Tip Box */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-blue-800">
                <span className="font-semibold">💡 Tip:</span> 두 앱 모두 가격과 대기시간이 다르므로 비교 후 이용 추천.
              </p>
            </div>
          </div>

          {/* Sub-section: 음식 배달 (Food Delivery) */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">음식 배달 (Food Delivery)</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* DoorDash */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-red-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-red-200">
                    <img src="https://via.placeholder.com/48" alt="DoorDash logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">DoorDash</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  DashPass 구독 시 배달비 무료 및 수수료 할인 (학생용 할인 제공).
                </p>
              </div>

              {/* Uber Eats */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-green-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-green-200">
                    <img src="https://via.placeholder.com/48" alt="Uber Eats logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Uber Eats</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Uber와 연동되며 프로모션이 자주 있음 (학생용 Uber One 할인 제공).
                </p>
              </div>
            </div>
          </div>

          {/* Sub-section: 쇼핑 서비스 (Shopping) */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShoppingBag className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-semibold">쇼핑 서비스 (Shopping)</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Amazon */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-orange-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-orange-200">
                    <img src="https://via.placeholder.com/48" alt="Amazon logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Amazon</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Prime Student 가입 시 무료 및 빠른 배송, 거의 모든 상품 구매 가능.
                </p>
              </div>

              {/* Walmart App */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center overflow-hidden bg-white border-2 border-blue-200">
                    <img src="https://via.placeholder.com/48" alt="Walmart App logo" className="w-full h-full object-cover" />
                  </div>
                  <h4 className="text-xl font-bold">Walmart App</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  지점별 재고 및 매장 내 물품 위치 확인 가능, 픽업/배달 가능.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Safety & Emergency - KEEP THIS */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Safety & Emergency</h2>
              <p className="text-muted-foreground">Stay Safe on Campus · 안전</p>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg overflow-hidden">
              <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">MUST DOWNLOAD</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden border-2 border-white/20">
                    <img src="https://via.placeholder.com/64" alt="Iowa State Safe logo" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Iowa State Safe</h3>
                    <p className="text-white/90">Official Safety App</p>
                  </div>
                </div>
              </div>

              <div className="p-8 space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-lg">
                    <span>🛡️</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="leading-relaxed font-semibold text-red-700 mb-3">
                    The only safety app you need. Includes SafeRide, Emergency Alerts, and Virtual Escorts.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    필요한 유일한 안전 앱입니다. SafeRide, 긴급 알림, 가상 에스코트가 포함되어 있습니다.
                  </p>
                </div>

                <div className="bg-white rounded-lg border-2 border-red-300 p-6">
                  <h4 className="font-semibold mb-4 text-lg">Key Features:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚗</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">SafeRide Request</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Request a <span className="font-medium text-primary">free ride home</span> directly through this app (6:00 PM – 5:30 AM).
                        </p>
                        <p className="text-xs text-muted-foreground">
                          앱을 통해 직접 무료 귀가 서비스를 요청하세요 (오후 6시 - 오전 5시 30분)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">👥</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">Friend Walk</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Send your location to a friend so they can <span className="font-medium text-primary">watch you walk home in real-time</span> on a map.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          친구에게 위치를 전송하여 실시간으로 귀가하는 모습을 지도에서 확인할 수 있습니다
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🚨</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">Mobile Blue Light</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          Turn your phone into an <span className="font-medium text-primary">emergency beacon</span> that instantly shares your location with ISU Police.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          휴대폰을 긴급 신호로 전환하여 ISU 경찰에게 즉시 위치를 공유합니다
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">📞</span>
                      </div>
                      <div>
                        <p className="font-semibold text-lg mb-1">Emergency Contacts</p>
                        <p className="text-sm text-muted-foreground mb-2">
                          <span className="font-medium text-primary">One-touch dialing</span> for 911 and Campus Police.
                        </p>
                        <p className="text-xs text-muted-foreground">
                          911 및 캠퍼스 경찰을 원터치로 전화 걸기
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <p className="text-sm text-green-800 mb-2">
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    <span className="font-semibold">💡 Important:</span> Download this app as soon as you arrive. Set it up before you need it - your safety is the priority!
                  </p>
                  <p className="text-xs text-green-700">
                    도착하자마자 이 앱을 다운로드하세요. 필요하기 전에 설정하세요 - 여러분의 안전이 최우선입니다!
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
