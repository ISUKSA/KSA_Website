import { Building2, CheckSquare, CreditCard, AlertTriangle, Smartphone, DollarSign, TrendingUp, Gauge, Shield } from 'lucide-react';

export function BankingGuide() {
  return (
    <section id="banking" className="py-20 bg-gradient-to-b from-accent/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Banking & Money Guide
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            미국에서의 금융 생활을 위한 필수 정보
          </p>
        </div>

        {/* Section 1: 계좌 개설 (Bank Account) */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              계좌 개설
            </h3>
            <p className="text-xl text-muted-foreground">Bank Account</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* 왜 필요한가 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6 text-primary" />
                  왜 필요한가
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-muted-foreground">학비 및 월세 납부</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-muted-foreground">송금 및 입금</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-muted-foreground">해외 결제 수수료 절약</span>
                  </li>
                </ul>
              </div>

              {/* 추천 은행 */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6 text-primary" />
                  추천 은행
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    US Bank
                  </li>
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Chase
                  </li>
                  <li className="flex items-center gap-3 text-foreground font-medium">
                    <span className="w-2 h-2 bg-secondary rounded-full"></span>
                    Wells Fargo
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Highlighted Checklist */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg shadow-lg p-6 border-2 border-primary/30">
              <h4 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <CheckSquare className="w-6 h-6 text-primary" />
                준비물 체크리스트
              </h4>
              <p className="text-sm text-muted-foreground mb-4">Required Documents</p>

              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">여권 (Passport)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">I-20</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">주소 (기숙사 주소 가능)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">주소 증빙서류(2개)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckSquare className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">초기 입금 ($25–$100)</span>
                </li>
              </ul>

              <p className="text-xs text-muted-foreground italic">
                *개인에 따라 일부 차이가 있음
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: 신용카드 및 신용점수 */}
        <div className="mb-20">
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-12"></div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              신용카드 및 신용점수
            </h3>
            <p className="text-xl text-muted-foreground">Credit Card & Score</p>
          </div>

          {/* Block A: Intro */}
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-foreground mb-2">개념</h4>
              <p className="text-sm text-muted-foreground">
                카드사에서 먼저 대금을 지불하고 보증하고 고객이 금액을 상환하는 제도
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">필요성</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">금융 혜택:</p>
                    <p className="text-sm text-muted-foreground">
                      높은 신용점수는 추후 자동차 할부, 학자금 대출(Student Loan) 시 낮은 이자율을 보장합니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">생활 편의:</p>
                    <p className="text-sm text-muted-foreground">
                      주거 계약 시 보증금(Deposit)이 줄어들거나 보증인(Guarantor) 요구가 면제될 수 있습니다.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-1">부가 가치:</p>
                    <p className="text-sm text-muted-foreground">
                      점수가 쌓이면 더 좋은 혜택(캐시백, 마일리지)을 가진 프리미엄 카드 발급이 가능해집니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Block B: Card Types Comparison */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Secured Credit Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-primary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <h5 className="text-lg font-bold text-foreground">Secured Credit Card</h5>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  일정 금액의 보증금을 먼저 예치하고 그 한도 내에서 사용하는 카드로, 신용 기록이 전혀 없는 초기에 승인받기 쉽습니다.
                </p>
              </div>

              {/* Student Credit Card */}
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-secondary/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-secondary" />
                  </div>
                  <h5 className="text-lg font-bold text-foreground">Student Credit Card</h5>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  대학생 신분을 증명하면 보증금 없이도 발급 가능한 경우가 많으며, 일반 카드보다 심사 기준이 낮아 유학생에게 가장 보편적인 선택지입니다.
                </p>
              </div>
            </div>

            {/* Alert */}
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
              <p className="text-sm text-foreground">
                <span className="font-semibold">일반 신용카드와의 차이:</span> 일반 카드는 소득과 기존 신용 기록을 엄격히 따지지만, 위 두 유형은 '신용을 쌓기 시작하는 단계'에 최적화되어 있습니다.
              </p>
            </div>
          </div>

          {/* Block C: Score Management */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg shadow-md p-8">
            <div className="flex items-center gap-3 mb-6">
              <Gauge className="w-7 h-7 text-primary" />
              <h4 className="text-2xl font-semibold text-foreground">신용점수 관리</h4>
            </div>

            {/* Score Range Visual */}
            <div className="mb-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-semibold text-foreground">Credit Score Range</span>
                  <span className="text-lg font-bold text-primary">300 - 850</span>
                </div>
                <div className="h-4 bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-500 rounded-full mb-2"></div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>300</span>
                  <span className="font-bold text-primary">700이상 시 좋은 점수</span>
                  <span>850</span>
                </div>
              </div>
            </div>

            {/* 주요 요소 */}
            <div className="mb-6">
              <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                신용점수 결정 주요 요소
              </h5>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <p className="text-sm font-semibold text-foreground">결제 이력</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <p className="text-sm font-semibold text-foreground">카드 사용 비율</p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                  <p className="text-sm font-semibold text-foreground">사용 기간</p>
                </div>
              </div>
            </div>

            {/* 관리 방법 */}
            <div>
              <h5 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                신용 점수 관리 방법
              </h5>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">결제 연체 방지</span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">사용 금액을 한도의 30% 이하로 유지</span>
                </li>
                <li className="flex items-start gap-3 bg-white rounded-lg p-3 shadow-sm">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-muted-foreground">과도한 카드 발급 자제</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: 송금 및 결제 (Payment Apps) */}
        <div className="mb-20">
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-12"></div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              송금 및 결제
            </h3>
            <p className="text-xl text-muted-foreground">Payment Apps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {/* Venmo */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-xl font-bold text-foreground">Venmo</h5>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                한국의 '토스(Toss)'와 유사한 소셜 기반 송금 앱입니다. 친구들과 식사비를 나누거나(Split) 소액 송금을 할 때 가장 대중적으로 사용됩니다.
              </p>
            </div>

            {/* Zelle */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-xl font-bold text-foreground">Zelle</h5>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                별도의 가입 없이 본인의 은행 앱(US Bank, Chase 등) 내에서 바로 사용 가능합니다. 은행 간 직접 송금 방식이라 보안성이 높고 전송 속도가 매우 빠릅니다. (※ 단, 일부 은행의 경우 서비스 이용에 제한이 있을 수 있으니 확인이 필요합니다.)
              </p>
            </div>

            {/* PayPal */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h5 className="text-xl font-bold text-foreground">PayPal</h5>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                온라인 쇼핑 및 해외 결제 시 강력한 '구매자 보호 프로그램'을 제공하여 사기 방지에 유리합니다.
              </p>
            </div>
          </div>

          {/* Warning Note */}
          <div className="bg-amber-50 border-2 border-amber-400 rounded-lg p-6 shadow-md">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-2">주의:</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  주로 개인 간 송금 및 공동 결제에 사용됩니다. 미국 은행 계좌나 직불 카드가 없어도 가입은 가능할 수 있으나, 실제 송금 및 잔액 인출을 위해서는 미국 내 은행 계좌 연동이 필수입니다. 따라서 입국 후 계좌 개설을 최우선으로 권장합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4: 유의사항 및 추천 앱 */}
        <div>
          {/* Section Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent mb-12"></div>

          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              유의사항 및 추천 앱
            </h3>
            <p className="text-xl text-muted-foreground">Warnings & Tools</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column: Warning Box */}
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="w-7 h-7 text-red-600" />
                <h4 className="text-xl font-bold text-foreground">유의사항</h4>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-foreground">잔액 부족 수수료(Overdraft Fee) 주의</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-foreground">결제 연체 방지</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-foreground">계좌 수수료 확인</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-sm text-foreground">계좌 및 카드 정보 보호</span>
                </li>
              </ul>
            </div>

            {/* Right Column: Recommended Apps */}
            <div className="bg-green-50 border-2 border-green-300 rounded-lg p-6 shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="w-7 h-7 text-green-600" />
                <h4 className="text-xl font-bold text-foreground">추천 앱</h4>
              </div>

              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-foreground mb-1">US Bank</h5>
                  <p className="text-xs text-muted-foreground italic">*로그인이 필요합니다.</p>
                </div>

                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <h5 className="font-semibold text-foreground mb-1">Credit Karma</h5>
                  <p className="text-xs text-muted-foreground">지출 관리 및 신용점수 확인에 활용 가능하다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
