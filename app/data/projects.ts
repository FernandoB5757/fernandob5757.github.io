import type { Project } from '@@/shared/types/project'


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
    highlights: ['CRM con gestión de leads encriptados', 'Multi-sitio dinámico por dominio', 'Búsqueda con Meilisearch', 'Sistema de roles multi-nivel'],
    patterns: ['Repository Pattern', 'Decorator Pattern', 'DTO', 'Value Object'],
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
    highlights: ['Integración directa con SAP vía XML', 'Checkout completo con Mercado Pago', 'Paquetería propia para carrito', 'E-commerce a medida'],
    patterns: ['Service Layer', 'Package Architecture'],
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
    highlights: ['Conexión con Oracle vía APIs', 'Liderazgo de equipo', 'Deploys a entornos de pruebas', 'Reuniones directas con cliente'],
    patterns: ['Strategy Pattern'],
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
    highlights: ['Monitoreo de paneles fotovoltaicos UDG', 'Gráficas dinámicas con Chart.js', 'Procesamiento de archivos CFE', 'Reportes de ahorro energético'],
    patterns: ['API Integration', 'Data Processing'],
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
    highlights: ['App de escritorio desde cero', 'Punto de venta completo', 'Control de stock', 'Relación autopartes-vehículos'],
    date: {
      start: '2021-06',
      end: '2023-08'
    },
    meta: {
      keywords: []
    }
  },

  {
    id: 'portfolio',
    image: {
      src: '/images/projects/portfolio.jpg',
      alt: 'portfolio fernando barajas',
      width: 1200,
      height: 630
    },
    url: 'https://fernandobg.com',
    technologies: [
        'nuxt',
        'vuejs',
        'typescript',
        'tailwindcss',
    ],
    highlights: ['SSR + Static Generation', 'i18n bilingüe (ES/EN)', 'Dark mode', 'CI/CD GitHub Actions', 'SEO con JSON-LD'],
    patterns: ['Composables', 'Auto-imports', 'Lazy Hydration'],
    date: {
      start: '2025-01',
      isCurrent: true
    },
    meta: {
      keywords: ['nuxt', 'vue', 'portfolio', 'tailwindcss', 'ssr', 'github-pages']
    }
  },

] as const
