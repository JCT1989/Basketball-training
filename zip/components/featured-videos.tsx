"use client"

import { Play, Clock, TrendingUp } from "lucide-react"

const featuredVideos = [
  {
    id: 1,
    title: "乔丹式后仰跳投教学",
    category: "投篮",
    duration: "22:15",
    views: "128K",
    image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80"
  },
  {
    id: 2,
    title: "艾弗森式Crossover解析",
    category: "运球",
    duration: "18:30",
    views: "95K",
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=600&q=80"
  },
  {
    id: 3,
    title: "NBA级别防守移动训练",
    category: "防守",
    duration: "25:00",
    views: "76K",
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=600&q=80"
  },
  {
    id: 4,
    title: "欧洲步上篮技巧全解",
    category: "进攻",
    duration: "16:45",
    views: "112K",
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=600&q=80"
  }
]

export function FeaturedVideos() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="text-primary text-sm uppercase tracking-widest flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trending Now
            </span>
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] uppercase mt-4 tracking-wide">
              热门<span className="text-primary">训练视频</span>
            </h2>
          </div>
          <button className="mt-4 md:mt-0 text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors">
            查看全部 →
          </button>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVideos.map((video, index) => (
            <div
              key={video.id}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Play className="w-6 h-6 text-primary-foreground ml-1" />
                  </div>
                </div>
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 px-2 py-1 bg-background/80 rounded text-xs flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
                {/* Rank Badge for first item */}
                {index === 0 && (
                  <div className="absolute top-2 left-2 px-3 py-1 bg-primary text-primary-foreground rounded text-xs font-bold uppercase">
                    Top 1
                  </div>
                )}
              </div>

              {/* Info */}
              <div>
                <span className="text-xs text-primary uppercase tracking-wider">{video.category}</span>
                <h3 className="text-base font-semibold mt-1 group-hover:text-primary transition-colors line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">{video.views} 次观看</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
