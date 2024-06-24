import React, { useState } from "react";

const students = [
  {
    name: "Ballu",
    rollNumber: 1,
    gender: "male",
    phoneNumber: "1234",
  },
  {
    name: "Ajay",
    rollNumber: 2,
    gender: "male",
    phoneNumber: "1234",
  },
  {
    name: "Amit",
    rollNumber: 3,
    gender: "male",
    phoneNumber: "1234",
  },
  {
    name: "Harsh",
    rollNumber: 4,
    gender: "male",
    phoneNumber: "1234",
  },
];

function ArrayManipulation() {
  const [studentsData, setStudentsData] = useState(students);

  function handleAddStudentClick() {
    const newStudent = {
      name: "Shyam",
      rollNumber: 5,
      gender: "male",
      phoneNumber: "1234",
    };

    // spread operator ...
    // setStudentsData([...studentsData, newStudent]);
    setStudentsData([newStudent, ...studentsData]);
  }

  function handleDeleteStudentClick(rollNumber) {
    // return those array of objects whose rollNUmber is not equal to 03
    const updatedData = studentsData.filter(
      (val) => val.rollNumber !== rollNumber
    );

    setStudentsData(updatedData);
  }

  console.log("studentsData", studentsData);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <button onClick={() => handleAddStudentClick()}>Add Student</button>
      <button onClick={() => handleDeleteStudentClick(3)}>
        Delete Student
      </button>

      {studentsData.map((val, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <p>Name: {val.name} </p>
          <p>Roll No.: {val.rollNumber}</p>
          <p>Gender: {val.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default ArrayManipulation;
