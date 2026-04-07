import type { CategoryItemIds, CategoryPanelConfig } from './types'

export const AUTO_RETURN_DELAY_MS = 5_000

export const CATEGORY_PANELS: CategoryPanelConfig[] = [
  {
    title: 'Fruit',
    tone: 'fruit',
  },
  {
    title: 'Vegetable',
    tone: 'vegetable',
  },
]

export const createInitialCategoryItemIds = (): CategoryItemIds => ({
  Fruit: [],
  Vegetable: [],
})
