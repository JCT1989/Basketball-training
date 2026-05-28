"use client"

import { Play } from "lucide-react"

interface CategoryCardProps {
  title: string
  subtitle: string
  videoCount: number
  image: string
  onClick: () => void
}

export function CategoryCard({ title, subtitle, videoCount, image, onClick }: CategoryCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative aspect-[4/5] cursor-pointer overflow-hidden rounded-xl"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

      {/* Diagonal Line Accent */}
      <div className="absolute top-0 right-0 w-32 h-32 overflow-hidden">
        <div className="absolute top-8 -right-8 w-40 h-1 bg-primary rotate-45 transform origin-center group-hover:scale-x-150 transition-transform duration-500" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-4">
          <span className="text-primary text-sm uppercase tracking-widest">{subtitle}</span>
          <h3 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] uppercase mt-2 tracking-wide">
            {title}
          </h3>
          <p className="text-muted-foreground mt-2">{videoCount} 个训练视频</p>

          {/* Play Button */}
          <div className="mt-4 flex items-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
            </div>
            <span className="uppercase text-sm tracking-wider">进入学习</span>
          </div>
        </div>
      </div>

      {/* Border Animation */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-xl transition-colors duration-500" />
    </div>
  )
}
