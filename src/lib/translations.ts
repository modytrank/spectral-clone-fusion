export const translations = {
  en: {
    // Navigation
    home: "Home",
    services: "Services",
    erpSolutions: "ERP Solutions",
    aboutUs: "About Us",
    contact: "Contact",
    
    // Hero Section
    heroTitle: "Revolutionary AI-Powered Humanoid Robots",
    heroSubtitle: "Transform your business with cutting-edge humanoid robots powered by advanced AI. Experience the future of automation and human-robot collaboration.",
    getStarted: "Get Started",
    learnMore: "Learn More",
    
    // Services
    servicesTitle: "Our Services",
    servicesSubtitle: "Comprehensive solutions for every business need",
    
    // ERP Solutions
    erpTitle: "ERP Solutions",
    erpSubtitle: "Streamline your business operations with our comprehensive ERP systems",
    fullIntegration: "Full Integration",
    completeHRSuite: "Complete HR Suite",
    salesOptimization: "Sales Optimization",
    
    // Contact
    contactTitle: "Get in Touch",
    contactSubtitle: "Ready to transform your business? Contact us today.",
    phone: "Phone",
    email: "Email",
    location: "Location",
    online: "Online",
    
    // Footer
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    
    // Common
    close: "Close",
    viewDetails: "View Details"
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    services: "الخدمات",
    erpSolutions: "حلول تخطيط موارد المؤسسات",
    aboutUs: "من نحن",
    contact: "اتصل بنا",
    
    // Hero Section
    heroTitle: "روبوتات بشرية ثورية مدعومة بالذكاء الاصطناعي",
    heroSubtitle: "حوّل عملك باستخدام روبوتات بشرية متطورة مدعومة بالذكاء الاصطناعي المتقدم. اختبر مستقبل الأتمتة والتعاون بين الإنسان والروبوت.",
    getStarted: "ابدأ الآن",
    learnMore: "اعرف المزيد",
    
    // Services
    servicesTitle: "خدماتنا",
    servicesSubtitle: "حلول شاملة لكل احتياجات العمل",
    
    // ERP Solutions
    erpTitle: "حلول تخطيط موارد المؤسسات",
    erpSubtitle: "اجعل عمليات عملك أكثر كفاءة مع أنظمة تخطيط الموارد الشاملة",
    fullIntegration: "تكامل كامل",
    completeHRSuite: "مجموعة الموارد البشرية الكاملة",
    salesOptimization: "تحسين المبيعات",
    
    // Contact
    contactTitle: "تواصل معنا",
    contactSubtitle: "مستعد لتحويل عملك؟ اتصل بنا اليوم.",
    phone: "الهاتف",
    email: "البريد الإلكتروني",
    location: "الموقع",
    online: "عبر الإنترنت",
    
    // Footer
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",
    
    // Common
    close: "إغلاق",
    viewDetails: "عرض التفاصيل"
  }
};

export const getTranslation = (key: string, lang: string = 'en'): string => {
  const langTranslations = translations[lang as keyof typeof translations] || translations.en;
  return langTranslations[key as keyof typeof langTranslations] || key;
};

export const getCurrentLanguage = (): string => {
  return localStorage.getItem('language') || 'en';
};