import { useEffect, useMemo, useState } from "react"

export interface CartItemType {
    id: number
    name: string
    price: number
    quantity: number
}

function useCart() {
    const [cart, setCart] = useState<CartItemType[]>(() => {
        try {
            const savedCart = localStorage.getItem("cart")
            return savedCart ? JSON.parse(savedCart) : []
        } catch (error) {
            console.log("Failed to load cart from localStorage", error)
            return []
        }
    })

    // Persist cart to localStorage
    useEffect(() => {
        try {
            localStorage.setItem("cart", JSON.stringify(cart))
        } catch (error) {
            console.log("Failed to save cart to localStorage", error)
        }
    }, [cart])

    // Sync cart across tabs
    useEffect(() => {
        function handleStorage(e: StorageEvent) {
            if (e.key === "cart") {
                try {
                    const savedCart = JSON.parse(e.newValue || "[]")
                    setCart(savedCart)
                } catch (error) {
                    console.log("Failed to parse cart from localStorage", error)
                }
            }
        }

        window.addEventListener("storage", handleStorage)
        return () => window.removeEventListener("storage", handleStorage)
    }, [])

    function addToCart(product: Omit<CartItemType, "quantity">) {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id
            )

            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }

            return [...prevCart, { ...product, quantity: 1 }]
        })
    }

    function removeFromCart(id: number) {
        setCart((prevCart) =>
            prevCart.filter((item) => item.id !== id)
        )
    }

    function updateQuantity(id: number, quantity: number) {
        if (quantity < 1) return

        setCart((prevCart) =>
            prevCart.map((item) =>
                item.id === id ? { ...item, quantity } : item
            )
        )
    }

    const total = useMemo(() => {
        return Number(
            cart
                .reduce((sum, item) => {
                    return sum + item.price * item.quantity
                }, 0)
                .toFixed(2)
        )
    }, [cart])

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
    }
}

export default useCart
