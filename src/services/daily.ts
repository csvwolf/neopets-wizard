import http from './basic'

export const runAutoBlueGrundoGift = () => {
  return http.post('/daily/grundo', {
    session: localStorage.getItem('cookie')
  })
}

export const runAutoShopOfOffer = () => {
  return http.post('/daily/shop-of-offer', {
    session: localStorage.getItem('cookie')
  })
}

export const runAutoTrudysSurprise = () => {
  return http.post('/daily/trudys-surprise', {
    session: localStorage.getItem('cookie')
  })
}
