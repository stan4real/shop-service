import { Link } from "react-router-dom"
import { CardItemType } from "../utils/types"

type Props = {
    card:CardItemType
}
function CardItem({card}:Props) {
  return (
    <Link 
    to={`/${card.id}`}
    state={card}
    className="h-[265px] w-[47%] bg-white shadow-md rounded-2xl"
    >
        <div style={{backgroundImage:`url(${card.img})`}} className="bg-cover h-[205px] rounded-t-2xl bg-top"/>
        <div className="w-full p-1 flex flex-col justify-center items-start">
            <h4 className="line-clamp-1">
                {card.name}
            </h4>
            <div className="flex w-full justify-between items-center">
                <i className="fa-solid fa-cart-shopping"></i>    
                <p className="text-gray-600">    
                    {card.price}$
                </p>
            </div>
        </div>
    </Link>
  )
}

export default CardItem