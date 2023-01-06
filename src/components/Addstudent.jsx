import { useState } from "react"

const Addstudent = ({ show, hide, students, Setstudents }) => {
    const closeHandle = () => {
        hide()
    }
    const [name, Setname] = useState()
    const [fathersName, SetfathersName] = useState();
    const [Class, SetClass] = useState();
    const [rollNumber, Setrollnumber] = useState()

    const AddNewStudent = () => {
        // console.log(localStorage.getItem('student').length)
        console.log(name, fathersName, rollNumber, Class)
        if (!name || !fathersName || !rollNumber || !Class) {
            alert("All Fields Are Required !")
        }
        else {
            let stds = students
            console.log("Before push",students)
            // stds.push({ name: name, fathersName: fathersName, rollNumber: rollNumber, checkIn: "", checkOut: "" })
            // Setstudents("after push",stds)
            // console.log(students)
        }
    }
    return (
        <div className='add-student' style={show ? { display: "grid" } : { display: "none" }}>
            <p onClick={closeHandle}>X</p>
            <h4>New Student</h4>
            <input type="text" onChange={(e) => Setname(e.target.value)} placeholder='Student Name' />
            <input type="text" onChange={(e) => SetfathersName(e.target.value)} placeholder="Father's Name" />
            <input type="text" onChange={(e) => SetClass(e.target.value)} placeholder="Class" />
            <input type="text" onChange={(e) => Setrollnumber(e.target.value)} placeholder='Roll Number' />
            <button onClick={AddNewStudent}>Add</button>
        </div>
    )
}

export default Addstudent