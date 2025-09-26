import { useEffect, useRef, useState, useCallback } from 'react';

export function useMobileScrollGlow() {
  const [activeItems, setActiveItems] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  const isMobile = useRef(false);

  useEffect(() => {
    // Check if device is mobile
    isMobile.current = window.matchMedia('(max-width: 768px)').matches;
    
    if (!isMobile.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            setActiveItems(prev => new Set([...prev, index]));
          } else {
            setActiveItems(prev => {
              const next = new Set(prev);
              next.delete(index);
              return next;
            });
          }
        });
      },
      { 
        threshold: [0, 0.3, 0.7, 1],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const registerElement = useCallback((element: HTMLElement | null, index: number) => {
    if (element && observerRef.current && isMobile.current) {
      element.setAttribute('data-index', index.toString());
      observerRef.current.observe(element);
    }
  }, []);

  return { activeItems, registerElement, isMobile: isMobile.current };
}