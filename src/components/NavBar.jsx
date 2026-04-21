import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import logo from "../assets/img/nubdexchange_logo.png";

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-200',
    isActive
      ? 'border-zinc-900 bg-zinc-900 text-zinc-50 shadow-[4px_4px_0px_#236192]'
      : 'border-zinc-900 bg-white text-zinc-900 shadow-[4px_4px_0px_#236192] hover:shadow-[4px_4px_0px_#FFF000] hover:-translate-y-1 active:scale-95',
  ].join(' ');

const NavBar = () => {
  const { cartItems } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-zinc-900 bg-zinc-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-zinc-900 bg-zinc-900 text-sm font-bold text-white">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
          </div>

          <div>
            <p className="text-lg font-bold text-zinc-900">National-U Bulldog Exshop</p>
            <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">
              Campus Store
            </p>
          </div>
        </NavLink>

        <nav className="flex items-center gap-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink to="/cart" className={navLinkClassName}>
            Cart ({totalItems})
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;