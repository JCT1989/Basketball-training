"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?w=1920&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent animate-pulse delay-300" />
        <div className="absolute top-1/4 left-0 h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse delay-500" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="inline-block mb-6 px-4 py-2 border border-primary/50 rounded-full">
          <span className="text-primary text-sm uppercase tracking-widest">专业篮球训练平台</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[family-name:var(--font-display)] uppercase tracking-tight mb-6">
          <span className="block">释放你的</span>
          <span className="block text-primary">篮球潜能</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          从投篮技巧到防守策略，专业教练带你系统提升球技
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="group px-8 py-6 text-base uppercase tracking-wider">
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            开始训练
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-6 text-base uppercase tracking-wider border-foreground/30 hover:border-primary hover:text-primary">
            浏览课程
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-primary">200+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">训练视频</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-primary">50K+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">学员</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold font-[family-name:var(--font-display)] text-primary">15+</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">专业教练</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs uppercase tracking-widest text-muted-foreground">向下滑动</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
