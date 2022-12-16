import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import axios from 'axios';
import MealList from "./Mealist";

function ApiCall() {
    const [input, setInput] = useState('');
    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(2000);

    function getMealData() {


        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8c2ebc1983mshed1db33194bd6efp1d0284jsn279cc61abba0',
                'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
            }
        };

        fetch(`https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?timeFrame=day&targetCalories=${calories}&diet=vegetarian&exclude=shellfish%2C%20olives`, options)
        // fetch(
        //     `https://api.spoonacular.com/mealplanner/generate?apiKey=8c2ebc1983mshed1db33194bd6efp1d0284jsn279cc61abba0&timeFrame=day&targetCalories=${calories}`
        // )
            .then((response) => response.json())
            .then((data) => {
                setMealData(data);
            })
            .catch(() => {
                console.log("error");
            });
    }

    return (
        <>
            <div className="container pt-4">
                <div className="row">
                    <div className="col-12 d-inline-block">
                        <h4 className="float-start">Enter Calorie Requirement and Make a Mean Plan</h4>
                        <br/>
                        <br/>
                        <br/>
                        <div className="row ps-3">
                            <nav className="navbar navbar-default float-start">
                                <div className="nav nav-justified navbar-nav ">

                                    <form className="navbar-form navbar-search" role="search">
                                        <div className="input-group">

                                            <input type="text" className="form-control" name="plan" id="plan"
                                                   onChange={(event) => setCalories(event.target.value)}/>

                                            <div className="input-group-btn">
                                                <button type="button" className="btn btn-search btn-primary"
                                                        onClick={getMealData}>
                                                    <span className="glyphicon glyphicon-search"></span>
                                                    <span className="label-icon">Get Daily Meal Plan</span>
                                                </button>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </nav>
                        </div>
                        <div className="row ps-3 float-start">
                            {mealData && <MealList mealData={mealData} />}
                        </div>

                    </div>
                    <div className="d-none col-md-4">
                    </div>
                </div>
            </div>
        </>
    )
}

export default ApiCall