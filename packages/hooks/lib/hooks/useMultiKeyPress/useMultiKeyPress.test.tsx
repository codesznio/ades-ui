import { renderHook, act } from '@/utils/test.helpers'

// Hook
import { useMultiKeyPress } from './useMultiKeyPress'

describe('useMultiKeyPress', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.restoreAllMocks()
    })

    it('calls action when one of the specified keys is pressed', () => {
        const action = vi.fn()
        const keys = ['a', 'b', 'c']

        renderHook(() => useMultiKeyPress(keys, action))

        act(() => {
            keys.forEach((key) => {
                const event = new KeyboardEvent('keydown', { key: key })
                document.dispatchEvent(event)
            })
        })

        expect(action).toHaveBeenCalledTimes(keys.length)
    })

    it('does not call action when a key not in the specified array is pressed', () => {
        const action = vi.fn()
        const keys = ['a', 'b', 'c']
        const wrongKey = 'd'

        renderHook(() => useMultiKeyPress(keys, action))

        act(() => {
            const event = new KeyboardEvent('keydown', { key: wrongKey })
            document.dispatchEvent(event)
        })

        expect(action).not.toHaveBeenCalled()
    })

    it('handles multiple presses of the same key correctly', () => {
        const action = vi.fn()
        const key = 'a'

        renderHook(() => useMultiKeyPress([key], action))

        act(() => {
            const event = new KeyboardEvent('keydown', { key: key })
            document.dispatchEvent(event)
            document.dispatchEvent(event)
        })

        expect(action).toHaveBeenCalledTimes(2)
    })

    it('stops listening to key events after unmount', () => {
        const action = vi.fn()
        const key = 'a'

        const { unmount } = renderHook(() => useMultiKeyPress([key], action))
        unmount()

        act(() => {
            const event = new KeyboardEvent('keydown', { key: key })
            document.dispatchEvent(event)
        })

        expect(action).not.toHaveBeenCalled()
    })
})
