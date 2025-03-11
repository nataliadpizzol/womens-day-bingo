import React, { useEffect, useState } from 'react';

interface NumberDisplayProps {
  number: number | null;
}

const NumberDisplay: React.FC<NumberDisplayProps> = ({ number }) => {
  const [animate, setAnimate] = useState(false);

  // Trigger animation when number changes
  useEffect(() => {
    if (number !== null) {
      setAnimate(true);
      const timer = setTimeout(() => setAnimate(false), 500);
      return () => clearTimeout(timer);
    }
  }, [number]);

  if (number === null) {
    return (
      <div className="number-display-placeholder">
        <div className="empty-ball"></div>
      </div>
    );
  }

  return (
    <div className={`number-display ${animate ? 'animate' : ''}`}>
      <div className="number-ball large">{number}</div>
    </div>
  );
};

export default NumberDisplay;