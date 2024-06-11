import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { GameState, InitialGameState } from './components/player/GameState'

function App() {
  const [state, dispatch] = useReducer(GameState, InitialGameState)
  return (
    <>
      
    </>
  )
}

export default App
