import { Briefcase, ShoppingCart, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';

export function OpportunitiesSection() {
  return (
    <section id="jobs" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Opportunities & Marketplace
          </h2>
          <p className="text-muted-foreground">
            취업공고 및 중고장터
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: Job Postings (Notion Table Embed Container) */}
          <Card className="border-2 border-primary/20">
            <CardHeader className="bg-primary/5">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  취업공고 (Job Postings)
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Notion Table
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Job opportunities shared by community members
              </p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for Notion Table Embed */}
              <div className="min-h-[500px] bg-muted/30 p-6">
                {/* Mock Notion Table */}
                <div className="bg-white rounded-lg overflow-hidden border">
                  <table className="w-full">
                    <thead className="bg-muted">
                      <tr>
                        <th className="text-left text-xs font-semibold text-muted-foreground p-3">
                          Company
                        </th>
                        <th className="text-left text-xs font-semibold text-muted-foreground p-3">
                          Role
                        </th>
                        <th className="text-left text-xs font-semibold text-muted-foreground p-3">
                          Deadline
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr className="hover:bg-muted/30">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-xs font-semibold">
                              JD
                            </div>
                            <div>
                              <p className="text-sm font-medium">John Deere</p>
                              <p className="text-xs text-muted-foreground">Ames, IA</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Software Engineer Intern</p>
                          <Badge className="mt-1 text-xs" variant="secondary">Internship</Badge>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Mar 1</p>
                          <Badge className="mt-1 text-xs bg-orange-100 text-orange-700">2 weeks left</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-xs font-semibold">
                              PI
                            </div>
                            <div>
                              <p className="text-sm font-medium">Principal Financial</p>
                              <p className="text-xs text-muted-foreground">Des Moines, IA</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Data Analyst</p>
                          <Badge className="mt-1 text-xs" variant="secondary">Full-time</Badge>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Feb 28</p>
                          <Badge className="mt-1 text-xs bg-red-100 text-red-700">1 week left</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-xs font-semibold">
                              IS
                            </div>
                            <div>
                              <p className="text-sm font-medium">ISU Research</p>
                              <p className="text-xs text-muted-foreground">Ames, IA</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Research Assistant</p>
                          <Badge className="mt-1 text-xs" variant="secondary">Part-time</Badge>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Mar 15</p>
                          <Badge className="mt-1 text-xs bg-green-100 text-green-700">4 weeks left</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-muted/30">
                        <td className="p-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center text-xs font-semibold">
                              CO
                            </div>
                            <div>
                              <p className="text-sm font-medium">Collins Aerospace</p>
                              <p className="text-xs text-muted-foreground">Cedar Rapids, IA</p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Mechanical Engineer Co-op</p>
                          <Badge className="mt-1 text-xs" variant="secondary">Co-op</Badge>
                        </td>
                        <td className="p-3">
                          <p className="text-sm">Mar 10</p>
                          <Badge className="mt-1 text-xs bg-green-100 text-green-700">3 weeks left</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Developer Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-900 font-mono">
                    🔧 Developer Note: Replace with Notion database/table embed.<br/>
                    Example: &lt;iframe src="https://notion.so/[database-id]?v=[view-id]"&gt;&lt;/iframe&gt;<br/>
                    Configure table columns: Company, Role, Location, Type, Deadline, Status
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Column 2: Flea Market (Padlet Embed Container) */}
          <Card id="marketplace" className="border-2 border-secondary/20">
            <CardHeader className="bg-secondary/10">
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-secondary-foreground" />
                  중고장터 (Flea Market)
                </CardTitle>
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Padlet
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Buy & sell items within the community
              </p>
            </CardHeader>
            <CardContent className="p-0">
              {/* Placeholder for Padlet Embed */}
              <div className="min-h-[500px] bg-muted/30 p-6">
                {/* Mock Padlet-style corkboard */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 shadow-md transform rotate-1">
                    <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-4xl">
                      🪑
                    </div>
                    <p className="font-semibold text-sm mb-1">Study Desk</p>
                    <p className="text-xs text-muted-foreground mb-2">$30 - Like new</p>
                    <p className="text-xs">Contact: sarah@iastate.edu</p>
                  </div>

                  <div className="bg-pink-50 border-2 border-pink-200 rounded-lg p-4 shadow-md transform -rotate-1">
                    <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-4xl">
                      📚
                    </div>
                    <p className="font-semibold text-sm mb-1">Textbooks</p>
                    <p className="text-xs text-muted-foreground mb-2">$50 - Math 165/166</p>
                    <p className="text-xs">Contact: david@iastate.edu</p>
                  </div>

                  <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 shadow-md transform rotate-2">
                    <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-4xl">
                      🚲
                    </div>
                    <p className="font-semibold text-sm mb-1">Bike</p>
                    <p className="text-xs text-muted-foreground mb-2">$80 - Great condition</p>
                    <p className="text-xs">Contact: emily@iastate.edu</p>
                  </div>

                  <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 shadow-md transform -rotate-2">
                    <div className="w-full h-32 bg-gray-200 rounded mb-2 flex items-center justify-center text-4xl">
                      💻
                    </div>
                    <p className="font-semibold text-sm mb-1">Monitor</p>
                    <p className="text-xs text-muted-foreground mb-2">$120 - 24" Dell</p>
                    <p className="text-xs">Contact: michael@iastate.edu</p>
                  </div>
                </div>
                
                {/* Developer Note */}
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-xs text-blue-900 font-mono">
                    🔧 Developer Note: Replace with Padlet board embed.<br/>
                    Example: &lt;iframe src="https://padlet.com/embed/[board-id]"&gt;&lt;/iframe&gt;<br/>
                    Alternative: Link to KakaoTalk or Discord marketplace channel.<br/>
                    Consider adding "Post Item" button that opens Padlet or messaging app.
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
