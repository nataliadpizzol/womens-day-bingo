import React, { useEffect, useState } from 'react';

// Define the structure of our data from the JSON
interface PersonData {
  i: number;
  Nome: string;
  Emojis: string;
  Area?: string;
  "Área em que trabalha"?: string;
  Descricao?: string;
  Descrição?: string;
  Hobbies?: string;
  "O hobbies dela são..."?: string;
  Foto: string;
}

// Import the JSON data
import personData from '../data.json';

interface NumberDialogProps {
  number: number | null;
  onClose: () => void;
}

const NumberDialog: React.FC<NumberDialogProps> = ({ number, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [person, setPerson] = useState<PersonData | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    if (number !== null) {
      setIsVisible(true);

      // Find the person data for this number
      const foundPerson = personData.find((item: PersonData) => item.i === number);
      console.log(`Looking for person with number ${number}:`, foundPerson);

      if (foundPerson) {
        setPerson(foundPerson);
        console.log('Person data set:', foundPerson);
      } else {
        console.warn(`No person found for number ${number}`);
      }
    }
  }, [number, onClose]);

  if (!isVisible || number === null) {
    return null;
  }

  // Get the BINGO letter for the number
  const getBingoLetter = (num: number) => {
    if (num >= 1 && num <= 15) return 'B';
    if (num >= 16 && num <= 30) return 'I';
    if (num >= 31 && num <= 45) return 'N';
    if (num >= 46 && num <= 60) return 'G';
    if (num >= 61 && num <= 75) return 'O';
    return '';
  };

  const letter = getBingoLetter(number);

  // Handle different field names in the JSON
  const getArea = () => person?.Area || person?.["Área em que trabalha"] || "";
  const getDescription = () => person?.Descricao || person?.Descrição || "";
  const getHobbies = () => person?.Hobbies || person?.["O hobbies dela são..."] || "";

  // Fix image URLs
  const getImageUrl = (url: string) => {
    if (!url) return '';

    // Handle Google Drive links
    if (url.includes('drive.google.com/open?id=')) {
      const id = url.split('id=')[1];
      return `https://drive.google.com/uc?export=view&id=${id}`;
    } else if (url.includes('drive.google.com/file/d/')) {
      const id = url.split('/d/')[1].split('/')[0];
      return `https://drive.google.com/uc?export=view&id=${id}`;
    }

    // Handle Azure blob storage URLs
    if (url.includes('tibbyappstorage.blob.core.windows.net')) {
      // Azure blob storage URLs are already direct links
      return url;
    }

    return url;
  };

  // Handle image loading
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.target as HTMLImageElement;
    img.style.objectFit = 'cover';
    img.style.objectPosition = 'center';
    img.style.width = '100%';
    img.style.height = '100%';
  };

  // Handle image error
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, url: string) => {
    console.error(`Failed to load image: ${url}`);
    const target = e.target as HTMLImageElement;
    target.src = 'https://via.placeholder.com/180?text=No+Image';
    target.style.objectFit = 'cover';
    target.style.width = '100%';
    target.style.height = '100%';
    target.style.objectPosition = 'center';
  };

  // Toggle debug mode with double click on the title
  const handleTitleClick = () => {
    setShowDebug(!showDebug);
  };

  return (
    <div className="dialog-overlay">
      <div className="dialog-container">
        <button className="dialog-close" onClick={onClose}>×</button>

        {person ? (
          <>
           <div className="number-ball medium">
              {number}
            </div>

            <h1 className="dialog-title" onDoubleClick={handleTitleClick}>
              {person.Nome} {person.Emojis}
            </h1>

            <div className="dialog-content">
              {person.Foto && (
                <div className="dialog-photo">
                  <img
                    src={getImageUrl(person.Foto)}
                    alt={person.Nome}
                    loading="eager"
                    onLoad={handleImageLoad}
                    onError={(e) => handleImageError(e, person.Foto)}
                  />
                </div>
              )}

              <div className="dialog-info">
                <p className="dialog-area"><strong>Área:</strong> {getArea()}</p>

                {getDescription() && (
                  <div className="dialog-description-container">
                    <p className="dialog-description">
                      {getDescription()}
                    </p>
                  </div>
                )}

                {getHobbies() && (
                  <p className="dialog-hobbies"><strong>Hobbies:</strong> {getHobbies()}</p>
                )}

                {showDebug && (
                  <div className="dialog-debug">
                    <h4>Debug Info:</h4>
                    <pre>{JSON.stringify(person, null, 2)}</pre>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="dialog-title" onDoubleClick={handleTitleClick}>
              {letter}-{number}
            </h1>

            <div className="number-ball medium">
              {number}
            </div>

            <div className="dialog-content">
              <p>Number {letter}-{number} has been drawn!</p>
              <p className="dialog-error">No data found for this number.</p>

              {showDebug && (
                <div className="dialog-debug">
                  <h4>Debug Info:</h4>
                  <p>Total entries in data: {personData.length}</p>
                  <p>Available numbers: {personData.map(p => p.i).join(', ')}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NumberDialog;