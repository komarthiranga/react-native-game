import React from 'react';

const GameContext = React.createContext({
    number: '',
    setNumber: (number) => {},
    isGameSuccess: false,
    setIsGameSuccess: () => {}
});

export default GameContext;