"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoCard } from "@/components/video-card"
import { categories, getAllVideos } from "@/lib/videos-data"
import { Target, Dribbble, Shield, Flame } from "lucide-react"

type FilterType = "all" | "shooting" | "dribbling" | "defense"

const filterConfig = {
  all: { label: "全部", icon: Flame, count: 0 },
  shooting: { label: "投篮", icon: Target, count: 0 },
  dribbling: { label: "运球", icon: Dribbble, count: 0 },
  defense: { label: "防守", icon: Shield, count: 0 }
}

export default function VideosPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all")
  
  const allVideos = getAllVideos()
  
  // Update counts
  filterConfig.all.count = allVideos.length
  filterConfig.shooting.count = categories.find(c => c.id === "shooting")?.videos.length || 0
  filterConfig.dribbling.count = categories.find(c => c.id === "dribbling")?.videos.length || 0
  filterConfig.defense.count = categories.find(c => c.id === "defense")?.videos.length || 0

  const filteredVideos = activeFilter === "all" 
    ? allVideos 
    : allVideos.filter(v => v.categoryId === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          
          {/* Animated Lines */}
          <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-primary/50 to-transparent" />
          <div className="absolute top-10 right-1/3 w-px h-24 bg-gradient-to-b from-primary/30 to-transparent" />
          
          <div className="container mx-auto px-4 relative">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm uppercase tracking-widest mb-6">
                Video Library
              </span>
              <h1 className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-display)] uppercase tracking-wide">
                训练<span className="text-primary">视频库</span>
              </h1>
              <p className="text-muted-foreground mt-6 text-lg">
                精选专业篮球训练视频，涵盖投篮、运球、防守三大核心技能
              </p>
              
              {/* Stats */}
              <div className="flex justify-center gap-8 mt-10">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">
                    {allVideos.length}+
                  </div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">训练视频</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">3</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">技能分类</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary font-[family-name:var(--font-display)]">6+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wider">专业教练</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8 border-y border-border bg-secondary/30 sticky top-16 z-40 backdrop-blur-md">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {(Object.keys(filterConfig) as FilterType[]).map((key) => {
                const config = filterConfig[key]
                const Icon = config.icon
                const isActive = activeFilter === key
                
                return (
                  <button
                    key={key}
                    onClick={() => setActiveFilter(key)}
                    className={`
                      flex items-center gap-2 px-5 py-2.5 rounded-full border transition-all duration-300
                      ${isActive 
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30" 
                        : "bg-secondary/50 border-border hover:border-primary/50 hover:bg-secondary"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{config.label}</span>
                    <span className={`
                      text-xs px-2 py-0.5 rounded-full
                      ${isActive ? "bg-primary-foreground/20" : "bg-muted"}
                    `}>
                      {config.count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* Videos Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Category Info */}
            {activeFilter !== "all" && (
              <div className="mb-10 p-6 bg-secondary/30 rounded-2xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    {activeFilter === "shooting" && <Target className="w-6 h-6 text-primary" />}
                    {activeFilter === "dribbling" && <Dribbble className="w-6 h-6 text-primary" />}
                    {activeFilter === "defense" && <Shield className="w-6 h-6 text-primary" />}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold font-[family-name:var(--font-display)] uppercase">
                      {categories.find(c => c.id === activeFilter)?.title}训练
                      <span className="text-primary ml-2">
                        {categories.find(c => c.id === activeFilter)?.subtitle}
                      </span>
                    </h2>
                    <p className="text-muted-foreground mt-1">
                      {categories.find(c => c.id === activeFilter)?.description}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  categoryId={video.categoryId}
                  categoryTitle={video.categoryTitle}
                />
              ))}
            </div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
              <div className="text-center py-20">
                <div className="w-20 h-20 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4">
                  <Flame className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold">暂无视频</h3>
                <p className="text-muted-foreground mt-2">该分类下还没有训练视频</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
