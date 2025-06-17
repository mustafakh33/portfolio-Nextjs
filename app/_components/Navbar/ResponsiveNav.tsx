"use client"
import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { useScrollLock } from '../hooks/useScrollLock'

const ResponsiveNav = () => {
  const [showNav, setShowNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lockScroll, unlockScroll } = useScrollLock();
  
  const showNavHandle = () => {
    setShowNav(true);
    lockScroll();
  };
  
  const closeNavHandle = () => {
    setShowNav(false);
    unlockScroll();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024 && showNav) {
        closeNavHandle();
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [showNav]);

  return (
    <div className='relative z-50'>
      <Nav showNavHandle={showNavHandle} scrolled={scrolled} />
      <MobileNav showNav={showNav} closeNavHandle={closeNavHandle} />
    </div>
  )
}

export default ResponsiveNav