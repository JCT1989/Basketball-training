"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { 
  Play, 
  Pause, 
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  SkipBack,
  SkipForward,
  Settings,
  Loader2
} from "lucide-react"

interface VideoPlayerProps {
  src: string
  poster: string
  title: string
}

export function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(1)
  const [progress, setProgress] = useState(0)
  const [buffered, setBuffered] = useState(0)
  const [currentTime, setCurrentTime] = useState("0:00")
  const [duration, setDuration] = useState("0:00")
  const [showControls, setShowControls] = useState(true)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [showVolumeSlider, setShowVolumeSlider] = useState(false)
  const [playbackRate, setPlaybackRate] = useState(1)
  const [showSettings, setShowSettings] = useState(false)
  const controlsTimeoutRef = useRef<NodeJS.Timeout>()

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
      setIsMuted(newVolume === 0)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
      setCurrentTime(formatTime(videoRef.current.currentTime))
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration))
      setIsLoading(false)
    }
  }

  const handleProgress = () => {
    if (videoRef.current && videoRef.current.buffered.length > 0) {
      const bufferedEnd = videoRef.current.buffered.end(videoRef.current.buffered.length - 1)
      const bufferedProgress = (bufferedEnd / videoRef.current.duration) * 100
      setBuffered(bufferedProgress)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect()
      const clickPosition = (e.clientX - rect.left) / rect.width
      videoRef.current.currentTime = clickPosition * videoRef.current.duration
    }
  }

  const skip = (seconds: number) => {
    if (videoRef.current) {
      videoRef.current.currentTime += seconds
    }
  }

  const toggleFullscreen = async () => {
    if (!containerRef.current) return
    
    if (document.fullscreenElement) {
      await document.exitFullscreen()
      setIsFullscreen(false)
    } else {
      await containerRef.current.requestFullscreen()
      setIsFullscreen(true)
    }
  }

  const handlePlaybackRateChange = (rate: number) => {
    if (videoRef.current) {
      videoRef.current.playbackRate = rate
      setPlaybackRate(rate)
      setShowSettings(false)
    }
  }

  const handleMouseMove = () => {
    setShowControls(true)
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current)
    }
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange)
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return
      
      switch (e.key) {
        case ' ':
        case 'k':
          e.preventDefault()
          togglePlay()
          break
        case 'ArrowLeft':
          e.preventDefault()
          skip(-10)
          break
        case 'ArrowRight':
          e.preventDefault()
          skip(10)
          break
        case 'm':
          e.preventDefault()
          toggleMute()
          break
        case 'f':
          e.preventDefault()
          toggleFullscreen()
          break
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isPlaying, isMuted])

  return (
    <div 
      ref={containerRef}
      className="relative aspect-video bg-black rounded-2xl overflow-hidden group"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-contain"
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onProgress={handleProgress}
        onEnded={() => setIsPlaying(false)}
        onWaiting={() => setIsLoading(true)}
        onPlaying={() => setIsLoading(false)}
        onClick={togglePlay}
        playsInline
      />

      {/* Loading Spinner */}
      {isLoading && isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
      )}

      {/* Center Play Button */}
      {!isPlaying && !isLoading && (
        <button
          onClick={togglePlay}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/40 hover:bg-primary hover:scale-110 transition-all duration-300 z-10"
        >
          <Play className="w-8 h-8 md:w-10 md:h-10 text-primary-foreground fill-current ml-1" />
        </button>
      )}

      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 transition-opacity duration-300 pointer-events-none ${showControls ? 'opacity-100' : 'opacity-0'}`} />

      {/* Top Bar - Title */}
      <div className={`absolute top-0 left-0 right-0 p-4 md:p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        <h3 className="text-white text-sm md:text-base font-medium truncate">{title}</h3>
      </div>

      {/* Bottom Controls */}
      <div className={`absolute bottom-0 left-0 right-0 p-4 md:p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}>
        {/* Progress Bar */}
        <div 
          className="h-1.5 bg-white/20 rounded-full mb-4 cursor-pointer group/progress relative"
          onClick={handleProgressClick}
        >
          {/* Buffered */}
          <div 
            className="absolute inset-y-0 left-0 bg-white/30 rounded-full"
            style={{ width: `${buffered}%` }}
          />
          {/* Progress */}
          <div 
            className="h-full bg-primary rounded-full relative"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full shadow-lg opacity-0 group-hover/progress:opacity-100 scale-0 group-hover/progress:scale-100 transition-all" />
          </div>
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Skip Back */}
            <button 
              onClick={() => skip(-10)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              title="后退10秒"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            {/* Play/Pause */}
            <button 
              onClick={togglePlay}
              className="p-2 md:p-3 bg-white/20 hover:bg-white/30 rounded-full transition-colors text-white"
            >
              {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6" /> : <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />}
            </button>

            {/* Skip Forward */}
            <button 
              onClick={() => skip(10)}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              title="快进10秒"
            >
              <SkipForward className="w-5 h-5" />
            </button>

            {/* Volume */}
            <div 
              className="relative flex items-center"
              onMouseEnter={() => setShowVolumeSlider(true)}
              onMouseLeave={() => setShowVolumeSlider(false)}
            >
              <button 
                onClick={toggleMute}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              >
                {isMuted || volume === 0 ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              </button>
              <div className={`absolute left-full ml-2 bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 transition-all ${showVolumeSlider ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 h-1 accent-primary cursor-pointer"
                />
              </div>
            </div>

            {/* Time */}
            <span className="text-white text-sm hidden md:block">
              {currentTime} / {duration}
            </span>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            {/* Settings */}
            <div className="relative">
              <button 
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
              >
                <Settings className="w-5 h-5" />
              </button>
              {showSettings && (
                <div className="absolute bottom-full right-0 mb-2 bg-black/90 backdrop-blur-sm rounded-lg overflow-hidden min-w-[120px]">
                  <div className="px-3 py-2 text-xs text-white/60 border-b border-white/10">播放速度</div>
                  {[0.5, 0.75, 1, 1.25, 1.5, 2].map(rate => (
                    <button
                      key={rate}
                      onClick={() => handlePlaybackRateChange(rate)}
                      className={`w-full px-3 py-2 text-sm text-left hover:bg-white/10 transition-colors ${playbackRate === rate ? 'text-primary' : 'text-white'}`}
                    >
                      {rate === 1 ? '正常' : `${rate}x`}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Fullscreen */}
            <button 
              onClick={toggleFullscreen}
              className="p-2 hover:bg-white/20 rounded-lg transition-colors text-white"
            >
              {isFullscreen ? <Minimize className="w-5 h-5" /> : <Maximize className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
