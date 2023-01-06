import React, { useEffect, useState } from 'react'
import Addstudent from './Addstudent';
import Details from './Details';
import StudentTable from './StudentTable';
const print = console.log
const Dashboard = () => {
  const [students, Setstudents] = useState([])
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
  const [name, Setname] = useState()
  const [fathersName, SetfathersName] = useState();
  const [Class, SetClass] = useState();
  const [rollNumber, Setrollnumber] = useState()

  //Add new student in system !
  const AddNewStudent = () => {
    // console.log(localStorage.getItem('student').length)
    console.log(name, fathersName, rollNumber, Class)
    if (!name || !fathersName || !rollNumber ) {
      alert("All Fields Are Required !")
    }
    else {

      const newstd = ({ name: name, fathersName: fathersName, rollNumber: rollNumber, attendence: [] })
      Setstudents(students.concat(newstd))
      console.log("after adding new", students)
      addButtonHandler()
    }
  }

  const attendenceHandle = (roll, name, type) => {
    const agree = window.confirm(`Please Confirm >  ${name} Is ${type}`)
    if (agree) {
      students.map((student, index) => {
        if (student.rollNumber == roll) {
          let atData = { position: type, date: date, checkIn: "", checkOut: "", roll: roll }
          const a = student.attendence
          a.push(atData)
          print("before", student.attendence)
          Setstudents(student.attendence.concat(atData))
          print("after", student.attendence)
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
  }
  return (
    <div className="Dashboard">
      <h1>Attendance Manager</h1>
      <Details totalStudents={allStudents} />
      <div className="button-container">

        <button className='btn' onClick={addButtonHandler} >Add Student</button>
        <button className='btn' >Attendance</button>
      </div>
      {/* New student form --start */}
      <div className='add-student' style={AddshowHide ? { display: "grid" } : { display: "none" }}>
        <p onClick={closeHandle}>X</p>
        <h4>New Student</h4>
        <input type="text" onChange={(e) => Setname(e.target.value)} placeholder='Student Name' />
        <input type="text" onChange={(e) => SetfathersName(e.target.value)} placeholder="Father's Name" />
        <input type="text" onChange={(e) => Setrollnumber(e.target.value)} placeholder='Roll Number' />
        <button onClick={AddNewStudent}>Add</button>
      </div>
      {/* New student form --End*/}

      <h2>Attendence for {date}</h2>
      {/* <Addstudent show={AddshowHide} students={Setstudents} Setstudents={Setstudents} hide={addButtonHandler} /> */}
      {/* Student Data Table --start */}
      <table className='student-table'>
        <tr><th>S.n</th><th>Name</th><th>Father's Name</th><th>Roll No.</th><th>Attendance</th><th>checkIn</th><th>checkOut</th></tr>
        {
          students.map((student, index) => {
            {
              var len = student.attendence.length;
              var attendencePosition = len > 0 ? student.attendence[len - 1].position : "";
              var checkInTime = len > 0 ? student.attendence[len - 1].checkIn : "";
              var checkOutTime = len > 0 ? student.attendence[len - 1].checkOut : "";

              print("inside tabel", student.attendence
              )
            }
            return (
              <tr key={index - 533}>
                <td key={index + 8} >{index + 1}</td>
                <td key={student.name} >{student.name}</td>
                <td key={student.fathersName} >{student.fathersName}</td>
                <td key={student.rollNumber} >{student.rollNumber}</td>
                {/*attendence */} <td key={index + 2} >
                  {

                    len > 0 ? (student.attendence[len - 1].date == date && attendencePosition == 'present') ? <button className='present'>Present</button> : (student.attendence[len - 1].date == date && attendencePosition == 'absent') ? <button className='absent'>Absent</button> : <><button value="present" onClick={(e) => attendenceHandle(student.rollNumber, student.name, e.target.value)} className='present'>P</button> <button value="absent" onClick={(e) => attendenceHandle(student.rollNumber, student.name, e.target.value)} className='absent' >A</button></> : <><button value="present" onClick={(e) => attendenceHandle(student.rollNumber, student.name, e.target.value)} className='present'>P</button> <button value="absent" onClick={(e) => attendenceHandle(student.rollNumber, student.name, e.target.value)} className='absent' >A</button></>
                  }
                </td>
                {
                  len > 0 && <><td key={student.rollNumber + 165} >{attendencePosition != "" && <button disabled={(attendencePosition == "" || attendencePosition == "absent" || student.attendence[len - 1].checkIn != "") && true} onClick={() => checkInHandle(student.rollNumber)} >{student.attendence[len - 1].checkIn == "" ? "checkin" : student.attendence[len - 1].checkIn}</button>}</td>
                    <td key={student.rollNumber + 865} >{(attendencePosition != "" && checkInTime != "")}<button disabled={(student.attendence[len - 1].checkIn != "" && student.attendence[len - 1].chekOut == "") ? false : true} onClick={() => checkOutHandle(student.rollNumber)} >{student.attendence[len - 1].checkOut == "" ? "checkOut" : student.attendence[len - 1].checkOut}</button></td>
                  </>
                }
              </tr>
            )
          })
        }

      </table>




      {/* Student Data Table --End */}
    </div>
  )
}

export default Dashboard;