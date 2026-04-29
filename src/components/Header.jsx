import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const links = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About Me' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  // { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [activeId, setActiveId] = useState('#home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100
      let currentActive = '#home'
      
      for (const link of links) {
        const id = link.href.substring(1)
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          currentActive = link.href
        }
      }
      setActiveId(currentActive)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      className="navbar" 
      role="navigation" 
      aria-label="Primary navigation"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <ul>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className={activeId === l.href ? 'active' : undefined}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </motion.header>
  )
}

