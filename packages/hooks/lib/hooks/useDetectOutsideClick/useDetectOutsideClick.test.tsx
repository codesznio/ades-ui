import { renderHook, act } from '@/utils/test.helpers'

// Styling
import { useDetectOutsideClick } from './useDetectOutsideClick'

describe('useDetectOutsideClick', () => {
    const mockClick = (element: HTMLBodyElement | HTMLDivElement) => {
        const event = new MouseEvent('click', {
            bubbles: true,
            cancelable: true,
        })
        element.dispatchEvent(event)
    }

    it('calls handler when a click is detected outside the referenced element', () => {
        const handler = vi.fn()
        const ref = { current: document.createElement('div') }

        renderHook(() => useDetectOutsideClick(ref, handler))

        act(() => {
            mockClick(document.body as HTMLBodyElement)
        })

        expect(handler).toHaveBeenCalledTimes(1)
    })

    it('does not call handler when a click is inside the referenced element', () => {
        const handler = vi.fn()
        const ref = { current: document.createElement('div') }

        renderHook(() => useDetectOutsideClick(ref, handler))

        act(() => {
            mockClick(ref.current as HTMLDivElement)
        })

        expect(handler).not.toHaveBeenCalled()
    })

    it('cleans up event listeners on unmount', () => {
        const handler = vi.fn()
        const ref = { current: document.createElement('div') }

        const { unmount } = renderHook(() => useDetectOutsideClick(ref, handler))

        act(() => {
            unmount()
        })

        act(() => {
            mockClick(document.body as HTMLBodyElement)
        })

        expect(handler).not.toHaveBeenCalled()
    })
})
