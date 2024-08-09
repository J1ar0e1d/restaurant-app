import useHttp from "../hooks/useHttp";
import MealItem from "./MealItem";
import Error from "./Error";

const requestConfig = {}

const FoodList = () => {
   const {data: readyMeals, isLoading, error} = useHttp('http://localhost:3000/meals', requestConfig, []);
  
   if (isLoading) {
     return <p className="center">Fetching meals...</p>
  }

  if (error) {
    return <Error title="failed to fetch meals" message={error} />
  }
  
   return (
    <ul id="meals">
      {readyMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default FoodList;
