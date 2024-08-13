import useHttp from "../hooks/useHttp";
import MealItem from "../components/MealItem";
import Error from "../components/Error";

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
    <>
    <h1>Main Plates</h1>
    <ul id="meals">
      {readyMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
      </>
  );
};

export default FoodList;
