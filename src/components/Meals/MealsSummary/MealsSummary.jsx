import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food Delivered To You</h2>
      <p>
        Chose your favorite meal from our wide array of available choices. You
        can enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        All of our meals are made with high-quality, local ingredients, by our
        talented chefs!
      </p>
    </section>
  );
};

export default MealsSummary;
