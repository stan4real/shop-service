import { useNavigate } from "react-router-dom"

function Back() {
    const navigate = useNavigate()
  return (
    <div 
    onClick={()=> navigate(-1)}
    className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
        <i className="fa-solid fa-arrow-left"></i>
    </div>
  )
}

export default Back