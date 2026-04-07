import { CornerUpLeft } from 'lucide-react'
import { ProduceButton } from './ProduceButton'
import type { CategoryTone, ItemCategory, ProduceItem } from '../types'

type CategoryColumnProps = {
  title: ItemCategory
  items: ProduceItem[]
  tone: CategoryTone
  onItemClick: (itemId: string) => void
}

export function CategoryColumn({
  title,
  items,
  tone,
  onItemClick,
}: CategoryColumnProps) {
  return (
    <article className={`panel panel--secondary panel--${tone}`}>
      <div className="panel__header panel__header--compact">
        <div>
          <p className="eyebrow">Category</p>
          <h2>{title}</h2>
        </div>
        <span className="category-count">{items.length}</span>
      </div>

      <div
        className="item-stack item-stack--compact"
        role="list"
        aria-label={title}
      >
        {items.length > 0 ? (
          items.map((item) => (
            <ProduceButton
              key={item.id}
              item={item}
              meta={<CornerUpLeft size={16} strokeWidth={1.8} aria-hidden="true" />}
              className={`item-chip item-chip--category item-chip--${tone}`}
              onClick={onItemClick}
              ariaLabel={`Return ${item.name} to the item list`}
            />
          ))
        ) : (
          <div className="empty-state empty-state--compact">
            <p>No items yet.</p>
            <span>Select one from the queue.</span>
          </div>
        )}
      </div>
    </article>
  )
}
