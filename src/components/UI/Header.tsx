
import Back from './Back'
type HeaderProps = {
    children:string,
    onBackClick?:() => void
}
function Header({children, onBackClick}:HeaderProps) {
  return (
    <>
        <div className="absolute top-3 left-4">
            <Back onClick={onBackClick}/>
        </div>
        <h1 className="flex flex-col justify-center items-center text-2xl">
            {children}
        </h1>
    </>
  )
}

export default Header