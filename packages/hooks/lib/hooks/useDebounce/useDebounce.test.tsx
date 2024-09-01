import { renderHook } from '@/utils/test.helpers'

// Hook
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
    beforeEach(() => {
        vi.useFakeTimers()
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('returns the initial value', () => {
        const { result } = renderHook(() => useDebounce('test', 500))
        expect(result.current).toBe('test')
    })

    it('returns the same value if delay has not passed', async () => {
        const { result, rerender } = renderHook(({ value }) => useDebounce(value, 500), {
            initialProps: { value: 'test' },
        })

        rerender({ value: 'test2' })
        expect(result.current).toBe('test')

        await vi.advanceTimersByTime(499)
        expect(result.current).toBe('test')
    })

    it('cleans up pending updates on unmount', async () => {
        const { result, rerender, unmount } = renderHook(({ value }) => useDebounce(value, 500), {
            initialProps: { value: 'test' },
        })

        rerender({ value: 'test2' })
        unmount()

        await vi.advanceTimersByTime(500)
        expect(result.current).toBe('test')
    })
})
