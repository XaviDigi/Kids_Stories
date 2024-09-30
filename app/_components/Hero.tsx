import { Button } from '@nextui-org/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 mt-10 h-screen'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
            <div>
                <h2 className='text-[70px] text-primary font-extrabold py-10'>Craft Magical Stories for kids in Minutes</h2>
                <p className='text-2xl text-primary font-light'>Create fun and personalised stories that bring your child's adventures to life and spark their passion for reading. It only takes a few seconds!</p>
                <Link href={'/create-story'}>
                <Button size='lg' color='primary' 
                className='mt-5 font-bold text-2xl p-8 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg shadow hover:from-pink-600 hover:to-purple-700 transition duration-300'>Create Story</Button>
                </Link>
            </div>
            <div>
                <Image src={'/hero.png'} alt='hero' width={600} height={300}/>
            </div>
        </div>
    </div>
  )
}

export default Hero
