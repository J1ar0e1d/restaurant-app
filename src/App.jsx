import FoodList from "./components/FoodList";
import Header from "./components/Header";
import  {CartContextProvider}  from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import MainNavigation from "./UI/MainNavigation";

function App() {
  return (
    <UserProgressContextProvider>
    <CartContextProvider>
    <Header />
      <MainNavigation/>
    
    <FoodList />
    <Cart />
    <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
  );
}

export default App;
