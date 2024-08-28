import { useNavigate } from "react-router-dom"
type BackProps = {
  onClick?:()=>void
}
function Back({onClick}:BackProps) {
    const navigate = useNavigate()
  return (
    <div 
    onClick={!onClick ? ()=> navigate(-1) : onClick}
    className="w-8 h-8 bg-white rounded-full flex justify-center items-center">
        <i className="fa-solid fa-arrow-left"></i>
    </div>
  )
}

export default Back