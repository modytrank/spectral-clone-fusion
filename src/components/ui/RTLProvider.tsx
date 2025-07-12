import React, { createContext, useContext, useEffect } from 'react';
import { useI18n } from '@/hooks/useI18n';

interface RTLContextType {
  isRTL: boolean;
  direction: 'ltr' | 'rtl';
}

const RTLContext = createContext<RTLContextType>({
  isRTL: false,
  direction: 'ltr'
});

export const useRTL = () => useContext(RTLContext);

interface RTLProviderProps {
  children: React.ReactNode;
}

export const RTLProvider: React.FC<RTLProviderProps> = ({ children }) => {
  const { isRTL } = useI18n();
  const direction = isRTL ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update CSS custom properties for RTL support
    document.documentElement.style.setProperty('--text-align-start', isRTL ? 'right' : 'left');
    document.documentElement.style.setProperty('--text-align-end', isRTL ? 'left' : 'right');
    document.documentElement.style.setProperty('--margin-start', isRTL ? 'margin-right' : 'margin-left');
    document.documentElement.style.setProperty('--margin-end', isRTL ? 'margin-left' : 'margin-right');
    document.documentElement.style.setProperty('--padding-start', isRTL ? 'padding-right' : 'padding-left');
    document.documentElement.style.setProperty('--padding-end', isRTL ? 'padding-left' : 'padding-right');
    document.documentElement.style.setProperty('--border-start', isRTL ? 'border-right' : 'border-left');
    document.documentElement.style.setProperty('--border-end', isRTL ? 'border-left' : 'border-right');
    
    // Add RTL class to body for additional styling
    if (isRTL) {
      document.body.classList.add('rtl');
    } else {
      document.body.classList.remove('rtl');
    }
  }, [isRTL]);

  return (
    <RTLContext.Provider value={{ isRTL, direction }}>
      <div dir={direction} className={isRTL ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </RTLContext.Provider>
  );
};