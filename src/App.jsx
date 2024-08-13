import { useState } from "react";
import FoodList from "./pages/FoodList";
import Header from "./components/Header";
import  {CartContextProvider}  from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import DessertList from "./pages/DessertsList";


function App() {
  
    
  return (
    
    <UserProgressContextProvider>
    <CartContextProvider>
    <Header />
    <FoodList />
    <DessertList/>
    <Cart />
    <Checkout />
    </CartContextProvider>
    </UserProgressContextProvider>
    
  )
}

export default App;
