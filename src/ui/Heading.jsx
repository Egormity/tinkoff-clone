export default function Heading({ children = 'heading', sizeType = 'primary' }) {
  let finalSizeType = '';
  if (sizeType === 'primary') finalSizeType = 'text-5xl font-black';
  if (sizeType === 'secondary') finalSizeType = 'text-3xl font-black';
  if (sizeType === 'small') finalSizeType = 'text-2xl font-semibold';

  return <h1 className={`${finalSizeType}`}>{children}</h1>;
}
