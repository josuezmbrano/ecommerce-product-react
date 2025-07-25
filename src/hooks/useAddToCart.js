import React from 'react'

export default function useAddToCart() {
    const [cartItems, setCartItems] = React.useState([])

    function toggleCartAdd(itemId, title, pricePerUnit, quantity, totalprice, productImage) {
        setCartItems(items => {
            const itemFound = items.find(item => itemId === item.id)
            if (itemFound) {
                return items.map(item => {
                    if (item.id === itemId) {
                        return {
                            ...item,
                            amount: quantity,
                            total: totalprice
                        }
                    }
                    return item
                })
            }
            return [
                ...items,
                {
                    id: itemId,
                    name: title,
                    price: pricePerUnit,
                    amount: quantity,
                    total: totalprice,
                    image: productImage
                }
            ]
        })
    }

    function removeCartItem(itemId) {
        setCartItems(items => {
            return items.filter(item => item.id !== itemId)
        })
    }
    
    return [cartItems, toggleCartAdd, removeCartItem]
}