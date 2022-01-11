import { DUMMY_MEALS } from "../MealsData/mealsData";
import Cards from "../../UI/Cards/Cards";
import MealItem from "../MealItem/Mealtem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) =>
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} />)

  return (
    <section className={classes.meals}>
      <Cards>
        <ul>{mealsList}</ul>
      </Cards>
    </section>
  );
};

export default AvailableMeals;
