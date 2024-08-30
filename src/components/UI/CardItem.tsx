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
    className="h-[265px] w-[47%] "
    >
        <div style={{backgroundImage:`url(${card.img})`}} className="bg-cover h-[205px] rounded-xl bg-top"/>
        <div className="w-full p-1 flex flex-col justify-center items-start">
            <h4 className="line-clamp-1">
                {card.name}
            </h4>
            <div className="flex w-full justify-start items-center">
                
                <p>    
                    <b>{card.price} ₽</b>
                </p>
            </div>
        </div>
    </Link>
  )
}

export default CardItem