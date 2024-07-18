import { NavLink, useNavigate } from 'react-router-dom';

export default function Button({
  children = 'btn',
  to = null,
  navigationType = 'Link',
  type = 'primary',
  tailwindTextSize = 'text-base',
  bgTransparent = false,
  tailwindPadding = 'px-5 py-4',
  additionalTailwindClasses = '',
  customFunc = null,
}) {
  const navigate = useNavigate();

  let btnTypeClasses = '';
  if (type === 'primary')
    btnTypeClasses = `${bgTransparent ? 'bg-transparent' : 'bg-primary'} rounded-xl hover:bg-primary-hover`;
  if (type === 'secondary')
    btnTypeClasses = `${bgTransparent ? 'bg-transparent' : 'bg-white'} text-stone-500 rounded-lg hover:text-stone-400`;
  if (type === 'border')
    btnTypeClasses = `${bgTransparent ? 'bg-transparent hover:bg-[rgba(255,255,255,0.2)]' : 'bg-white hover:bg-slate-200'} border rounded-lg hover:border-stone-300`;
  if (type === 'link') btnTypeClasses = 'text-blue-500 hover:text-blue-400';

  const btnClassName = `${btnTypeClasses} ${tailwindTextSize} ${type !== 'link' ? tailwindPadding : ''} ${additionalTailwindClasses}  duration-[400ms]`;

  if (navigationType === 'NavLink')
    return (
      <NavLink className={btnClassName} to={to} onClick={() => customFunc && customFunc()}>
        {children}
      </NavLink>
    );

  return (
    <button
      className={btnClassName}
      onClick={() => {
        to && navigate(to);
        customFunc && customFunc();
      }}
    >
      {children}
    </button>
  );
}
