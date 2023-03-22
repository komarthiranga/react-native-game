import React, { useState } from 'react';
import GameContext from './game-context';

const GameProvider = ({children}) => {
    const [ number, setNumberInst ] = useState(0);
    const [ isGameSuccess, setIsGameSuccessInst ] = useState(false);
    const setNumber = number => setNumberInst(number);
    const setIsGameSuccess = flag => setIsGameSuccessInst(flag);
    const gameProviderObject = {
        number,
        setNumber,
        isGameSuccess,
        setIsGameSuccess
    };
    return(
        <GameContext.Provider value={gameProviderObject}>
                {children}
        </GameContext.Provider>
    )
}

export default GameProvider;