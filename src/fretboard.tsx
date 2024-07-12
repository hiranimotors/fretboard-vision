import React from 'react';
import './fretboard.css';

const Fretboard: React.FC = () => {
  const strings = 6;
  const frets = 12;

  return (
    <div className="fretboard">
      {Array.from({ length: strings }).map((_, stringIndex) => (
        <div key={stringIndex} className="string">
          {Array.from({ length: frets }).map((_, fretIndex) => (
            <div key={fretIndex} className="fret"></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Fretboard;
