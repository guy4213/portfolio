import { useState } from 'react';
import DashboardLayout from '../layout/DashboardLayout';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "מתי נכון להשתמש ב-Polling ומתי ב-WebSocket?",
      answer: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-blue-600 mb-2">Polling:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>כאשר העדכונים אינם תכופים (כל כמה דקות/שעות)</li>
              <li>כאשר לא נדרש real-time אמיתי</li>
              <li>פשוט יותר לתחזוקה ודיבאג</li>
              <li>דוגמה: עדכון מזג אויר, בדיקת סטטוס job</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-green-600 mb-2">WebSocket:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>כאשר נדרש real-time אמיתי (צ'אט, משחקים)</li>
              <li>כאשר העדכונים תכופים מאוד</li>
              <li>חסכון ב-bandwidth וב-server load</li>
              <li>דוגמה: מסרים מיידיים, עדכוני מניות live, multiplayer games</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      question: "מהם השימושים המרכזיים של Redux בפרויקטי Frontend?",
      answer: `
        <div class="space-y-4">
          <ul class="list-disc list-inside space-y-2">
            <li><strong>ניהול state גלובלי:</strong> כאשר מספר קומפוננטות צריכות גישה לאותו מידע (למשל: פרטי משתמש, עגלת קניות)</li>
            <li><strong>Predictable state management:</strong> כל שינוי ב-state עובר דרך actions ו-reducers, מה שמקל על debug</li>
            <li><strong>Time-travel debugging:</strong> אפשרות לחזור אחורה ולראות את כל ההיסטוריה של השינויים</li>
            <li><strong>Middleware:</strong> אפשרות לטפל ב-async operations (Redux Thunk, Redux Saga)</li>
            <li><strong>מתי לא להשתמש:</strong> פרויקטים קטנים, Context API מספיק, או כאשר משתמשים ב-React Query לניהול server state</li>
          </ul>
        </div>
      `
    },
    {
      question: "מה היתרונות והחסרונות של שימוש ב-Local Storage לעומת Session Storage?",
      answer: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-blue-600 mb-2">Local Storage:</h4>
            <p class="font-semibold text-green-600 mb-1">יתרונות:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>נשמר לצמיתות (עד שמוחקים ידנית)</li>
              <li>מתאים ל-Remember Me, preferences משתמש</li>
              <li>נגיש בין טאבים שונים</li>
            </ul>
            <p class="font-semibold text-red-600 mb-1">חסרונות:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>סיכון אבטחה - נשאר גם אחרי סגירת דפדפן</li>
              <li>לא מתאים לנתונים רגישים</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-purple-600 mb-2">Session Storage:</h4>
            <p class="font-semibold text-green-600 mb-1">יתרונות:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>יותר בטוח - נמחק כשסוגרים את הטאב</li>
              <li>מתאים ל-session tokens, נתוני טופס זמניים</li>
            </ul>
            <p class="font-semibold text-red-600 mb-1">חסרונות:</p>
            <ul class="list-disc list-inside space-y-1">
              <li>לא נשמר בין טאבים</li>
              <li>נמחק כשסוגרים את הדפדפן</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      question: "כיצד היית בוחר בין REST API לבין GraphQL ב-Backend?",
      answer: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-blue-600 mb-2">REST API - מתי להשתמש:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>API פשוט עם endpoints מוגדרים היטב</li>
              <li>כאשר יש caching requirements חזקים</li>
              <li>צוות לא מכיר GraphQL</li>
              <li>CRUD פשוט ללא queries מורכבים</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-purple-600 mb-2">GraphQL - מתי להשתמש:</h4>
            <ul class="list-disc list-inside space-y-1">
              <li>כאשר הלקוח צריך גמישות בשאילתות</li>
              <li>למנוע over-fetching ו-under-fetching</li>
              <li>מערכות מורכבות עם יחסים רבים בין entities</li>
              <li>Mobile apps שצריכים לחסוך bandwidth</li>
              <li>כאשר יש מספר clients עם צרכים שונים</li>
            </ul>
          </div>
          <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <p class="font-semibold text-yellow-800">💡 המלצה:</p>
            <p class="text-yellow-700">התחל עם REST אם זה מספיק. עבור ל-GraphQL רק כאשר יש צורך אמיתי.</p>
          </div>
        </div>
      `
    },
    {
      question: "כיצד מנהלים סודות (API Keys, DB Credentials) בצורה מאובטחת בענן?",
      answer: `
        <div class="space-y-4">
          <h4 class="font-bold text-lg mb-3">Best Practices לניהול Secrets:</h4>
          <div>
            <h5 class="font-bold text-blue-600 mb-2">1. שירותי Secret Management:</h5>
            <ul class="list-disc list-inside space-y-1">
              <li><strong>AWS Secrets Manager:</strong> ניהול, rotation אוטומטי של secrets</li>
              <li><strong>Azure Key Vault:</strong> אחסון מוצפן של מפתחות ו-secrets</li>
              <li><strong>Google Secret Manager:</strong> ניהול API keys ו-credentials</li>
              <li><strong>HashiCorp Vault:</strong> פתרון קוד פתוח למערכות מורכבות</li>
            </ul>
          </div>
          <div>
            <h5 class="font-bold text-green-600 mb-2">2. משתני סביבה:</h5>
            <ul class="list-disc list-inside space-y-1">
              <li>שמור secrets ב-.env files (לא ב-git!)</li>
              <li>הגדר secrets בפלטפורמת ה-deployment (Vercel, Netlify, etc.)</li>
              <li>השתמש ב-environment-specific configs</li>
            </ul>
          </div>
          <div>
            <h5 class="font-bold text-purple-600 mb-2">3. עקרונות חשובים:</h5>
            <ul class="list-disc list-inside space-y-1">
              <li>❌ לעולם לא לשמור secrets בקוד</li>
              <li>✅ השתמש ב-IAM roles ו-service accounts</li>
              <li>✅ הגדר rotation policies למפתחות</li>
              <li>✅ הגבל גישה לפי principle of least privilege</li>
              <li>✅ הצפן secrets במנוחה ובתנועה</li>
            </ul>
          </div>
        </div>
      `
    },
    {
      question: "מה ההבדל בין Server Side Rendering ל-Client Side Rendering ובאילו מקרים נבחר כל אחד מהם?",
      answer: `
        <div class="space-y-4">
          <div>
            <h4 class="font-bold text-blue-600 mb-2">Client Side Rendering (CSR):</h4>
            <p class="font-semibold mb-1">איך זה עובד:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>הדפדפן מוריד JavaScript ריק</li>
              <li>JavaScript בונה את העמוד בצד הלקוח</li>
              <li>טוען נתונים דרך API calls</li>
            </ul>
            <p class="font-semibold text-green-600 mb-1">מתי להשתמש:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>אפליקציות SPA (Single Page Applications)</li>
              <li>דשבורדים פרטיים (לא צריך SEO)</li>
              <li>אפליקציות אינטראקטיביות (משחקים, כלים)</li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-purple-600 mb-2">Server Side Rendering (SSR):</h4>
            <p class="font-semibold mb-1">איך זה עובד:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>השרת בונה את ה-HTML</li>
              <li>הדפדפן מקבל עמוד מוכן</li>
              <li>JavaScript hydrates את העמוד</li>
            </ul>
            <p class="font-semibold text-green-600 mb-1">מתי להשתמש:</p>
            <ul class="list-disc list-inside space-y-1 mb-2">
              <li>כאשר צריך SEO (בלוגים, אתרי תוכן)</li>
              <li>First paint מהיר חשוב (UX)</li>
              <li>נתונים דינמיים per-request</li>
            </ul>
          </div>
          <div class="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p class="font-semibold text-blue-800 mb-2">💡 פתרונות היברידיים:</p>
            <p class="text-blue-700"><strong>Next.js / Nuxt.js:</strong> מאפשרים SSG (Static Site Generation), SSR, ו-CSR באותו פרויקט!</p>
          </div>
        </div>
      `
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-white shadow-xl">
    <h2 className="text-3xl font-bold mb-2" dir="rtl">שאלות ותשובות טכניות</h2>
    <p className="text-blue-100" dir="rtl">תשובות מפורטות לשאלות נפוצות בפיתוח Full Stack</p>
  </div>
  
  {faqs.map((faq, index) => (
    <div 
      key={index}
      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
    >
      {/* Question */}
      <button
        onClick={() => toggleAccordion(index)}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors duration-150"
        dir="rtl"
      >
        <h3 className="text-lg font-semibold text-gray-900 flex-1 text-right">
          {faq.question}
        </h3>
        <div className={`mr-4 transform transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
          <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div 
        className={`transition-all duration-300 ease-in-out ${
          openIndex === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200" dir="rtl">
          <div 
            className="prose prose-sm max-w-none text-gray-700"
            dangerouslySetInnerHTML={{ __html: faq.answer }}
          />
        </div>
      </div>
    </div>
  ))}
</div>
  );
};

export default FAQPage;