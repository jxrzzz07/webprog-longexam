import { Link } from 'react-router-dom';

const Button = ({
  children,
  to,
  onClick,
  type = 'button',
  className = '',
  variant = 'primary',
}) => {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full border-2 px-6 py-2 text-sm font-semibold tracking-wide transition-all duration-200';

  const variants = {
    primary:
      'border-zinc-900 bg-zinc-900 text-zinc-50 shadow-[4px_4px_0px_#236192] hover:shadow-[6px_6px_0px_#FFF000] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
    secondary:
      'border-zinc-900 bg-white text-zinc-900 shadow-[4px_4px_0px_#FFF000] hover:shadow-[6px_6px_0px_#236192] hover:-translate-x-[2px] hover:-translate-y-[2px] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none',
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;