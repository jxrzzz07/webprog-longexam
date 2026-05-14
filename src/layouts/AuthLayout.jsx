import loginImage from "../assets/img/login-image.png";

const AuthLayout = ({ children }) => {
  return (
    <section className="min-h-screen overflow-hidden bg-zinc-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden bg-[#0e6fae] lg:block">
          {/* Campus image */}
          <img
            src={loginImage}
            alt="National University"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />

          {/* Lighter blue overlay so image is still visible */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#063b70]/70 via-[#0e6fae]/45 to-[#042f56]/75" />

          {/* Decorative dotted pattern */}
          <div className="absolute left-0 top-0 h-72 w-full opacity-35 bg-[radial-gradient(circle,_rgba(255,255,255,0.75)_1.5px,_transparent_1.5px)] [background-size:32px_32px]" />

          {/* Decorative circles */}
          <div className="absolute left-[-180px] top-[160px] h-[720px] w-[720px] rounded-full border-2 border-white/40" />
          <div className="absolute bottom-[-80px] left-[-120px] h-80 w-80 rounded-full border border-white/35" />
          <div className="absolute bottom-[-110px] left-[-150px] h-96 w-96 rounded-full border border-white/20" />

          {/* Decorative squares */}
          <div className="absolute right-8 top-[-20px] h-32 w-32 rotate-45 border border-white/50" />
          <div className="absolute right-20 top-[-42px] h-32 w-32 rotate-45 border border-white/25" />

          {/* Text content */}
          <div className="absolute left-14 top-52 z-10 max-w-md">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-blue-100">
              National University
            </p>

            <h2 className="text-4xl font-black uppercase leading-tight tracking-wide text-white drop-shadow-lg">
              Empowering Minds.
              <br />
              Building Futures.
            </h2>

            <div className="my-6 h-1.5 w-24 rounded-full bg-white" />

            <p className="text-2xl font-bold italic text-white drop-shadow-md">
              “Education that works”
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center justify-center bg-zinc-100 px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;