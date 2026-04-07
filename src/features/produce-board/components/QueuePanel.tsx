import { ProduceButton } from './ProduceButton'
import type { ProduceItem } from '../types'

type QueuePanelProps = {
  searchValue: string
  visibleItemCount: number
  totalItemCount: number
  items: ProduceItem[]
  onSearchChange: (value: string) => void
  onItemClick: (itemId: string) => void
}

export function QueuePanel({
  searchValue,
  visibleItemCount,
  totalItemCount,
  items,
  onSearchChange,
  onItemClick,
}: QueuePanelProps) {
  return (
    <section className="panel panel--primary">
      <div className="panel__header">
        <div>
          <h1>Item List</h1>
        </div>
        <p className="panel__summary">Click to sort. Items return in 5 seconds.</p>
      </div>

      <label className="search-field" htmlFor="produce-filter">
        <span className="search-field__label">Filter items</span>
        <input
          id="produce-filter"
          type="search"
          value={searchValue}
          placeholder="Search fruits or vegetables"
          onChange={(event) => onSearchChange(event.target.value)}
        />
      </label>

      <div className="panel__meta">
        <span>{visibleItemCount} visible</span>
        <span>{totalItemCount} in queue</span>
      </div>

      <div className="item-stack" role="list" aria-label="Available produce">
        {items.length > 0 ? (
          items.map((item) => (
            <ProduceButton
              key={item.id}
              item={item}
              meta={<small>{item.type}</small>}
              className="item-chip item-chip--queue"
              onClick={onItemClick}
            />
          ))
        ) : (
          <div className="empty-state">
            <p>No matching items in the queue.</p>
            <span>Try another search term.</span>
          </div>
        )}
      </div>
    </section>
  )
}
