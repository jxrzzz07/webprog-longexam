import Button from './Button.jsx';

const ProductCard = ({ product }) => {
  return (
    <div className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]">
      <div className="p-4">
        <img
          src={product.image}
          alt={product.title}
          className="aspect-square w-full rounded-2xl object-cover"
        />
      </div>

      <div className="space-y-3 px-4 pb-5">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-zinc-500">
            {product.category}
          </p>
          <h3 className="mt-2 text-xl font-bold text-zinc-900">
            {product.title}
          </h3>
        </div>

        <p className="text-sm leading-6 text-zinc-600">
          {product.content[0]}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-lg font-bold text-zinc-900">{product.price}</p>
            <p className="text-sm text-zinc-500">{product.stock}</p>
          </div>

          <Button to={`/products/${product.name}`}>View</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;