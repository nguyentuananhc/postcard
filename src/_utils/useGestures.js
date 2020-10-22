import { useEffect, useState, useRef } from 'react'

/**
 *
 * @param {{x: number, y: number}} p1
 * @param {{x: number, y: number}} p2
 */
const getDistance = (p1, p2) => {
    const powX = Math.pow(p1.x - p2.x, 2)
    const powY = Math.pow(p1.y - p2.y, 2)

    return Math.sqrt(powX + powY)
}

/**
 *
 * @param {{x: number, y: number}} p1
 * @param {{x: number, y: number}} p2
 */
const getAngleDeg = (p1, p2) => {
    return (Math.atan2(p1.y - p2.y, p1.x - p2.x) * 180) / Math.PI
}

export default function useGestures(
    ref,
    handlers,
    options = {
        minDelta: 30,
    }
) {
    const getCurrentTouches = (originalEvent, touches, prevTouch) => {
        const firstTouch = initialTouches.current

        if (touches.length === 2) {
            const pointer1 = new Pointer(touches[0])
            const pointer2 = new Pointer(touches[1])

            const distance = getDistance(pointer1, pointer2)
            return {
                preventDefault: originalEvent.preventDefault,
                stopPropagation: originalEvent.stopPropagation,
                pointers: [pointer1, pointer2],
                delta: prevTouch ? distance - prevTouch.distance : 0,
                scale: firstTouch ? distance / firstTouch.distance : 1,
                distance,
                angleDeg: getAngleDeg(pointer1, pointer2),
            }
        } else {
            const pointer = new Pointer(touches[0])

            return {
                preventDefault: originalEvent.preventDefault,
                stopPropagation: originalEvent.stopPropagation,
                ...pointer,
                deltaX: prevTouch ? pointer.x - prevTouch.x : 0,
                deltaY: prevTouch ? pointer.y - prevTouch.y : 0,
                delta: prevTouch ? getDistance(pointer, prevTouch) : 0,
                distance: firstTouch ? getDistance(pointer, firstTouch) : 0,
                angleDeg: prevTouch ? getAngleDeg(pointer, prevTouch) : 0,
            }
        }
    }

    const callHandler = (eventName, event) => {
        if (
            eventName &&
            handlers[eventName] &&
            typeof handlers[eventName] === 'function'
        ) {
            handlers[eventName](event)
        }
    }
}
