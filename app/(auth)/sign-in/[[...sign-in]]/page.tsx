import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div className='flex justify-center items-center'>
        <Image
          src={'/login.png'}
          alt='login'
          width={700}
          height={1000}
          className='w-full h-auto max-w-md md:max-w-lg'
        />
      </div>
      <div className='flex flex-col justify-center items-center h-screen order-first md:order-last bg-neutral-light p-5'>
      <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
      <p className="text-lg mb-6">Sign in with Google to continue.</p>
        <SignIn />
      </div>
    </div>
  );
}
