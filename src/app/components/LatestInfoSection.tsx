import { Bell, Newspaper, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function LatestInfoSection() {
  return (
    <section id="announcements" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Latest Info & News
          </h2>
          <p className="text-muted-foreground">
            최신 공지사항 및 소식
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: Announcements (Notion Embed Container) */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-primary" />
                  공지사항 (Announcements)
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Notion
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Official announcements from KSA board
              </p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for Notion Embed */}
              <div className="min-h-[400px] bg-muted/30 p-6">
                <div className="space-y-4">
                  {/* Mock Notion-style list items */}
                  <div className="border-l-4 border-primary pl-4 py-3 bg-white rounded-r">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-foreground">
                        📢 Spring 2026 Officer Elections Open
                      </span>
                      <span className="text-xs text-muted-foreground">2/15</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Applications are now open for all executive positions...
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-secondary pl-4 py-3 bg-white rounded-r">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-foreground">
                        🎉 Cultural Night Save the Date - March 20
                      </span>
                      <span className="text-xs text-muted-foreground">2/12</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Mark your calendars for our biggest event of the year...
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-muted pl-4 py-3 bg-white rounded-r">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-foreground">
                        📚 New Student Orientation - February 18
                      </span>
                      <span className="text-xs text-muted-foreground">2/10</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Welcome session for incoming Korean students...
                    </p>
                  </div>

                  <div className="border-l-4 border-muted pl-4 py-3 bg-white rounded-r">
                    <div className="flex items-start justify-between mb-1">
                      <span className="font-medium text-foreground">
                        💰 Membership Dues Payment Reminder
                      </span>
                      <span className="text-xs text-muted-foreground">2/8</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Please submit your membership dues by February 28...
                    </p>
                  </div>
                </div>
                
                {/* Developer Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-900 font-mono">
                    🔧 Developer Note: Replace this container with Notion page embed.<br/>
                    Example: &lt;iframe src="https://notion.so/[page-id]"&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: Community News (Notion Embed Container) */}
          <Card className="border-2 border-secondary/20">
            <CardHeader className="bg-secondary/10">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-secondary-foreground" />
                  소식게시판 (Community News)
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Notion
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Community updates and member posts
              </p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for Notion Embed */}
              <div className="min-h-[400px] bg-muted/30 p-6">
                <div className="space-y-4">
                  {/* Mock Notion-style list items */}
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs">
                        SK
                      </div>
                      <div>
                        <p className="font-medium text-sm">Sarah Kim</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      🎓 Successfully defended my thesis today! Thank you KSA for all the support over the years!
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center text-xs">
                        DP
                      </div>
                      <div>
                        <p className="font-medium text-sm">David Park</p>
                        <p className="text-xs text-muted-foreground">5 hours ago</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      🍜 Anyone want to carpool to Asian Market this weekend? DM me!
                    </p>
                  </div>

                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-xs">
                        EL
                      </div>
                      <div>
                        <p className="font-medium text-sm">Emily Lee</p>
                        <p className="text-xs text-muted-foreground">1 day ago</p>
                      </div>
                    </div>
                    <p className="text-sm text-foreground">
                      📸 Cultural Night photo album is now live! Check it out on our Instagram!
                    </p>
                  </div>
                </div>
                
                {/* Developer Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-900 font-mono">
                    🔧 Developer Note: Replace this container with Notion page embed.<br/>
                    Example: &lt;iframe src="https://notion.so/[page-id]"&gt;&lt;/iframe&gt;
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
