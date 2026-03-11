import { Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function CalendarSection() {
  return (
    <section id="calendar" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            KSA Calendar
          </h2>
          <p className="text-muted-foreground">
            캘린더 - Events, meetings, and important dates
          </p>
        </div>

        <Card className="border-2 border-primary/20">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                캘린더 (Calendar)
              </CardTitle>
              <Badge variant="secondary" className="gap-1">
                <ExternalLink className="w-3 h-3" />
                Google Calendar
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">
              Subscribe to stay updated on all KSA events
            </p>
          </CardHeader>
          <CardContent className="p-0">
            {/* Placeholder for Google Calendar Embed */}
            <div className="min-h-[600px] bg-white p-6">
              {/* Mock Calendar Grid */}
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-semibold">February 2026</h3>
                <div className="flex gap-2">
                  <button className="px-3 py-1 text-sm border rounded hover:bg-muted">Today</button>
                  <button className="px-3 py-1 text-sm border rounded hover:bg-muted">← Prev</button>
                  <button className="px-3 py-1 text-sm border rounded hover:bg-muted">Next →</button>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-2">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="text-center text-sm font-semibold text-muted-foreground p-2">
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-2">
                {/* Week 1 */}
                {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                  <div key={day} className="aspect-square border rounded-lg p-2 hover:bg-muted/50 cursor-pointer">
                    <div className="text-sm font-medium mb-1">{day}</div>
                    {day === 2 && (
                      <div className="text-xs bg-blue-100 text-blue-700 rounded px-1 py-0.5 mb-1 truncate">
                        Study Group
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Week 2 */}
                {[8, 9, 10, 11, 12, 13, 14].map((day) => (
                  <div key={day} className="aspect-square border rounded-lg p-2 hover:bg-muted/50 cursor-pointer">
                    <div className="text-sm font-medium mb-1">{day}</div>
                    {day === 12 && (
                      <div className="text-xs bg-green-100 text-green-700 rounded px-1 py-0.5 mb-1 truncate">
                        New Student
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Week 3 */}
                {[15, 16, 17, 18, 19, 20, 21].map((day) => (
                  <div key={day} className="aspect-square border rounded-lg p-2 hover:bg-muted/50 cursor-pointer">
                    <div className="text-sm font-medium mb-1 text-primary font-semibold">
                      {day === 17 ? `${day} Today` : day}
                    </div>
                    {day === 15 && (
                      <div className="text-xs bg-purple-100 text-purple-700 rounded px-1 py-0.5 mb-1 truncate">
                        Elections
                      </div>
                    )}
                    {day === 18 && (
                      <div className="text-xs bg-orange-100 text-orange-700 rounded px-1 py-0.5 mb-1 truncate">
                        Orientation
                      </div>
                    )}
                    {day === 20 && (
                      <div className="text-xs bg-blue-100 text-blue-700 rounded px-1 py-0.5 mb-1 truncate">
                        Workshop
                      </div>
                    )}
                  </div>
                ))}
                
                {/* Week 4 */}
                {[22, 23, 24, 25, 26, 27, 28].map((day) => (
                  <div key={day} className="aspect-square border rounded-lg p-2 hover:bg-muted/50 cursor-pointer">
                    <div className="text-sm font-medium mb-1">{day}</div>
                    {day === 28 && (
                      <div className="text-xs bg-red-100 text-red-700 rounded px-1 py-0.5 mb-1 truncate">
                        Dues Due
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Upcoming Events List */}
              <div className="mt-6 pt-6 border-t">
                <h4 className="font-semibold mb-4">Upcoming Events</h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 bg-primary/5 rounded-lg">
                    <div className="w-12 h-12 bg-primary text-white rounded flex flex-col items-center justify-center">
                      <div className="text-xs">FEB</div>
                      <div className="text-lg font-bold">20</div>
                    </div>
                    <div>
                      <p className="font-medium">Career Workshop: Resume Building</p>
                      <p className="text-sm text-muted-foreground">2:00 PM - Gerdin Business Building</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg">
                    <div className="w-12 h-12 bg-secondary text-secondary-foreground rounded flex flex-col items-center justify-center">
                      <div className="text-xs">MAR</div>
                      <div className="text-lg font-bold">05</div>
                    </div>
                    <div>
                      <p className="font-medium">K-Pop Dance Workshop</p>
                      <p className="text-sm text-muted-foreground">7:00 PM - State Gym, Dance Studio</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Developer Note */}
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-xs text-blue-900 font-mono">
                  🔧 Developer Note: Replace this container with Google Calendar embed.<br/>
                  Example: &lt;iframe src="https://calendar.google.com/calendar/embed?src=[calendar-id]"&gt;&lt;/iframe&gt;<br/>
                  Add to settings: height="600" style="border: 0" width="100%"
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
