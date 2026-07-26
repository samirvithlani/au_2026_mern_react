import React from 'react'

export const MapDemo4 = () => {
var employeess = [
  {
    "id": 1,
    "name": "John Smith",
    "salary": 65000,
    "post": "Software Engineer",
    "city": "New York",
    "gender": "Male",
    "age": 28
  },
  {
    "id": 2,
    "name": "Emily Johnson",
    "salary": 72000,
    "post": "Project Manager",
    "city": "Chicago",
    "gender": "Female",
    "age": 35
  },
  {
    "id": 3,
    "name": "Michael Brown",
    "salary": 58000,
    "post": "QA Engineer",
    "city": "Seattle",
    "gender": "Male",
    "age": 30
  },
  {
    "id": 4,
    "name": "Sophia Davis",
    "salary": 81000,
    "post": "HR Manager",
    "city": "Boston",
    "gender": "Female",
    "age": 40
  },
  {
    "id": 5,
    "name": "David Wilson",
    "salary": 54000,
    "post": "UI/UX Designer",
    "city": "Austin",
    "gender": "Male",
    "age": 27
  },
  {
    "id": 6,
    "name": "Olivia Martinez",
    "salary": 69000,
    "post": "Business Analyst",
    "city": "San Francisco",
    "gender": "Female",
    "age": 32
  },
  {
    "id": 7,
    "name": "James Anderson",
    "salary": 92000,
    "post": "Technical Lead",
    "city": "Dallas",
    "gender": "Male",
    "age": 38
  },
  {
    "id": 8,
    "name": "Ava Thomas",
    "salary": 60000,
    "post": "Marketing Executive",
    "city": "Denver",
    "gender": "Female",
    "age": 29
  },
  {
    "id": 9,
    "name": "William Taylor",
    "salary": 75000,
    "post": "DevOps Engineer",
    "city": "Atlanta",
    "gender": "Male",
    "age": 34
  },
  {
    "id": 10,
    "name": "Mia Harris",
    "salary": 67000,
    "post": "Data Analyst",
    "city": "Miami",
    "gender": "Female",
    "age": 31
  }
]
  return (
    <div style={{textAlign:"center"}}>
        <h1>MAP DEMO 4</h1>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>GENDER</th>
                    <th>SALARY</th>
                    <th>CITY</th>
                </tr>
            </thead>
            <tbody>
                {
                    employeess.map((emp)=>{
                        return<tr style={{backgroundColor:emp.gender=="Female" && "pink"}}>
                            <td>{emp.id}</td>
                            <td>{emp.name}</td>
                            {/* <td style={{color:emp.age>=35 ?"red":"white"}}>{emp.age}</td> */}
                            <td style={{color:emp.age>=35 && "red"}}>{emp.age}</td>
                            <td>{emp.gender}</td>
                            <td style={{backgroundColor:emp.salary>=70000 && "lightcoral"}}>{emp.salary}</td>
                            <td>{emp.city}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

