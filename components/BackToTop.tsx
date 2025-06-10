'use client'

import { useEffect, useState } from 'react'
import { ChevronUp } from 'lucide-react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-white hover:bg-gray-50 text-gray-600 rounded-full shadow-md transition-all duration-300 z-50 border border-gray-200 hover:scale-105 hover:shadow-lg"
          aria-label="返回顶部"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </>
  )
}

export default BackToTop 
