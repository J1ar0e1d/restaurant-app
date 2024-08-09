import  { useContext } from 'react'
import logo from '../assets/logo.jpg'
import Button from '../UI/Button.jsx'
import CartContext from '../store/CartContext.jsx'
import UserProgressContext from '../store/UserProgressContext.jsx'

const Header = () => {
  
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext);

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0)

  function handleShowCart() {
       userProgressCtx.showCart();
  }
  
  
  return (
   <header id="main-header">

   <div id="title">
        <img src={logo} alt='picture of a restaurant logo'/>
        <h1>AllUKenEat</h1>
    </div>
          {/* <p className='main-header-item'>Desserts</p>
          <p className='main-header-item'>Main Dishes</p> */}
        <nav>
            <Button textOnly onClick={handleShowCart}>Cart ({totalCartItems})</Button>
        </nav>
   </header>
  )
}

export default Header