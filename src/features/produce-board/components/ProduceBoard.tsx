import { useShallow } from 'zustand/react/shallow'
import { AUTO_RETURN_DELAY_MS, CATEGORY_PANELS } from '../constants'
import { useTimer } from '../hooks/useTimer'
import {
  produceItemsById,
  useProduceBoardStore,
} from '../store/useProduceBoardStore'
import { filterItemsBySearch, mapItemIdsToItems } from '../utils'
import { CategoryColumn } from './CategoryColumn'
import { QueuePanel } from './QueuePanel'
import '../produce-board.css'

export function ProduceBoard() {
  const { searchValue, queueItemIds, categoryItemIds } = useProduceBoardStore(
    useShallow((state) => ({
      searchValue: state.searchValue,
      queueItemIds: state.queueItemIds,
      categoryItemIds: state.categoryItemIds,
    })),
  )

  const { setSearchValue, moveItemToCategory, returnItemToQueue } =
    useProduceBoardStore(
      useShallow((state) => ({
        setSearchValue: state.setSearchValue,
        moveItemToCategory: state.moveItemToCategory,
        returnItemToQueue: state.returnItemToQueue,
      })),
    )

  const { cancel, schedule } = useTimer()

  const queueItems = mapItemIdsToItems(queueItemIds, produceItemsById)
  const visibleQueueItems = filterItemsBySearch(queueItems, searchValue)

  const handleQueueItemClick = (itemId: string) => {
    moveItemToCategory(itemId)
    schedule(itemId, AUTO_RETURN_DELAY_MS, () => {
      returnItemToQueue(itemId)
    })
  }

  const handleCategoryItemClick = (itemId: string) => {
    cancel(itemId)
    returnItemToQueue(itemId)
  }

  return (
    <main className="app-shell">
      <QueuePanel
        searchValue={searchValue}
        visibleItemCount={visibleQueueItems.length}
        totalItemCount={queueItems.length}
        items={visibleQueueItems}
        onSearchChange={setSearchValue}
        onItemClick={handleQueueItemClick}
      />

      <section className="category-grid" aria-label="Selected categories">
        {CATEGORY_PANELS.map((panel) => (
          <CategoryColumn
            key={panel.title}
            title={panel.title}
            tone={panel.tone}
            items={mapItemIdsToItems(
              categoryItemIds[panel.title],
              produceItemsById,
            )}
            onItemClick={handleCategoryItemClick}
          />
        ))}
      </section>
    </main>
  )
}
