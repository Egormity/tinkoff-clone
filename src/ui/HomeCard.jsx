import Button from './Button';
import { implementToast } from '../utils/helpers';

export default function HomeCard({
  heading = 'heading',
  text = 'text',
  btnText = 'btn',
  imagePath = '',
  additionalTailwindClasses = '',
}) {
  return (
    <div className={`${additionalTailwindClasses} relative rounded-2xl bg-slate-200 px-10 py-8 pb-0`}>
      <p className='text-xl font-bold'>{heading}</p>
      <p className='mt-2 text-sm'>{text}</p>
      <img src={imagePath} className='bottom- mt-8' />
      <Button
        type='secondary'
        tailwindPadding='px-4 py-3'
        tailwindTextSize='text-sm'
        additionalTailwindClasses='absolute top-[90%] translate-y-[-90%] left-1/2 translate-x-[-50%]'
        customFunc={implementToast}
      >
        {btnText}
      </Button>
    </div>
  );
}
