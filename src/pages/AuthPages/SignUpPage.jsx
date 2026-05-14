import { Link } from "react-router-dom";
import Button from "../../components/Button";

const inputClasses =
  "mt-2 w-full rounded-2xl border-2 border-zinc-900 bg-white px-5 py-4 text-sm font-medium text-zinc-900 outline-none shadow-[4px_5px_0_#0e6fae] transition placeholder:text-zinc-400 focus:-translate-y-0.5 focus:shadow-[6px_7px_0_#0a4d8c]";

const actionButtonClassName =
  "w-full rounded-xl py-3 text-[11px] tracking-[0.2em]";

const SignUpPage = () => {
  return (
    <>
      <Link
        to="/"
        className="mb-8 inline-flex items-center rounded-full border-2 border-zinc-900 bg-white px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-900 shadow-[4px_4px_0px_#236192] transition hover:-translate-y-1 hover:shadow-[4px_4px_0px_#0e6fae] active:scale-95"
      >
        ← Back Home
      </Link>

      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
        Sign Up
      </h1>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Create your account and start shopping at National-U Bulldog Exshop.
      </p>

      <form className="mt-8 space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="text-sm font-bold text-zinc-800"
            >
              First Name
            </label>

            <input
              id="first-name"
              type="text"
              placeholder="First name"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="text-sm font-bold text-zinc-800"
            >
              Last Name
            </label>

            <input
              id="last-name"
              type="text"
              placeholder="Last name"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="signup-email"
            className="text-sm font-bold text-zinc-800"
          >
            Email
          </label>

          <input
            id="signup-email"
            type="email"
            placeholder="Enter email address"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label
            htmlFor="signup-password"
            className="text-sm font-bold text-zinc-800"
          >
            Password
          </label>

          <input
            id="signup-password"
            type="password"
            placeholder="Enter password"
            autoComplete="new-password"
            className={inputClasses}
          />

          <p className="mt-2 text-xs leading-5 text-zinc-500">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="text-sm font-bold text-zinc-800"
          >
            Confirm Password
          </label>

          <input
            id="confirm-password"
            type="password"
            placeholder="Confirm password"
            autoComplete="new-password"
            className={inputClasses}
          />
        </div>

        <Button
          type="submit"
          variant="primary"
          className={actionButtonClassName}
        >
          Create Account
        </Button>

        <div className="grid gap-3 pt-2 sm:grid-cols-2">
          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Google
          </Button>

          <Button
            type="button"
            variant="secondary"
            className={actionButtonClassName}
          >
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-600">
        Already have an account?{" "}
        <Link
          to="/auth/signin"
          className="font-bold text-[#236192] transition hover:text-zinc-900"
        >
          Log In
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;