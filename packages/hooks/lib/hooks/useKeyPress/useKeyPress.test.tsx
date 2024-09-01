import { renderHook, act } from '@/utils/test.helpers'

// Hooks
import { useKeyPress } from './useKeyPress'

describe('useKeyPress', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.useRealTimers()
        vi.restoreAllMocks()
    })

    it('calls action when the target key is pressed', () => {
        const action = vi.fn()
        const targetKey = 'Enter'

        renderHook(() => useKeyPress(targetKey, action))

        act(() => {
            const event = new KeyboardEvent('keyup', { key: targetKey })
            document.dispatchEvent(event)
        })

        expect(action).toHaveBeenCalledTimes(1)
    })

    it('does not call action when a different key is pressed', () => {
        const action = vi.fn()
        const targetKey = 'Enter'
        const wrongKey = 'Escape'

        renderHook(() => useKeyPress(targetKey, action))

        act(() => {
            const event = new KeyboardEvent('keyup', { key: wrongKey })
            document.dispatchEvent(event)
        })

        expect(action).not.toHaveBeenCalled()
    })

    it('calls action multiple times if the target key is pressed multiple times', () => {
        const action = vi.fn()
        const targetKey = 'Enter'

        renderHook(() => useKeyPress(targetKey, action))

        act(() => {
            const event = new KeyboardEvent('keyup', { key: targetKey })
            document.dispatchEvent(event)
            document.dispatchEvent(event)
        })

        expect(action).toHaveBeenCalledTimes(2)
    })

    it('stops listening to key events after unmount', () => {
        const action = vi.fn()
        const targetKey = 'Enter'

        const { unmount } = renderHook(() => useKeyPress(targetKey, action))
        unmount()

        act(() => {
            const event = new KeyboardEvent('keyup', { key: targetKey })
            document.dispatchEvent(event)
        })

        expect(action).not.toHaveBeenCalled()
    })
})
