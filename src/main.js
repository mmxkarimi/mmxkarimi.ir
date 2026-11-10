import { createIcons, Menu, X, ArrowDown, ArrowUp, ArrowUpRight, MapPin, Code2, Palette, Mail, Globe, Sun, Moon, BookOpen, NotebookPen, Music } from 'lucide'

createIcons({
  icons: {
    Menu, X, ArrowDown, ArrowUp, ArrowUpRight, MapPin, Code2, Palette,
    Mail, Globe, Sun, Moon, BookOpen, NotebookPen, Music,
  },
  attrs: { 'stroke-width': 2.5 },
})

// Dark Mode (the initial class is set by the inline script in <head>)
const html = document.documentElement

document.getElementById('themeToggle').addEventListener('click', () => {
  html.classList.toggle('dark')
  localStorage.setItem('darkMode', html.classList.contains('dark'))
})

const menuToggle = document.getElementById('menuToggle')
const mobileMenu = document.getElementById('mobileMenu')

const setMenuOpen = (open) => {
  mobileMenu.hidden = !open
  menuToggle.setAttribute('aria-expanded', String(open))
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(mobileMenu.hidden)
})

mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false))
})

document.addEventListener('click', (e) => {
  if (!mobileMenu.hidden &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    setMenuOpen(false)
  }
})

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') setMenuOpen(false)
})

const scrollProgress = document.getElementById('scrollProgress')

window.addEventListener('scroll', () => {
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = docHeight > 0 ? window.scrollY / docHeight : 0
  scrollProgress.style.transform = `scaleX(${scrollPercent})`
}, { passive: true })

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  })
}, {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
})

document.querySelectorAll('[data-reveal]').forEach(el => {
  el.classList.add('reveal')
  observer.observe(el)
})
