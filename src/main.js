import { createIcons, Menu, X, ArrowDownRight, MapPin, Code2, Palette, ArrowRight, Play, AlertCircle, Download, Send, Mail, Globe, CheckCircle, ArrowUp, Hand, Sun, Moon, Handshake, ExternalLink } from 'lucide'

createIcons({
  icons: {
    Menu, X, ArrowDownRight, MapPin, Code2, Palette,
    ArrowRight, Play, AlertCircle, Download, Send,
    Mail, Globe, CheckCircle, ArrowUp, Hand, Sun, Moon, Handshake, ExternalLink,
  },
})

// Dark Mode
const darkModeToggle = document.getElementById('darkModeToggle')
const html = document.documentElement

if (localStorage.getItem('darkMode') === 'true' ||
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  html.classList.add('dark')
}

darkModeToggle.addEventListener('click', () => {
  html.classList.toggle('dark')
  localStorage.setItem('darkMode', html.classList.contains('dark'))
})

const menuToggle = document.getElementById('menuToggle')
const menuClose = document.getElementById('menuClose')
const mobileMenu = document.getElementById('mobileMenu')
const mobileLinks = document.querySelectorAll('.mobile-link')

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('open')
})

menuClose.addEventListener('click', () => {
  mobileMenu.classList.remove('open')
})

mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open')
  })
})

const contactForm = document.getElementById('contactForm')
const toast = document.getElementById('toast')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()
  toast.classList.add('show')
  contactForm.reset()
  setTimeout(() => {
    toast.classList.remove('show')
  }, 4000)
})

const scrollProgress = document.getElementById('scrollProgress')

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = scrollTop / docHeight
  scrollProgress.style.transform = `scaleX(${scrollPercent})`
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px',
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1'
      entry.target.style.transform = 'translateY(0)'
    }
  })
}, observerOptions)

document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0'
  section.style.transform = 'translateY(30px)'
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
  observer.observe(section)
})

document.getElementById('hero').style.opacity = '1'
document.getElementById('hero').style.transform = 'translateY(0)'

document.addEventListener('click', (e) => {
  if (mobileMenu.classList.contains('open') &&
      !mobileMenu.contains(e.target) &&
      !menuToggle.contains(e.target)) {
    mobileMenu.classList.remove('open')
  }
})
