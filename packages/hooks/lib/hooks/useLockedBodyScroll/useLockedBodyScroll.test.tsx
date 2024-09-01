import { renderHook } from '@/utils/test.helpers'
import { useLockedBodyScroll } from './useLockedBodyScroll'

describe('useLockedBodyScroll', () => {
    let originalOverflow: string

    beforeEach(() => {
        originalOverflow = document.body.style.overflow
    })

    afterEach(() => {
        document.body.style.overflow = originalOverflow
    })

    it('locks body scroll on mount when active is true', () => {
        renderHook(() => useLockedBodyScroll(true))

        expect(document.body.style.overflow).toBe('hidden')
    })

    it('does not lock body scroll on mount when active is false', () => {
        renderHook(() => useLockedBodyScroll(false))

        expect(document.body.style.overflow).toBe(originalOverflow)
    })

    it('restores original body overflow style on unmount when active is true', () => {
        const { unmount } = renderHook(() => useLockedBodyScroll(true))

        unmount()
        expect(document.body.style.overflow).toBe(originalOverflow)
    })

    it('restores original body overflow style on unmount when active is false', () => {
        const { unmount } = renderHook(() => useLockedBodyScroll(false))

        unmount()
        expect(document.body.style.overflow).toBe(originalOverflow)
    })

    it('toggles body scroll lock when active changes', () => {
        const { rerender } = renderHook(({ active }) => useLockedBodyScroll(active), {
            initialProps: { active: true },
        })

        expect(document.body.style.overflow).toBe('hidden')

        rerender({ active: false })
        expect(document.body.style.overflow).toBe(originalOverflow)

        rerender({ active: true })
        expect(document.body.style.overflow).toBe('hidden')
    })
})
