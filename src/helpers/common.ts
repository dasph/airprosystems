export const entries = <T extends { [K in keyof T]: T[K] }>(input: T) => Object.entries(input) as [keyof T, T[keyof T]][]

export const fromEntries = <V, K extends PropertyKey, T extends [K, V][]>(input: T) => Object.fromEntries(input) as { [K in T[number][0]]: T[number][1] }
