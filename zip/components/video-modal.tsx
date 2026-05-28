"use client"

import { X, Clock, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Video {
  id: string
  title: string
  duration: string
  views: string
  thumbnail: string
  videoUrl: string
}

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  category: {
    title: string
    videos: Video[]
  } | null
  currentVideoIndex: number
  setCurrentVideoIndex: (index: number) => void
}

export function VideoModal({ isOpen, onClose, category, currentVideoIndex, setCurrentVideoIndex }: VideoModalProps) {
  if (!isOpen || !category) return null

  const currentVideo = category.videos[currentVideoIndex]

  const handlePrev = () => {
    setCurrentVideoIndex(currentVideoIndex > 0 ? currentVideoIndex - 1 : category.videos.length - 1)
  }

  const handleNext = () => {
    setCurrentVideoIndex(currentVideoIndex < category.videos.length - 1 ? currentVideoIndex + 1 : 0)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-md" onClick={onClose} />

      {/* Modal Content */}
      <div className="relative w-full max-w-6xl mx-4 max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Category Title */}
        <div className="mb-6">
          <h2 className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] uppercase tracking-wide">
            {category.title}
            <span className="text-primary">训练</span>
          </h2>
        </div>

        {/* Main Video Player */}
        <div className="relative aspect-video bg-card rounded-xl overflow-hidden mb-6">
          <video
            key={currentVideo.videoUrl}
            src={currentVideo.videoUrl}
            controls
            autoPlay
            className="w-full h-full object-cover"
            poster={currentVideo.thumbnail}
          />

          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Video Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-display)] uppercase">{currentVideo.title}</h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {currentVideo.duration}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-4 h-4" />
                {currentVideo.views} 次观看
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">
              {currentVideoIndex + 1} / {category.videos.length}
            </span>
          </div>
        </div>

        {/* Video Thumbnails */}
        <div className="overflow-x-auto pb-4">
          <div className="flex gap-4">
            {category.videos.map((video, index) => (
              <button
                key={video.id}
                onClick={() => setCurrentVideoIndex(index)}
                className={`relative flex-shrink-0 w-40 aspect-video rounded-lg overflow-hidden transition-all ${
                  index === currentVideoIndex
                    ? "ring-2 ring-primary scale-105"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <span className="absolute bottom-2 left-2 text-xs font-medium">{video.duration}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
