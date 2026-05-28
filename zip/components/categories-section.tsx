"use client"

import { useState } from "react"
import { CategoryCard } from "./category-card"
import { VideoModal } from "./video-modal"

const categories = [
  {
    id: "shooting",
    title: "投篮",
    subtitle: "Shooting",
    videoCount: 48,
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80",
    videos: [
      {
        id: "s1",
        title: "基础投篮姿势训练",
        duration: "12:30",
        views: "25.6K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
      },
      {
        id: "s2",
        title: "三分线投篮技巧",
        duration: "18:45",
        views: "32.1K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
      },
      {
        id: "s3",
        title: "急停跳投训练",
        duration: "15:20",
        views: "18.9K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
      },
      {
        id: "s4",
        title: "罚球线投篮精准度",
        duration: "10:15",
        views: "21.3K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
      }
    ]
  },
  {
    id: "dribbling",
    title: "运球",
    subtitle: "Dribbling",
    videoCount: 56,
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
    videos: [
      {
        id: "d1",
        title: "基础运球节奏训练",
        duration: "14:00",
        views: "28.7K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
      },
      {
        id: "d2",
        title: "体前变向过人",
        duration: "16:30",
        views: "35.2K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
      },
      {
        id: "d3",
        title: "胯下运球技巧",
        duration: "13:45",
        views: "22.4K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
      },
      {
        id: "d4",
        title: "背后运球进阶",
        duration: "17:20",
        views: "19.8K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
      }
    ]
  },
  {
    id: "defense",
    title: "防守",
    subtitle: "Defense",
    videoCount: 42,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    videos: [
      {
        id: "df1",
        title: "防守站位基础",
        duration: "11:30",
        views: "20.1K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4"
      },
      {
        id: "df2",
        title: "滑步防守训练",
        duration: "14:15",
        views: "26.5K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4"
      },
      {
        id: "df3",
        title: "盖帽时机把握",
        duration: "12:00",
        views: "31.2K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4"
      },
      {
        id: "df4",
        title: "抢断技巧详解",
        duration: "15:45",
        views: "24.8K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
      }
    ]
  }
]

export function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[0] | null>(null)
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)

  const handleCategoryClick = (category: typeof categories[0]) => {
    setSelectedCategory(category)
    setCurrentVideoIndex(0)
  }

  return (
    <section id="categories" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm uppercase tracking-widest">Training Categories</span>
          <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] uppercase mt-4 tracking-wide">
            选择你的<span className="text-primary">训练方向</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            无论你是初学者还是进阶球员，我们都有适合你的训练课程
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              subtitle={category.subtitle}
              videoCount={category.videoCount}
              image={category.image}
              onClick={() => handleCategoryClick(category)}
            />
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={!!selectedCategory}
        onClose={() => setSelectedCategory(null)}
        category={selectedCategory}
        currentVideoIndex={currentVideoIndex}
        setCurrentVideoIndex={setCurrentVideoIndex}
      />
    </section>
  )
}
