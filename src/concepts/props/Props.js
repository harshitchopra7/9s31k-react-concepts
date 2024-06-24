import React from "react";

// destructuring
function Props({ name, rollNumber, gender }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        fontSize: "20px",
        flexDirection: "column",
        marginBottom: "20px",
      }}
    >
      <p>Name: {name} </p>
      <p>Roll No.: {rollNumber}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}

export default Props;
