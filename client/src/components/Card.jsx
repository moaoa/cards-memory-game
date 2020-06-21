import React from 'react';
import FlipCard from 'flip-card-react';
import renderIcon from '../helpers/renderIcon';

export default function Card({ card, index, handleClicks }) {
    const front = (
        <div
            className={'cover'}
            onClick={() => handleClicks({ id: card.id, index })}
        >
            {index + 1}
        </div>
    );

    const back = (
        <div
            onClick={() => handleClicks({ id: card.id, index })}
            className={`card bg-blue  ${
                card.show || card.win ? 'show-card' : ''
            }`}
        >
            {renderIcon(card.iconName)}
        </div>
    );
    if (card.win)
        return (
            <div
                className={`card bg-blue  ${
                    card.show || card.win ? 'show-card' : ''
                }`}
            >
                {renderIcon(card.iconName)}
            </div>
        );
    return (
        <FlipCard isFlipped={card.show} front={front} back={back}></FlipCard>
    );
    return <card.iconName />;
}
