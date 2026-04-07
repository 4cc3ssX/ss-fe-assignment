import type { ProduceItem, ProduceSeed } from './types'

type ProduceCatalog = {
  items: ProduceItem[]
  itemsById: Record<string, ProduceItem>
}

const isDefined = <Value,>(value: Value | undefined): value is Value =>
  value !== undefined

export const buildProduceCatalog = (
  seedItems: readonly ProduceSeed[],
): ProduceCatalog => {
  const items = seedItems.map((item, index) => ({
    id: `${item.type}-${item.name}-${index}`,
    name: item.name,
    type: item.type,
  }))

  const itemsById = Object.fromEntries(
    items.map((item) => [item.id, item]),
  ) as Record<string, ProduceItem>

  return { items, itemsById }
}

export const removeItemId = (itemIds: string[], itemId: string) =>
  itemIds.filter((currentItemId) => currentItemId !== itemId)

export const appendItemId = (itemIds: string[], itemId: string) =>
  itemIds.includes(itemId) ? itemIds : [...itemIds, itemId]

export const normalizeSearchValue = (value: string) =>
  value.trim().toLowerCase()

export const filterItemsBySearch = (
  items: ProduceItem[],
  searchValue: string,
) => {
  const normalizedSearch = normalizeSearchValue(searchValue)

  if (!normalizedSearch) {
    return items
  }

  return items.filter((item) =>
    item.name.toLowerCase().includes(normalizedSearch),
  )
}

export const mapItemIdsToItems = (
  itemIds: string[],
  itemsById: Record<string, ProduceItem>,
) => itemIds.map((itemId) => itemsById[itemId]).filter(isDefined)
