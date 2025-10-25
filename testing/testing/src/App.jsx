import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import bujji from './assets/bajji.webp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img src={bujji} alt='hello' />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn morexkcdkndskl
      </p>
    </>
  )
}

export default App
