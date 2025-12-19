import "./App.css"
import Cart from "./components/Cart"
import ProductCard from "./components/ProductCard"
import { products } from "./data/products"
import useCart from "./hooks/UseCart"

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity, total } = useCart()

  return (
    <>
      <header>
        <h1>Shopping Cart</h1>
      </header>

      <main>
        <section className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </section>

        <Cart
          cart={cart}
          onUpdateQuantity={updateQuantity}
          onRemove={removeFromCart}
          total={total}
        />
      </main>
    </>
  )
}

export default App
