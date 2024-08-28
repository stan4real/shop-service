import CardItem from "../UI/CardItem"
import { useItemsStore } from "../../storeItems" 

function MainPage() {
  const {items, search} = useItemsStore((state) => state)
  const filteredItems = items.filter((el) => {
    if (search === ''){
      return el
    } else {
      return el.name.toLowerCase().includes(search)
    }
  })
  return (<>
    <div className="flex flex-wrap gap-4 pt-6">
      {items &&
        filteredItems.map((item) => 
        <CardItem card={item} key={item.id} />
        )}
    </div>
 </>)
}

export default MainPage