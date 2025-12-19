import { FaShoppingCart } from "react-icons/fa"

interface Product {
    id: number
    name: string
    price: number
}

interface ProductCardProps {
    product: Product
    onAddToCart: (product: Product) => void
}

function ProductCard({ product, onAddToCart }: ProductCardProps) {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p className="price">${product.price}</p>

            <button
                type="button"
                onClick={() => onAddToCart(product)}
            >
                <FaShoppingCart />
                Add to Cart
            </button>
        </div>
    )
}

export default ProductCard
