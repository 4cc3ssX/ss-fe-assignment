export type ItemCategory = 'Fruit' | 'Vegetable'

export type CategoryTone = 'fruit' | 'vegetable'

export type ProduceSeed = {
  name: string
  type: ItemCategory
}

export type ProduceItem = ProduceSeed & {
  id: string
}

export type CategoryItemIds = Record<ItemCategory, string[]>

export type CategoryPanelConfig = {
  title: ItemCategory
  tone: CategoryTone
}
