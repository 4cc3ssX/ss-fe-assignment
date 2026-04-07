import { create } from 'zustand'
import { exampleData } from '../../../data/example'
import { createInitialCategoryItemIds } from '../constants'
import type { CategoryItemIds } from '../types'
import {
  appendItemId,
  buildProduceCatalog,
  removeItemId,
} from '../utils'

type ProduceBoardState = {
  searchValue: string
  queueItemIds: string[]
  categoryItemIds: CategoryItemIds
  setSearchValue: (value: string) => void
  moveItemToCategory: (itemId: string) => void
  returnItemToQueue: (itemId: string) => void
}

const produceCatalog = buildProduceCatalog(exampleData)

export const produceItemsById = produceCatalog.itemsById

export const useProduceBoardStore = create<ProduceBoardState>((set) => ({
  searchValue: '',
  queueItemIds: produceCatalog.items.map((item) => item.id),
  categoryItemIds: createInitialCategoryItemIds(),
  setSearchValue: (value) => {
    set({ searchValue: value })
  },
  moveItemToCategory: (itemId) => {
    const item = produceItemsById[itemId]

    if (!item) {
      return
    }

    set((state) => ({
      queueItemIds: removeItemId(state.queueItemIds, itemId),
      categoryItemIds: {
        ...state.categoryItemIds,
        [item.type]: appendItemId(state.categoryItemIds[item.type], itemId),
      },
    }))
  },
  returnItemToQueue: (itemId) => {
    const item = produceItemsById[itemId]

    if (!item) {
      return
    }

    set((state) => ({
      queueItemIds: appendItemId(state.queueItemIds, itemId),
      categoryItemIds: {
        ...state.categoryItemIds,
        [item.type]: removeItemId(state.categoryItemIds[item.type], itemId),
      },
    }))
  },
}))
