export {}

declare global {
  type State = {
    t: (...args: unknown[]) => string
  }
}
