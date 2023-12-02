import createCache from '@emotion/cache'

export function createMyCache() {
  return createCache({
    key: 'bristol',
    prefix: process.env.NODE_ENV === 'development' ? false : true,
  })
}
export const myCache = createMyCache()
