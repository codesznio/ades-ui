import { renderHook, act } from '@/utils/test.helpers'

// Hook
import { useThrottle } from './useThrottle'

describe('useThrottle', () => {
    beforeEach(() => {
        // Mock Date.now() and timers
        vi.useFakeTimers()
        vi.setSystemTime(new Date(2020, 1, 1))
    })

    afterEach(() => {
        // Clean up after each test
        vi.useRealTimers()
    })

    it('initially returns the provided value', () => {
        const { result } = renderHook(() => useThrottle('initial', 500))
        expect(result.current).toBe('initial')
    })

    it('does not update the value before the limit if triggered earlier', () => {
        const { result, rerender } = renderHook(({ value }) => useThrottle(value, 500), {
            initialProps: { value: 'initial' },
        })

        rerender({ value: 'updated' })
        act(() => {
            vi.advanceTimersByTime(499) // advance time just before the throttle limit
        })
        expect(result.current).toBe('initial')
    })

    it('updates the value after the limit if triggered earlier', () => {
        const { result, rerender } = renderHook(({ value }) => useThrottle(value, 500), {
            initialProps: { value: 'initial' },
        })

        rerender({ value: 'updated' })
        act(() => {
            vi.advanceTimersByTime(500) // advance time to the throttle limit
        })
        expect(result.current).toBe('updated')
    })

    it('cleans up timeout on unmount to prevent updates after component is gone', () => {
        const { result, rerender, unmount } = renderHook(({ value }) => useThrottle(value, 500), {
            initialProps: { value: 'initial' },
        })

        rerender({ value: 'updated' })
        unmount()
        act(() => {
            vi.advanceTimersByTime(500) // advance time to the throttle limit
        })
        expect(result.current).toBe('initial') // The state update should not happen as component has unmounted
    })
})
