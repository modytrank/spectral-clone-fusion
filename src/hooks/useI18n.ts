import { useTranslation } from 'react-i18next';
import { useCallback, useEffect } from 'react';

export const useI18n = () => {
  const { t, i18n } = useTranslation('common');
  
  const currentLanguage = i18n.language;
  const isRTL = currentLanguage === 'ar';
  
  const changeLanguage = useCallback((lng: string) => {
    i18n.changeLanguage(lng);
    
    // Update document direction and language
    document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
    
    // Store in localStorage
    localStorage.setItem('language', lng);
  }, [i18n]);

  useEffect(() => {
    // Set initial direction and language
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
  }, [currentLanguage, isRTL]);

  return {
    t,
    currentLanguage,
    isRTL,
    changeLanguage,
    languages: [
      { code: 'en', name: 'English', nativeName: 'English' },
      { code: 'ar', name: 'Arabic', nativeName: 'العربية' }
    ]
  };
};