import { Facebook, Instagram, Mail } from 'lucide-react';

export function SmartFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-semibold">KSA</span>
              </div>
              <div>
                <div className="text-lg font-semibold">ISU KSA</div>
                <div className="text-sm text-white/70">Iowa State University</div>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-2">
              Connecting students, sharing information, and building a home in Ames.
            </p>
            <p className="text-xs text-white/60">
              학생들을 연결하고, 정보를 공유하며, 에임스에서 집을 만들어갑니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about-ksa" className="hover:text-white transition-colors">
                  About KSA
                </a>
              </li>
              <li>
                <a href="#announcements" className="hover:text-white transition-colors">
                  Announcements (공지사항)
                </a>
              </li>
              <li>
                <a href="#calendar" className="hover:text-white transition-colors">
                  Calendar (캘린더)
                </a>
              </li>
              <li>
                <a href="#jobs" className="hover:text-white transition-colors">
                  Job Postings (취업)
                </a>
              </li>
              <li>
                <a href="#marketplace" className="hover:text-white transition-colors">
                  Marketplace (중고)
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery (갤러리)
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.facebook.com/groups/isuksa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/isuksa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ksa@iastate.edu"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-white/70">
              <p className="mb-1">Memorial Union, Room 3536</p>
              <p className="mb-1">Iowa State University</p>
              <p className="mb-1">Ames, IA 50011</p>
              <p>
                <a href="mailto:ksa@iastate.edu" className="hover:text-white transition-colors">
                  ksa@iastate.edu
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} KSA at Iowa State University. All rights reserved.
            </p>
            <p className="text-xs text-center md:text-right">
              All content managed via Notion, Google Calendar, and Instagram.<br/>
              Zero-code updates for real-time information.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
