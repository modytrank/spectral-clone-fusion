import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

// Date and time formatting utilities
export class DateTimeFormatter {
  private locale: Locale;
  private isRTL: boolean;

  constructor(language: string) {
    this.locale = language === 'ar' ? ar : enUS;
    this.isRTL = language === 'ar';
  }

  formatDate(date: Date | string, formatString: string = 'PPP'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatString, { locale: this.locale });
  }

  formatTime(date: Date | string, formatString: string = 'p'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatString, { locale: this.locale });
  }

  formatDateTime(date: Date | string, formatString: string = 'PPp'): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return format(dateObj, formatString, { locale: this.locale });
  }

  formatRelativeTime(date: Date | string): string {
    const dateObj = typeof date === 'string' ? parseISO(date) : date;
    return formatDistanceToNow(dateObj, { 
      addSuffix: true, 
      locale: this.locale 
    });
  }

  formatShortDate(date: Date | string): string {
    return this.formatDate(date, this.isRTL ? 'dd/MM/yyyy' : 'MM/dd/yyyy');
  }

  formatLongDate(date: Date | string): string {
    return this.formatDate(date, 'PPPP');
  }
}

// Number formatting utilities
export class NumberFormatter {
  private locale: string;
  private isRTL: boolean;

  constructor(language: string) {
    this.locale = language === 'ar' ? 'ar-SA' : 'en-US';
    this.isRTL = language === 'ar';
  }

  formatNumber(value: number, options?: Intl.NumberFormatOptions): string {
    return new Intl.NumberFormat(this.locale, options).format(value);
  }

  formatCurrency(
    value: number, 
    currency: string = 'SAR',
    options?: Intl.NumberFormatOptions
  ): string {
    return new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency,
      ...options
    }).format(value);
  }

  formatPercentage(value: number, options?: Intl.NumberFormatOptions): string {
    return new Intl.NumberFormat(this.locale, {
      style: 'percent',
      ...options
    }).format(value);
  }

  formatCompactNumber(value: number): string {
    return new Intl.NumberFormat(this.locale, {
      notation: 'compact',
      compactDisplay: 'short'
    }).format(value);
  }

  formatDecimal(value: number, decimals: number = 2): string {
    return new Intl.NumberFormat(this.locale, {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  }

  // Format numbers with Arabic-Indic numerals for Arabic
  formatArabicNumerals(value: number): string {
    if (!this.isRTL) return value.toString();
    
    const arabicNumerals = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
    return value.toString().replace(/\d/g, (digit) => arabicNumerals[parseInt(digit)]);
  }
}

// Utility functions for common formatting needs
export const createFormatters = (language: string) => ({
  date: new DateTimeFormatter(language),
  number: new NumberFormatter(language)
});

// Hook for using formatters
export const useFormatters = (language: string) => {
  return createFormatters(language);
};