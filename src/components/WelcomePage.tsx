import { Link } from 'react-router-dom';
import '../App.css';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
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

        <div className="instructions-container">
          <h2>Instruções</h2>
          <div className="instructions">
            <ol>
              <li>O anfitrião vai sortear uma bola de bingo de cada vez e anuncia o número em voz alta.</li>
              <li>Os jogadores procuram o número anunciado em suas cartelas e marcam se o encontrarem.</li>
              <li>Os padrões de vitória são: </li>

              <div className="patterns-container">
                <div className="pattern">
                  <h4>Linha</h4>
                  <div className="pattern-grid">
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                  </div>
                </div>

                <div className="pattern">
                  <h4>Coluna</h4>
                  <div className="pattern-grid">
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                  </div>
                </div>

                <div className="pattern">
                  <h4>Diagonal</h4>
                  <div className="pattern-grid">
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell"></div>
                    <div className="pattern-cell marked"></div>
                  </div>
                </div>

                <div className="pattern">
                  <h4>Cartela Cheia</h4>
                  <div className="pattern-grid">
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                    <div className="pattern-cell marked"></div>
                  </div>
                </div>
              </div>

              <li>Quando um jogador completa o padrão necessário, ele deve gritar "Bingo!" para indicar que ganhou.</li>
              <li>Enquanto jogamos, vamos descobrir sobre mulheres inspiradoras!</li>
            </ol>
          </div>
        </div>

        <Link to="/play" className="play-button">
          Let's Play!
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;