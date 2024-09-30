import React from 'react';
import { MdPlayCircleFilled } from "react-icons/md";

function StoryPages({ storyChapter, isDarkMode }: { storyChapter: any; isDarkMode: boolean; }) { // Accept isDarkMode as a prop
  const playSpeech = (text: string) => {
    const synth = window?.speechSynthesis;
    const textToSpeech = new SpeechSynthesisUtterance(text);
    synth.speak(textToSpeech);
  };

  return (
    <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h2 className='text-2xl font-bold text-primary flex justify-between items-center'>
        <span className='flex-1'>{storyChapter?.chapter_title}</span>
        <span 
          className='text-3xl cursor-pointer ml-2' 
          onClick={() => playSpeech(storyChapter?.chapter_text)}
        >
          <MdPlayCircleFilled />
        </span>
      </h2>
      <p className={`text-lg p-3 mt-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-slate-100'} line-clamp-[10]`}>
        {storyChapter?.chapter_text}
      </p>
    </div>
  );
}

export default StoryPages;
