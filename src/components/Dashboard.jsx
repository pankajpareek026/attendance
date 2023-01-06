import React, { useEffect, useState } from 'react'
import Details from './Details';
import StudentTable from './StudentTable';
import Addstudent from './Addstudent';
const print = console.log
const Dashboard = () => {
  const [students, Setstudents] = useState([])
  const [live, Setlive] = useState(0)
  let date = new Date().toDateString();
  useEffect(() => {

  }, [students])
  
  const [attendence, SetAttendence] = useState([])
  const [allStudents, SetallStudents] = useState(0)
  const [AddshowHide, SetAddShowHide] = useState(false)
  //function to performe hide and show operations 
  function addButtonHandler() {
    SetAddShowHide(prev => !prev)
    console.log(AddshowHide)
  }
  const closeHandle = () => {
    addButtonHandler()
  }
  

  //Add new student in system !
  const AddNewStudent = (name,fathersName,rollNumber) => {
    // console.log(localStorage.getItem('student').length)
    console.log(name, fathersName, rollNumber)
    if (!name || !fathersName || !rollNumber) {
      alert("All Fields Are Required !")
    }
    else {

      const newstd = ({ name: name, fathersName: fathersName, rollNumber: rollNumber, attendence: [] })
      Setstudents(students.concat(newstd))
      console.log("after adding new", students)
      addButtonHandler()
    }
  }

  const liveCount = () => {
    students.map((std, i) => {
      if (std.attendence[0].position == "present" && std.attendence[0].checkIn != 0 && std.attendence[0].checkOut == "") {
        Setlive(live + 1)
      }
    })
  }

  const attendenceHandle = (roll, name, type) => {
    const agree = window.confirm(`Please Confirm >  ${name} Is ${type}`)
    if (agree) {
      students.map((student, index) => {
        if (student.rollNumber == roll) {
          let atData = { position: type, date: date, checkIn: "", checkOut: "", roll: roll }
          const a = student.attendence
          a.push(atData)
          Setstudents(student.attendence.concat(atData))
          SetAttendence(attendence.concat(atData))
        }
        Setstudents(students)
      })
    }
  }

  const checkInHandle = (roll) => {
    const time = new Date().toLocaleTimeString()
    console.log("IN :", roll, time)
    students.map((val, i) => {
      if (val.rollNumber == roll) {
        console.log("before add :", val.attendence.checkIn)
        val.attendence[0].checkIn = time
        print("after chekin Submit :", val.attendence)
      }
    })
    Setstudents(students)
    liveCount()

  }
  const checkOutHandle = (roll) => {
    const time = new Date().toLocaleTimeString()
    console.log("IN :", roll, time)

    students.map((val, i) => {
      if (val.rollNumber == roll) {
        console.log("before add :", val.attendence.checkIn)
        val.attendence[0].checkOut = time
        print("after chekin Submit :", val.attendence)
      }
    })
    Setstudents(students)
    liveCount()
  }
  return (
    <div className="Dashboard">
      <h1>Attendance Manager</h1>
      <Details students={students} live={live} />
      <div className="button-container">

        <button className='btn' onClick={addButtonHandler} >Add Student</button>
        <button className='btn' >Attendance</button>
      </div>
      {/* New student form --start */}
      <Addstudent  AddNewStudent={AddNewStudent} addButtonHandler={addButtonHandler}  AddshowHide={AddshowHide}/>
      {/* New student form --End*/}

      <h2>Attendence for {date}</h2>
     
      <StudentTable checkOutHandle={checkOutHandle} checkInHandle={checkInHandle} students={students} attendenceHandle={attendenceHandle}/>

    </div>
  )
}

export default Dashboard;
