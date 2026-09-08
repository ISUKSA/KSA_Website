export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            About ISU KSA
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            우리는 누구인가요?
          </p>
        </div>

        <div className="space-y-6 text-center">
          <p className="text-lg leading-relaxed text-foreground">
            The Iowa State University Korean Student Association (ISU KSA) is a student-run organization dedicated to supporting Korean and Korean-American students as they navigate university life.
          </p>
          <p className="text-lg leading-relaxed text-foreground">
            아이오와 주립대학교 한인학생회는 한국인 및 한인 학생들이 대학 생활에 적응할 수 있도록 돕는 학생 주도 조직입니다.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="p-6 bg-accent rounded-lg">
              <div className="text-4xl mb-3">🤝</div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-muted-foreground">
                Connect with fellow Korean students and build lasting friendships
              </p>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <div className="text-4xl mb-3">🎓</div>
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">
                Get guidance on academics, housing, and campus resources
              </p>
            </div>
            <div className="p-6 bg-accent rounded-lg">
              <div className="text-4xl mb-3">🌟</div>
              <h3 className="font-semibold mb-2">Culture</h3>
              <p className="text-sm text-muted-foreground">
                Celebrate Korean culture through events and activities
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
