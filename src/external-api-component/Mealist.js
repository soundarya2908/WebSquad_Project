import React from "react";
import Meal from "./Meal";
import DonorItem from "../donor-list-component/donor-item";

function MealList({ mealData }) {
    const nutrients = mealData.nutrients;

    return (
        <div className="container">
            <div className="text-start">
                <div>Calories: {nutrients.calories.toFixed(0)}</div>
                <div>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</div>
                <div>Fat: {nutrients.fat.toFixed(0)}</div>
                <div>Protein: {nutrients.protein.toFixed(0)}</div>
            </div>

            <div className="row">
                {
                    mealData.meals.map((meal) => {
                        return (
                            <div key={meal.id} className="col-12 col-md-6 col-xl-4">
                                <Meal key={meal.id} meal={meal}/>
                            </div>
                        )
                })
                }
            </div>
        </div>
    );
}

export default MealList;