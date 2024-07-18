import Heading from './Heading';
import FormElement from './FormElement';
import tinkoffId from '../../public/global/tinkoff-id.svg';
import SubmitButton from './SubmitButton';
import Button from './Button';

export default function LoginPage() {
  return (
    <section className='relative flex h-screen w-screen items-center justify-center text-center'>
      <div className='flex flex-col items-center gap-10'>
        <Heading sizeType='secondary'>
          <span className='text-stone-200'>Фейк</span> Вход в Т-Банк
        </Heading>

        <form className='grid justify-items-end gap-5 max700px:justify-items-center max700px:gap-8'>
          <div className='flex items-center gap-4 max700px:flex-col'>
            <FormElement
              label='Придумайте себе имя'
              placeholder='Имя'
              name='name'
              required={true}
              btn={false}
            />
          </div>

          <div className='flex items-center gap-4 max700px:flex-col'>
            <FormElement
              label='Придумайте ненадежный пароль'
              placeholder='Пароль'
              name='password'
              required={true}
              btn={false}
            />
          </div>

          <div className='flex w-full items-center justify-between gap-5 max500px:flex-col'>
            <Button additionalTailwindClasses='max500px:order-1'>Создать новый аккаунт</Button>
            <Button>Продолжить</Button>
          </div>
        </form>
      </div>

      <img src={tinkoffId} className='absolute left-5 top-6' />
    </section>
  );
}
