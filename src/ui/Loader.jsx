import loaderSvg from './../../public/loader.svg';

export default function Loader() {
  return (
    <div className='absolute inset-0 flex h-full w-full items-center justify-center bg-slate-200/20 backdrop-blur-sm'>
      <img src={loaderSvg} alt='SVG loader' />
    </div>
  );
}
