import { useState } from 'react';
import { ksaLogoBase64 } from './ksaLogo';
import { Link } from 'react-router-dom';
import { Menu, X, BookOpen, AlertCircle, ChevronDown } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

interface MenuItem {
  label: string;
  href: string;
}

interface NavItem {
  name: string;
  href?: string;
  submenu?: MenuItem[];
}

export function SmartNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      name: 'About Us',
      submenu: [
        { label: '학생회 소개 (About KSA)', href: '#about-ksa' },
        { label: '학교소개 (About ISU)', href: '#about-isu' },
        { label: '갤러리 (Gallery)', href: '#gallery' },
      ],
    },
    {
      name: 'Info',
      submenu: [
        { label: '공지사항', href: '#announcements' },
        { label: '캘린더', href: '#calendar' },
      ],
    },
    {
      name: '게시판',
      submenu: [
        { label: '취업공고 및 중고장터', href: '#jobs' },
      ],
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                <img src={ksaLogoBase64} alt="KSA Logo" className="w-full h-full object-cover" />
              </div>
              <div className="hidden sm:block">
                <div className="text-base font-bold text-foreground">ISU KSA</div>
                <div className="text-xs text-muted-foreground">Iowa State University</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="px-4 py-2 text-foreground hover:text-primary transition-colors flex items-center gap-1 font-medium">
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                
                {item.submenu && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-56 pt-1 z-50">
                  <div className="bg-white border border-border rounded-md shadow-lg py-2">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                  </div>
                )}
              </div>
            ))}
            
            {/* Guidebook - Highlighted */}
            <Link to="/documentation">
              <button className="px-4 py-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1.5 font-medium rounded-md">
                <BookOpen className="w-4 h-4" />
                Guidebook
              </button>
            </Link>
            
            {/* Log In */}
            {/* <button className="px-4 py-2 text-foreground hover:text-primary transition-colors font-medium">
              Log In
            </button> */}
            
            {/* Emergency Contact - Highlighted */}
            <Link to="/emergency">
              <button className="px-4 py-2 bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors flex items-center gap-1.5 font-bold rounded-md">
                <AlertCircle className="w-4 h-4" />
                Emergency Contact
              </button>
            </Link>
          </div>

          {/* Desktop Navigation - Right */}
          <div className="hidden lg:flex items-center gap-3">
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base hover:bg-muted"
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </button>
                {item.submenu && activeDropdown === item.name && (
                  <div className="pl-6 space-y-1">
                    {item.submenu.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-3 py-2 rounded-md text-sm hover:bg-muted"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="space-y-2 pt-4 border-t border-border">
              <Link to="/documentation" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-white gap-2">
                  <BookOpen className="w-4 h-4" />
                  Guidebook
                </Button>
              </Link>
              <button className="w-full text-center py-2 text-muted-foreground hover:text-foreground">
                Log In
              </button>
              <Link to="/emergency" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-destructive hover:bg-destructive/90 text-white gap-2 font-bold">
                  <AlertCircle className="w-4 h-4" />
                  Emergency Contact
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}