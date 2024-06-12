import { useReducer, useState } from 'react'

import './App.css'
import { GameContext, GameState, InitialGameState } from './components/player/GameState'
import Board from './pages/Board'

function App() {
  const [state, dispatch] = useReducer(GameState, InitialGameState)
  return (
    <>
      <GameContext.Provider value={{state, dispatch}}> 
        <Board />
      </GameContext.Provider> 
    </>
  )
}

export default App
