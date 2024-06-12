import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GameContext, GameState, InitialGameState } from './components/player/GameState'
import Board from './pages/Board'

function App() {
  const [state, dispatch] = useReducer(GameState, InitialGameState)
  return (
    <>
      <GameContext.Provider value={{state : state, dispatch : dispatch}}> 
        <Board />
      </GameContext.Provider> 
    </>
  )
}

export default App
