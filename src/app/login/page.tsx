import Image from 'next/image'
import LoginForm from './LoginForm'

const LoginPage = async() => {

  return (
    <div className='h-screen'>
      <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm w-full flex flex-col items-center">
          <Image
            className="dark:invert w-32"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900 dark:invert">Sign in to your account</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;