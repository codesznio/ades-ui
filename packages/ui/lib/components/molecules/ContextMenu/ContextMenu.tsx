import {
    forwardRef,
    useState,
    useMemo,
    Children,
    cloneElement,
    ReactElement,
    useRef,
    PropsWithChildren,
    useImperativeHandle,
} from 'react'

// Packages
import { KeyPressType, useDetectOutsideClick, useKeyPress } from '@ades/hooks'

// Components
import { FloatingAnimationType, FloatingElement, FloatingMountType } from '@/components/atoms'

export interface ContextMenuProps {
    animation?: FloatingAnimationType
    mount?: FloatingMountType
}

export const ContextMenu = forwardRef<HTMLDivElement, PropsWithChildren<ContextMenuProps>>(function Base(
    { animation = 'SLIDE', mount = 'X', children, ...rest },
    ref,
) {
    const internalRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)
    const [active, setActive] = useState<boolean>(false)

    const childrenArray = useMemo(() => Children.toArray(children), [children])

    useImperativeHandle(ref, () => internalRef.current!, [internalRef])
    useDetectOutsideClick(internalRef, () => setActive(false), buttonRef)
    useKeyPress(KeyPressType.Escape, () => setActive(false))

    return (
        <FloatingElement ref={internalRef} active={active} config={{ animation, mount }} {...rest}>
            {childrenArray.length > 0 &&
                cloneElement(childrenArray[0] as ReactElement, {
                    onClick: () => setActive(!active),
                    ref: internalRef,
                })}

            {childrenArray.length > 1 && cloneElement(childrenArray[1] as ReactElement, { ref: buttonRef })}
        </FloatingElement>
    )
})
