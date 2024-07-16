import { useNavigate } from 'react-router-dom';

export default function Button({
  children,
  to = '/',
  tailwindTextSize = 'text-base',
  tailwindPadding = 'px-5 py-4',
  additionalTailwindClasses = '',
}) {
  const navigate = useNavigate();

  const btnClassName = `${tailwindTextSize} ${tailwindPadding} ${additionalTailwindClasses} bg-primary rounded-xl hover:bg-primary-hover duration-200`;

  return (
    <button className={btnClassName} onClick={() => navigate(to)}>
      {children}
    </button>
  );
}
