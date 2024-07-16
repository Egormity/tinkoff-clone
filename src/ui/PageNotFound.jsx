import Button from './Button';

export default function PageNotFound() {
  return (
    <div className='flex h-screen w-screen flex-col items-center justify-center gap-4'>
      <h1 className='text-3xl font-black'>Кажется, дальше тупик..</h1>
      <Button
        to={-1}
        tailwindTextSize='text-2xl'
        tailwindPadding='px-4 py-3'
        additionalTailwindClasses='font-semibold'
      >
        &larr; Назад
      </Button>
    </div>
  );
}
