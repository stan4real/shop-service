import { CATEGORIES } from "../utils/static"

function CategoriesFilter() {
  return (
    <>
    <h2 className="text-left mb-2 text-lg">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map(item => 
              <div 
              key={item}
              className="bg-black text-white rounded-full shadow-lg py-1 px-4"
              >{item} </div>
            )}
          </div>
    </>
  )
}

export default CategoriesFilter