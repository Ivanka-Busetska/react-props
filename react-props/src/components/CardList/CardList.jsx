import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

export default function CardList ({ cards }) {
    return (
        <div className="card-list">
            {cards.map((card, index) => (
                <Card
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                />
            ))}
        </div>
    )
}

