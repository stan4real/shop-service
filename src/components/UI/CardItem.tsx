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
    className="h-[285px] w-[47%] bg-white shadow-md rounded-xl"
    >
        <div style={{backgroundImage:`url(${card.img})`}} className="bg-cover h-[205px] rounded-t-xl bg-top"/>
        <div className="w-full p-1 flex flex-col justify-center items-start">
            <h4 className="line-clamp-1">
                {card.name}
            </h4>
            <p className="self-center">Tops</p>
            <div className="flex w-full justify-center items-center">
                <p className="text-gray-600">    
                    {card.price} ₽
                </p>
            </div>
        </div>
    </Link>
  )
}

export default CardItem