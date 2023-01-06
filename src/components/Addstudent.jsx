import React, { useState } from 'react'

const Addstudent = ({addButtonHandler, AddNewStudent, AddshowHide }) => {
    const [name, Setname] = useState()
    const [fathersName, SetfathersName] = useState();
    const [rollNumber, Setrollnumber] = useState()
    return (
        <div className='add-student' style={AddshowHide ? { display: "grid" } : { display: "none" }}>
            <p onClick={addButtonHandler}>X</p>
            <h4>New Student</h4>
            <input type="text" onChange={(e) => Setname(e.target.value)} placeholder='Student Name' />
            <input type="text" onChange={(e) => SetfathersName(e.target.value)} placeholder="Father's Name" />
            <input type="text" onChange={(e) => Setrollnumber(e.target.value)} placeholder='Roll Number' />
            <button onClick={()=>AddNewStudent(name,fathersName,rollNumber)}>Add</button>
        </div>
    )
}

export default Addstudent
