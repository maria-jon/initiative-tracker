import { useState } from 'react'
/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.css'
import { RoundTracker } from './components/RoundTracker';

function App() {
  const [roundCount, setRoundCount] = useState<number>(1);
  const handleRoundTrackerChange = (value: number) => {
    setRoundCount(value);
  }

  return (
    <main>
      <h1>Initiative tracker</h1>
      <div>
        List of characters
      </div>

      <div className="round-tracker">
        <h2>Round {roundCount}</h2>
        <RoundTracker initialCount={1} onChange={handleRoundTrackerChange}/>
      </div>
    </main>

  )
}


export default App
