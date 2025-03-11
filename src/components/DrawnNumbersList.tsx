import React from 'react';

interface DrawnNumbersListProps {
  numbers: number[];
}

const DrawnNumbersList: React.FC<DrawnNumbersListProps> = ({ numbers }) => {
  return (
    <div className="drawn-numbers-list">
      <h2>Drawn Numbers ({numbers.length})</h2>

      <div className="number-grid">
        {numbers.sort((a, b) => a - b).map(num => (
          <div key={num} className="number-ball small">
            {num}
          </div>
        ))}
      </div>

      {numbers.length > 0 && (
        <div className="last-five">
          <h3>Last 5 Drawn</h3>
          <div className="recent-numbers">
            {numbers.slice(-5).reverse().map((num, idx) => (
              <div key={idx} className="number-ball medium">
                {num}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawnNumbersList;