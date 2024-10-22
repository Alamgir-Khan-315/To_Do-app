import React, { useState } from 'react'
import { useEffect } from 'react'

const UserName = () => {

    const [name, setname] = useState("")
    const [UserName, setUserName] = useState("")
    const [Toggle, setToggle] = useState(false)

    useEffect(() => {
        const refreshName = () => { setUserName(localStorage.getItem("Name")) }
        refreshName()
    }, []);

    const refreshName = () => { setUserName(localStorage.getItem("Name")) }

    const setNametolocal = () => {
        localStorage.setItem("Name", name)
        refreshName()
        setToggle(!Toggle)
    }

    return (
        <div className=''>

            <div className="greeting flex items-center gap-4">
                <h1 className='text-2xl font-bold p-4'>Hi !</h1>
                <h1 className='text-2xl font-bold'>{UserName}</h1>
                <div onClick={() => { setToggle(!Toggle) }} className="setname cursor-pointer ml-4 p-2 w-fit rounded-xl text-white font-bold bg-orange-400 shadow-lg hover:transition-all hover:scale-105 hover:shadow-orange-800">Set your name</div>
            </div>

            {Toggle === true &&
                <div className='flex ml-10 gap-5 items-center'>
                    <input onChange={(e) => { setname(e.target.value) }} className='p-1 rounded-xl px-4' type="text" placeholder='name' />
                    <button className="setname cursor-pointer ml-4 p-2 w-fit rounded-xl text-white font-bold bg-orange-400 shadow-lg hover:transition-all hover:scale-105 hover:shadow-orange-800" onClick={setNametolocal}>Done</button>
                </ div>
            }

        </div>
    )
}

export default UserName