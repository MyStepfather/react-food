import Meal from "./Meal";
import React from "react";
import {useNavigate} from "react-router-dom";

const MealList = ({meals}) => {
    const navigate = useNavigate();
    return (
        <>
            <button className="btn" onClick={() => {navigate(-1)}}>Назад</button>
            <div className="list">
                {meals.map(meal => <Meal key={meal.idMeal} {...meal}/>)}
            </div>
        </>
    );
};

export default MealList;