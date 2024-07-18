import { MdOutlineNavigateNext } from 'react-icons/md';

import SubmitButton from './SubmitButton';

export default function FormElement({
  label = 'label',
  placeholder = 'placeholder',
  name = null,
  tailwindGap = 'gap-4',
  required = false,
  btn = true,
}) {
  if (!name) return <p>You have to provide a uniqe name for this input to work currenctly</p>;

  return (
    <>
      <label htmlFor={name} className='text-xl'>
        {label}
      </label>

      <div className={`${tailwindGap} flex items-center justify-center`}>
        <input
          id={name}
          placeholder={placeholder}
          className='rounded-xl border px-5 py-4 outline-stone-300'
          required={required}
        />

        {btn && (
          <SubmitButton btnSize='w-[3.625rem] h-[3.625rem]'>
            <MdOutlineNavigateNext />
          </SubmitButton>
        )}
      </div>
    </>
  );
}
