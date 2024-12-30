import { createContext, useState, useContext } from 'react';

const PlayContext = createContext(); // Creating the Play context

export const PlayProvider = ({ children }) => {
  const [play, setPlay] = useState(false);
  const [end, setEnd] = useState(false);
  const [hasScroll, setHasScroll] = useState(false);

  return (
    <PlayContext.Provider value={{ play, end, setPlay, hasScroll }}>
      {children}
    </PlayContext.Provider>
  );
};

export const usePlay = () => {
  const context = useContext(PlayContext);
  if (context === undefined) {
    throw new Error('usePlay must be used within a PlayProvider');
  }
  return context;
};
