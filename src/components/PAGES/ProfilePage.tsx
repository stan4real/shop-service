import Header from "../UI/Header"
import ProfileFields from "../UI/ProfileFields"
import ProfileInfo from "../UI/ProfileInfo"

function ProfilePage() {
  return (
    <>
        <div className="flex flex-col justify-center items-center gap-4">
        <Header>
            Учетная запись
        </Header>
            <ProfileInfo/>
            <ProfileFields/>
        </div>
    </>
  )
}

export default ProfilePage