import React from 'react'
const print=console.log
const StudentTable = ({students,checkInHandle,checkOutHandle,attendenceHandle}) => {
  let date = new Date().toDateString();
  
  return (
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
                  <td key={student.rollNumber + 865} >{(attendencePosition != "" && checkInTime != "")}<button disabled={(student.attendence[len - 1].checkIn != "" || student.attendence[len - 1].chekOut == "") ? false : true} onClick={() => checkOutHandle(student.rollNumber)} >{student.attendence[len - 1].checkOut == "" ? "checkOut" : student.attendence[len - 1].checkOut}</button></td>
                </>
              }
            </tr>
          )
        })
      }

    </table>
  )
}

export default StudentTable
