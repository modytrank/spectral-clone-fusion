import React from 'react';
import { useTranslation } from 'react-i18next';

interface TranslatedTextProps {
  i18nKey: string;
  values?: Record<string, any>;
  components?: Record<string, React.ReactElement>;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  dangerouslySetInnerHTML?: boolean;
}

export const TranslatedText: React.FC<TranslatedTextProps> = ({
  i18nKey,
  values,
  components,
  className,
  as: Component = 'span',
  dangerouslySetInnerHTML = false
}) => {
  const { t } = useTranslation('common');
  
  const translatedText = t(i18nKey, values);
  
  if (dangerouslySetInnerHTML) {
    return (
      <Component 
        className={className}
        dangerouslySetInnerHTML={{ __html: translatedText }}
      />
    );
  }
  
  if (components) {
    // Handle interpolation with React components
    let result: React.ReactNode = translatedText;
    
    Object.entries(components).forEach(([key, component]) => {
      const regex = new RegExp(`<${key}>(.*?)</${key}>`, 'g');
      result = (result as string).replace(regex, (match, content) => {
        return React.cloneElement(component, { key: Math.random() }, content);
      });
    });
    
    return <Component className={className}>{result}</Component>;
  }
  
  return <Component className={className}>{translatedText}</Component>;
};

// Convenience components for common use cases
export const T = TranslatedText;

export const TH1: React.FC<Omit<TranslatedTextProps, 'as'>> = (props) => (
  <TranslatedText {...props} as="h1" />
);

export const TH2: React.FC<Omit<TranslatedTextProps, 'as'>> = (props) => (
  <TranslatedText {...props} as="h2" />
);

export const TH3: React.FC<Omit<TranslatedTextProps, 'as'>> = (props) => (
  <TranslatedText {...props} as="h3" />
);

export const TP: React.FC<Omit<TranslatedTextProps, 'as'>> = (props) => (
  <TranslatedText {...props} as="p" />
);

export const TSpan: React.FC<Omit<TranslatedTextProps, 'as'>> = (props) => (
  <TranslatedText {...props} as="span" />
);