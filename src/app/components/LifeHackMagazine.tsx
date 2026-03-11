import { Smartphone, UtensilsCrossed, ShoppingCart, Phone, FileText, Users } from 'lucide-react';

export function LifeHackMagazine() {
  const resources = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Useful Apps',
      titleKr: '유용한 앱',
      items: ['Venmo, Zelle', 'Google Maps', 'MyState App', 'CyRide App'],
      color: 'bg-blue-50 border-blue-200',
    },
    {
      icon: <UtensilsCrossed className="w-8 h-8" />,
      title: 'Local Restaurants',
      titleKr: '현지 음식점',
      items: ['Korean Restaurants', 'Asian Markets', 'Campus Dining', 'Food Delivery'],
      color: 'bg-orange-50 border-orange-200',
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Supermarkets',
      titleKr: '슈퍼마켓',
      items: ['Hy-Vee', 'Walmart', 'Target', 'Asian Food Stores'],
      color: 'bg-green-50 border-green-200',
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: 'Phone Carriers',
      titleKr: '휴대폰 통신사',
      items: ['AT&T', 'Verizon', 'T-Mobile', 'Mint Mobile'],
      color: 'bg-purple-50 border-purple-200',
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Tax Filing Guide',
      titleKr: '세금 신고 가이드',
      items: ['F-1 Student Tax', 'W-2 Forms', 'Tax Software', 'Filing Deadlines'],
      color: 'bg-red-50 border-red-200',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Korean Organizations',
      titleKr: '한인 단체',
      items: ['Korean Church', 'Student Groups', 'Cultural Events', 'Social Networks'],
      color: 'bg-yellow-50 border-yellow-200',
    },
  ];

  return (
    <section id="life-hacks" className="py-20 bg-gradient-to-b from-white to-accent/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Life Hack Magazine
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            생활 정보 - 캠퍼스 생활을 위한 필수 정보
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg border-2 ${resource.color} p-6 hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-primary">
                  {resource.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{resource.title}</h3>
                  <p className="text-sm text-muted-foreground">{resource.titleKr}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="mt-4 text-sm text-primary hover:text-primary/80 font-medium">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Additional Resources */}
        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-semibold mb-3">Need More Information?</h3>
          <p className="text-muted-foreground mb-6">
            더 많은 정보가 필요하신가요?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#join"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Join Our Community
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
