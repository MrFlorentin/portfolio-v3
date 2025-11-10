<template>

  <header id="hero" class="h-screen flex items-center justify-center bg-bleu text-white text-center px-6 relative overflow-hidden" role="banner">
    
    <div class="decorative-circle" aria-hidden="true"></div>
    <img src="/assets/icons/etoile.svg" alt="" class="decorative-star" aria-hidden="true" />
    
    <div class="relative z-10">
      <h1 class="tk-stop-mn text-7xl lg:text-8xl leading-tight outline-shadow" data-text="FLORENTIN LÉGER">
        FLORENTIN LÉGER
      </h1>
      <p class="text-xl lg:text-2xl mb-10">
        CRÉATEUR D'EXPÉRIENCES DIGITALES DEPUIS
      </p>
      
      <div class="flex items-center justify-center gap-8 mb-10" role="list" aria-label="Statistiques">
        <div class="text-center" role="listitem">
          <div class="text-3xl font-bold mb-1 tk-argent-pixel-cf" aria-label="2 années d'expérience">02</div>
          <div class="text-sm text-white/70 uppercase tracking-wider">Années</div>
        </div>
        
        <div class="text-white/50 text-3xl" aria-hidden="true">|</div>
        
        <div class="text-center" role="listitem">
          <div class="text-3xl font-bold mb-1 tk-argent-pixel-cf" aria-label="Plus de 7 projets réalisés">+ 7</div>
          <div class="text-sm text-white/70 uppercase tracking-wider">Projets</div>
        </div>
        
        <div class="text-white/50 text-3xl" aria-hidden="true">|</div>
        
        <div class="text-center" role="listitem">
          <div class="text-3xl font-bold tk-argent-pixel-cf" aria-label="Passion infinie">∞</div>
          <div class="text-sm text-white/70 uppercase tracking-wider">Passion</div>
        </div>
      </div>
      
      <a href="#about-me" class="inline-flex items-center justify-center px-12 bg-white text-[var(--bleu)] rounded-2xl font-semibold leading-none btn-centered" aria-label="En savoir plus sur mon parcours">
        En savoir plus !
      </a>
    </div>

    <div class="wave-divider" aria-hidden="true">
      <svg viewBox="0 0 3351 317" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" role="presentation">
      <path d="M24.0767 263.53C137.667 177.91 317.527 72.02 528.517 89.2C728.947 105.52 778.767 218.36 981.027 263.53C1282.81 330.92 1366.86 123.27 1745.1 88.76C2151.26 51.71 2253.94 272.93 2668.66 256.11C2958.73 244.35 3188.12 124.78 3328.88 33.56" stroke="white" stroke-width="80" stroke-miterlimit="10"/>
      </svg>
    </div>

  </header>

  <section id="about-me" class="min-h-screen mx-auto max-w-5xl px-6 py-5 relative" aria-labelledby="about-title">
    
    <div class="decorative-circle-about" aria-hidden="true"></div>
    <img src="/assets/icons/etoile.svg" alt="" class="decorative-star-about" aria-hidden="true" />
    
    <h2 id="about-title" class="text-4xl mb-2 text-white tk-argent-pixel-cf text-center lg:text-left relative z-10">
      Qui suis-je ?
    </h2>
    <p class="text-md font-normal text-center lg:text-left mt-10 text-white lg:mr-64 leading-relaxed">
      Depuis que j’ai <strong>découvert le code</strong> en étant petit, j’ai compris que le web pouvait être un <strong>terrain de jeu sans limites</strong>. À 19 ans, je combine développement et design pour donner vie à des projets qui sont <strong>porteurs de sens</strong>.
      <br />
      <br />
      <em>Mon objectif ?</em>
      <br />
      Créer plus que des projets : des <strong>expériences digitales </strong>qui inspirent, tout en continuant à apprendre chaque jour un peu plus.
    </p>

    <h3 id="timeline-title" class="text-2xl mt-16 mb-6 text-white tk-argent-pixel-cf text-center lg:text-left">
      Mon parcours
    </h3>

    <nav class="flex mt-8 flex-col items-center lg:items-start" aria-labelledby="timeline-title">
      <article 
        v-for="(item, index) in timeline" 
        :key="item.id"
        class="relative pl-20 mb-12 flex items-start group w-full max-w-2xl lg:max-w-none"
      >
        <div v-if="index < timeline.length - 1" class="absolute left-8 top-16 w-0.5 h-full bg-white/20" aria-hidden="true"></div>
        
        <div class="absolute left-0 top-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-[var(--bleu)] shadow-lg z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl" aria-hidden="true">
          <svg v-if="item.icon === 'graduation'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" role="img" aria-label="Formation">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
          
          <svg v-else-if="item.icon === 'code'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" role="img" aria-label="Développement">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          
          <svg v-else-if="item.icon === 'shopping-cart'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" role="img" aria-label="E-commerce">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          
          <svg v-else-if="item.icon === 'briefcase'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6" role="img" aria-label="Entreprise">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        
        <div class="flex-1">
          <time class="text-white font-semibold text-sm mb-1 block">{{ item.period }}</time>
          <h4 class="text-white text-2xl font-bold mb-1">{{ item.title }}</h4>
          <p class="text-white text-base font-medium mb-2">{{ item.role }}</p>
          <p class="text-white text-sm leading-relaxed">{{ item.description }}</p>
        </div>
      </article>
    </nav>
  </section>

  <section id="projects" class="min-h-screen mx-auto max-w-6xl px-6 relative" aria-labelledby="projects-title">
    
    <div class="decorative-circle-projects" aria-hidden="true"></div>
    <img src="/assets/icons/etoile.svg" alt="" class="decorative-star-projects" aria-hidden="true" />
    
    <h2 id="projects-title" class="text-4xl mb-2 text-white tk-argent-pixel-cf text-center lg:text-left relative z-10">
      Mes projets
    </h2>
    <p class="text-white text-lg leading-relaxed text-center lg:text-left mb-8">Plutôt qu'une liste de compétences, laissez-moi vous montrer ce que je sais faire.</p>
    
    <nav class="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start" aria-label="Filtrer les projets par compétence" role="navigation">
      <button
        @click="selectedFilter = 'Tous'"
        :class="[
          'filter-btn px-4 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer',
          selectedFilter === 'Tous' 
            ? 'bg-white text-[var(--bleu)] shadow-lg scale-105' 
            : 'bg-white/10 text-white/80 border border-white/15 hover:bg-white/15 hover:border-white/25'
        ]"
        :aria-pressed="selectedFilter === 'Tous'"
        aria-label="Afficher tous les projets"
      >
        Tous
      </button>
      <button
        v-for="skill in uniqueSkills"
        :key="skill"
        @click="selectedFilter = skill"
        :class="[
          'filter-btn px-4 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer',
          selectedFilter === skill 
            ? 'bg-white text-[var(--bleu)] shadow-lg scale-105' 
            : 'bg-white/10 text-white/80 border border-white/15 hover:bg-white/15 hover:border-white/25'
        ]"
        :aria-pressed="selectedFilter === skill"
        :aria-label="`Filtrer les projets par ${skill}`"
      >
        {{ skill }}
      </button>
    </nav>
    
    <TransitionGroup 
      name="projects"
      tag="div"
      class="grid grid-cols-1 lg:grid-cols-2 gap-6"
    >
      <article 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="group bg-white/5 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:border-white/20 hover:scale-[1.02] flex flex-col"
      >
        <div class="h-48 bg-gradient-to-br relative overflow-hidden" :class="project.gradient">
          <template v-if="project.image">
            <img 
              :src="project.image" 
              :alt="project.alt"
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 transition-opacity duration-300 group-hover:opacity-75"></div>
          </template>
          
          <div v-else class="absolute inset-0 flex items-center justify-center text-white/80 text-7xl select-none transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 animate-float-icon">
            {{ project.icon || '📁' }}
          </div>
        </div>
        
        <div class="p-6 flex flex-col flex-1">
          <div class="flex items-start justify-between mb-2">
            <div>
              <h3 class="text-2xl font-bold text-white mb-1 transition-colors duration-300 group-hover:text-white/90">{{ project.title }}</h3>
              <div class="icon-text icon-calendar text-white/60 text-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ project.type }} | {{ project.date }}</span>
              </div>
            </div>
          </div>
          
          <p class="text-white/80 text-sm leading-relaxed mb-4">
            {{ project.description }}
          </p>
          
          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="tag in project.tags" 
              :key="tag"
              class="project-tag cursor-default select-none bg-white/10 text-white/80 px-3 rounded-xl text-xs font-medium border border-white/15 transition-all duration-300 group-hover:bg-white/15 group-hover:border-white/25 hover:scale-105"
            >
              {{ tag }}
            </span>
          </div>
          
          <div class="flex items-center justify-between mt-auto pt-2">
            <div class="icon-text text-white/50 text-xs">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <span>{{ project.duration }}</span>
            </div>
            
            <a :href="project.link" target="_blank" class="icon-text no-hover text-white/60 transition-all duration-300 hover:text-white group/link text-xs">
              <span>Voir le projet</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 transition-transform duration-300 group-hover/link:scale-110">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </article>
    </TransitionGroup>
    
    <nav v-if="totalPages > 1" class="flex items-center justify-center gap-3 mt-12" aria-label="Pagination des projets">
      <button 
        @click="currentPage--" 
        :disabled="currentPage === 1"
        class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        :class="currentPage === 1 ? 'bg-white/5 text-white/30' : 'bg-white/10 text-white hover:bg-white hover:text-[var(--bleu)] hover:scale-105 cursor-pointer'"
        aria-label="Page précédente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <div class="flex items-center gap-2" role="group" aria-label="Pages">
        <button
          v-for="page in totalPages"
          :key="page"
          @click="currentPage = page"
          class="pagination-btn w-10 h-10 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer"
          :class="currentPage === page 
            ? 'bg-white text-[var(--bleu)] scale-110 shadow-lg' 
            : 'bg-white/10 text-white/80 hover:bg-white/20 hover:scale-105'"
          :aria-label="`Page ${page}`"
          :aria-current="currentPage === page ? 'page' : false"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        @click="currentPage++" 
        :disabled="currentPage === totalPages"
        class="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
        :class="currentPage === totalPages ? 'bg-white/5 text-white/30' : 'bg-white/10 text-white hover:bg-white hover:text-[var(--bleu)] hover:scale-105 cursor-pointer'"
        aria-label="Page suivante"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </nav>
  </section>

  <section id="contact" class="mx-auto max-w-5xl px-6 py-20 relative flex flex-col items-center justify-center" aria-labelledby="contact-title">
    
    <div class="decorative-circle-contact" aria-hidden="true"></div>
    <img src="/assets/icons/etoile.svg" alt="" class="decorative-star-contact" aria-hidden="true" />
    
    <h2 id="contact-title" class="text-4xl mb-4 text-white tk-argent-pixel-cf text-center relative z-10">
      On se contacte ?
    </h2>
    <p class="text-white text-lg leading-relaxed text-center mb-6 max-w-2xl relative z-10">
      Vous avez un projet en tête ou souhaitez simplement échanger ?
      <br />N'hésitez pas à me contacter !
    </p>
    
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl">
      <a 
        href="mailto:florentinleger@proton.me" 
        class="contact-btn group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white px-8 rounded-2xl border border-white/15 transition-all duration-300 hover:bg-white hover:text-[var(--bleu)] hover:scale-105 hover:shadow-xl backdrop-blur-sm"
        aria-label="M'envoyer un email à florentinleger@proton.me"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span class="font-medium">florentinleger@proton.me</span>
      </a>
      
      <a 
        href="https://www.linkedin.com/in/florentin-leger/" 
        target="_blank"
        rel="noopener noreferrer"
        class="contact-btn group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white px-8 rounded-2xl border border-white/15 transition-all duration-300 hover:bg-white hover:text-[var(--bleu)] hover:scale-105 hover:shadow-xl backdrop-blur-sm"
        aria-label="Voir mon profil LinkedIn (s'ouvre dans un nouvel onglet)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
        <span class="font-medium">LinkedIn</span>
      </a>
      
      <a 
        href="https://github.com/MrFlorentin" 
        target="_blank"
        rel="noopener noreferrer"
        class="contact-btn group w-full sm:w-auto flex items-center justify-center gap-3 bg-white/10 text-white px-8 rounded-2xl border border-white/15 transition-all duration-300 hover:bg-white hover:text-[var(--bleu)] hover:scale-105 hover:shadow-xl backdrop-blur-sm"
        aria-label="Voir mon profil GitHub (s'ouvre dans un nouvel onglet)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-6 h-6 transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        <span class="font-medium">GitHub</span>
      </a>
    </div>
  </section>

  <footer class="mx-auto max-w-5xl px-6 py-8 text-center">
    <p class="text-white/50 text-sm">
      {{ new Date().getFullYear() }} — Florentin LÉGER
    </p>
    <p class="text-white/40 text-sm">
      Petite dédicace à mes partenaires de galère et d'agitation, 
      <a 
        href="https://www.linkedin.com/in/%C3%A9glantine-m%C3%A9nard-web8a019132a/" 
        target="_blank"
        class="text-white/60 no-hover hover:text-white transition-colors duration-300 underline decoration-white/30 hover:decoration-white underline-offset-2"
      >
        Églantine</a> 
       & 
      <a 
        href="https://www.linkedin.com/in/noah-busnoult/" 
        target="_blank"
        class="text-white/60 no-hover hover:text-white transition-colors duration-300 underline decoration-white/30 hover:decoration-white underline-offset-2"
      >
        Noah</a>.
    </p>
  </footer>
  
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import projectsData from '~/data/projects.json'
import timelineData from '~/data/timeline.json'

const projects = projectsData
const timeline = timelineData

const selectedFilter = ref('Tous')

const currentPage = ref(1)
const projectsPerPage = 4

const uniqueSkills = computed(() => {
  const allSkills = projects.flatMap(project => project.tags)
  return [...new Set(allSkills)].sort()
})

const allFilteredProjects = computed(() => {
  if (selectedFilter.value === 'Tous') {
    return projects
  }
  return projects.filter(project => 
    project.tags.includes(selectedFilter.value)
  )
})

const totalPages = computed(() => {
  return Math.ceil(allFilteredProjects.value.length / projectsPerPage)
})

const filteredProjects = computed(() => {
  const start = (currentPage.value - 1) * projectsPerPage
  const end = start + projectsPerPage
  return allFilteredProjects.value.slice(start, end)
})

watch(selectedFilter, () => {
  currentPage.value = 1
})
</script>
