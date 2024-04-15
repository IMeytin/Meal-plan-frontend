import axios from "axios";

const myURL = "https://meal-plan-backend-7x0l.onrender.com"

const getAllMeals = (setMeal) => {
    axios.get(`${myURL}`).then(({ data }) => {
        setMeal(data);
    });
};

const addMeal = (title, setTitle, setMeal) => {
    axios.post(`${myURL}/saveMeals`, { title }).then((data) => {
        setTitle("");
        getAllMeals(setMeal)
    });
};

const editMeal = (mealId, title, setTitle, setMeal, setEditing) => {
    axios.post(`${myURL}/editMeal`, {_id: mealId, title})
    .then ((data) => {
        setTitle("")
        setEditing(false)
        getAllMeals(setMeal)
    })
};

const deleteMeal = (_id, setMeal) => {
    axios.delete(`${myURL}/deleteMeal/${_id}`)
    .then((data) => {
        getAllMeals(setMeal)
    })
}

export { getAllMeals, addMeal, editMeal, deleteMeal };
