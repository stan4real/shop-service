import { twMerge } from "tailwind-merge"
import Button from "./Button"

function ProfileEditForm() {
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('editform submit')
  }
  const input = "h-14 w-full gap-3 border-[2px] text-xl border-[#1b0b0bde] flex justify-start items-center py-2 px-4 shadow-lg rounded-2xl"
  return (
    <form 
    onSubmit={handleSubmit}
    className="pt-4 flex flex-col gap-2">
        <input
        className={twMerge(input)}
        placeholder="Имя"/>
        <input
        className={twMerge(input)}
        placeholder="Фамилия"/>
        <input
        className={twMerge(input)}
        placeholder="Телефон"/>
        <Button type="submit">
            <p>
                Сохранить
            </p>
        </Button>
    </form>
  )
}

export default ProfileEditForm