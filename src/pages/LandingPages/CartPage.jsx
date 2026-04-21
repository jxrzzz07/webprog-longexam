import Button from '../../components/Button.jsx';
import { useCart } from '../../context/CartContext.jsx';

const CartPage = () => {
  const { cartItems, increaseQty, decreaseQty } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => {
    const numericPrice = Number(
      item.price.replace('PHP', '').replace(/,/g, '').trim()
    );
    return sum + numericPrice * item.quantity;
  }, 0);

  return (
    <div className="flex w-full flex-col gap-6">
      <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Your Cart
          </p>
          <h1 className="text-3xl font-bold text-zinc-900 sm:text-4xl">
            Shopping Cart
          </h1>
          <div className="mt-6">
            <Button to="/products">Continue Shopping</Button>
          </div>
        </div>
      </section>

      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-5xl">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl border-2 border-zinc-900 p-6">
              <p className="text-zinc-600">Your cart is empty.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center gap-4 rounded-3xl border-2 border-zinc-900 p-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-2xl object-cover"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold text-zinc-900">
                      {item.title}
                    </h2>
                    <p className="text-sm text-zinc-500">{item.category}</p>
                    <p className="mt-1 font-bold text-zinc-900">{item.price}</p>

                    <div className="mt-2 flex items-center gap-3">
                      <button
                        onClick={() => decreaseQty(item.name)}
                        className="h-8 w-8 rounded-full border-2 border-zinc-900 text-lg font-bold transition hover:bg-zinc-900 hover:text-white"
                      >
                        -
                      </button>

                      <span className="text-sm font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        onClick={() => increaseQty(item.name)}
                        className="h-8 w-8 rounded-full border-2 border-zinc-900 text-lg font-bold transition hover:bg-zinc-900 hover:text-white"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl border-2 border-zinc-900 p-6">
                <h2 className="text-xl font-bold text-zinc-900">
                  Total: PHP {totalPrice.toLocaleString()}
                </h2>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default CartPage;