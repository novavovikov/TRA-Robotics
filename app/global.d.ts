declare module '*.png' {
  const value: any
  export = value
}

declare module '*.svg?inline' {
  const value: any
  export = value
}

declare module '*.svg' {
  const value: any
  export = value
}

declare module '*.json' {
  const value: any
  export = value
}

declare interface Window {
  process: {
    env: {
      NODE_ENV: 'production' | 'development'
    }
  },
}
