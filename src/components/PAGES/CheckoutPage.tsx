import Back from "../UI/Back"
import ShippingForm from "../UI/ShippingForm"

function CheckoutPage() {
  return (
<>
    <div className="absolute top-3 left-4">
        <Back/>
    </div>
    <h1 className="flex flex-col justify-center items-center text-2xl">
        Оформить покупку
    </h1>
    <ShippingForm/>
</>
  )
}

export default CheckoutPage