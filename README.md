# Guy Franses - Full Stack Developer Portfolio 🚀

A modern, professional portfolio website built with React and Google OAuth 2.0 authentication, showcasing projects, skills, and technical expertise.

![React](https://img.shields.io/badge/React-18.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📸 Preview

### 🔐 Login Page
Clean and minimal login interface with Google OAuth 2.0 integration for secure authentication.

### 💼 Portfolio Dashboard
Professional showcase featuring:
- **Work Experience** - Full Stack Developer roles at APISOUL and ZIONET
- **Featured Projects** - 4 production projects with live links
- **Technical Skills** - Comprehensive tech stack display
- **Education & Certifications** - Professional development credentials

### ❓ Technical FAQ
Interactive accordion-style Q&A page covering:
- Polling vs WebSocket
- Redux in Frontend development
- LocalStorage vs SessionStorage
- REST API vs GraphQL
- Secrets management in Cloud
- Server Side Rendering vs Client Side Rendering

---

## ✨ Features

- ✅ **Google OAuth 2.0** - Secure authentication
- ✅ **Protected Routes** - Secure access control
- ✅ **Responsive Design** - Mobile-first approach
- ✅ **Modern UI/UX** - Smooth animations and transitions
- ✅ **RTL Support** - Hebrew content properly displayed
- ✅ **Performance Optimized** - Fast loading and smooth interactions
- ✅ **SEO Ready** - Proper meta tags and structure

---

## 🛠️ Tech Stack

### Frontend
- **React 18.2** - Modern UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Vite 5** - Lightning-fast build tool

### Authentication
- **Google OAuth 2.0** - Secure user authentication
- **LocalStorage** - Session persistence

### Deployment Ready
- **Vercel** - Recommended
- **Netlify** - Alternative
- Any static hosting platform

---

## 📁 Project Structure

```
src/
├── components/
│   ├── DashboardLayout.jsx    # Shared layout with header/footer/navigation
│   ├── LoadingSpinner.jsx     # Reusable loading indicator
│   └── ProtectedRoute.jsx     # Route protection wrapper
├── contexts/
│   └── AuthContext.jsx        # Global authentication state
├── pages/
│   ├── LoginPage.jsx          # Login with Google OAuth
│   ├── CallbackPage.jsx       # OAuth callback handler
│   ├── Dashboard.jsx          # Main portfolio page
│   └── FAQPage.jsx            # Technical Q&A page
├── utils/
│   └── googleAuth.js          # OAuth helper functions
├── App.jsx                    # Main app with routing
├── main.jsx                   # Application entry point
└── index.css                  # Global styles + Tailwind directives
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Google Cloud Console** account

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/guy4213/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Set Up Google OAuth

#### Create Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (e.g., "Portfolio App")
3. Navigate to **APIs & Services** → **Library**
4. Search for and enable **Google+ API**

#### Configure OAuth Credentials

1. Go to **APIs & Services** → **Credentials**
2. Click **Create Credentials** → **OAuth Client ID**
3. Select **Web application**
4. Configure:
   
   **Authorized JavaScript origins:**
   ```
   http://localhost:5173
   https://your-domain.com
   ```
   
   **Authorized redirect URIs:**
   ```
   http://localhost:5173/callback
   https://your-domain.com/callback
   ```

5. Click **Create** and copy your **Client ID**

### 4️⃣ Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_GOOGLE_CLIENT_ID=your_client_id_here.apps.googleusercontent.com
VITE_REDIRECT_URI=http://localhost:5173/callback
```

⚠️ **Important:** Never commit `.env.local` to Git!

### 5️⃣ Configure Tailwind CSS

Ensure your `tailwind.config.js` has the correct content paths:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 6️⃣ Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Configure Environment Variables:**
   - Go to your project in Vercel Dashboard
   - Navigate to Settings → Environment Variables
   - Add:
     - `VITE_GOOGLE_CLIENT_ID`
     - `VITE_REDIRECT_URI` (use your Vercel domain)

4. **Update Google OAuth:**
   - Add your Vercel domain to authorized origins and redirect URIs

### Deploy to Netlify

1. Push your code to GitHub
2. Connect repository to Netlify
3. Configure:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Add environment variables in Netlify Dashboard
5. Update Google OAuth settings with Netlify domain

---

## 🎨 Featured Projects

### 1. Followy - Instagram Automation Platform
**Live:** [followy.co.il](https://followy.co.il/)

Advanced Instagram bot system with AI-powered agents for business promotion.

**Tech Stack:** React, Node.js, Microservices Architecture

**Highlights:**
- 3-service microservices architecture (Gateway, Scheduler, Dispatcher)
- Google OAuth 2.0 integration
- Intelligent scheduling system
- Advanced parameter management interface
- Custom landing page

### 2. EduApp - Instructor Management System
**GitHub:** [github.com/guy4213/eduApp](https://github.com/guy4213/eduApp)

Comprehensive course and instructor management application.

**Tech Stack:** React, Supabase

**Highlights:**
- Complex admin and sub-admin interfaces
- Custom course and class scheduling
- Smart scheduling with advanced parameters
- Scalable architecture with Supabase backend

### 3. 2TimesWise - Interactive Web Game
**Live:** [2timeswise.com](https://2timeswise.com/)

Engaging web-based interactive game with responsive design.

**Tech Stack:** React, Node.js

**Highlights:**
- Fully responsive design
- Complex frontend development
- Intuitive user experience
- Performance optimized

### 4. Zoho & Slack Automation System

Advanced automation system connecting Slack and Zoho CRM.

**Tech Stack:** Python, Zoho Deluge, Node.js, JavaScript

**Highlights:**
- Slack API scraping to bypass cost limitations
- Automatic user invitation to Slack
- Full Zoho CRM integration
- Scripts in Deluge + JavaScript for data analysis
- Significant cost savings for client

---

## 👨‍💻 About Guy Franses

Full Stack Developer with 3+ years of experience specializing in:

- **Frontend:** React, TypeScript, JavaScript, Tailwind CSS
- **Backend:** Node.js, Java (Spring Boot), Python
- **Architecture:** Microservices, RESTful APIs
- **Cloud & DevOps:** Docker, Dapr, RabbitMQ
- **Databases:** MySQL, MongoDB, Supabase
- **Automation:** Zoho, Slack APIs, Python scripting

### 💼 Work Experience

**APISOUL** - Full Stack Developer (Jan 2024 - Present)
- Web application development with React, TypeScript, Node.js
- Automation tools integration (Zoho, Deluge)
- Real-time communication features with Slack APIs
- WordPress development and maintenance

**ZIONET** - Full Stack Developer (Jan 2023 - Jan 2024)
- Microservices architecture with Java and Spring Boot
- Responsive frontend with React and TypeScript
- RESTful APIs development
- Agile team collaboration

### 🎓 Education

- **Microservices & Cloud Development** - ZIONET (2023)
- **Software Engineering Principles** - ZIONET (2023)
- **Java Fullstack Developer Certificate** - HackerU (2021-2023)

---

## 🔒 Security Best Practices

✅ **Implemented:**
- Environment variables for sensitive data
- No secrets in source code
- OAuth 2.0 for authentication
- Protected routes
- HTTPS in production (via hosting platform)

⚠️ **Important:**
- Never commit `.env.local` to Git
- Always use HTTPS in production
- Regularly update dependencies
- Review and rotate OAuth credentials periodically

---

## 📧 Contact

- **Email:** [fransesguy1@gmail.com](mailto:fransesguy1@gmail.com)
- **Phone:** 0534271418
- **GitHub:** [github.com/guy4213](https://github.com/guy4213)
- **LinkedIn:** [Guy_Franses](https://linkedin.com/in/Guy_Franses)

---

## 📝 Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🐛 Troubleshooting

### Tailwind CSS not working
1. Check `tailwind.config.js` content paths
2. Ensure `index.css` imports Tailwind directives
3. Restart dev server: `npm run dev`

### OAuth not working
1. Verify `.env.local` has correct Client ID
2. Check authorized origins and redirect URIs in Google Console
3. Ensure redirect URI matches exactly (including protocol)

### Build fails
1. Clear cache: `rm -rf node_modules/.vite`
2. Reinstall dependencies: `npm install`
3. Check for TypeScript/ESLint errors

---

## 🤝 Contributing

This is a personal portfolio project. Feel free to:
- Fork the repository
- Use as inspiration for your own portfolio
- Submit issues for bugs
- Suggest improvements

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🌟 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Vercel** - For seamless deployment
- **Google** - For OAuth 2.0 services

---

**Built with ❤️ by Guy Franses**

*Last Updated: October 2025*
