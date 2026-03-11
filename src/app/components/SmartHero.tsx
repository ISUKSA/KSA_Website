import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Users, BookOpen } from 'lucide-react';

export function SmartHero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA2NzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="ISU Campus Community"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Welcome to the ISU Korean Student Community.
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Connecting students, sharing information, and building a home in Ames.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#about-ksa">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white gap-2">
              <Users className="w-5 h-5" />
              Join KSA
            </Button>
          </a>
          <Link to="/getting-here">
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 gap-2">
              <BookOpen className="w-5 h-5" />
              Read the New Student Guidebook
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
