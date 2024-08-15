
import { Link } from "react-router-dom"
import Back from "../UI/Back"
import Button from "../UI/Button"
import CartItem from "../UI/CartItem"
import Total from "../UI/Total"
import { useCartStore } from "../../storeCart"
import { useEffect, useState } from "react"
import { useTotalStore } from "../../storeTotal"

function CartPage() {
    const cartItems = useCartStore((state) => state.cart)
    const removeCart = useCartStore((state)=>state.removeAllFromCart)
    const [total, setTotal] = useState(0);
    const setSubtotal = useTotalStore((state) => state.setSubtotal);
    
    useEffect(()=> {
      setSubtotal(total)
    }, [total])
  return (
  <>
  {cartItems.length!==0 ? 
    <>
  <div className="absolute top-3 left-4">
    <Back/>
  </div>
    <h1 className="flex flex-col justify-center items-center text-2xl">
        Cart
    </h1>
    <div className="flex flex-col gap-3 h-[440px] overflow-y-auto w-full pt-4">
        {cartItems.map(item => (
            <CartItem 
            data={item}
            setTotal={setTotal}
            total={total} 
            key={`${item.id}+${item.values.size}+${item.values.color}`}
            />
        )
        )}
    <p onClick={removeCart}>Remove all</p>
    </div>
    <Total />
    <Button>
        <Link to={'/checkout'}>
            <p>Checkout</p>
        </Link>
    </Button>
    </>
    :
        <div className="w-full h-full pt-60 flex flex-col text-3xl justify-center items-center">
             Nothing Here
             <Link to={'/'}>
                <Button>
                    <p>
                    Go Shopping    
                    </p>
                </Button>
             </Link>
        </div>
  }
  </>
  )
}

export default CartPage