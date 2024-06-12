import { useReducer, useState } from 'react'
import {RouterProvider, createRoutesFromElements, Route, createBrowserRouter} from "react-router-dom";


import './App.css'
import { GameContext, GameState, InitialGameState } from './components/player/GameState'
import Board from './pages/Board'
import Inventory from './pages/Inventory';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

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
    <DndProvider backend={HTML5Backend}>
      <GameContext.Provider value={{state, dispatch}}> 
        <RouterProvider router={router} />
      </GameContext.Provider> 
    </DndProvider>
    </>
  )
}

export default App
