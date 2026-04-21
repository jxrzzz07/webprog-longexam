import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';

const SignUpPage = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(form);
    navigate('/');
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-3xl border-2 border-zinc-900 bg-white p-6 shadow-[6px_6px_0px_#236192]"
      >
        <h1 className="mb-4 text-2xl font-bold text-zinc-900">Sign Up</h1>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          className="mb-3 w-full rounded-xl border-2 border-zinc-900 px-4 py-3"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="mb-3 w-full rounded-xl border-2 border-zinc-900 px-4 py-3"
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="mb-3 w-full rounded-xl border-2 border-zinc-900 px-4 py-3"
          required
        />

        <button
          type="submit"
          className="w-full rounded-full bg-zinc-900 px-6 py-3 font-semibold text-white shadow-[6px_6px_0px_#236192] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#FFF000] active:scale-95"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;