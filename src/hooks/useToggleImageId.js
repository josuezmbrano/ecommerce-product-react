import React from 'react'
export default function useToggleImageId() {
    const [currentImageId, setCurrentImageId] = React.useState(1)
    const [isFading, setIsFading] = React.useState(false)

    function toggleImageId(identification) {
        if (currentImageId !== identification) {
            setIsFading(true)
        }
        setTimeout(() => {
            if (currentImageId !== identification) {
                setCurrentImageId(identification)
            }
            setIsFading(false)
        }, 250)
    }
    return [currentImageId, toggleImageId, isFading]
}