export interface MenuItem {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurant {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: MenuItem[]
}

export interface Menu {
  id: number
  title: string
  description: string
  category: string
  image: string
  rating: number
  isHighlight: boolean
  tipo: string
}
