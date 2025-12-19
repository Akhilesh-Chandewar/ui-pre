import { FaTrash, FaMinus, FaPlus } from "react-icons/fa"

interface CartItemType {
    id: number
    name: string
    price: number
    quantity: number
}

interface CartItemProps {
    item: CartItemType
    onUpdateQuantity: (id: number, quantity: number) => void
    onRemove: (id: number) => void
}

function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <div className="cart-item">
            <div className="item-details">
                <h4>{item.name}</h4>
                <p>{item.price}</p>

                <div className="quantity-controls">
                    <button
                        onClick={() =>
                            onUpdateQuantity(item.id, item.quantity - 1)
                        }
                    >
                        <FaMinus />
                    </button>

                    <span>{item.quantity}</span>

                    <button
                        onClick={() =>
                            onUpdateQuantity(item.id, item.quantity + 1)
                        }
                    >
                        <FaPlus />
                    </button>
                </div>
            </div>

            <button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
            >
                <FaTrash />
            </button>
        </div>
    )
}

export default CartItem
