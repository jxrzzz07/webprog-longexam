import { useParams } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import products from '../../assets/product-content.js';
import { useCart } from '../../context/CartContext.jsx';

function ProductPage() {
  const { name } = useParams();
  const product = products.find((product) => product.name === name);
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex w-full flex-col gap-6">
        <section className="border-y-2 border-zinc-900 bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-bold text-zinc-900">
              Product not found
            </h1>
            <div className="mt-6">
              <Button to="/products">Back to Products</Button>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <>
      <section className="px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Button to="/products">Back to Products</Button>

          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-zinc-500">
            {product.category}
          </p>

          <h1 className="text-3xl font-bold leading-tight text-zinc-900 sm:text-4xl">
            {product.title}
          </h1>

          <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-zinc-600">
            <span className="font-bold text-zinc-900">{product.price}</span>
            <span>{product.stock}</span>
          </div>

          <div className="mt-6">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-3 rounded-full bg-black text-white font-semibold 
shadow-[6px_6px_0px_#236192] 
hover:shadow-[6px_6px_0px_#FFF000] 
transition-all duration-200 
hover:-translate-y-1 active:scale-95">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="overflow-hidden rounded-[2rem] border-2 border-zinc-900 bg-zinc-200">
            <img
              src={product.image}
              alt={product.title}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div className="mt-6 space-y-4 text-zinc-700">
            {product.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductPage;