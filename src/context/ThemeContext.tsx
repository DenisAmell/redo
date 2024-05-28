import React from 'react';

export enum themes {
  darkMgts = 'dark-MGTS',
  lightMgts = 'light-MGTS',
  darkMts = 'dark-MTS',
  lightMts = 'light-MTS',
}

export const ThemeContext = React.createContext<{
  theme: themes;
  setTheme: React.Dispatch<React.SetStateAction<themes>>;
}>({} as any);
