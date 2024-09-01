import { ReactNode, forwardRef } from 'react'

// Styling
import { Layout } from './ContentIconGrid.styled'

export interface ContentIconGridProps {
    icons: ReactNode[]
}

export const ContentIconGrid = forwardRef<HTMLDivElement, ContentIconGridProps>(function Base({ icons, ...rest }, ref) {
    return (
        <Layout.Root ref={ref} {...rest}>
            <Layout.Inner>
                {icons.map((icon) => {
                    return icon
                })}
            </Layout.Inner>
        </Layout.Root>
    )
})
