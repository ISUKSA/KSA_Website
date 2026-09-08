import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { MapPin } from "lucide-react";

export function CampusGuide() {
  // PASTE YOUR YOUTUBE VIDEO LINK HERE
  // Example: 'https://www.youtube.com/watch?v=VIDEO_ID' or 'https://youtu.be/VIDEO_ID'
  const youtubeUrl =
    "https://youtu.be/h_x0aPoVqB8?si=cqx6Lk2HeIufusoT"; // Replace with actual campus tour video URL

  // Function to convert YouTube URL to embed URL
  const getYouTubeEmbedUrl = (url: string) => {
    if (!url) return "";

    try {
      // Handle different YouTube URL formats
      let videoId = "";

      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0];
      } else if (url.includes("youtube.com/embed/")) {
        videoId = url.split("embed/")[1]?.split("?")[0];
      }

      return videoId
        ? `https://www.youtube.com/embed/${videoId}`
        : "";
    } catch (error) {
      console.error("Error parsing YouTube URL:", error);
      return "";
    }
  };

  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  const locations = [
    {
      name: "Parks Library",
      nameKr: "파크스 도서관",
      description:
        "The main library with extensive study spaces and resources",
      descriptionKr:
        "광범위한 학습 공간과 자료를 갖춘 중앙 도서관",
      image:
        "https://www.lib.iastate.edu/files/styles/width_limit/public/images/2023-07/Parks%20library%20building%201%20-%20reduced%20size.jpg?itok=cRt5f8o6",
    },
    {
      name: "Memorial Union",
      nameKr: "메모리얼 유니언",
      description:
        "Student center with dining, bookstore, and meeting spaces",
      descriptionKr: "식당, 서점 및 회의 공간이 있는 학생 센터",
      image:
        "https://www.mu.iastate.edu/files/images/2024-10/NorthEntrance_Photo1.jpg",
    },
    {
      name: "State Gym",
      nameKr: "스테이트 체육관",
      description:
        "Recreation and fitness facilities for students",
      descriptionKr:
        "학생들을 위한 레크리에이션 및 피트니스 시설",
      image:
        "https://discoverames.com/wp-content/uploads/2022/10/Profile-Picture-State-Gym-1.jpg",
    },
  ];

  return (
    <section id="campus-guide" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Campus Guide
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-muted-foreground">
            캠퍼스 가이드 - 주요 건물 및 장소
          </p>
        </div>

        {/* Key Locations */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={location.image}
                  alt={location.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground p-2 rounded-full">
                  <MapPin className="w-5 h-5" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-1">
                  {location.name}
                </h3>
                <p className="text-sm text-primary mb-3">
                  {location.nameKr}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  {location.description}
                </p>
                <p className="text-sm text-muted-foreground">
                  {location.descriptionKr}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Tour Video */}
        <div className="bg-accent/30 rounded-lg p-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Official Campus Tour
          </h3>
          <p className="text-center text-muted-foreground mb-6">
            공식 캠퍼스 투어 영상
          </p>
          {embedUrl ? (
            <div className="aspect-video bg-muted rounded-lg overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src={embedUrl}
                title="ISU Campus Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
          ) : (
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-primary-foreground"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Campus Tour Video Placeholder
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Paste YouTube URL in the code to display video
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}