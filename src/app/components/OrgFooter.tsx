import { Facebook, Instagram, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function OrgFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-xl font-semibold">KSA</span>
              </div>
              <div>
                <div className="text-lg font-semibold">
                  Korean Student Association
                </div>
                <div className="text-sm text-white/70">
                  Iowa State University
                </div>
              </div>
            </div>
            <p className="text-sm text-white/70 mb-4">
              Connecting Korean Students, Building Community.
            </p>
            <p className="text-sm text-white/70">
              한국 학생들을 연결하고 커뮤니티를 구축합니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <Link to="/getting-here" className="hover:text-white transition-colors">
                  New Student Guide
                </Link>
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
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/isuksa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:ksa@iastate.edu"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-sm text-white/70">
              Memorial Union, Room 3536<br />
              Iowa State University<br />
              Ames, IA 50011
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/70">
          <p className="flex items-center justify-center gap-1">
            © {currentYear} KSA at Iowa State University. Made with{' '}
            <Heart className="w-4 h-4 text-primary fill-primary" /> for our community.
          </p>
        </div>
      </div>
    </footer>
  );
}
