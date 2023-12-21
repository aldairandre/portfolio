"use client"

import React,{ReactNode} from 'react'
import {
  LanguageIcon
} from '@heroicons/react/24/solid';
import { useLanguages } from '../../contexts/LanguageContext';

const Languageincon = ({children}:{children:ReactNode}) => {
 
  const { language, changeLanguage } = useLanguages()

  return (
    <div className='flex justify-between pt-[21px] pb-[27.3px] ml-[35px] mr-[35.3px]'>
      <LanguageIcon className="w-6 h-6" onClick={() => { language === "en" ? changeLanguage("pt") : changeLanguage("en") }} />
      {children}
    </div>
  )
}

export default Languageincon