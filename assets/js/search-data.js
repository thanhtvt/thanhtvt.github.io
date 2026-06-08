// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-groot-got-accepted-at-kdd-2025",
          title: 'GROOT got accepted at KDD 2025.',
          description: "",
          section: "News",},{id: "news-conxgnn-got-accepted-at-icassp-2025",
          title: 'ConxGNN got accepted at ICASSP 2025.',
          description: "",
          section: "News",},{id: "news-resound-got-accepted-at-interspeech-2025",
          title: 'RESOUND got accepted at Interspeech 2025.',
          description: "",
          section: "News",},{id: "news-honored-to-receive-the-best-performance-award-2025-ranking-in-the-top-3-out-of-100-ai-engineers-and-researchers-at-fpt-software-ai-center",
          title: 'Honored to receive the Best Performance Award 2025, ranking in the top 3...',
          description: "",
          section: "News",},{id: "news-diflowdubber-got-accepted-at-cvpr-findings-2026-diflowdubber-and-flowley-also-got-accepted-at-sight-and-sound-workshop-cvpr-2026",
          title: 'DiFlowDubber got accepted at CVPR Findings 2026. DiFlowDubber and Flowley also got accepted...',
          description: "",
          section: "News",},{id: "news-diflow-tts-got-accepted-at-interspeech-2026-long-paper-track",
          title: 'DiFlow-TTS got accepted at Interspeech 2026 (Long Paper track).',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%74%72%61%6E%74%72%6F%6E%67%74%68%61%6E%68%68%70@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0TvnzDYAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/thanhtvt", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/thanhtvt", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/thanhtvt", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
