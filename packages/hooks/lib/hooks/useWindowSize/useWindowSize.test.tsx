import { renderHook, act } from '@/utils/test.helpers'

// Hook
import { useWindowSize } from './useWindowSize'

describe('useWindowSize', () => {
    const fireResize = (width: number, height: number) => {
        Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
        Object.defineProperty(window, 'innerHeight', { configurable: true, value: height })

        window.dispatchEvent(new Event('resize'))
    }

    beforeEach(() => {
        vi.spyOn(window, 'innerWidth', 'get').mockReturnValue(1024)
        vi.spyOn(window, 'innerHeight', 'get').mockReturnValue(768)
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('initially returns the current window size', () => {
        const { result } = renderHook(() => useWindowSize())
        expect(result.current).toEqual({ width: 1024, height: 768 })
    })

    it('updates the size on window resize', async () => {
        const { result } = renderHook(() => useWindowSize())

        act(() => {
            fireResize(800, 600)
        })

        expect(result.current).toEqual({ width: 800, height: 600 })
    })

    it('does not update size when unmounted to prevent leaks', () => {
        const { result, unmount } = renderHook(() => useWindowSize())

        unmount()

        act(() => {
            fireResize(500, 500)
        })

        expect(result.current).toEqual({ width: 1024, height: 768 })
    })
})
