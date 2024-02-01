"use client"

import React from 'react'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  SunIcon,
} from '@heroicons/react/24/solid';
import {
  MoonIcon,
} from '@heroicons/react/24/outline';



const ThemeIcon = () => {

  const { systemTheme, theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null;

  return (
    <div className={``} >
      {!mounted ? null : (
        <button
          onClick={
            currentTheme === "light"
              ? () => setTheme("dark")
              : () => setTheme("light")
          }
        >
          {currentTheme === "light" ? <MoonIcon className='w-6 h-6' /> : <SunIcon className='w-6 h-6' />}
        </button>
      )}
    </div>
  )
}

export default ThemeIcon
