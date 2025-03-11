import { useState, useEffect } from 'react'
import './App.css'
import NumberDisplay from './components/NumberDisplay'
import BingoBoard from './components/BingoBoard'
import NumberDialog from './components/NumberDialog'
import personData from './data.json'

function App() {
  const [numbers, setNumbers] = useState<number[]>(Array.from({length: 75}, (_, i) => i + 1));
  const [currentNumber, setCurrentNumber] = useState<number | null>(null);
  const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
  const [showDialog, setShowDialog] = useState(false);

  // Filter numbers based on available data in JSON
  useEffect(() => {
    // Log the JSON data to verify it's loaded correctly
    console.log('Loaded person data:', personData);
    console.log('Total entries in JSON:', personData.length);

    if (personData && personData.length > 0) {
      // Get all numbers from the JSON data
      const availableNumbers = personData.map((item: any) => item.i).filter(Boolean);
      console.log('Available numbers from JSON:', availableNumbers);

      // Only keep numbers that are in the JSON data
      setNumbers(prev => {
        const filtered = prev.filter(num => availableNumbers.includes(num));
        console.log('Filtered numbers for bingo:', filtered);
        return filtered;
      });
    }
  }, []);

  // Draw a random number
  const drawNumber = () => {
    if (numbers.length === 0) {
      alert('All numbers have been drawn!');
      return;
    }

    const randomIndex = Math.floor(Math.random() * numbers.length);
    const drawn = numbers[randomIndex];
    console.log('Drawn number:', drawn);

    // Remove the drawn number from the available numbers
    const newNumbers = [...numbers];
    newNumbers.splice(randomIndex, 1);

    setNumbers(newNumbers);
    setCurrentNumber(drawn);
    setDrawnNumbers(prev => [...prev, drawn]);
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="bingo-container">
      {showDialog && <NumberDialog number={currentNumber} onClose={closeDialog} />}

      <div className="bingo-sidebar">
        <div className="title-container">
          <div className="title-top">WOMEN'S DAY</div>
          <h1 className="bingo-title">BINGO</h1>
          <div className="stars-container">
            <span className="star star-1">✦</span>
            <span className="star star-2">✦</span>
            <span className="star star-3">✧</span>
            <span className="star star-4">✧</span>
          </div>
        </div>

        <div className="settings">
          <div className="buttons">
            <button onClick={drawNumber} disabled={numbers.length === 0} className="draw-button">
              Draw Number
            </button>
          </div>

          <div className="status-info">
            <p>Remaining: <strong>{numbers.length}</strong></p>
            <p>Drawn: <strong>{drawnNumbers.length}</strong></p>
          </div>
        </div>

        <NumberDisplay number={currentNumber} />
        {drawnNumbers.length > 0 && (
          <div className="last-five">
            <h3>Last 5 Drawn</h3>
            <div className="recent-numbers">
              {drawnNumbers.slice(-5).reverse().map((num, idx) => (
                <div key={idx} className="number-ball medium">
                  {num}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="game-content">
        <div className="board-section">
          <BingoBoard drawnNumbers={drawnNumbers} />
        </div>
      </div>
    </div>
  );
}

export default App
