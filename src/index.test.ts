import { useFiglet } from './'
import { act, renderHook } from '@testing-library/react-hooks'

// mock timer using jest
jest.useFakeTimers()

describe('useMyHook', () => {
  it('updates every second', () => {
    const { result } = renderHook(() => useFiglet())

    expect(result.current).toBe(0)

    // Fast-forward 1sec
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    // Check after total 1 sec
    expect(result.current).toBe(1)

    // Fast-forward 1 more sec
    act(() => {
      jest.advanceTimersByTime(1000)
    })

    // Check after total 2 sec
    expect(result.current).toBe(2)
  })
})
