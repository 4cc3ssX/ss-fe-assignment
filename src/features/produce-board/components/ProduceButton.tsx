import type { ReactNode } from 'react'
import type { ProduceItem } from '../types'

type ProduceButtonProps = {
  item: ProduceItem
  className: string
  meta: ReactNode
  onClick: (itemId: string) => void
  ariaLabel?: string
}

export function ProduceButton({
  item,
  className,
  meta,
  onClick,
  ariaLabel,
}: ProduceButtonProps) {
  return (
    <button
      type="button"
      className={className}
      aria-label={ariaLabel}
      onClick={() => onClick(item.id)}
    >
      <span>{item.name}</span>
      <span className="item-chip__meta">{meta}</span>
    </button>
  )
}
