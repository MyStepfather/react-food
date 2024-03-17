import {API_URL} from "./config";
import axios from "axios";

const getMealById = async mealId => {
    const {data} = await axios.get(`${API_URL}/lookup.php?i=${mealId}`);
    return data;
};

const getAllCategories = async () => {
    const {data} = await axios.get(`${API_URL}/categories.php`);
    return data;
}

const getFilteredCategory = async (catName) => {
    const {data} = await axios.get(`${API_URL}/filter.php?c=${catName}`);
    return data;
}

export {getMealById, getAllCategories, getFilteredCategory}