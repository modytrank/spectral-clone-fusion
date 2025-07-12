import React, { useState } from 'react';
import { Globe } from 'lucide-react';
import { useI18n } from '@/hooks/useI18n';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher = ({
  className = ""
}: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage, languages } = useI18n();
  
  const handleLanguageChange = (langCode: string) => {
    changeLanguage(langCode);
    setIsOpen(false);
  };
  
  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];
  
  return (
    <div className={`relative ${className}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Switch language"
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 text-pulse-500"
      >
        <Globe className="w-4 h-4" />
        <span className="text-sm font-medium">{currentLang.nativeName}</span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)} 
          />
          
          {/* Dropdown */}
          <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg border border-gray-200 min-w-[150px] z-50">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`
                  w-full text-left px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-200
                  ${language.code === currentLanguage ? 'bg-pulse-50 text-pulse-600 font-medium' : 'text-gray-700'}
                  ${language.code === languages[0].code ? 'rounded-t-lg' : ''}
                  ${language.code === languages[languages.length - 1].code ? 'rounded-b-lg' : ''}
                `}
                dir={language.code === 'ar' ? 'rtl' : 'ltr'}
              >
                <div className="flex items-center justify-between">
                  <span>{language.nativeName}</span>
                  <span className="text-xs text-gray-500">{language.name}</span>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default LanguageSwitcher;