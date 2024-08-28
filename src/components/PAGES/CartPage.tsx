import { Link } from "react-router-dom"
import Button from "../UI/Button"
import CartItem from "../UI/CartItem"
import Total from "../UI/Total"
import { useCartStore } from "../../storeCart"
import Header from "../UI/Header"

function CartPage() {
    const cartItems = useCartStore((state) => state.cart)
    const removeCart = useCartStore((state)=>state.removeAllFromCart)   
    
  return (
  <>
  {cartItems.length!==0 ? 
    <>
  <Header>
    Корзина
  </Header>
    <div className="flex flex-col gap-3 h-[440px] overflow-y-auto w-full pt-4">
        {cartItems.map(item => (
            <CartItem 
            data={item}
            key={`${item.id}+${item.values.size}+${item.values.color}`}
            />
        )
        )}
    <p onClick={removeCart}>Удалить все</p>
    </div>
    <Total />
    <Button>
        <Link to={'/checkout'}>
            <p>Оформить покупку</p>
        </Link>
    </Button>
    </>
    :
        <div className="w-full h-full pt-60 flex flex-col text-3xl justify-center items-center">
             Здесь пока пусто
             <Link to={'/'}>
                <Button>
                    <p>
                    На главную    
                    </p>
                </Button>
             </Link>
        </div>
  }
  </>
  )
}

export default CartPage