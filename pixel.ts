// Type for standard Facebook Pixel events
type StandardEvents = 
  | 'PageView'
  | 'Lead'
  | 'Contact'
  | 'CompleteRegistration'
  | 'InitiateCheckout'
  | 'ViewContent'
  | 'AddToCart'
  | 'Purchase';

// Track standard events
export const pixelEvent = (eventName: StandardEvents, data = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, data);
  }
};

// Track custom events
export const pixelCustomEvent = (eventName: string, data = {}) => {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('trackCustom', eventName, data);
  }
};