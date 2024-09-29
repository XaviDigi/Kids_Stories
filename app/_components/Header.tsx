"use client";
import React, { useState, useContext } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@nextui-org/navbar";
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/button';
import { UserButton, useUser } from '@clerk/nextjs';
import { UserDetailContext } from '@/app/_context/UserDetailConext';

function Header() {
    const { userDetail } = useContext(UserDetailContext); // Access user detail context
    const { isSignedIn } = useUser();
    const MenuList = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Create Story',
            path: '/create-story'
        },
        {
            name: 'Explore Stories',
            path: '/explore'
        },
        {
            name: 'Pricing',
            path: '/buy-credits'
        },
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar maxWidth='full' onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className='sm:hidden'
                />
                <NavbarBrand>
                    <Image src={'/logo.svg'} alt='logo' width={60} height={60} />
                    <h2 className='font-bold text-2xl text-primary ml-3'>Stories</h2>
                </NavbarBrand>
            </NavbarContent>
            <NavbarContent justify='center' className='hidden sm:flex'>
                {MenuList.map((item, index) => (
                    <NavbarItem key={index} className='text-xl text-primary font-medium hover:underline mx-2'>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>
            <NavbarContent justify='end' className='flex items-center'>
                {/* User Credit Display */}
                {isSignedIn && userDetail && (
                    <div className='flex items-center gap-2 mr-4 hidden sm:flex'>
                        <Image src='/coin.png' alt='coin' width={30} height={30} />
                        <span className='text-lg'>{userDetail.credit} Credit(s)</span>
                    </div>
                )}
                <Link href={'/dashboard'}>
                    <Button color='primary'>
                        {isSignedIn ? 'Dashboard' : 'Get Started'}
                    </Button>
                </Link>
                <UserButton />
            </NavbarContent>
            <NavbarMenu>
                {MenuList.map((item, index) => (
                    <NavbarMenuItem key={index}>
                        <Link href={item.path}>
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>

            {/* User Credit Display for Smaller Screens */}
            <div className='flex items-center gap-2 mr-4 sm:hidden'>
                {isSignedIn && userDetail && (
                    <>
                        <Image src='/coin.png' alt='coin' width={30} height={30} />
                        <span className='text-lg'>{userDetail.credit} Credit(s)</span>
                    </>
                )}
            </div>
        </Navbar>
    );
}

export default Header;
