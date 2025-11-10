// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'fr'
      },
      title: 'Florentin LÉGER - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Portfolio de Florentin LÉGER, créateur d\'expériences digitales. Découvrez mes projets en développement web, design UI/UX et mes 2 années d\'expérience.' },
        { name: 'keywords', content: 'Florentin LÉGER, développeur web, UI/UX designer, portfolio, développement web, JavaScript, Vue.js, Nuxt.js, Tailwind CSS' },
        { name: 'author', content: 'Florentin LÉGER' },
        { name: 'theme-color', content: '#3255A0' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Florentin LÉGER - Créateur d\'expériences digitales' },
        { property: 'og:description', content: 'Portfolio de Florentin LÉGER, créateur d\'expériences digitales. Découvrez mes projets en développement web, design UI/UX et mes 2 années d\'expérience.' },
        { property: 'og:site_name', content: 'Florentin LÉGER Portfolio' },
        { property: 'og:locale', content: 'fr_FR' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Florentin LÉGER - Créateur d\'expériences digitales' },
        { name: 'twitter:description', content: 'Portfolio de Florentin LÉGER, créateur d\'expériences digitales. Découvrez mes projets en développement web, design UI/UX et mes 2 années d\'expérience.' },

        // SEO supplémentaire
        { name: 'robots', content: 'index, follow' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'canonical', href: 'https://florentin-leger.fr' }
      ]
    }
  }
})
