import type { Project } from '~/types/project'


export const projects: Project[] = [
  {
    id: 'mimo',
    image: {
      src: '/images/projects/mimo.webp',
      alt: 'landing page mimo',
      width: 1200,
      height: 630
    },
    url: 'https://www.hondamotoscomoto.mx',
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
        'redis',
        'meilisearch'
      ],
    date: {
      start: '2024-04',
      end: '2025-04',
      isCurrent: true
    },
    meta: {
      keywords: ['motorcycles', 'php','laravel', 'honda', 'motos']
    }
  },

  {
    id: 'ekar',
    image: {
      src: '/images/projects/ekar.webp',
      alt: 'landing page ekar de gas',
      width: 1200,
      height: 630
    },
    url: 'https://www.ekardegas.mx',
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
        'filament',
      ],
    date: {
      start: '2024-04',
      end: '2025-04',
      isCurrent: true
    },
    meta: {
      keywords: ['e-commerce', 'php','laravel','mercadopago','sap','xml','packages']
    }
  },

  {
    id: 'tubin',
    image: {
      src: '/images/projects/tubin.webp',
      alt: 'landing page tubin ecommerce',
      width: 1200,
      height: 630
    },
    url: 'https://www.tubin.com.mx',
    technologies: [
        'laravel',
        'php',
        'javascript',
        'typescript',
        'tailwindcss',
        'alpinejs',
        'filament'
      ],
    date: {
      start: '2024-08',
      isCurrent: true
    },
    meta: {
      keywords: ['ecommerce', 'php','laravel','oracle','strategy pattern']
    }
  },

  {
    id: 'solarudg',
    image: {
      src: '/images/projects/solarudg.webp',
      alt: 'panel administrativo solar udg',
      width: 1200,
      height: 630
    },
    technologies: [
        'laravel',
        'php',
        'javascript',
        'chartjs',
        'livewire',
        'alpinejs',
        'tailwindcss'
      ],
    date: {
      start: '2022-11',
      end: '2023-04'
    },
    meta: {
      keywords: ['php','laravel','chartjs','api','udg','solar']
    }
  },

  {
    id: 'jb_refacciones',
    image: {
      src: '/images/projects/jb_refacciones.webp',
      alt: 'menu jb_refacciones',
      width: 1200,
      height: 630
    },
    technologies: [
        '.NET',
        '.NET Desktop',
        'C#'
      ],
    date: {
      start: '2021-06',
      end: '2023-08'
    },
    meta: {
      keywords: []
    }
  },

  // {
  //   id: 'callcenter',
  //   image: {
  //     src: '/images/projects/solarudg.webp',
  //     alt: 'menu jb_refacciones',
  //     width: 1200,
  //     height: 630
  //   },
  //   simple: true,
  //   technologies: [
  //       '.NET',
  //       '.NET Desktop',
  //       'C#'
  //     ],
  //   date: {
  //     start: '2021-06',
  //     end: '2023-08'
  //   },
  //   meta: {
  //     keywords: []
  //   }
  // },

  // {
  //   id: 'insumos',
  //   image: {
  //     src: '/images/projects/solarudg.webp',
  //     alt: 'menu jb_refacciones',
  //     width: 1200,
  //     height: 630
  //   },
  //   simple: true,
  //   technologies: [],
  //   date: {
  //     start: '2021-06',
  //     end: '2023-08'
  //   },
  //   meta: {
  //     keywords: []
  //   }
  // },
] as const