import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeContextType = {
  soundEnabled: boolean;
  toggleSound: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [soundEnabled, setSoundEnabled] = useState(false);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ soundEnabled, toggleSound }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}