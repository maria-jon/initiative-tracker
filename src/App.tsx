import { useState } from 'react'
/*
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
*/
import './App.css'
import { RoundTracker } from './components/RoundTracker';
import { CharacterApp } from './components/CharacterApp';

function App() {
  /*
  const [roundCount, setRoundCount] = useState<number>(1);
  const handleRoundTrackerChange = (value: number) => {
    setRoundCount(value);
  }
  */

  return (
    <main>
      <h1>Initiative tracker</h1>
      <div>
        <h2>List of characters</h2>
        <p>Name / Init / HP / AC</p>
        <CharacterApp />
      </div>

      <div className="round-tracker">
        <RoundTracker initialCount={1} />
      </div>

      {/*
      <div className="round-tracker">
        <h2>Round {roundCount}</h2>
        <RoundTracker initialCount={1} onChange={handleRoundTrackerChange}/>
      </div>
      */}
    </main>

  )
}

export default App
