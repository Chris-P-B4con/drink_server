import React from 'react'

import Tag from "../../Tag/Tag"

import { Article,Button, CardBody, CardHeader} from "../DrinkCardsStyles"

function DrinkCard({drink, bookDrink, newTag}) {
    return (
        <Article>
            <CardHeader>
                {newTag && <Tag type="newType">New </Tag>}
                <Button type="image" src={drink.image} alt={drink.drinkName} id={drink.drinkName} onClick={bookDrink}/>
            </CardHeader>
            <CardBody>
               <h2> {drink.drinkName}</h2>
            </CardBody>
        </Article>
    )
}

export default DrinkCard
