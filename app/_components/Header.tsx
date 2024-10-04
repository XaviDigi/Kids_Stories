"use client";
import React, { useState, useContext, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/app/_context/UserDetailConext';

function Header() {
    const { userDetail } = useContext(UserDetailContext);
    const { isSignedIn } = useUser();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
    const [isDarkMode, setIsDarkMode] = useState(false); // Add state for dark mode

    const MenuList = [
        { name: 'Home', path: '/' },
        { name: 'Create Story', path: '/create-story' },
        { name: 'Explore Stories', path: '/explore' },
        { name: 'Pricing', path: '/buy-credits' },
    ];

    // Handle mouse enter to show menu
    const handleMouseEnter = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        setIsMenuOpen(true);
    };

    // Handle mouse leave to hide menu after a short delay
    const handleMouseLeave = () => {
        const id = setTimeout(() => {
            setIsMenuOpen(false);
        }, 200);
        setTimeoutId(id);
    };

    // Close the menu when window resizes
    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(false);
        };

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Cleanup event listener when component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
        document.body.classList.toggle('dark', !isDarkMode); // Toggle dark class on body
    };

    return (
        <Navbar
          maxWidth="full"
         
          
        >
          {/* Logo and menu */}
          <NavbarBrand className="flex flex-col items-start">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <span className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-teal-500 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-200 ease-in-out text-lg text-primary font-medium hover:text-pink-500 cursor-pointer">
                Menu
              </span>
      
              {isMenuOpen && (
                <div className="absolute left-0 mt-4 rounded-md z-10 transition-all duration-300 ease-in-out">
                  {/* Added margin between menu and menu items */}
                  <div className="flex flex-col sm:flex-row gap-4 p-4">
                    {MenuList.map((item, index) => (
                      <Link
                        key={index}
                        href={item.path}
                        className="bg-gradient-to-r from-purple-300 to-pink-300 hover:from-pink-300 hover:to-yellow-300 text-white px-5 py-2 rounded-full shadow-lg transition-all duration-200 ease-in-out"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

                </div>
            </NavbarBrand>

            {/* Right side: User actions */}
            <NavbarContent justify="end" className="flex items-center ml-auto">
  {/* Dark mode switch */}
  {/* <Button
    onClick={toggleDarkMode}
    className="mr-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white transition-all duration-200 ease-in-out px-4 py-2 rounded-lg shadow-md"
  >
    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
  </Button> */}

  {isSignedIn && userDetail && (
    <div className="flex items-center gap-2 mr-4 hidden sm:flex">
      <Image src="/coin.png" alt="coin" width={20} height={20} />
      <span className="text-m text-red-500">{userDetail.credit} Credit(s)</span>
    </div>
  )}

  <Link href={'/dashboard'}>
    <Button
      className="mr-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-purple-500 text-white transition-all duration-200 ease-in-out px-4 py-2 rounded-lg shadow-md"
      
    >
      {isSignedIn ? 'Dashboard' : 'Get Started'}
    </Button>
  </Link>

  <UserButton />
</NavbarContent>


            {/* Mobile view: User credit */}
            <div className='flex items-center gap-2 mr-4 sm:hidden'>
                {isSignedIn && userDetail && (
                    <>
                        <Image src='/coin.png' alt='coin' width={30} height={30} />
                        <span className='text-m  text-red-500'>{userDetail.credit} Credit(s)</span>
                    </>
                )}
            </div>
        </Navbar>
    );
}

export default Header;
