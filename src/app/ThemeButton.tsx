'use client';
import React, { useState } from 'react';

type Props = {
  theme: string;
};

export const ThemeButton = (props: Props) => {
  const [theme, setTheme] = useState(props.theme);
  return (
    <button
      className="absolute top-3 right-3 rounded dark:bg-gray-200 bg-gray-800 text-white dark:text-black w-8 h-8"
      onClick={() => {
        fetch('/api/theme', {
          method: 'post',
        });
        // Turn to dark
        if (theme === 'light') {
          document.body.classList.remove('light');
          document.body.classList.add('dark');
          setTheme('dark');
        } else {
          document.body.classList.remove('dark');
          document.body.classList.add('light');
          setTheme('light');
        }
      }}
    >
      T
    </button>
  );
};
