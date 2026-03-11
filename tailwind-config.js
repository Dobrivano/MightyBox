// tailwind-config.js — GG Solutions | Mighty Boxes
tailwind.config = {
  theme: {
    extend: {
      colors: {
        forest: '#0B2219',
        action: '#2DCC70',
        sand:   '#F4F1EA',
        gold:   '#C5A059'
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    }
  },
  content: [
    "./index.html",
    "./about_us.html",
    "./projects.html",
    "./src/**/*.{html,js}"
  ]
}