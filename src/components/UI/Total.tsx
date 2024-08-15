import { twMerge } from "tailwind-merge"
import { useTotalStore } from "../../storeTotal"

type TotalProps = {
  className?:string
}
const Total = ({className}:TotalProps) => {
  const subtotal = useTotalStore((state)=> state.subtotal)
  return (
    <div className={twMerge("w-full pt-2 flex flex-col items-start",
      className ? `${className}`: '')
    }>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Subtotal:</p>
            <p>{subtotal.toFixed(2)}$</p>
        </div>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Shipping cost:</p>
            <p>{4}$</p>
        </div>
        <div className="w-full flex justify-between items-center">
            <p className="text-gray-400">Total:</p>
            <p>{(4+subtotal).toFixed(2)}$</p>
        </div>
    </div>
  )
}

export default Total