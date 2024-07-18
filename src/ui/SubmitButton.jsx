export default function SubmitButton({ children = 'btn', btnSize = 'w-10 h-10', childrenSize = 'text-xl' }) {
  return (
    <button className={`${btnSize} relative rounded-xl bg-primary duration-[400ms] hover:bg-primary-hover`}>
      <span className={`${childrenSize} absolute-centered flex items-center justify-center`}>{children}</span>
    </button>
  );
}
