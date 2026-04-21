import Button from '../../components/Button.jsx';
import aboutImg from '../../assets/img/banner-nu-manila.webp';
import apparelImg from '../../assets/img/shirt.jpg';
import accessoriesImg from '../../assets/img/cap.jpg';
import drinkwareImg from '../../assets/img/tumbler.jpg';
import techImg from '../../assets/img/minifan.jpg';

const categories = [
  { name: 'Apparel', image: apparelImg },
  { name: 'Accessories', image: accessoriesImg },
  { name: 'Drinkware', image: drinkwareImg },
  { name: 'Tech', image: techImg },
];

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <section className="border-b-2 border-zinc-900 px-6 py-10 lg:px-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="About"
            className="rounded-3xl border-2 border-dashed border-zinc-900"
          />

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              About Store
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              A campus shop focused on useful products and simple ordering.
            </h1>

            <p className="mt-4 leading-relaxed text-zinc-600">
              National-U Bulldog ExShop is a student-centered merchandise concept
              inspired by National University. It highlights practical campus
              essentials, clean product presentation, and a straightforward
              shopping experience that feels familiar and easy to use.
            </p>

            <div className="mt-6 flex gap-4">
              <Button to="/">Back Home</Button>
              <Button to="/products" variant="secondary">
                Open Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b-2 border-zinc-900 px-6 py-10 lg:px-20">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Store Overview
        </p>

        <h2 className="mt-2 mb-6 text-2xl font-bold">
          Quick store blocks
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { num: '08', label: 'Items' },
            { num: '06', label: 'Categories' },
            { num: '03', label: 'Pickup Slots' },
            { num: '24', label: 'Orders' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-zinc-900 p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[6px_6px_0px_#000] active:scale-[0.98]"
            >
              <h3 className="text-2xl font-bold">{item.num}</h3>
              <p className="text-xs tracking-widest text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-10 lg:px-20">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Store Flow
        </p>

        <h2 className="mt-2 mb-6 text-2xl font-bold">
          Stacked shopping wireframe
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div className="rounded-2xl border-2 border-zinc-900 p-5 transition hover:shadow-[6px_6px_0px_#000]">
              <h3 className="font-semibold">Curated Catalog</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Products are grouped by daily needs so shoppers can scan faster.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-zinc-900 p-5 transition hover:shadow-[6px_6px_0px_#000]">
              <h3 className="font-semibold">Simple Checkout</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Product pages keep price, stock, and action buttons easy to find.
              </p>
            </div>

            <div className="rounded-2xl border-2 border-zinc-900 p-5 transition hover:shadow-[6px_6px_0px_#000]">
              <h3 className="font-semibold">Pickup Ready</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Store information stays direct for students who need quick
                updates.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-zinc-900 p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-zinc-500">
              Category Grid
            </p>

            <div>
              <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative overflow-hidden rounded-2xl border-2 border-zinc-900 group"
                  >
                    <img
                      src={category.image}
                      alt={category.name}
                      className="h-40 w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/25"></div>
                    <p className="absolute bottom-3 left-3 text-sm font-semibold text-white">
                      {category.name}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-center">
                <Button to="/products">View Products</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;