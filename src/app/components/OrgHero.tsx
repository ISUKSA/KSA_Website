import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Users, BookOpen } from 'lucide-react';

export function OrgHero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1640456515709-6a8cff434df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBicmljayUyMHVuaXZlcnNpdHklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA2NzkzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Iowa State University Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Welcome to Iowa State University KSA
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Connecting Korean Students, Building Community.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#contact">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Users className="w-5 h-5" />
              Join KSA
            </Button>
          </a>
          <Link to="/getting-here">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 gap-2">
              <BookOpen className="w-5 h-5" />
              Read the Survival Guide
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
