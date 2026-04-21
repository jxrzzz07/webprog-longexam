import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t-2 border-zinc-900 bg-zinc-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        
        {/* GRID */}
        <div className="grid gap-8 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <p className="text-lg font-bold text-zinc-900">
              National-U Bulldog Exshop
            </p>
            <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mt-1">
              Campus Store
            </p>
            <p className="text-sm text-zinc-600 mt-3">
              Built for student essentials, campus wear, and everyday shopping.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <p className="text-sm font-semibold text-zinc-900 mb-3">
              Quick Links
            </p>
<div className="flex flex-col gap-2 text-sm">
  <NavLink to="/" className="hover:underline">Home</NavLink>
  <NavLink to="/about" className="hover:underline">About</NavLink>
  <NavLink to="/products" className="hover:underline">Products</NavLink>
  <NavLink to="/cart" className="hover:underline">Cart</NavLink>
  <NavLink to="/signin" className="hover:underline">Sign In</NavLink>
  <NavLink to="/signup" className="hover:underline">Sign Up</NavLink>
</div>
          </div>

          {/* CONTACT / LOCATION */}
          <div>
            <p className="text-sm font-semibold text-zinc-900 mb-3">
              Contact
            </p>

            <div className="text-sm text-zinc-600 space-y-2">
              <p>Email: bulldogexshop@email.com</p>
              <p>Location: Sampaloc, Manila, Philippines</p>
              <p>Pickup: NU Bulldog Exchange, Manila Campus</p>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-8 border-t border-zinc-300 pt-4 text-center text-xs text-zinc-500">
          © 2026 National-U Bulldog Exshop. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;