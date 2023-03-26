import React,{useEffect,useState} from 'react'

const FlipCard = () => {
    const [cards, setCards] = useState([]);
    const [hasFlippedCards, setHasFlippedCards] = useState(false);
    const [firstCard, setFirstCard] = useState(null);
    const [lockBoard, setLockBoard] = useState(false);
    const [turns, setTurns] = useState(0);

    useEffect(() => {
        const cardData = [
          {name: 'zeus', img: 'Assists/zeus.jpg'},
          {name: 'aphrodite', img: 'Assists/aphrodite.jpg'},
          {name: 'apollo', img: 'Assists/apollo.jpeg'},
          {name: 'athena', img: 'Assists/athena.jpeg'},
          {name: 'hades', img: 'Assists/hades.jpg'},
          {name: 'poseiden', img: 'Assists/poseiden.jfif'},
          {name: 'zeus', img: 'Assists/zeus.jpg'},
          {name: 'aphrodite', img: 'Assists/aphrodite.jpg'},
          {name: 'apollo', img: 'Assists/apollo.jpeg'},
          {name: 'athena', img: 'Assists/athena.jpeg'},
          {name: 'hades', img: 'Assists/hades.jpg'},
          {name: 'poseiden', img: 'Assists/poseiden.jfif'},
        ];
        const shuffledCards = cardData.sort(() => 0.5 - Math.random());
        setCards(shuffledCards);
      }, []);
    
      const flipCard = (index) => {
        if (lockBoard) return;
        const card = document.getElementById(index);
        card.classList.toggle('flip');
        if (!hasFlippedCards) {
          setHasFlippedCards(true);
          setFirstCard(card);
          setTurns(turns + 1);
          return;
        }
        setHasFlippedCards(false);
        if (firstCard.dataset.name === card.dataset.name) {
          disableCards(firstCard, card);
          setTurns(turns + 1);

        } else {
          unFlipCards(firstCard, card);
        }
      }
    
      const disableCards = (firstCard, secondCard) => {
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        resetBoard();
      }
    
      const unFlipCards = (firstCard, secondCard) => {
        setLockBoard(true);
        setTimeout(() => {
          firstCard.classList.remove('flip');
          secondCard.classList.remove('flip');
          resetBoard();
        }, 1000);
      }
    
      const resetBoard = () => {
        setHasFlippedCards(false);
        setLockBoard(false);
        setFirstCard(null);
      }
    
   
    function handleClick() {
        window.location.reload();
      }
    
    return (
        <>
        
        <section className="game">
        {cards.map((card, index) => (
          <div
            key={index}
            id={index}
            className="card"
            data-name={card.name}
            onClick={() => flipCard(index)}
          >
            <img src={card.img} alt="" className="frontface" />
            <img src="Assists/greek mythology.jpeg" alt="" className="backface" />
          </div>
        ))}
      </section>
      <h3>Turns: {turns}</h3>
      <button className='btn' onClick={handleClick}>New Game</button>
      
        </>
    );
  }

export default FlipCard