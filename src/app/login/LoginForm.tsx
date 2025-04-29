"use client";

// import { testUser } from '@/constants';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { useForm } from 'react-hook-form';
// import { z, ZodType } from 'zod';
import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { login } from './actions';

export type FormData = {
  username: string;
  password: string;
};

const LoginForm = () => {
  const [state, loginAction] = useActionState(login, undefined);
  // const schema: ZodType<FormData> = z.object({
  //   username: z.string().min(8, { message: "Username must be at least 8 characters" }).trim(),
  //   password: z.string().min(8, { message: "Password must be at least 8 characters" }).trim()
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   setError,
  //   formState: {
  //     errors
  //   }
  // } = useForm<FormData>({
  //   resolver: zodResolver(schema)
  // });

  // const onSubmit = async (data: FormData) => {
  //   if (data.username !== testUser.username || data.password !== testUser.password) {
  //     return setError("password", { message: "Combination of username and password is incorrect" });
  //   };
    
  //   onLogin(data.username);
  // };

  return (
    <form
      className="space-y-6"
      // onSubmit={handleSubmit(onSubmit)}
      action={loginAction}
    >
      <div>
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900 dark:invert">Username</label>
        <div className="mt-2">
          <input
            // {...register("username")}
            type="text"
            id="username"
            name="username"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 dark:invert outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
          />
          {state?.errors?.username && <p className='text-red-500 text-sm mt-1'>{state.errors.username}</p>}
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900 dark:invert">Password</label>
        </div>
        <div className="mt-2">
          <input
            // {...register("password")}
            type="password"
            id="password"
            name="password"
            className="block w-full rounded-md bg-white px-3 py-3 text-base text-gray-900 dark:invert outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
          />
          {state?.errors?.password && <p className='text-red-500 text-sm mt-1'>{state.errors.password}</p>}
        </div>
      </div>

      <div>
        <SubmitButton />
        {/* <button
          type="submit"
          className="flex w-full justify-center rounded-md px-3 py-3 text-sm/6 font-semibold shadow-xs transition-colors bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert"
          disabled={false}
        >
          Sign in
        </button> */}
      </div>
    </form>
  )
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className="flex w-full justify-center rounded-md px-3 py-3 text-sm/6 cursor-pointer font-semibold shadow-xs transition-colors bg-gradient-to-tr from-slate-900 to-slate-600 text-white dark:invert">
      Login
    </button>
  );
}

export default LoginForm