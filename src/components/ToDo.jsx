import React, { useState } from 'react'

const ToDo = () => {

    const [Input, setInput] = useState()
    const [Task, setTask] = useState([])
    const TaskLocal = () => {
        setTask([...Task, Input])
        setInput("")
    }

    return (
        <div className='TODO mt-24 flex justify-center'>
            <div className="form w-[80%] md:w-[40%]  rounded-2xl bg-gray-200 p-4">
                <h1 className='font-bold text-xl'>To-Do List</h1>
                <div className="add-item p-4 items-center relative">
                    <input onChange={(e) => setInput(e.target.value)} value={Input} className='p-2 w-full rounded-2xl' type="text" placeholder='Add your task' />
                    <div onClick={TaskLocal} className="add-btn m-4 md:px-7 absolute top-0 right-0 cursor-pointer ml-4 p-2 w-fit rounded-xl text-white font-bold bg-orange-400 shadow-lg hover:transition-all hover:scale-105 hover:shadow-orange-800">Add</div>
                </div>

                <div className="task ml-10 mb-4">
                    <h1>{Task.map((d, i) => { return <div key={i} > {d} </div> })}</h1>
                </div>

            </div>
        </div>
    )
}

export default ToDo