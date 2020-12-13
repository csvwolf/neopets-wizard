import http from './basic'

export const priceSearch = (item: string) => {
  return http.get('/wizard/price', {
    params: { item }
  })
}
