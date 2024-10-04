"use client";
import { UserDetailContext } from '@/app/_context/UserDetailConext';
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext } from 'react';

function DashboardHeader() {
  const { userDetail } = useContext(UserDetailContext);

  return (
    <header className="p-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="font-extrabold text-4xl md:text-5xl tracking-wide">
          My Stories
        </h2>

        <div className="flex flex-col gap-2 items-center">
          <div className="flex items-center">
            <Image src={'/coin.png'} alt='coin' width={25} height={25} />
            <span className="text-xl md:text-2xl font-medium">
              {userDetail?.credit} Credit(s) Left
            </span>
          </div>

          <Link href="/buy-credits">
            <Button
              className="bg-blue-400 hover:bg-blue-600 px-3 py-1 rounded-full shadow-md transition-all duration-200 ease-in-out"
              color="secondary"
            >
              Buy More Credits
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default DashboardHeader;
