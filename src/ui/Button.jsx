import { NavLink, useNavigate } from 'react-router-dom';

export default function Button({
  children,
  to = '',
  navigationType = 'Link',
  type = 'primary',
  tailwindTextSize = 'text-base',
  tailwindPadding = 'px-5 py-4',
  additionalTailwindClasses = '',
  customFunc = null,
}) {
  const navigate = useNavigate();

  let btnTypeClasses = '';
  if (type === 'primary') btnTypeClasses = 'bg-primary rounded-xl hover:bg-primary-hover';
  if (type === 'secondary') btnTypeClasses = 'bg-white text-stone-500 rounded-lg hover:text-stone-400';
  const btnClassName = `${btnTypeClasses} ${tailwindTextSize} ${tailwindPadding} ${additionalTailwindClasses}  duration-200`;

  if (navigationType === 'NavLink')
    return (
      <NavLink className={btnClassName} to={to} onClick={() => (customFunc ? customFunc() : null)}>
        {children}
      </NavLink>
    );

  return (
    <button
      className={btnClassName}
      onClick={() => {
        navigate(to);
        customFunc ? customFunc() : null;
      }}
    >
      {children}
    </button>
  );
}
