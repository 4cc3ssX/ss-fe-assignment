import { useEffect, useRef } from 'react'

type TimerKey = string

export function useTimer() {
  const timersRef = useRef<Map<TimerKey, number>>(new Map())

  const cancel = (key: TimerKey) => {
    const timerId = timersRef.current.get(key)

    if (timerId === undefined) {
      return
    }

    window.clearTimeout(timerId)
    timersRef.current.delete(key)
  }

  const schedule = (
    key: TimerKey,
    delayMs: number,
    onExpire: () => void,
  ) => {
    cancel(key)

    const timerId = window.setTimeout(() => {
      onExpire()
      timersRef.current.delete(key)
    }, delayMs)

    timersRef.current.set(key, timerId)
  }

  useEffect(() => {
    const timers = timersRef.current

    return () => {
      timers.forEach((timerId) => {
        window.clearTimeout(timerId)
      })

      timers.clear()
    }
  }, [])

  return {
    cancel,
    schedule,
  }
}
