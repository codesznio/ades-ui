import { renderHook } from '@/utils/test.helpers'
import { useBelowCenterHalf } from './useBelowCenterHalf'

describe('useBelowCenterHalf', () => {
    beforeEach(() => {
        vi.stubGlobal('innerHeight', 800)
        vi.stubGlobal('scrollY', 0)

        Element.prototype.getBoundingClientRect = vi.fn(() => ({
            top: 500,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toJSON() {},
        }))
    })

    afterEach(() => {
        vi.restoreAllMocks()
    })

    it('returns true if element is below the center half of the screen', async () => {
        const ref = { current: document.createElement('div') }

        const { result } = renderHook(() => useBelowCenterHalf(ref))

        window.dispatchEvent(new Event('scroll'))

        await Promise.resolve()

        expect(result.current).toBe(true)
    })

    it('returns false if element is above the center half of the screen', async () => {
        Element.prototype.getBoundingClientRect = vi.fn(() => ({
            top: 300,
            left: 0,
            right: 0,
            bottom: 0,
            width: 0,
            height: 0,
            x: 0,
            y: 0,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            toJSON() {},
        }))

        const ref = { current: document.createElement('div') }

        const { result } = renderHook(() => useBelowCenterHalf(ref))

        window.dispatchEvent(new Event('scroll'))

        await Promise.resolve()

        expect(result.current).toBe(false)
    })
})
