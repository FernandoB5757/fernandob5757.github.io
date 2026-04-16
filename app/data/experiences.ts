import type { Experience } from '@@/shared/types/index'


export const experiences: Experience[] = [
  {
    id: 'university',
    order: 4,
    image: {
      src: '/images/experiences/udg.webp',
      alt: 'UDG - CUCEI',
    },
    date: {
      start: '2019',
      end: '2024',
    },
  },
  {
    id: 'mtsoftech',
    title: "MT - Softech",
    order: 3,
    image: {
      src: '/images/experiences/mt-logo.webp',
      alt: 'UDG - MT softech',
    },
    date: {
      start: '2022-01',
      end: '2023-01'
    },
  },
  {
    id: 'cucei',
    order: 2,
    image: {
      src: '/images/experiences/cucei.webp',
      alt: 'CUCEI area de desarrollo',
    },
    date: {
      start: '2022-01',
      end: '2023-01'
    },
  },
  {
    id: 'netcommerce',
    title: 'Netcommerce',
    order: 1,
    image: {
      src: '/images/experiences/netcommerce.webp',
      alt: 'netcommerce',
    },
    date: {
      start: '2023-08',
      end: '2025',
      isCurrent: true
    },
  },
] as const
