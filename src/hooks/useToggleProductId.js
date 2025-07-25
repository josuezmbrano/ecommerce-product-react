import React from 'react'
export default function useToggleProductId() {

    const [currentProductId, setCurrentProductId] = React.useState(null)


    function toggleId(identification) {
        if (currentProductId !== identification) {
            setCurrentProductId(identification)
        }
    }

   
    

    return [currentProductId, toggleId]
}