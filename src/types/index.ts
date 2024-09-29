export interface IProduct {
  id: number
  image: string
  type: string
  name: string
  city: string
  salesman: string
  parameter: string
  description: string
  price: number
  quanity: number
  pricePiece: number
}

export interface IFilterSettings {
  search: string
  productType: TList
}

export interface IState {
  products: IProduct[]
  filterSettings: IFilterSettings
  filteredProducts: IProduct[]
  deals: number[]
  favorites: number[]
}

export type TList = null | 'Аукцион' | 'Разовая продажа'
export type TRoute = null | 'deals' | 'favorites'
