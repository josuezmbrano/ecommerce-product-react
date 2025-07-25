import React from 'react'
export default function useToggleImageId() {
    const [currentImageId, setCurrentImageId] = React.useState(1)

    function toggleImageId(identification) {
        if (currentImageId !== identification) {
            setCurrentImageId(identification)
        }
    }

    return [currentImageId, toggleImageId]
}