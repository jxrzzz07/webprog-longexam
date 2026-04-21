import Button from '../../components/Button.jsx';

import heroImg from '../../assets/img/nu_bulldogex_banner.jpg';
import dailyImg from '../../assets/img/cap.jpg';
import studyImg from '../../assets/img/id.jpg';
import apparelImg from '../../assets/img/sweater.jpg';

const HomePage = () => {
  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden rounded-[2rem] border-2 border-zinc-900">
        <img
          src={heroImg}
          alt="Hero"
          className="h-[420px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-center px-6 text-white lg:px-20">
          <p className="text-sm uppercase tracking-[0.3em]">
            Campus Marketplace
          </p>

          <h1 className="mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">
            Welcome to National-U Bulldog Exshop
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 sm:text-base">
            Explore campus uniforms, student essentials, and school merchandise
            in one clean and easy storefront designed for everyday student life.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Button to="/products">Shop Now</Button>
            <Button to="/about" variant="secondary">
              About Store
            </Button>
          </div>
        </div>
      </section>

      <section className="px-2 py-10">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Store Overview
        </p>

        <h2 className="mt-2 mb-6 text-2xl font-bold">
          Quick shopping blocks
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { num: '08', label: 'Products' },
            { num: '06', label: 'Categories' },
            { num: '24', label: 'Orders' },
            { num: '03', label: 'Pickup Slots' },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-2xl border-2 border-zinc-900 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[6px_6px_0px_#000] active:scale-[0.98]"
            >
              <h3 className="text-2xl font-bold">{item.num}</h3>
              <p className="text-xs tracking-widest text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-2 py-6">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Shop Sections
        </p>

        <h2 className="mt-2 mb-6 text-2xl font-bold">
          Featured shopping categories
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'Daily Essentials',
              image: dailyImg,
              description:
                'Bags, tumblers, caps, and everyday items for campus routines.',
              button: 'View Products',
            },
            {
              title: 'Study Supplies',
              image: studyImg,
              description:
                'Practical picks that support focus, class prep, and daily study sessions.',
              button: 'Shop Supplies',
            },
            {
              title: 'Campus Apparel',
              image: apparelImg,
              description:
                'Comfortable NU-inspired pieces for classes, events, and casual wear.',
              button: 'View Apparel',
            },
          ].map((section) => (
            <div
              key={section.title}
              className="overflow-hidden rounded-3xl border-2 border-zinc-900 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000]"
            >
              <img
                src={section.image}
                alt={section.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  {section.description}
                </p>

                <div className="mt-5">
                  <Button to="/products">{section.button}</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;