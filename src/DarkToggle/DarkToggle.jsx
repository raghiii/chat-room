import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import './DarkToggle.css';
import { FaRegMoon } from 'react-icons/fa';
import { MdWbSunny } from 'react-icons/md';

const DARK_CLASS = 'dark';

export const DarkToggle = () => {
  const systemPrefersDark = useMediaQuery(
    {
      query: '(prefers-color-scheme: dark)',
    },
    undefined,
    (prefersDark) => {
      setIsDark(prefersDark);
    }
  );
  const getThemePref = localStorage.getItem('isDark');
  let theme;
  if (getThemePref === 'true') {
    theme = true;
  } else {
    theme = false;
  }
  const [isDark, setIsDark] = useState(theme);

  useEffect(() => {
    localStorage.setItem('isDark', isDark);
    if (isDark === true) {
      document.documentElement.classList.add(DARK_CLASS);
    } else {
      document.documentElement.classList.remove(DARK_CLASS);
    }
  }, [isDark]);

  const handleDarkMode = () => {
    setIsDark(!isDark);
  };

  return (
    <button
      className="dark-mode-button"
      type="button"
      onClick={() => handleDarkMode()}
      title={isDark ? 'Light Mode' : 'Dark Mode'}
    >
      {isDark ? (
        <MdWbSunny size={35} color={'white'} />
      ) : (
        <FaRegMoon size={30} />
      )}
    </button>
  );
};
