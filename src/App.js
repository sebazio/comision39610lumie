import { useState } from 'react'
import './App.css';
import Counter  from './components/Counter/Counter';

function App() {
  const [view, setView] = useState('manzanas')

  return (
    <div className="App">
      <div>
        <button onClick={() => setView('manzanas')}>Manzanas</button>
        <button onClick={() => setView('naranjas')}>Naranjas</button>
        <button onClick={() => setView('bananas')}>Bananas</button>
      </div>
      {view === 'manzanas' && <Counter title="Manzanas" min={5} max={15}/>}
      {view === 'naranjas' && <Counter title="Naranjas" min={10} max={20}/>}
      {view === 'bananas' && <Counter title="Bananas" min={7} max={14}/>}
    </div>
  );
}

export default App;
