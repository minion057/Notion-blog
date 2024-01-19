const CONFIG = {
  // profile setting (required)
  profile: {
    name: "Jeonghyeon",
    image: "/profile/profile-background.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "AI developer",
    bio: "공부하자!",
    email: "getit3981@gmail.com",
    linkedin: "",
    github: "minion057",
    instagram: "",
  },
  projects: [
    {
      name: `C.V`,
      href: "https://my.surfit.io/w/469412511",
    },
  ],
  // blog setting (required)
  blog: {
    title: "jeonghyeon-log",
    description: "welcome to jeonghyeon-log!",
  },

  // CONFIG configration (required)
  link: "https://jhyu-tech-blog.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
