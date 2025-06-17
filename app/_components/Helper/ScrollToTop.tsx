"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

const ScrollToTop = () => {
    const [showButton, setShowButton] = useState(false);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    useEffect(() => {
        if (!isClient) return;

        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isClient]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        })
    }

    if (!isClient) return null;

    return (
        <div className={`${showButton ? "fixed" : "hidden"} bottom-4 right-4 animate-pulse z-30`}>
            <button 
              onClick={scrollToTop} 
              className='bg-emerald-500 hover:bg-emerald-600 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none transition-colors duration-300'
            >
                <FaArrowUp />
            </button>
        </div>
    )
}

export default ScrollToTop