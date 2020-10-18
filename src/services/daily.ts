import http from './basic'

export const runAutoBlueGrundoGift = () => {
  return http.post('/daily/grundo')
}
