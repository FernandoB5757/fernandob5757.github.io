export * from './orbit'
export * from './project'
export * from './technology'

export interface Theme {
    key: string
    label: string
    icon: string
}

export interface Image {
    src: string
    alt: string
    width?: number
    height?: number
}

export interface SocialRef {
    icon: string;
    link: string
    ariaLabel: string;
}

export interface BestSkill {
    name: string;
    icon: string
}

export interface Experience {
    id: string;
    order: number;
    title?: string;
    image: Image;
    date: {
        start: string
        end?: string
        isCurrent?: boolean
    }
}

export interface ExperienceI18n extends Experience{
    title: string;
    description: string;
}