import React, { useState, useEffect } from 'react';
import Card from './components/Card';
import shuffleArray from './helpers/shuffle';
import generateId from './helpers/uniqId';
import './App.css';

const iconsComponents = [
    'FaAvianex',
    'FaChrome',
    'FaFontAwesomeFlag',
    'FaGithub',
    'FaReact',
    'FaPython',
];
let firstCard = null,
    secondCard,
    win = 0;
function App() {
    const [cards, setCards] = useState([]);
    const [clicks, setClicks] = useState(0);
    const handleClicks = (props) => {
        if (
            firstCard?.index === props.index ||
            secondCard?.index === props.index
        )
            return;
        if (!firstCard) {
            firstCard = props;
        } else if (!secondCard) {
            secondCard = props;
        }
        setClicks((clicks) => ++clicks);
    };
    useEffect(() => {
        const cardsObjects = iconsComponents.map((iconName) => ({
            show: true,
            win: false,
            iconName,
            id: generateId(),
        }));
        const obj1 = cardsObjects.map((cardObject) => ({ ...cardObject }));
        const obj2 = cardsObjects.map((cardObject) => ({ ...cardObject }));
        const doublecatedIcons = [...obj1, ...obj2];
        setCards(shuffleArray(doublecatedIcons));
        setTimeout(() => {
            setCards((cards) => {
                return cards.map((card) => {
                    card.show = false;
                    return card;
                });
            });
        }, 5000);
    }, []);
    useEffect(() => {
        if (clicks === 1) {
            setCards(
                cards.map((card, i) => {
                    if (i === firstCard.index) card.show = true;
                    return card;
                })
            );
        }
        if (clicks === 2) {
            setCards(
                cards.map((card, i) => {
                    if (i === secondCard.index) card.show = true;
                    return card;
                })
            );
        }
        if (clicks === 2 && firstCard.id === secondCard.id) {
            let id = firstCard.id;
            setTimeout(() => {
                setCards(
                    cards.map((card) => {
                        if (card.id === id) card.win = true;
                        return card;
                    })
                );
                win++;
                setClicks(0);
            }, 500);
        }

        // CARDS ARE NOT MATCHED
        if (clicks === 2) {
            firstCard = null;
            secondCard = null;
            setTimeout(() => {
                setCards(
                    cards.map((card) => {
                        card.show = false;
                        setClicks(0);
                        return card;
                    })
                );
            }, 500);
        }
    }, [clicks]);
    if (win === 6) return <h1 className="won"> you won </h1>;
    return (
        <div className="App">
            {cards.map((card, i) => (
                <Card
                    key={i}
                    card={card}
                    handleClicks={handleClicks}
                    index={i}
                />
            ))}
        </div>
    );
}
export default App;
