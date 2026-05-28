"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg font-[family-name:var(--font-display)]">H</span>
          </div>
          <span className="text-xl font-bold font-[family-name:var(--font-display)] tracking-wider">HOOPS</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/videos" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
            视频库
          </Link>
          <Link href="/videos?category=shooting" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
            投篮
          </Link>
          <Link href="/videos?category=dribbling" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
            运球
          </Link>
          <Link href="/videos?category=defense" className="text-sm uppercase tracking-wider hover:text-primary transition-colors">
            防守
          </Link>
          <Link href="/login">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <User className="w-4 h-4 mr-2" />
              登录
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-secondary rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 flex flex-col gap-4">
          <Link
            href="/videos"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
          >
            视频库
          </Link>
          <Link
            href="/videos?category=shooting"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
          >
            投篮
          </Link>
          <Link
            href="/videos?category=dribbling"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
          >
            运球
          </Link>
          <Link
            href="/videos?category=defense"
            onClick={() => setIsMenuOpen(false)}
            className="text-sm uppercase tracking-wider hover:text-primary transition-colors py-2"
          >
            防守
          </Link>
          <Link href="/login" onClick={() => setIsMenuOpen(false)}>
            <Button variant="outline" size="sm" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <User className="w-4 h-4 mr-2" />
              登录
            </Button>
          </Link>
        </nav>
      )}
    </header>
  )
}
