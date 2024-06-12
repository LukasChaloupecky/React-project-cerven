import { useReducer, useState } from 'react'
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from "react-router-dom";


import './App.css'
import { GameContext, GameState, InitialGameState } from './components/player/GameState'
import Board from './pages/Board'
import Inventory from './pages/Inventory';

function App() {
  const [state, dispatch] = useReducer(GameState, InitialGameState)
  const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Board />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Board" element={<Board />} />
        </>
    )/*, {basename: "/git"}*/
  );
  return (
    <>

      <GameContext.Provider value={{state, dispatch}}> 
        <RouterProvider router={router} />
      </GameContext.Provider> 
    </>
  )
}

export default App
