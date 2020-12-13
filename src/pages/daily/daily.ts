import BlueGrundo from '@assets/daily/blue-grundo.gif'
import ShopOfOffer from '@assets/daily/shop-of-offer.gif'
import TrudySuprise from '@assets/daily/trudy-surprise.gif'
import { runAutoBlueGrundoGift, runAutoShopOfOffer, runAutoTrudysSurprise } from '@/services/daily'

interface DailyItem {
    image: string,
    action: () => void
    title: string
}

const DAILY_ITEMS : DailyItem[] = [{
  image: BlueGrundo,
  action: runAutoBlueGrundoGift,
  title: 'Blue Grundo'
}, {
  image: ShopOfOffer,
  action: runAutoShopOfOffer,
  title: 'Shop of Offer'
}, {
  image: TrudySuprise,
  action: runAutoTrudysSurprise,
  title: 'Trudy Surprise'
}]

export default DAILY_ITEMS
