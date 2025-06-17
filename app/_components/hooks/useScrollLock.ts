import { useEffect } from 'react';

export const useScrollLock = () => {
  const lockScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = 'var(--scrollbar-compensation)';
  };

  const unlockScroll = () => {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  };

  useEffect(() => {
    // Calculate scrollbar width to prevent layout shift when locking scroll
    const scrollbarCompensation = window.innerWidth - document.documentElement.clientWidth;
    document.documentElement.style.setProperty(
      '--scrollbar-compensation',
      `${scrollbarCompensation}px`
    );

    return () => {
      document.documentElement.style.removeProperty('--scrollbar-compensation');
      unlockScroll();
    };
  }, []);

  return { lockScroll, unlockScroll };
};