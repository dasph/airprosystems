const modules = import.meta.glob<{ default: string }>('$lib/assets/images/testimonials/*.jpg', { eager: true })

export const avatars = Object.values(modules).map((module) => module.default)
