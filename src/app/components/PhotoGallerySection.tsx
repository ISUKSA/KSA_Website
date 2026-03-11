import { Instagram, ExternalLink, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function PhotoGallerySection() {
  return (
    <section id="gallery" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Photo Gallery
          </h2>
          <p className="text-muted-foreground">
            갤러리 - Follow us @isuksa for more!
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Instagram className="w-5 h-5 text-primary" />
                갤러리 (Instagram Feed)
              </CardTitle>
              <div className="flex gap-2">
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Instagram Widget
                </Badge>
                <a
                  href="https://www.instagram.com/isuksa"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600">
                    Follow @isuksa
                  </Badge>
                </a>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Latest moments from our community
            </p>
          </CardHeader>
          <CardContent className="p-0">
            {/* Placeholder for Instagram Feed Widget */}
            <div className="min-h-[500px] bg-white p-6">
              {/* Mock Instagram Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Photo 1 */}
                <div className="relative aspect-square bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="KSA Event"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">142</span>
                    </div>
                  </div>
                </div>

                {/* Photo 2 */}
                <div className="relative aspect-square bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA2NzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Study Group"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">98</span>
                    </div>
                  </div>
                </div>

                {/* Photo 3 */}
                <div className="relative aspect-square bg-gradient-to-br from-orange-400 to-red-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1640456515709-6a8cff434df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBicmljayUyMHVuaXZlcnNpdHklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA2NzkzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">215</span>
                    </div>
                  </div>
                </div>

                {/* Photo 4 */}
                <div className="relative aspect-square bg-gradient-to-br from-green-400 to-emerald-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Celebration"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">187</span>
                    </div>
                  </div>
                </div>

                {/* Photo 5 */}
                <div className="relative aspect-square bg-gradient-to-br from-yellow-400 to-orange-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA2NzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">163</span>
                    </div>
                  </div>
                </div>

                {/* Photo 6 */}
                <div className="relative aspect-square bg-gradient-to-br from-indigo-400 to-purple-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1766466031388-55d6157dbe77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwZXZlbnQlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzA2NzkzMTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Fun times"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">201</span>
                    </div>
                  </div>
                </div>

                {/* Photo 7 */}
                <div className="relative aspect-square bg-gradient-to-br from-pink-400 to-rose-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1640456515709-6a8cff434df9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBicmljayUyMHVuaXZlcnNpdHklMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NzA2NzkzMTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Campus life"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">176</span>
                    </div>
                  </div>
                </div>

                {/* Photo 8 */}
                <div className="relative aspect-square bg-gradient-to-br from-teal-400 to-cyan-400 rounded-lg overflow-hidden group cursor-pointer">
                  <img
                    src="https://images.unsplash.com/photo-1758270704025-0e1a1793e1ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29sbGVnZSUyMHN0dWRlbnRzJTIwZ3JvdXAlMjBzdHVkeWluZ3xlbnwxfHx8fDE3NzA2NzkzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Community"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      <span className="text-sm">124</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <a
                  href="https://www.instagram.com/isuksa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram for more photos
                </a>
              </div>
              
              {/* Developer Note */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-900 font-mono">
                  🔧 Developer Note: Replace with Instagram Feed Widget.<br/>
                  Recommended services: EmbedSocial, SnapWidget, or Taggbox.<br/>
                  Example: &lt;script src="https://embedsocial.com/cdn/ht.js" id="[widget-id]"&gt;&lt;/script&gt;<br/>
                  Configure to show: Latest 8-12 posts from @isuksa, grid layout, auto-refresh.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
