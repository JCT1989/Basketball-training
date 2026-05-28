"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoPlayer } from "@/components/video-player"
import { getVideoById } from "@/lib/videos-data"
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  User, 
  ChevronRight,
  Play,
  BookOpen,
  Target,
  Star,
  Share2,
  Bookmark,
  ThumbsUp
} from "lucide-react"

interface VideoDetailPageProps {
  params: Promise<{ id: string }>
}

export default function VideoDetailPage({ params }: VideoDetailPageProps) {
  const { id } = use(params)
  const result = getVideoById(id)
  
  if (!result) {
    notFound()
  }

  const { video, category } = result
  const relatedVideos = category.videos.filter(v => v.id !== video.id).slice(0, 6)

  const levelColors = {
    "初级": "bg-green-500/20 text-green-400 border-green-500/30",
    "中级": "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
    "高级": "bg-red-500/20 text-red-400 border-red-500/30"
  }

  const levelIcons = {
    "初级": <BookOpen className="w-4 h-4" />,
    "中级": <Target className="w-4 h-4" />,
    "高级": <Star className="w-4 h-4" />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Breadcrumb */}
        <div className="bg-secondary/30 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                首页
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link href="/videos" className="text-muted-foreground hover:text-primary transition-colors">
                视频库
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <Link 
                href={`/videos?category=${category.id}`} 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {category.title}训练
              </Link>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <span className="text-foreground truncate max-w-[200px]">{video.title}</span>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <Link 
            href={`/videos?category=${category.id}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            返回{category.title}视频列表
          </Link>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Video Player */}
              <VideoPlayer 
                src={video.videoUrl}
                poster={video.thumbnail}
                title={video.title}
              />

              {/* Video Info */}
              <div className="space-y-6">
                {/* Tags */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                    {category.title}训练
                  </span>
                  {video.level && (
                    <span className={`flex items-center gap-1.5 text-sm px-4 py-1.5 rounded-full border ${levelColors[video.level]}`}>
                      {levelIcons[video.level]}
                      {video.level}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-[family-name:var(--font-display)] tracking-wide leading-tight">
                  {video.title}
                </h1>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{video.views}</span> 次观看
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    <span className="font-medium text-foreground">{video.duration}</span>
                  </span>
                  {video.coach && (
                    <span className="flex items-center gap-2">
                      <User className="w-5 h-5 text-primary" />
                      <span className="font-medium text-foreground">{video.coach}</span>
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors">
                    <ThumbsUp className="w-5 h-5" />
                    点赞
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors border border-border">
                    <Bookmark className="w-5 h-5" />
                    收藏
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-xl font-medium hover:bg-secondary/80 transition-colors border border-border">
                    <Share2 className="w-5 h-5" />
                    分享
                  </button>
                </div>

                {/* Description Card */}
                <div className="p-6 md:p-8 bg-card rounded-2xl border border-border">
                  <h2 className="text-xl font-bold font-[family-name:var(--font-display)] mb-4 flex items-center gap-3">
                    <span className="w-1 h-6 bg-primary rounded-full" />
                    视频简介
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {video.description || "本视频将详细讲解篮球训练的核心技巧，帮助你快速提升球技。通过专业教练的指导，你将学习到正确的动作要领和实战应用方法。"}
                  </p>
                  
                  {/* Key Points */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">本视频你将学到</h3>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                        <span>掌握正确的基础动作要领</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                        <span>了解常见错误及纠正方法</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                        <span>实战中的应用技巧</span>
                      </li>
                      <li className="flex items-start gap-3 text-sm">
                        <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                        <span>进阶训练建议</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Coach Info */}
                {video.coach && (
                  <div className="p-6 bg-card rounded-2xl border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                        {video.coach.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{video.coach}</h3>
                        <p className="text-muted-foreground text-sm">专业篮球教练 · 10年执教经验</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar - Related Videos */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <h2 className="text-xl font-bold font-[family-name:var(--font-display)] flex items-center gap-3">
                  <span className="w-1 h-6 bg-primary rounded-full" />
                  相关推荐
                </h2>

                <div className="space-y-4">
                  {relatedVideos.map((relatedVideo) => (
                    <Link
                      key={relatedVideo.id}
                      href={`/videos/${relatedVideo.id}`}
                      className="group flex gap-4 p-3 rounded-xl bg-card/50 hover:bg-card border border-transparent hover:border-border transition-all"
                    >
                      <div className="relative w-36 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={relatedVideo.thumbnail}
                          alt={relatedVideo.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center">
                            <Play className="w-5 h-5 text-primary-foreground fill-current ml-0.5" />
                          </div>
                        </div>
                        <div className="absolute bottom-1.5 right-1.5 px-2 py-0.5 bg-black/80 rounded text-xs text-white font-medium">
                          {relatedVideo.duration}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0 py-1">
                        <h3 className="font-medium line-clamp-2 group-hover:text-primary transition-colors leading-snug">
                          {relatedVideo.title}
                        </h3>
                        <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {relatedVideo.views}
                          </span>
                          {relatedVideo.level && (
                            <span className={`px-2 py-0.5 rounded text-xs ${levelColors[relatedVideo.level]}`}>
                              {relatedVideo.level}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* View All Link */}
                <Link
                  href={`/videos?category=${category.id}`}
                  className="flex items-center justify-center gap-2 py-4 px-6 bg-secondary hover:bg-secondary/80 border border-border hover:border-primary rounded-xl transition-all group"
                >
                  <span>查看全部{category.title}视频</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
