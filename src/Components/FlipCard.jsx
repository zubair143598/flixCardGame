import React,{useEffect,useState} from 'react'

const FlipCard = () => {
    const [cards, setCards] = useState([]);

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
  return (
    <>
    <section className="game">
        {cards.map((card, index) => (
          <div
            key={index}
            id={index}
            className="card"
            data-name={card.name}
            
          >
            <img src={card.img} alt="" className="frontface" />
            <img src="Assists/greek mythology.jpeg" alt="" className="backface" />
          </div>
        ))}
      </section>
    
    </>
  )
}

export default FlipCard