import React from 'react'

import { Article,Button, CardBody, CardHeader} from "../DrinkCardsStyles"


function DrinkCard({drink, bookDrink}) {
    return (
        <Article>
            <CardHeader>
                <Button type="image" src={drink.image} alt={drink.drinkName} id={drink.drinkName} onClick={bookDrink}/>
            </CardHeader>
            <CardBody>
               <h2> {drink.drinkName}</h2>
            </CardBody>
        </Article>
    )
}

export default DrinkCard
