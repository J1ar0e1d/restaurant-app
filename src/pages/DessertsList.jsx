import useHttp from "../hooks/useHttp";
import MealItem from "../components/MealItem";
import Error from "../components/Error";

const requestConfig = {}

const DessertList = () => {
   const {data: readyMeals, isLoading, error} = useHttp('http://localhost:3000/meals/desserts', requestConfig, []);
  
   if (isLoading) {
     return <p className="center">Fetching desserts...</p>
  }

  if (error) {
    return <Error title="failed to fetch desserts" message={error} />
  }
  
   return (
    <>
    <h1>DESSERTS</h1>
    <ul id="meals">
      {readyMeals.map((dessert) => (
        <MealItem key={dessert.id} meal={dessert} />
      ))}
    </ul>
      </>
  );
};

export default DessertList;
