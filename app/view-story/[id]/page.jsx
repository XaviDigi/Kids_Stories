"use client"
import { db } from '@/config/db'
import { StoryData } from '@/config/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useRef, useState } from 'react'
import HTMLFlipBook from 'react-pageflip';
import BookCoverPage from '../_components/BookCoverPage'
import StoryPages from '../_components/StoryPages'
import LastPage from '../_components/LastPage'
import { Button } from '@nextui-org/button'
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

function ViewStory({ params }) {

  const [story, setStory] = useState();
  const bookRef = useRef();
  const [count, setCount] = useState(0);

  useEffect(() => {
    getStory();
  }, [])

  const getStory = async () => {
    const result = await db.select().from(StoryData)
      .where(eq(StoryData.storyId, params.id));

    setStory(result[0]);
  }

  return (
    <div className='p-4 md:p-10 lg:px-40 flex justify-center flex-col'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center py-4 md:py-10 bg-primary text-white'>
        {story?.output?.story_cover?.title}
      </h2>
      
      <div className='relative flex justify-center'>
        {/* @ts-ignore */}
        <HTMLFlipBook
          width={300} height={300} // Reduced for small screens
          className='mt-6 sm:mt-10'
          showCover={true}
          useMouseEvents={false}
          ref={bookRef}
        >
          <div>
            <BookCoverPage imageUrl={story?.coverImage} />
          </div>
          {
            [...Array(story?.output?.chapters?.length)].map((item, index) => (
              <div key={index} className='bg-white p-4 sm:p-10 border'>
                <StoryPages storyChapter={story?.output.chapters[index]} />
              </div>
            ))
          }
        </HTMLFlipBook>

        {count != 0 && (
          <div className='absolute -left-3 sm:-left-5 top-[150px] sm:top-[250px]'
            onClick={() => {
              bookRef.current.pageFlip().flipPrev();
              setCount(count - 1)
            }}
          >
            <IoIosArrowDropleftCircle className='text-[30px] sm:text-[40px] text-primary cursor-pointer' />
          </div>
        )}

        {count != (story?.output.chapters?.length - 1) && (
          <div className='absolute right-0 top-[150px] sm:top-[250px]'
            onClick={() => {
              bookRef.current.pageFlip().flipNext();
              setCount(count + 1)
            }}
          >
            <IoIosArrowDroprightCircle className='text-[30px] sm:text-[40px] text-primary cursor-pointer' />
          </div>
        )}
      </div>
    </div>
  )
}

export default ViewStory;
