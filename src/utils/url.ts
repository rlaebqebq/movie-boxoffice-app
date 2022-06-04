export const getEnv = (): string => {
  const l = window.location
  if (l.hostname.includes('netlify')) return 'prod'
  return 'dev'
}
