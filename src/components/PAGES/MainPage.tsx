import CardItem from "../UI/CardItem"
import { DATA_GOODS } from "../utils/static"

function MainPage() {
  return (<>
  {/* <Searchbar /> */}
    <div className="flex flex-wrap gap-4 pt-6">
      {DATA_GOODS &&
        DATA_GOODS.map((item) => 
        <CardItem card={item} key={item.id} />
        )}
    </div>
 </>)
}

export default MainPage