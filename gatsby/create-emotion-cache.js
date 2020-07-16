import createCache from '@emotion/cache'

export const createMyCache = () =>
  createCache({
    key: 'bristol',
    prefix: process.env.NODE_ENV === 'develop' ? false : true,
  })

export const myCache = createMyCache()
