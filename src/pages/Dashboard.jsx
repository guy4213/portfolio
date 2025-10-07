import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, logout } = useAuth();
   const navigate = useNavigate();
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
      github: true
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

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
          <h2 className="text-4xl font-bold mb-2">Guy Franses</h2>
          <p className="text-xl text-blue-100 mb-4">Full Stack Developer</p>
          <p className="text-blue-100 max-w-3xl">
            Full Stack Developer with 3 years of experience in front-end and back-end development. 
            Proficient in building scalable applications, working with microservices architecture, 
            and integrating AI-driven solutions.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="mailto:fransesguy1@gmail.com" className="px-4 py-2 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
              Email
            </a>
            <a href="https://github.com/guy4213" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white/20 backdrop-blur text-white rounded-lg font-medium hover:bg-white/30 transition-colors">
              GitHub
            </a>
          </div>
        </div>

        {/* Skills Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Frameworks & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {skills.frameworks.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Cloud & Microservices</h4>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      {/* Projects Section */}
<div className="mb-8">
  <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured Projects</h3>
  <div className="grid gap-6">
    {projects.map((project, index) => (
      <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-200">
        <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h4 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h4>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                  {project.tech}
                </span>
                {project.github && (
                  <span className="px-3 py-1 bg-gray-900 text-white rounded-full text-sm font-medium">
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
                className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                View
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>
          
          <ul className="space-y-2" dir="rtl">
            {project.highlights.map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-700 text-right">
                <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</div>

        {/* Experience Section */}
<div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
    <h3 className="text-2xl font-bold text-white">Work Experience</h3>
  </div>
  <div className="divide-y divide-gray-200">
    {experience.map((exp, index) => (
      <div key={index} className="p-6 hover:bg-gray-50 transition-colors">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h4 className="text-xl font-bold text-gray-900">{exp.role}</h4>
            <p className="text-lg text-blue-600 font-semibold">{exp.company}</p>
          </div>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
            {exp.period}
          </span>
        </div>
        <ul className="space-y-2" dir="rtl">
          {exp.description.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-gray-700 text-right">
<svg
  className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  viewBox="0 0 24 24"
>
  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
</svg>
            
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
</div>

        {/* Education Section */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Education & Certificates</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Microservices & Cloud Development</h4>
                <p className="text-gray-600">ZIONET | 2023</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-green-50 rounded-lg">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Software Engineering Principles</h4>
                <p className="text-gray-600">ZIONET | 2023</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-purple-50 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-gray-900">Java Fullstack Developer Certificate</h4>
                <p className="text-gray-600">HackerU | 2021-2023</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;