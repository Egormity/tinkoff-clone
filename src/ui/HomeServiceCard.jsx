import Button from './Button';
import { implementToast } from '../utils/helpers';

export default function HomeServiceCard({
  heading = 'heading',
  text = 'text',
  btnText = 'btn',
  imagePath = null,
  additionalTailwindClasses = '',
}) {
  return (
    <div
      className={`${additionalTailwindClasses} relative cursor-pointer rounded-2xl bg-slate-200 px-10 py-8 pb-0 duration-[400ms] hover:scale-[102.5%]`}
      onClick={implementToast}
    >
      <p className='text-xl font-bold'>{heading}</p>
      <p className='mt-2 text-sm'>{text}</p>
      {imagePath && <img src={imagePath} className='bottom- mt-8' />}
      <Button
        type='secondary'
        tailwindPadding='px-4 py-3'
        tailwindTextSize='text-sm'
        additionalTailwindClasses='absolute top-[90%] translate-y-[-90%] left-1/2 translate-x-[-50%]'
      >
        {btnText}
      </Button>
    </div>
  );
}
