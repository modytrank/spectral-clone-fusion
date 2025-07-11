// Translation system for MovinWare
export interface Translations {
  // Navigation
  home: string;
  value360: string;
  platform: string;
  industries: string;
  solutions: string;
  services: string;
  packages: string;
  contact: string;
  menu: string;

  // Hero Section
  erpSolutions: string;
  heroTitle: string;
  heroSubtitle: string;
  startYourJourney: string;

  // Contact Section
  getInTouch: string;
  contactUs: string;
  sendMessage: string;
  readyToTransform: string;
  contactToday: string;
  fullName: string;
  email: string;
  company: string;
  phone: string;
  inquiryType: string;
  message: string;
  sendMessageBtn: string;
  sending: string;
  messageSent: string;
  tryAgain: string;
  contactInformation: string;
  quickActions: string;
  talkToExpert: string;
  scheduleExpert: string;
  scheduleConsultation: string;
  bookFreeConsultation: string;
  whatsappSupport: string;
  instantWhatsappSupport: string;
  tellUsAboutProject: string;
  messageDelivered: string;
  messageDeliveredDesc: string;
  messageFailed: string;
  messageFailedDesc: string;
  
  // Contact form options
  generalInquiry: string;
  erpImplementation: string;
  customDevelopment: string;
  support: string;
  partnership: string;
  demoRequest: string;

  // Contact info
  location: string;
  online: string;
}

export const translations: Record<string, Translations> = {
  en: {
    // Navigation
    home: "Home",
    value360: "360° Value",
    platform: "Platform",
    industries: "Industries",
    solutions: "Solutions",
    services: "Services",
    packages: "Packages",
    contact: "Contact",
    menu: "Menu",

    // Hero Section
    erpSolutions: "ERP Solutions",
    heroTitle: "Intelligent Operations.\nSeamless Transformation",
    heroSubtitle: "AI-powered ERP system designed for your workflow. Streamline operations, boost efficiency, and future-proof your business with MovinWare's intelligent solutions.",
    startYourJourney: "Start Your Journey",

    // Contact Section
    getInTouch: "Get In Touch",
    contactUs: "Contact Us",
    sendMessage: "Send us a message",
    readyToTransform: "Ready to transform your business? Contact us today to get started.",
    contactToday: "Contact us today to get started.",
    fullName: "Full Name",
    email: "Email",
    company: "Company",
    phone: "Phone",
    inquiryType: "Inquiry Type",
    message: "Message",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent!",
    tryAgain: "Try Again",
    contactInformation: "Contact Information",
    quickActions: "Quick Actions",
    talkToExpert: "Talk to Expert",
    scheduleExpert: "Schedule a call with our experts",
    scheduleConsultation: "Schedule Consultation",
    bookFreeConsultation: "Book a free consultation",
    whatsappSupport: "WhatsApp Support",
    instantWhatsappSupport: "Get instant support via WhatsApp",
    tellUsAboutProject: "Tell us about your project...",
    messageDelivered: "Message delivered successfully!",
    messageDeliveredDesc: "We've received your message and will respond within 24 hours.",
    messageFailed: "Failed to send message",
    messageFailedDesc: "Please try again or contact us directly at",

    // Contact form options
    generalInquiry: "General Inquiry",
    erpImplementation: "ERP Implementation",
    customDevelopment: "Custom Development",
    support: "Support",
    partnership: "Partnership",
    demoRequest: "Demo Request",

    // Contact info
    location: "Location",
    online: "Online",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    value360: "القيمة الشاملة",
    platform: "المنصة",
    industries: "الصناعات",
    solutions: "الحلول",
    services: "الخدمات",
    packages: "الباقات",
    contact: "تواصل معنا",
    menu: "القائمة",

    // Hero Section
    erpSolutions: "حلول تخطيط موارد المؤسسات",
    heroTitle: "عمليات ذكية.\nتحول سلس",
    heroSubtitle: "نظام تخطيط موارد المؤسسات مدعوم بالذكاء الاصطناعي ومصمم خصيصاً لسير عملك. بسّط العمليات، عزز الكفاءة، واجعل عملك مستعداً للمستقبل مع الحلول الذكية من موڤين وير.",
    startYourJourney: "ابدأ رحلتك",

    // Contact Section
    getInTouch: "تواصل معنا",
    contactUs: "تواصل معنا",
    sendMessage: "أرسل لنا رسالة",
    readyToTransform: "مستعد لتحويل عملك؟ تواصل معنا اليوم للبدء.",
    contactToday: "تواصل معنا اليوم للبدء.",
    fullName: "الاسم الكامل",
    email: "البريد الإلكتروني",
    company: "الشركة",
    phone: "الهاتف",
    inquiryType: "نوع الاستفسار",
    message: "الرسالة",
    sendMessageBtn: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    messageSent: "تم إرسال الرسالة!",
    tryAgain: "حاول مرة أخرى",
    contactInformation: "معلومات التواصل",
    quickActions: "إجراءات سريعة",
    talkToExpert: "تحدث مع خبير",
    scheduleExpert: "حدد موعداً مع خبرائنا",
    scheduleConsultation: "حدد موعد استشارة",
    bookFreeConsultation: "احجز استشارة مجانية",
    whatsappSupport: "دعم واتساب",
    instantWhatsappSupport: "احصل على دعم فوري عبر واتساب",
    tellUsAboutProject: "أخبرنا عن مشروعك...",
    messageDelivered: "تم تسليم الرسالة بنجاح!",
    messageDeliveredDesc: "لقد تلقينا رسالتك وسنرد خلال 24 ساعة.",
    messageFailed: "فشل في إرسال الرسالة",
    messageFailedDesc: "يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة على",

    // Contact form options
    generalInquiry: "استفسار عام",
    erpImplementation: "تطبيق نظام تخطيط الموارد",
    customDevelopment: "تطوير مخصص",
    support: "الدعم",
    partnership: "الشراكة",
    demoRequest: "طلب عرض توضيحي",

    // Contact info
    location: "الموقع",
    online: "عبر الإنترنت",
  }
};

// Hook to get current language and translations
export const useTranslation = () => {
  const getCurrentLanguage = (): string => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'en';
    }
    return 'en';
  };

  const currentLanguage = getCurrentLanguage();
  const t = translations[currentLanguage] || translations.en;
  const isRTL = currentLanguage === 'ar';

  return {
    t,
    currentLanguage,
    isRTL,
    // Helper function to get font class for current language
    getFontClass: () => isRTL ? 'font-arabic' : 'font-sans'
  };
};