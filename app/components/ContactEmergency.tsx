import {
  Shield,
  Phone,
  Heart,
  MapPin,
  AlertTriangle,
  Clock,
  Building2,
  Mail,
  Smartphone,
  Instagram,
  Facebook,
  MessageCircle,
  ArrowLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export function ContactEmergency() {
  const navigate = useNavigate();
  return (
    <section
      id="contact-emergency"
      className="min-h-screen bg-gradient-to-b from-accent/30 to-white"
    >
      {/* Top Alert Banner - CRUCIAL */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 shadow-lg sticky top-0 z-10 px-[16px] py-[24px]">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1.5 text-white/80 hover:text-white mb-3 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Main</span>
          </button>
          <div className="text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
              <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
            </div>
            <p className="text-white font-bold text-xl sm:text-2xl md:text-3xl">
              모든 긴급한 상황은 911에 전화하는 것이 좋습니다.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-[32px] py-[100px]">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Contact & Emergency
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            긴급 연락처
          </p>
        </div>

        {/* Card 1: ISU Police */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border-l-8 border-blue-600">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                ISU Police
              </h3>
              <p className="text-lg text-muted-foreground">
                학교 경찰서
              </p>
            </div>
          </div>

          {/* Phone Number - MASSIVE */}
          <div className="bg-blue-50 rounded-lg p-6 mb-6 text-center border-2 border-blue-200">
            <p className="text-sm text-muted-foreground mb-2">
              전화번호
            </p>
            <a
              href="tel:515-294-4428"
              className="text-4xl sm:text-5xl font-bold text-blue-600 hover:text-blue-700 transition-colors block"
            >
              (515) 294-4428
            </a>
          </div>

          {/* Highlighted Note */}
          <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-6">
            <p className="text-sm font-semibold text-foreground">
              신고접수시 필요 서류: 신분증(여권, 운전면허증)
            </p>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3 mb-6 p-4 bg-gray-50 rounded-lg">
            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold text-foreground mb-1">
                방문 주소:
              </p>
              <p className="text-sm text-muted-foreground">
                55 Armory 2519 Osborn Drive Ames, IA 50011
              </p>
            </div>
          </div>

          {/* Body Text */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            ISU 캠퍼스 내 범죄를 신고하려면, ISU Police
            Communication Center(515-294-4428)로 전화하여
            경찰관을 현장에 부를 수 있습니다. 또는 Communication
            Center(Armory Building, North Entrance)에 직접
            방문하여 신고하는 것도 가능합니다. 신고 접수를 할
            경우, 신분증(여권, 운전면허증)을 지참하여야 한다는
            점을 안내드립니다.
          </p>
        </div>

        {/* Card 2: Mary Greeley Medical Center Emergency Room */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border-l-8 border-red-600">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Phone className="w-8 h-8 text-red-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Mary Greeley Medical Center
              </h3>
              <p className="text-lg text-muted-foreground">
                응급실 - Emergency Room
              </p>
            </div>
          </div>

          {/* Phone Number - MASSIVE */}
          <div className="bg-red-50 rounded-lg p-6 mb-6 text-center border-2 border-red-200">
            <p className="text-sm text-muted-foreground mb-2">
              전화번호
            </p>
            <a
              href="tel:515-239-2011"
              className="text-4xl sm:text-5xl font-bold text-red-600 hover:text-red-700 transition-colors block"
            >
              (515) 239-2011
            </a>
          </div>

          {/* Body Text */}
          <p className="text-sm text-muted-foreground leading-relaxed">
            Mary Greeley는 암, 심장 치료, 정신 건강, 산부인과,
            정형외과, 가정 건강, 호스피스 치료, 응급 서비스,
            외과 서비스, 뇌졸중 치료, 당뇨병 치료를 포함한
            다양한 입원 및 외래 서비스를 제공합니다.
          </p>
        </div>

        {/* Card 3: Student Counseling Services */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-8 border-l-8 border-green-600">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Heart className="w-8 h-8 text-green-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                Student Counseling Services
              </h3>
              <p className="text-lg text-muted-foreground">
                학생 상담 서비스
              </p>
            </div>
          </div>

          {/* Phone Number - MASSIVE */}
          <div className="bg-green-50 rounded-lg p-6 mb-6 text-center border-2 border-green-200">
            <p className="text-sm text-muted-foreground mb-2">
              전화번호
            </p>
            <a
              href="tel:515-294-5056"
              className="text-4xl sm:text-5xl font-bold text-green-600 hover:text-green-700 transition-colors block"
            >
              (515) 294-5056
            </a>
          </div>

          {/* Operating Hours */}
          <div className="mb-6 space-y-3">
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground mb-2">
                  운영시간:
                </p>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">
                      (학기중)
                    </span>{" "}
                    8:00am ~ 5:00 pm
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">
                      (방학기간)
                    </span>{" "}
                    7:30am ~ 4pm
                  </p>
                </div>
              </div>
            </div>

            {/* Warning - No-Show Fee */}
            <div className="bg-red-50 border-l-4 border-red-500 p-4">
              <p className="text-sm font-semibold text-red-700 mb-1">
                주의사항:
              </p>
              <p className="text-sm text-red-600">
                개인상담, 집단상담, 화상상담 등 다양한 옵션이
                무료로 제공되나, 예약 후 취소 없이 불참 시에는
                $25의 수수료가 부과되니 주의하시기 바랍니다.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
              <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold text-foreground mb-1">
                  위치:
                </p>
                <p className="text-sm text-muted-foreground">
                  센터는 캠퍼스 내 Student Services Building
                  3층에 위치해 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Crisis Block - Mental Health & Suicide Hotline */}
        <div className="bg-gradient-to-br from-purple-900 to-indigo-900 rounded-lg shadow-2xl p-8 text-white">
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">
              24/7 Crisis Support
            </h3>
            <p className="text-lg text-purple-100">
              자살 및 위기 상담
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <div className="text-center mb-4">
              <p className="text-sm text-purple-100 mb-3">
                988 - 자살 및 위기 상담 전화
              </p>
              <a
                href="tel:988"
                className="text-5xl sm:text-6xl font-bold text-white hover:text-purple-200 transition-colors block mb-2"
              >
                988
              </a>
              <p className="text-xs text-purple-200">
                전화 또는 문자
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-white font-semibold mb-1">
                온라인 채팅:
              </p>
              <a
                href="https://988lifeline.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-200 hover:text-white underline"
              >
                988lifeline.org
              </a>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="text-sm text-white font-semibold mb-1">
                Crisis Text Line:
              </p>
              <p className="text-sm text-purple-200">
                문자 "HELLO"를{" "}
                <span className="font-bold text-white">
                  741741
                </span>
                로 보내기
              </p>
            </div>
          </div>

          <div className="bg-red-600/80 backdrop-blur-sm rounded-lg p-4 border-2 border-red-400">
            <p className="text-sm text-white text-center">
              <span className="font-bold">긴급 상황</span>에는{" "}
              <span className="text-2xl font-bold">911</span>로
              바로 전화하실 것을 권유합니다.
            </p>
          </div>
        </div>

        {/* Section Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent my-20"></div>

        {/* Contact ISU KSA Section - Anchor Point */}
        <div id="contact-ksa" className="mb-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-3">
              Contact ISU KSA / 학생회 문의
            </h3>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              학생회에 궁금한 점이나 건의사항이 있다면 아래
              채널로 연락주세요.
            </p>
          </div>

          {/* Contact Grid - 3 Columns */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Box 1: Email */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-primary/20 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Email
              </h4>
              <a
                href="mailto:ksa@iastate.edu"
                className="text-base text-primary hover:text-primary/80 font-semibold hover:underline"
              >
                ksa@iastate.edu
              </a>
            </div>

            {/* Box 2: Office Location */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-secondary/20 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-secondary" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Office Location
              </h4>
              <p className="text-base text-muted-foreground">
                Memorial Union, ISU Campus
              </p>
            </div>

            {/* Box 3: Social Media */}
            <div className="bg-white rounded-lg shadow-md p-6 text-center border-2 border-blue-200 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-7 h-7 text-blue-600" />
              </div>
              <h4 className="text-lg font-bold text-foreground mb-3">
                Follow Us
              </h4>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.instagram.com/isuksa_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >              
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.facebook.com/groups/isuksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://open.kakao.com/o/gXH39OWd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="KakaoTalk"
                >
                  <MessageCircle className="w-5 h-5 text-gray-800" />
                </a>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="text-center bg-accent/30 rounded-lg p-6">
            <p className="text-sm text-muted-foreground font-medium">
              ISU KSA - Iowa State University Korean Student
              Association
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}