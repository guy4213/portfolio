const Dashboard = () => {
  const skills = {
    languages: ['Java', 'Kotlin', 'Python', 'JavaScript', 'TypeScript', 'SQL', 'Node.js'],
    frameworks: ['Spring Boot', 'React', 'Redux', 'Mobex', 'TailwindCSS', 'Material-UI', 'Hibernate', 'Axios'],
    cloud: ['Docker', 'Dapr', 'RESTful APIs', 'RabbitMQ'],
    databases: ['MySQL', 'Room Database', 'MongoDB', 'Supabase'],
    practices: ['Agile', 'GitHub Flow', 'TDD'],
    other: ['Slack API', 'Zoho', 'Deluge', 'WordPress', 'Retrofit', 'Coroutines']
  };

  const projects = [
    {
      name: 'Followy - Instagram Automation Platform',
      url: 'https://followy.co.il/',
      description: 'מערכת בוטים מתקדמת לאינסטגרם המקדמת עסקים באמצעות סוכני AI',
      tech: 'React, Node.js, Microservices',
      highlights: [
        'ארכיטקטורת microservices מורכבת - 3 שירותים מתקשרים (Gateway, Scheduler, Dispatcher)',
        'התחברות דרך Google OAuth 2.0',
        'מערכת תזמון אינטליגנטית לפעילות אוטומטית',
        'ממשק ניהול פרמטרים מתקדם ללקוח',
        'דף נחיתה מעוצב המציג את החזון והיזם'
      ],
      color: 'from-purple-500 to-pink-600'
    },
    {
      name: 'EduApp - Instructor Management System',
      url: 'https://github.com/guy4213/eduApp',
      description: 'אפליקציית ניהול מדריכים וקורסים מתקדמת',
      tech: 'React, Supabase',
      highlights: [
        'ממשק ניהול מורכב למנהלים ו-Sub Admins',
        'יצירת ותזמון קורסים ושיעורים בהתאמה אישית',
        'מערכת תזמון חכמה עם פרמטרים מתקדמים',
        'אפליקציה במהלך פיתוח מתמשך',
        'ארכיטקטורה סקיילבילית עם Supabase'
      ],
      color: 'from-blue-500 to-cyan-600',
    },
    {
      name: '2TimesWise - Interactive Web Game',
      url: 'https://2timeswise.com/',
      description: 'משחק אינטראקטיבי מבוסס ווב',
      tech: 'React, Node.js',
      highlights: [
        'עיצוב רספונסיבי מלא',
        'פיתוח Frontend מורכב',
        'חוויית משתמש אינטואיטיבית',
        'אופטימיזציה לביצועים גבוהים'
      ],
      color: 'from-green-500 to-teal-600'
    },
    {
      name: 'Zoho & Slack Automation System',
      url: null,
      description: 'מערכת אוטומציה מתקדמת לחיבור Slack ו-Zoho CRM',
      tech: 'Python, Zoho Deluge, Node.js, JavaScript',
      highlights: [
        'Scraping של Slack API לעקיפת מגבלות עלות',
        'הזמנה אוטומטית של משתמשים ל-Slack',
        'אינטגרציה מלאה עם Zoho CRM',
        'סקריפטים בשפת Deluge + JavaScript לניתוח נתונים',
        'חיסכון משמעותי בעלויות ללקוח'
      ],
      color: 'from-orange-500 to-red-600'
    }
  ];

  const experience = [
    {
      company: 'APISOUL',
      role: 'Full Stack Developer',
      period: 'January 2024 - Present',
      description: [
        'פיתוח אפליקציות ווב עם React, TypeScript, JavaScript ו-Node.js',
        'אינטגרציה של כלי אוטומציה: Zoho, Deluge, Node.js, Java',
        'פיתוח תכונות תקשורת real-time עם Slack APIs',
        'פיתוח ותחזוקת אתרי WordPress'
      ]
    },
    {
      company: 'ZIONET',
      role: 'Full Stack Developer',
      period: 'January 2023 - January 2024',
      description: [
        'עיצוב ויישום ארכיטקטורת microservices עם Java ו-Spring Boot',
        'פיתוח קומפוננטות Front-end רספונסיביות עם React ו-TypeScript',
        'בניית ותחזוקת RESTful APIs',
        'עבודה בצוותים agile עם Git workflows מתקדמים'
      ]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section id="about" className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
                👋 Welcome to my portfolio
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Guy Franses
              </h2>
              <p className="text-2xl md:text-3xl text-blue-100 mb-6 font-semibold">
                Full Stack Developer
              </p>
              <p className="text-lg text-blue-50 max-w-2xl leading-relaxed mb-8">
                Passionate Full Stack Developer with 3 years of experience crafting scalable web applications.
                Expert in microservices architecture, modern frontend frameworks, and AI-driven solutions.
                I transform complex problems into elegant, efficient code.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:fransesguy1@gmail.com"
                  className="px-6 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                  Get In Touch
                </a>
                <a
                  href="https://github.com/guy4213"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  View GitHub
                </a>
                <a
                  href="tel:0534271418"
                  className="px-6 py-3 bg-white/20 backdrop-blur-md text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-200 flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
                  </svg>
                  Call Me
                </a>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-64 h-64 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border-4 border-white/20">
                <svg className="w-32 h-32 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            Skills & Technologies
          </h3>
        </div>
        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Languages</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-blue-50 to-blue-100 text-blue-700 rounded-xl text-sm font-semibold border border-blue-200 hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Frameworks & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 text-green-700 rounded-xl text-sm font-semibold border border-green-200 hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Cloud & DevOps</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-purple-50 to-purple-100 text-purple-700 rounded-xl text-sm font-semibold border border-purple-200 hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-900">Databases</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.databases.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 bg-gradient-to-r from-orange-50 to-orange-100 text-orange-700 rounded-xl text-sm font-semibold border border-orange-200 hover:shadow-md transform hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold text-gray-900">Featured Projects</h3>
        </div>
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h4>
                    <p className="text-gray-600 text-lg mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-xl text-sm font-semibold border border-gray-300">
                        {project.tech}
                      </span>
                      {project.github && (
                        <span className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl text-sm font-semibold flex items-center gap-2">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </span>
                      )}
                    </div>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`shrink-0 px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2`}
                    >
                      View Project
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                  <h5 className="text-sm font-bold text-gray-700 uppercase tracking-wide mb-4">Key Highlights</h5>
                  <ul className="space-y-3" dir="rtl">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 text-right">
                        <svg className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-8 py-6">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Work Experience
          </h3>
        </div>
        <div className="divide-y divide-gray-200">
          {experience.map((exp, index) => (
            <div key={index} className="p-8 hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-purple-50/50 transition-all duration-200">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{exp.role}</h4>
                  <p className="text-xl text-blue-600 font-semibold flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                    </svg>
                    {exp.company}
                  </p>
                </div>
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-xl text-sm font-bold border border-blue-200">
                  {exp.period}
                </span>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6">
                <ul className="space-y-3" dir="rtl">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-right">
                      <svg className="w-6 h-6 text-blue-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 px-8 py-6">
          <h3 className="text-3xl font-bold text-white flex items-center gap-3">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
            Education & Certificates
          </h3>
        </div>
        <div className="p-8">
          <div className="grid gap-6">
            <div className="group flex items-start gap-6 p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Microservices & Cloud Development</h4>
                <p className="text-blue-700 font-semibold">ZIONET | 2023</p>
              </div>
            </div>

            <div className="group flex items-start gap-6 p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Software Engineering Principles</h4>
                <p className="text-green-700 font-semibold">ZIONET | 2023</p>
              </div>
            </div>

            <div className="group flex items-start gap-6 p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl border-2 border-purple-200 hover:shadow-lg transition-all duration-200 transform hover:scale-[1.02]">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900 mb-1">Java Fullstack Developer Certificate</h4>
                <p className="text-purple-700 font-semibold">HackerU | 2021-2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;