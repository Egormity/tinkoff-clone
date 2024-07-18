import Button from './Button';
import { implementToast } from '../utils/helpers';
import Heading from './Heading';

export default function HomeServiceCard({
  icon = null,
  heading = 'heading',
  text = 'text',
  btnText = 'btn',
  additionalTailwindClasses = '',
  standOut = false,
}) {
  return (
    <div
      className={`${additionalTailwindClasses} ${standOut ? 'bg-slate-400 text-white' : 'bg-slate-100'} flex cursor-pointer flex-col items-start justify-between gap-y-8 rounded-2xl px-10 py-8 text-left duration-[400ms] hover:scale-[102.5%]`}
      onClick={implementToast}
    >
      {icon && <span className='text-3xl text-blue-600'>{icon}</span>}

      <div>
        <Heading sizeType='small'>{heading}</Heading>
        <p className='mt-2 text-sm'>{text}</p>
      </div>

      <Button type='link' tailwindTextSize='text-sm' customFunc={null}>
        {btnText}
      </Button>
    </div>
  );
}
