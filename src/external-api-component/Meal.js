import React, { useState, useEffect } from "react";
import {Button} from "antd";

function Meal({ meal }) {
    const [imageUrl, setImageUrl] = useState("");

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8c2ebc1983mshed1db33194bd6efp1d0284jsn279cc61abba0',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${meal.id}/information`, options)
        // fetch(
        //     `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=8c2ebc1983mshed1db33194bd6efp1d0284jsn279cc61abba0&includeNutrition=false`
        // )
            .then((response) => response.json())
            .then((data) => {
                setImageUrl(data.image);
            })
            .catch(() => {
                console.log("error");
            });
    }, [meal.id]);

    return (
        <div className="list-group-item">
            <div className="card text-start border-0" style={{ borderRadius: '15px' }}>
                <div className="m-3" style={{ borderRadius: '15px' }}>
                    <img className="w-100 rounded-2" src={imageUrl} alt="recipe"/>
                </div>
                <div className="card-body">
                    <div>Preparation time: {meal.readyInMinutes} minutes</div>
                    <div>Number of servings: {meal.servings}</div>
                    <a className="" href={meal.sourceUrl}>Go to Recipe</a>
                </div>
            </div>
        </div>
    );
}
export default Meal;