import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'About', path: '/' },
    { label: 'Getting Here', path: '/getting-here' },
    { label: 'Campus Guide', path: '/campus-guide' },
    { label: 'Housing', path: '/housing' },
    { label: 'Transportation', path: '/transportation' },
    { label: 'Life Hacks', path: '/life-hacks' },
    // { label: 'Contact & Emergency', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-4 py-2 rounded transition-colors ${
                    location.pathname === item.path
                      ? 'text-primary bg-accent/50 font-semibold'
                      : 'text-foreground hover:text-primary hover:bg-accent/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://your-external-url.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-4 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
                onClick={() => setIsOpen(false)}
              >
                Join Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}