import { Children, PropsWithChildren, ReactElement, cloneElement, forwardRef, useMemo } from 'react'

// Provider
import { useFloatingContext } from '@/components/atoms/FloatingElement/provider'

// Styling
import { Layout } from './FloatingInner.styled'

// Components
import { FloatingContent } from '../FloatingContent'
import { AnimatedMount } from '@/components/atoms'
import { useFloatingAnchor } from './useFloatingContentAnchor'

export const FloatingInner = forwardRef<HTMLDivElement, PropsWithChildren>(function Base(
    { children, ...rest },
    forwardRef,
) {
    const context = useFloatingContext()
    const childrenArray = useMemo(() => Children.toArray(children), [children])

    const anchor = useFloatingAnchor(context.trigger.coordinates, context.config.mount, context.trigger.ref)

    return (
        <Layout.Root ref={forwardRef} {...rest}>
            <Layout.Trigger ref={context.trigger.ref}>{childrenArray[0]}</Layout.Trigger>

            <AnimatedMount active={context.active}>
                <FloatingContent anchor={anchor}>
                    {cloneElement(childrenArray[1] as ReactElement, {
                        anchor,
                    })}
                </FloatingContent>
            </AnimatedMount>
        </Layout.Root>
    )
})
