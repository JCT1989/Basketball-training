export interface Video {
  id: string
  title: string
  duration: string
  views: string
  thumbnail: string
  videoUrl: string
  description?: string
  level?: "初级" | "中级" | "高级"
  coach?: string
}

export interface Category {
  id: string
  title: string
  subtitle: string
  videoCount: number
  image: string
  description: string
  videos: Video[]
}

export const categories: Category[] = [
  {
    id: "shooting",
    title: "投篮",
    subtitle: "Shooting",
    videoCount: 48,
    image: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800&q=80",
    description: "从基础投篮姿势到高难度跳投，全面提升你的得分能力",
    videos: [
      {
        id: "s1",
        title: "基础投篮姿势训练",
        duration: "12:30",
        views: "25.6K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "学习正确的投篮姿势，包括持球方式、出手角度和跟随动作",
        level: "初级",
        coach: "张教练"
      },
      {
        id: "s2",
        title: "三分线投篮技巧",
        duration: "18:45",
        views: "32.1K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "掌握三分球投篮的核心技巧，提高远距离投篮命中率",
        level: "中级",
        coach: "李教练"
      },
      {
        id: "s3",
        title: "急停跳投训练",
        duration: "15:20",
        views: "18.9K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
        description: "学习如何在高速运动中急停并完成稳定的跳投",
        level: "高级",
        coach: "王教练"
      },
      {
        id: "s4",
        title: "罚球线投篮精准度",
        duration: "10:15",
        views: "21.3K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
        description: "提高罚球命中率的专项训练，建立稳定的罚球节奏",
        level: "初级",
        coach: "张教练"
      },
      {
        id: "s5",
        title: "后仰跳投技巧",
        duration: "16:40",
        views: "29.4K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        description: "学习科比式后仰跳投，掌握在防守压力下的得分技巧",
        level: "高级",
        coach: "李教练"
      },
      {
        id: "s6",
        title: "中距离投篮训练",
        duration: "14:20",
        views: "17.8K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        description: "中距离是最被忽视的得分区域，学习稳定的中投技术",
        level: "中级",
        coach: "王教练"
      }
    ]
  },
  {
    id: "dribbling",
    title: "运球",
    subtitle: "Dribbling",
    videoCount: 56,
    image: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=800&q=80",
    description: "掌握灵活多变的运球技巧，突破防守创造机会",
    videos: [
      {
        id: "d1",
        title: "基础运球节奏训练",
        duration: "14:00",
        views: "28.7K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
        description: "建立扎实的运球基础，掌握正确的运球节奏和力度",
        level: "初级",
        coach: "陈教练"
      },
      {
        id: "d2",
        title: "体前变向过人",
        duration: "16:30",
        views: "35.2K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
        description: "学习经典的体前变向动作，轻松晃过防守球员",
        level: "中级",
        coach: "刘教练"
      },
      {
        id: "d3",
        title: "胯下运球技巧",
        duration: "13:45",
        views: "22.4K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
        description: "胯下运球是保护球的重要技巧，学习流畅的胯下动作",
        level: "中级",
        coach: "陈教练"
      },
      {
        id: "d4",
        title: "背后运球进阶",
        duration: "17:20",
        views: "19.8K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
        description: "背后运球的进阶训练，提升运球的多样性和突然性",
        level: "高级",
        coach: "刘教练"
      },
      {
        id: "d5",
        title: "欧洲步突破",
        duration: "15:10",
        views: "41.3K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        description: "学习NBA球星常用的欧洲步，有效躲避防守完成上篮",
        level: "高级",
        coach: "陈教练"
      },
      {
        id: "d6",
        title: "转身运球技巧",
        duration: "12:55",
        views: "24.6K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        description: "掌握转身运球，在紧逼防守下保护好球并找到进攻机会",
        level: "中级",
        coach: "刘教练"
      }
    ]
  },
  {
    id: "defense",
    title: "防守",
    subtitle: "Defense",
    videoCount: 42,
    image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=800&q=80",
    description: "成为球场上的防守悍将，学习专业的防守技术和策略",
    videos: [
      {
        id: "df1",
        title: "防守站位基础",
        duration: "11:30",
        views: "20.1K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
        description: "学习正确的防守站位，保持低重心和良好的防守姿态",
        level: "初级",
        coach: "赵教练"
      },
      {
        id: "df2",
        title: "滑步防守训练",
        duration: "14:15",
        views: "26.5K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
        description: "提高横向移动速度，紧跟进攻球员的每一步",
        level: "中级",
        coach: "孙教练"
      },
      {
        id: "df3",
        title: "盖帽时机把握",
        duration: "12:00",
        views: "31.2K",
        thumbnail: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
        description: "学习判断盖帽时机，避免犯规的同时完成有效封盖",
        level: "高级",
        coach: "赵教练"
      },
      {
        id: "df4",
        title: "抢断技巧详解",
        duration: "15:45",
        views: "24.8K",
        thumbnail: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
        description: "提高抢断成功率，学习预判传球路线和出手时机",
        level: "高级",
        coach: "孙教练"
      },
      {
        id: "df5",
        title: "篮板球争抢技巧",
        duration: "13:20",
        views: "18.7K",
        thumbnail: "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        description: "学习卡位和起跳时机，成为篮板球高手",
        level: "中级",
        coach: "赵教练"
      },
      {
        id: "df6",
        title: "团队防守配合",
        duration: "18:30",
        views: "22.3K",
        thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80",
        videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
        description: "了解协防、补防和换防的时机，提升团队防守效率",
        level: "高级",
        coach: "孙教练"
      }
    ]
  }
]

export function getCategoryById(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getVideoById(videoId: string): { video: Video; category: Category } | undefined {
  for (const category of categories) {
    const video = category.videos.find(v => v.id === videoId)
    if (video) {
      return { video, category }
    }
  }
  return undefined
}

export function getAllVideos(): (Video & { categoryId: string; categoryTitle: string })[] {
  return categories.flatMap(category => 
    category.videos.map(video => ({
      ...video,
      categoryId: category.id,
      categoryTitle: category.title
    }))
  )
}
