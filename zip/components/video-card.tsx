"use client"

import Image from "next/image"
import Link from "next/link"
import { Play, Clock, Eye } from "lucide-react"
import type { Video } from "@/lib/videos-data"

interface VideoCardProps {
  video: Video
  categoryId: string
  categoryTitle: string
}

export function VideoCard({ video, categoryId, categoryTitle }: VideoCardProps) {
  const levelColors = {
    "初级": "bg-green-500/20 text-green-400 border-green-500/30",
    "中级": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "高级": "bg-red-500/20 text-red-400 border-red-500/30"
  }

  return (
    <Link href={`/videos/${video.id}`}>
      <div className="group relative bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={video.thumbnail}
            alt={video.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
          
          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300 shadow-lg shadow-primary/30">
              <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 px-2 py-1 bg-background/80 backdrop-blur-sm rounded text-xs font-medium flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {video.duration}
          </div>

          {/* Category Badge */}
          <div className="absolute top-3 left-3 px-2 py-1 bg-primary/90 rounded text-xs font-bold text-primary-foreground uppercase tracking-wider">
            {categoryTitle}
          </div>
        </div>
        
        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors line-clamp-1">
            {video.title}
          </h3>
          
          {video.description && (
            <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
              {video.description}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              {video.level && (
                <span className={`text-xs px-2 py-0.5 rounded-full border ${levelColors[video.level]}`}>
                  {video.level}
                </span>
              )}
              {video.coach && (
                <span className="text-xs text-muted-foreground">
                  {video.coach}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Eye className="w-4 h-4" />
              <span>{video.views}</span>
            </div>
          </div>
        </div>

        {/* Animated Border */}
        <div className="absolute inset-0 rounded-xl border-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
      </div>
    </Link>
  )
}
