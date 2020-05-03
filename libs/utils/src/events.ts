import { KeyboardEvent } from 'react'

export function disableEnter<Event extends KeyboardEvent<HTMLInputElement>>(
  event: Event
) {
  if (event.key === 'Enter') {
    event.preventDefault()
    event.stopPropagation()
  }
}
