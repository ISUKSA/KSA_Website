import { Mail, Instagram, Facebook, MapPin, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join our community and stay connected with KSA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email Us</h3>
              <a
                href="mailto:ksa@iastate.edu"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                ksa@iastate.edu
              </a>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visit Us</h3>
              <p className="text-sm text-muted-foreground">
                Memorial Union, Room 3536<br />
                Iowa State University
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Call Us</h3>
              <a
                href="tel:+15152941234"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                (515) 294-1234
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                Join Our Community
              </h3>
              
              <div className="space-y-4">
                <a
                  href="https://www.instagram.com/isuksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                    <Instagram className="w-5 h-5 text-pink-600" />
                    <div className="text-left">
                      <div className="font-medium">Follow us on Instagram</div>
                      <div className="text-sm text-muted-foreground">@isuksa</div>
                    </div>
                  </Button>
                </a>

                <a
                  href="https://www.facebook.com/groups/isuksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <div className="text-left">
                      <div className="font-medium">Join our Facebook Group</div>
                      <div className="text-sm text-muted-foreground">ISU Korean Student Association</div>
                    </div>
                  </Button>
                </a>

                <a
                  href="mailto:ksa@iastate.edu?subject=Membership Inquiry"
                  className="block"
                >
                  <Button variant="outline" className="w-full justify-start gap-3 h-auto py-4">
                    <Mail className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="font-medium">Email for Membership</div>
                      <div className="text-sm text-muted-foreground">ksa@iastate.edu</div>
                    </div>
                  </Button>
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-border text-center">
                <p className="text-sm text-muted-foreground mb-4">
                  Or subscribe to our newsletter for updates
                </p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="bg-primary hover:bg-primary/90">
                    Subscribe
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
