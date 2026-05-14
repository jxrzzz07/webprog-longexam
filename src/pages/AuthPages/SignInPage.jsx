import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-white px-5 py-4 text-sm font-medium text-zinc-900 outline-none shadow-[4px_5px_0_#0e6fae] transition placeholder:text-zinc-400 focus:-translate-y-0.5 focus:shadow-[6px_7px_0_#0a4d8c]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignInPage = () => {
  return (
    <>
      <Link
        to="/"
        className="mb-8 inline-flex items-center rounded-full border-2 border-zinc-900 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-[4px_4px_0px_#236192] transition hover:-translate-y-1 hover:shadow-[4px_4px_0px_#0e6fae] active:scale-95"
      >
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Log In
      </h1>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Access your account and continue shopping with National-U Bulldog
        Exshop.
      </p>

      <form className="mt-8 space-y-5">
        <div>
          <label
            htmlFor="signin-email"
            className="text-sm font-bold text-zinc-800"
          >
            Email Address
          </label>

          <input
            id="signin-email"
            type="email"
            placeholder="Enter email address"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signin-password"
            className="text-sm font-bold text-zinc-800"
          >
            Password
          </label>

          <input
            id="signin-password"
            type="password"
            placeholder="Enter password"
            autoComplete="current-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            It must be a combination of minimum 8 letters, numbers, and
            symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex items-center gap-2 text-zinc-600">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-zinc-300 accent-[#236192]"
            />
            <span>Remember me</span>
          </label>

          <button
            type="button"
            className="font-semibold text-[#236192] transition hover:text-zinc-900"
          >
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Log In
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        No account yet?{" "}
        <Link
          to="/auth/signup"
          className="font-bold text-[#236192] transition hover:text-zinc-900"
        >
          Sign Up
        </Link>
      </div>
    </>
  );
};

export default SignInPage;