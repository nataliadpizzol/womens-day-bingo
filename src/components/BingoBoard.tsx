import React from 'react';

interface BingoBoardProps {
  drawnNumbers: number[];
}

const BingoBoard: React.FC<BingoBoardProps> = ({ drawnNumbers }) => {
  // Define number ranges for columns with BINGO letters
  const columns = [
    { letter: 'B', range: [1, 15] },
    { letter: 'I', range: [16, 30] },
    { letter: 'N', range: [31, 45] },
    { letter: 'G', range: [46, 60] },
    { letter: 'O', range: [61, 75] }
  ];

  // Check if a number is drawn
  const isDrawn = (num: number) => drawnNumbers.includes(num);

  return (
    <div className="bingo-board">
      <div className="bingo-header">
        {columns.map((column) => (
          <div key={column.letter} className="bingo-column-header">
            {column.letter}
          </div>
        ))}
      </div>
      <div className="bingo-grid">
        {columns.map((column) => (
          <div key={column.letter} className="bingo-column">
            {Array.from({ length: column.range[1] - column.range[0] + 1 }, (_, i) => {
              const number = column.range[0] + i;
              return (
                <div
                  key={number}
                  className={`bingo-cell ${isDrawn(number) ? 'drawn' : ''}`}
                >
                  {number}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BingoBoard;