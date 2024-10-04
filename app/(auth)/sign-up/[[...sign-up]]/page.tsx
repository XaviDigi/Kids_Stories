import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

export default function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center h-screen">
        <Image 
          src={'/login.png'} 
          alt='login' 
          width={700} 
          height={1000} 
          className='w-full h-auto' 
        />
      </div>
      <div className="flex flex-col justify-center items-center h-screen p-5 order-first md:order-last bg-neutral-light">
        <h2 className="text-2xl font-bold mb-4">Welcome!</h2>
        <p className="text-lg mb-6">No need to sign up. Sign in with Google to continue. </p>
        <SignIn 
          redirectUrl="/dashboard" 
          appearance={{
            elements: {
              rootBox: 'flex flex-col justify-center items-center',
            },
          }}
        />
      </div>
    </div>
  );
}
