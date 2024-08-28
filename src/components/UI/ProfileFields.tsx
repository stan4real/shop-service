import { useState } from 'react'
import arrow from '/arrowProfileFIelds.svg'
import Modal from './Modal'
import { createPortal } from 'react-dom'
import ProfileModalAddress from './ProfileModalAddress'
import { Link } from 'react-router-dom'
import { profileField } from '../utils/static'

export type ProfileValuesProps = {
    address:string[],
    payment:{
        card_number:string,
        CVC:string,
        date:string
    }
}
function ProfileFields() {
    const [showModal, setShowModal] = useState(false)
    const [title, setTitle] = useState('')
    const [profileValues, setProfileValues] = useState({
        address:['Illinois, IT Street, garage N3'],
        payment:{
            card_number:'',
            CVC:'',
            date:'',
        }
    })
    const openModal = (e:string) => {
        setTitle(e)
        setShowModal(true)
    }
    console.log(profileValues)
  return (
    <>
    <div className="h-full flex flex-col gap-2 w-full  rounded-xl">
        {
            profileField.map(item => 
                <Link
                to={item.path}
                key={item.name}
                onClick={((item.name != "Адрес")) ? ()=> console.log('navigate') :() => openModal(item.name)}
                className="h-14 bg-white flex justify-between gap-4 text-lg active:bg-zinc-400 items-center p-2 rounded-xl">
                    <p>{item.name}</p>
                    {item.name=="Адрес" &&
                    <p className='text-zinc-400 line-clamp-1'>{profileValues.address[0]}</p>
                    }
                    <img src={arrow} className='pr-4'></img>
                </Link>
            )
        }
    </div>
    {showModal &&
    createPortal(
        <Modal 
        text={title} 
        setActive={setShowModal}
        className=' justify-start items-center'>
            <>
                <ProfileModalAddress
                profileValues={profileValues}
                setProfileValues={setProfileValues}
                />
            </>
        </Modal>,
    document.body)
    }
    </>
  )
}

export default ProfileFields