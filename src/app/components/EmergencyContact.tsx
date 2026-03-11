import { Phone, AlertCircle, Mail, MapPin } from 'lucide-react';

export function EmergencyContact() {
  const contacts = [
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: 'Emergency Services',
      titleKr: '긴급 서비스',
      number: '911',
      description: 'Police, Fire, Ambulance',
      descriptionKr: '경찰, 소방, 응급의료',
      urgent: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'ISU Police',
      titleKr: 'ISU 경찰',
      number: '(515) 294-4428',
      description: 'Campus safety and security',
      descriptionKr: '캠퍼스 안전 및 보안',
      urgent: true,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Thielen Student Health',
      titleKr: '학생 건강 센터',
      number: '(515) 294-5801',
      description: 'Medical services for students',
      descriptionKr: '학생 의료 서비스',
      urgent: false,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Student Counseling',
      titleKr: '학생 상담',
      number: '(515) 294-5056',
      description: 'Mental health support',
      descriptionKr: '정신 건강 지원',
      urgent: false,
    },
  ];

  return (
    <footer id="contact" className="bg-gradient-to-b from-accent/30 to-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Emergency Contacts */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Emergency Contacts
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground">
              긴급 연락처 - 중요한 번호들
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contacts.map((contact, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${
                  contact.urgent ? 'border-2 border-primary' : ''
                }`}
              >
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                  contact.urgent ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {contact.icon}
                </div>
                <h3 className="font-semibold mb-1">{contact.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{contact.titleKr}</p>
                <p className="text-xl font-bold text-primary mb-2">{contact.number}</p>
                <p className="text-sm text-muted-foreground">{contact.description}</p>
                <p className="text-sm text-muted-foreground">{contact.descriptionKr}</p>
              </div>
            ))}
          </div>
        </div>

        {/* KSA Contact Info */}
        <div className="bg-primary text-primary-foreground rounded-lg p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Contact ISU KSA</h3>
            <p className="text-primary-foreground/90">ISU KSA에 연락하세요</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <p className="text-primary-foreground/90">ksa@iastate.edu</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-primary-foreground/90">Memorial Union, ISU Campus</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xl font-semibold text-primary mb-1">ISU KSA</p>
              <p className="text-sm text-muted-foreground">
                Iowa State University Korean Student Association
              </p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Instagram
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Facebook
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                KakaoTalk
              </a>
            </div>
          </div>
          
          <div className="text-center mt-8 text-sm text-muted-foreground">
            <p>© 2026 ISU Korean Student Association. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
