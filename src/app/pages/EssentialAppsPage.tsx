import { Smartphone, BookOpen, Shield, Home, Utensils, Bus, Briefcase, Mail, Calendar, AlertCircle, CheckCircle, Map, PhoneCall, Heart, Languages } from 'lucide-react';
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

      {/* Tech Warning - CRITICAL */}
      <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 border-4 border-orange-500 rounded-lg overflow-hidden">
            <div className="bg-orange-600 text-white p-8">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-12 h-12 flex-shrink-0" />
                <div>
                  <h2 className="text-3xl font-bold mb-2">⚠️ STOP! Read Before You Download</h2>
                  <p className="text-orange-100 text-lg">
                    다운로드하기 전에 꼭 읽어주세요!
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              <div className="bg-white rounded-lg border-2 border-orange-300 p-6">
                <h3 className="text-xl font-bold mb-3 text-orange-800">The Problem:</h3>
                <p className="text-lg leading-relaxed mb-3">
                  <span className="font-semibold text-orange-700">US Apps (Venmo, US Bank) will NOT appear in the Korean App Store.</span>
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  미국 앱(Venmo, US Bank 등)은 한국 앱 스토어에서 검색되지 않습니다.
                </p>
              </div>

              <div className="bg-red-50 rounded-lg border-2 border-red-400 p-6">
                <h3 className="text-xl font-bold mb-3 text-red-800 flex items-center gap-2">
                  <AlertCircle className="w-6 h-6" />
                  The Golden Rule:
                </h3>
                <p className="text-lg leading-relaxed mb-3 font-semibold text-red-700">
                  Do NOT change your main account's region! You will be locked out of the Korean Store for 365 days.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  절대로 기존 계정의 국가를 변경하지 마세요! 한국 앱 스토어에서 365일 동안 차단됩니다.
                </p>
              </div>

              <div className="bg-green-50 rounded-lg border-2 border-green-400 p-6">
                <h3 className="text-xl font-bold mb-3 text-green-800 flex items-center gap-2">
                  <CheckCircle className="w-6 h-6" />
                  The Solution:
                </h3>
                <p className="text-lg leading-relaxed mb-3 font-semibold text-green-700">
                  Create a BRAND NEW Google/Apple account just for the US. Sign into it as a 'Secondary Account' on your phone to download US apps safely.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  미국 전용 새 Google/Apple 계정을 만드세요. '보조 계정'으로 로그인하여 미국 앱을 안전하게 다운로드하세요.
                </p>

                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Step-by-Step:</h4>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Create a new email (e.g., yourname.usa@gmail.com)</li>
                    <li>Make a new Apple ID or Google account with US as the region</li>
                    <li>On your phone, add this as a secondary account</li>
                    <li>Switch to the US account only when downloading US-only apps</li>
                    <li>Switch back to your Korean account for Korean apps</li>
                  </ol>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded p-4">
                <p className="text-sm text-blue-800">
                  <span className="font-semibold">💡 Pro Tip:</span> Most Korean students keep both accounts logged in and switch between them as needed. This way, you can access both Korean and US apps without any restrictions!
                </p>
                <p className="text-xs text-blue-700 mt-2">
                  대부분의 한국 유학생들은 두 계정을 모두 로그인 상태로 유지하고 필요에 따라 전환합니다. 이렇게 하면 한국 앱과 미국 앱 모두 제한 없이 사용할 수 있습니다!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin & Academics - TOP PRIORITY */}
      <section className="py-16 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Admin & Academics</h2>
              <p className="text-muted-foreground">University Administration Tools · 대학 행정 도구</p>
            </div>
          </div>

          <div className="mb-8 bg-red-600 text-white rounded-lg p-6">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-8 h-8 flex-shrink-0" />
              <p className="font-semibold text-lg">
                ⚠️ DOWNLOAD THESE FIRST! You cannot start the semester without them.
              </p>
            </div>
            <p className="text-red-100 text-sm mt-2">
              먼저 다운로드하세요! 이것 없이는 학기를 시작할 수 없습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Workday - CRITICAL */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-4 border-red-500 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">CRITICAL</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Workday</h3>
                    <p className="text-white/90">The "Brain" of ISU</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🧠</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed font-semibold text-red-700 mb-3">
                    The "Brain" of ISU. Use this to Register for Classes, Pay Tuition, and View Financial Aid.
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    ISU의 "두뇌"입니다. 수업 등록, 등록금 납부, 재정 지원 확인에 사용합니다.
                  </p>
                </div>

                <div className="bg-white border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Key Functions:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-medium">Register for Classes</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-medium">Pay Tuition</span> and view bills</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-medium">View Financial Aid</span> status</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-medium">Manage Student Records</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-600">•</span>
                      <span><span className="font-medium">View Tax Documents</span> (1098-T)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border-2 border-red-400 rounded p-3">
                  <p className="text-sm text-red-800 font-semibold">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Download this immediately. You cannot start the semester without it.
                  </p>
                  <p className="text-xs text-red-700 mt-1">
                    즉시 다운로드하세요. 이것 없이는 학기를 시작할 수 없습니다.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>

            {/* Outlook */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-blue-300">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">REQUIRED</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Outlook</h3>
                    <p className="text-white/90">University Email</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📧</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed">
                    <span className="font-semibold text-primary">Official University Communication.</span> All professors and ISU administration will ONLY email this address.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    대학 공식 커뮤니케이션. 모든 교수님과 대학 행정실에서 이 주소로만 이메일을 보냅니다.
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Your ISU Email:</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    <span className="font-mono bg-white px-2 py-1 rounded">netid@iastate.edu</span>
                  </p>
                  <p className="text-xs text-muted-foreground">
                    (Your NetID is assigned during registration)
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-sm text-orange-800">
                    <span className="font-semibold">💡 Tip:</span> Professors and ISU Admin will ONLY email this address. Check it daily!
                  </p>
                  <p className="text-xs text-orange-700 mt-1">
                    교수님과 행정실은 이 주소로만 이메일을 보냅니다. 매일 확인하세요!
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>

            {/* Navigate Student */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-green-300">
              <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Navigate Student</h3>
                    <p className="text-white/90">Academic Advising</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📅</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed">
                    Schedule appointments with your <span className="font-semibold text-primary">Academic Advisor</span> to plan your classes and degree requirements.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    지도교수님과 상담 일정을 잡아 수업 및 학위 요건을 계획합니다.
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Schedule advising appointments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Track degree progress</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Get class recommendations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Connect with support services</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Tip:</span> Book your advisor meeting early - slots fill up fast before registration!
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Secret Shortcut - Microsoft Dashboard */}
          <div className="mt-12 bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-400 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">🔑</span>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  The Secret Shortcut
                  <span className="px-3 py-1 bg-purple-600 text-white rounded-full text-xs font-semibold">TIME SAVER</span>
                </h3>
                <p className="text-muted-foreground mb-4">Microsoft Dashboard · 마이크로소프트 대시보드</p>
                
                <div className="bg-white rounded-lg p-6 mb-4">
                  <p className="leading-relaxed mb-3">
                    Bookmark <span className="font-mono bg-purple-100 px-3 py-1 rounded font-semibold text-purple-700">iastate.edu/signons</span> - It is a single dashboard that auto-logs you into Canvas, Workday, and Outlook so you don't have to sign in 3 times!
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-mono bg-purple-100 px-2 py-1 rounded">iastate.edu/signons</span>를 북마크하세요. Canvas, Workday, Outlook에 자동으로 로그인되어 3번 로그인할 필요가 없습니다!
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-white rounded-lg p-3 text-center">
                    <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold">One Login</p>
                    <p className="text-xs text-muted-foreground">한 번만 로그인</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold">Access Everything</p>
                    <p className="text-xs text-muted-foreground">모든 것 접속</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center">
                    <CheckCircle className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                    <p className="text-sm font-semibold">Save Time</p>
                    <p className="text-xs text-muted-foreground">시간 절약</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Daily Life Apps */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Smartphone className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Daily Life</h2>
              <p className="text-muted-foreground">Essential Apps for Campus · 일상 필수 앱</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* MyState */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary rounded-lg overflow-hidden">
              <div className="bg-primary text-primary-foreground p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">MUST HAVE</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">MY</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">MyState</h3>
                    <p className="text-primary-foreground/90">The Official ISU App</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>✨</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed mb-3">
                    <span className="font-semibold text-primary">MyState</span> is your all-in-one campus companion. This app is essential for getting around campus and managing your daily life at ISU.
                  </p>
                </div>

                <div className="bg-white border border-primary/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Bus className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">CyRide Bus Tracker</p>
                        <p className="text-muted-foreground">Real-time bus locations and arrival times</p>
                        <p className="text-xs text-muted-foreground mt-1">실시간 버스 위치 및 도착 시간</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Utensils className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Dining Center Menus</p>
                        <p className="text-muted-foreground">Daily menus for all campus dining halls</p>
                        <p className="text-xs text-muted-foreground mt-1">모든 식당 메뉴 확인</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <Home className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Laundry Tracker</p>
                        <p className="text-muted-foreground">Check machine availability in your dorm</p>
                        <p className="text-xs text-muted-foreground mt-1">세탁기 사용 가능 여부 확인</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded p-3">
                  <p className="text-sm text-green-800">
                    <span className="font-semibold">💡 Pro Tip:</span> Set up your favorite bus routes in the app so you can quickly check arrival times between classes.
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded p-3">
                  <p className="text-sm text-primary">
                    <span className="font-semibold">🏈 Fun Fact - Kickoff Keys:</span> Use the app during football games to join the tradition of shaking keys on 3rd downs!
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    미식축구 경기 중 3번째 다운에서 키를 흔드는 전통에 참여하세요!
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>

            {/* GET Mobile */}
            <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-2 border-secondary rounded-lg overflow-hidden">
              <div className="bg-secondary text-secondary-foreground p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Utensils className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">GET Mobile</h3>
                    <p className="text-secondary-foreground/90">Dining & Food Orders</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🍽️</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed mb-3">
                    Manage your meal plan, check your Dining Dollars balance, and order food for pickup from campus dining locations.
                  </p>
                </div>

                <div className="bg-white border border-secondary/20 rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Key Features:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <div>
                        <p className="font-medium">Meal Plan Balance</p>
                        <p className="text-muted-foreground">Track your meal swipes and Dining Dollars</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <div>
                        <p className="font-medium">Mobile Ordering</p>
                        <p className="text-muted-foreground">Order ahead for quick pickup</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <div>
                        <p className="font-medium">Nutrition Info</p>
                        <p className="text-muted-foreground">View nutritional information for menu items</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary">•</span>
                      <div>
                        <p className="font-medium">Transaction History</p>
                        <p className="text-muted-foreground">See where you've been spending</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-sm text-orange-800">
                    <span className="font-semibold">💡 Note:</span> You'll need to link your ISU Card to the app when you first set it up.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic & Security */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Academic & Security</h2>
              <p className="text-muted-foreground">For Classes & Login · 수업 및 보안</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Canvas */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">REQUIRED</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Canvas Student</h3>
                    <p className="text-white/90">Learning Management System</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>📚</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed">
                    Canvas is ISU's official learning management system. All your homework, assignments, grades, and class announcements will be posted here.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Canvas는 ISU의 공식 학습 관리 시스템입니다. 모든 과제, 성적, 공지사항이 여기에 게시됩니다.
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Access course materials and syllabus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Submit homework and assignments</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Check grades and feedback</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Discussion boards and group projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Calendar with assignment due dates</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="text-sm text-red-800">
                    <span className="font-semibold">⚠️ Important:</span> Check Canvas daily! Professors post important updates and assignment changes here.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>

            {/* Okta Verify / Duo Mobile */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur rounded-full text-sm font-semibold">REQUIRED</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Okta Verify / Duo</h3>
                    <p className="text-white/90">2-Factor Authentication</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span>🔒</span> What It Does
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">기능</p>
                  <p className="text-sm leading-relaxed">
                    Required 2-Factor Authentication (2FA) to log into any ISU website, including Canvas, email, AccessPlus, and more.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    Canvas, 이메일, AccessPlus 등 모든 ISU 웹사이트에 로그인하기 위해 필요한 2단계 인증 앱입니다.
                  </p>
                </div>

                <div className="bg-accent rounded-lg p-4">
                  <h4 className="font-semibold mb-2">How It Works:</h4>
                  <ol className="space-y-2 text-sm list-decimal list-inside">
                    <li>Download the app (Okta Verify or Duo Mobile)</li>
                    <li>Link it to your ISU NetID during setup</li>
                    <li>Every time you log in, approve the request in the app</li>
                    <li>You can also use push notifications or codes</li>
                  </ol>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded p-3">
                  <p className="text-sm text-blue-800">
                    <span className="font-semibold">💡 Tip:</span> Set this up immediately after getting your ISU NetID. You can't access anything without it!
                  </p>
                  <p className="text-xs text-blue-700 mt-1">
                    NetID를 받자마자 바로 설정하세요. 이것 없이는 아무것도 접속할 수 없습니다!
                  </p>
                </div>

                <div className="bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-sm text-orange-800">
                    <span className="font-semibold">⚠️ Note:</span> ISU may use either Okta Verify or Duo Mobile. Check your ISU email for which one to download.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-4 py-2 text-sm font-medium">
                    📱 iOS
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-4 py-2 text-sm font-medium">
                    🤖 Android
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safety */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Safety</h2>
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
                  <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center">
                    <Shield className="w-10 h-10 text-red-600" />
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

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="bg-accent rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span>🌙</span> When to Use SafeRide
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">SafeRide를 사용해야 할 때</p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Late night study sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Bad weather (snow, ice, cold)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Missed the bus after hours</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary">•</span>
                        <span>Coming back from late events</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent rounded-lg p-6">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <span>📱</span> Emergency Contacts
                    </h4>
                    <p className="text-xs text-muted-foreground mb-3">긴급 연락처</p>
                    <div className="space-y-2 text-sm">
                      <div className="bg-white rounded p-3">
                        <p className="font-medium">ISU Police (Emergency)</p>
                        <p className="text-primary font-semibold">(515) 294-4428</p>
                      </div>
                      <div className="bg-white rounded p-3">
                        <p className="font-medium">SafeRide Direct</p>
                        <p className="text-primary font-semibold">(515) 294-4444</p>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        All contacts are pre-programmed in the app
                      </p>
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

                <div className="flex gap-3">
                  <div className="bg-black text-white rounded-lg px-6 py-3 text-sm font-medium flex-1 text-center">
                    📱 iOS App Store
                  </div>
                  <div className="bg-green-600 text-white rounded-lg px-6 py-3 text-sm font-medium flex-1 text-center">
                    🤖 Google Play
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Download Checklist */}
      <section className="py-16 bg-gradient-to-b from-accent/30 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Navigation Pro Tip */}
          <div className="mb-12 bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-300 rounded-lg p-8">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                <Map className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                  Navigation Pro Tip
                  <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-semibold">FOR WAYFINDING</span>
                </h3>
                <p className="text-muted-foreground mb-4">길찾기 꿀팁</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-6 border-2 border-primary">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white font-bold">MY</span>
                      </div>
                      <h4 className="font-semibold text-lg">MyState Maps</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                      Good for finding building names
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Shows all ISU buildings with official names and codes
                    </p>
                  </div>

                  <div className="bg-white rounded-lg p-6 border-2 border-green-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">G</span>
                      </div>
                      <h4 className="font-semibold text-lg">Google Maps</h4>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <CheckCircle className="w-4 h-4 inline text-green-600 mr-1" />
                      Better for walking directions
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Best for step-by-step navigation and off-campus locations
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-blue-600 text-white rounded-lg p-4">
                  <p className="text-sm">
                    <span className="font-semibold">💡 Recommended:</span> Use MyState to find building codes (e.g., "Carver 0001"), then switch to Google Maps for walking directions!
                  </p>
                  <p className="text-xs text-blue-100 mt-2">
                    건물 코드를 찾을 때는 MyState를, 길찾기는 Google Maps를 사용하세요!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>✅</span> Quick Download Checklist
            </h2>
            <p className="mb-6">빠른 다운로드 체크리스트</p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-3">Day 1 (Download First):</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>MyState</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>Okta Verify / Duo Mobile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>Canvas Student</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h3 className="font-semibold mb-3">Week 1 (Download Soon):</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>GET Mobile</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>SafeRide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>☐</span> <span>Weee! (for Korean groceries)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contacts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
              <PhoneCall className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold">Emergency Contacts</h2>
              <p className="text-muted-foreground">Important Numbers to Save · 중요한 연락처</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card A: Immediate Danger (Red) */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-400 rounded-lg overflow-hidden">
              <div className="bg-red-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <AlertCircle className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Immediate Danger</h3>
                </div>
                <p className="text-red-100">생명이 위험한 상황</p>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-white rounded-lg border-2 border-red-300 p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">911</span>
                    </div>
                    <h4 className="text-xl font-bold">911</h4>
                  </div>
                  <p className="text-sm font-semibold mb-2">Police, Fire, Ambulance</p>
                  <p className="text-xs text-muted-foreground mb-2">경찰, 소방, 응급의료</p>
                  <p className="text-sm text-red-700 font-medium">
                    ONLY for life-threatening emergencies.
                  </p>
                  <p className="text-xs text-muted-foreground">
                    생명이 위험한 긴급 상황에만 사용하세요.
                  </p>
                </div>

                <div className="bg-white rounded-lg border border-red-200 p-4">
                  <h4 className="font-semibold mb-2">ISU Police</h4>
                  <p className="text-xs text-muted-foreground mb-2">캠퍼스 경찰</p>
                  <p className="text-2xl font-bold text-primary mb-2">(515) 294-4428</p>
                  <p className="text-xs text-muted-foreground">
                    For non-emergency campus safety issues
                  </p>
                  <p className="text-xs text-muted-foreground">
                    응급이 아닌 캠퍼스 안전 문제
                  </p>
                </div>
              </div>
            </div>

            {/* Card B: Medical Sickness (Blue) */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-400 rounded-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Heart className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Medical / Sickness</h3>
                </div>
                <p className="text-blue-100">의료 / 질병</p>
              </div>

              <div className="p-6 space-y-6">
                <div className="bg-white rounded-lg border-2 border-blue-300 p-6">
                  <h4 className="text-lg font-bold mb-2">Thielen Student Health</h4>
                  <p className="text-xs text-muted-foreground mb-3">학생 건강 센터</p>
                  <p className="text-sm mb-3">
                    For flu, injuries, or checkups. Located on campus (Sheldon Ave).
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    감기, 부상, 건강검진. 캠퍼스 내 위치 (Sheldon Ave)
                  </p>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-xs font-semibold mb-1">Phone:</p>
                    <p className="text-lg font-bold text-primary">(515) 294-5801</p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-blue-200 p-4">
                  <h4 className="font-semibold mb-2">First Nurse</h4>
                  <p className="text-xs text-muted-foreground mb-3">무료 24/7 의료 상담</p>
                  <p className="text-sm mb-3">
                    Free 24/7 medical advice hotline. Call here if you aren't sure if you need a doctor.
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    의사가 필요한지 확실하지 않을 때 전화하세요.
                  </p>
                  <div className="bg-blue-50 rounded p-3">
                    <p className="text-lg font-bold text-primary">(515) 294-5801</p>
                    <p className="text-xs text-muted-foreground">Ask for First Nurse</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Card C: Translation Helper (Yellow) */}
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 border-2 border-yellow-400 rounded-lg overflow-hidden">
              <div className="bg-yellow-600 text-white p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Languages className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">Translation Helper</h3>
                </div>
                <p className="text-yellow-100">통역 도움</p>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Show this to Doctor/Police:</h4>
                  <p className="text-xs text-muted-foreground mb-4">
                    의사나 경찰에게 이 문구를 보여주세요
                  </p>
                  
                  <div className="bg-white rounded-lg border-2 border-yellow-400 p-6 mb-4">
                    <div className="bg-yellow-50 rounded p-4 mb-4">
                      <p className="text-sm font-semibold mb-2">English:</p>
                      <p className="leading-relaxed">
                        "I need a Korean translator. Please use a translation service."
                      </p>
                    </div>

                    <div className="bg-yellow-50 rounded p-4">
                      <p className="text-sm font-semibold mb-2">한국어:</p>
                      <p className="leading-relaxed">
                        "한국어 통역이 필요합니다. 통역 서비스를 요청해주세요."
                      </p>
                    </div>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded p-4">
                    <p className="text-xs text-green-800">
                      <CheckCircle className="w-3 h-3 inline mr-1" />
                      <span className="font-semibold">Tip:</span> Take a screenshot of this section and save it to your phone for quick access!
                    </p>
                    <p className="text-xs text-green-700 mt-2">
                      이 섹션을 스크린샷으로 찍어 휴대폰에 저장하면 빠르게 사용할 수 있습니다!
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-yellow-200 p-4">
                  <h4 className="font-semibold mb-2 text-sm">Important Note:</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Most hospitals and police stations have access to translation services. Don't hesitate to ask for a Korean translator.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                    대부분의 병원과 경찰서에는 통역 서비스가 있습니다. 한국어 통역사를 요청하는 것을 주저하지 마세요.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-primary text-primary-foreground rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <span>📱</span> Save These Numbers NOW
            </h3>
            <p className="mb-6">지금 바로 연락처를 저장하세요</p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h4 className="font-semibold mb-3">Life-Threatening:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span>•</span> <span>911 (Emergency)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>•</span> <span>ISU Police: (515) 294-4428</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <h4 className="font-semibold mb-3">Medical Advice:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span>•</span> <span>Thielen Health: (515) 294-5801</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span>•</span> <span>First Nurse (24/7): (515) 294-5801</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}