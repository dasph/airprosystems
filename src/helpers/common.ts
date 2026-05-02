import type { Section } from '~/enums/mod.ts'

export const entries = <T extends { [K in keyof T]: T[K] }>(input: T) => Object.entries(input) as [keyof T, T[keyof T]][]

export const fromEntries = <V, K extends PropertyKey, T extends [K, V][]>(input: T) => Object.fromEntries(input) as { [K in T[number][0]]: T[number][1] }

export const isInEnum = <T extends { [K in keyof T]: T[K] }>(value: unknown, object: T): value is T[keyof T] => Object.values(object).includes(value)

export const scrollIntoView = (section: Section) => (event: MouseEvent) => {
  const target = document.getElementById(section)

  target && event.preventDefault()

  target?.scrollIntoView({ behavior: 'smooth' })
}
