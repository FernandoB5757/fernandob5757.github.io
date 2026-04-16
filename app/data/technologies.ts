import type { Technology } from '@@/shared/types/technology'

export const technologies: Technology[] = [
  // Programming languages
  {
    id: 'php',
    name: 'PHP',
    slug: 'php',
    category: 'language',
    icon: getTechIcon('php')
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    slug: 'javascript',
    category: 'language',
    icon: getTechIcon('javascript')
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    slug: 'typescript',
    category: 'language',
    icon: getTechIcon('typescript')
  },
  {
    id: 'cplusplus',
    name: 'C++',
    slug: 'cplusplus',
    category: 'language',
    icon: getTechIcon('cplusplus')
  },
  {
    id: 'html5',
    name: 'HTML5',
    slug: 'html5',
    category: 'language',
    icon: getTechIcon('html5')
  },
  {
    id: 'css',
    name: 'CSS',
    slug: 'css3',
    category: 'language',
    icon: getTechIcon('css3')
  },

  // Frameworks
  {
    id: 'laravel',
    name: 'Laravel',
    slug: 'laravel',
    category: 'framework',
    subcategory: 'backend',
    icon: getTechIcon('laravel')
  },
  {
    id: 'vuejs',
    name: 'Vue.js',
    slug: 'vuedotjs',
    category: 'framework',
    subcategory: 'frontend',
    icon: getTechIcon('vuedotjs')
  },
  {
    id: 'nuxt',
    name: 'Nuxt',
    slug: 'nuxtdotjs',
    category: 'framework',
    subcategory: 'frontend',
    icon: getTechIcon('nuxtdotjs')
  },
  {
    id: 'filament',
    name: 'Filament',
    slug: 'filamentphp',
    category: 'framework',
    subcategory: 'admin',
    icon: getTechIcon('filamentphp')
  },
  {
    id: 'alpinejs',
    name: 'Alpine.js',
    slug: 'alpinedotjs',
    category: 'framework',
    subcategory: 'frontend',
    icon: getTechIcon('alpinedotjs')
  },

  // Database
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    slug: 'postgresql',
    category: 'database',
    icon: getTechIcon('postgresql')
  },
  {
    id: 'mysql',
    name: 'MySQL',
    slug: 'mysql',
    category: 'database',
    icon: getTechIcon('mysql')
  },

  // DevOps and Servers
  {
    id: 'linux',
    name: 'Linux',
    slug: 'linux',
    category: 'devops',
    icon: getTechIcon('linux')
  },
  {
    id: 'nginx',
    name: 'Nginx',
    slug: 'nginx',
    category: 'devops',
    icon: getTechIcon('nginx')
  },
  {
    id: 'apache',
    name: 'Apache',
    slug: 'apache',
    category: 'devops',
    icon: getTechIcon('apache')
  },
  {
    id: 'cpanel',
    name: 'cPanel',
    slug: 'cpanel',
    category: 'devops',
    icon: getTechIcon('cpanel')
  },

  // Control Version
  {
    id: 'git',
    name: 'Git',
    slug: 'git',
    category: 'version-control',
    icon: getTechIcon('git')
  },
  {
    id: 'github',
    name: 'GitHub',
    slug: 'github',
    category: 'version-control',
    icon: getTechIcon('github')
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    slug: 'gitlab',
    category: 'version-control',
    icon: getTechIcon('gitlab')
  },
  {
    id: 'bitbucket',
    name: 'BitBucket',
    slug: 'bitbucket',
    category: 'version-control',
    icon: getTechIcon('bitbucket')
  },

  // Tools
  {
    id: 'jira',
    name: 'Jira',
    slug: 'jira',
    category: 'tool',
    subcategory: 'project-management',
    icon: getTechIcon('jira')
  },
  {
    id: 'npm',
    name: 'npm',
    slug: 'npm',
    category: 'tool',
    subcategory: 'package-manager',
    icon: getTechIcon('npm')
  },
  {
    id: 'vite',
    name: 'Vite',
    slug: 'vite',
    category: 'tool',
    subcategory: 'build-tool',
    icon: getTechIcon('vite')
  },

  // CSS
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    category: 'library',
    subcategory: 'css-framework',
    icon: getTechIcon('tailwindcss')
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    slug: 'bootstrap',
    category: 'library',
    subcategory: 'css-framework',
    icon: getTechIcon('bootstrap')
  }
];

function getTechIcon(slug: string): string {
  return `https://cdn.simpleicons.org/${slug}/000000/C0C0C0`
}
