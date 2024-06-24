import React, { useEffect, useState } from "react";

function UseEffect() {
  const [age, setAge] = useState(10);
  const [anything, setAnything] = useState(100);

  useEffect(() => {
    console.log("UseEffect is being called");
  }, [age, anything]);

  //  useEffect can work in 3 types
  //   type1 - no array present - runs everytime - on mounting, on updation of EVERY state variable
  //   type2 - empty array present - runs only at the time of mounting
  //   type3 - array with state variables present - on mounting, on updation of the state variable(s) which is provided in the array

  console.log("age", age);

  function increaseAge() {
    setAge((prevAge) => prevAge + 1);
  }

  console.log("anything", anything);

  function increaseAnything() {
    setAnything((anything) => anything + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        fontSize: "20px",
        flexDirection: "column",
      }}
    >
      Age - {age}
      <button style={{ marginTop: "50px" }} onClick={increaseAge}>
        Increase Age{" "}
      </button>
      Anything - {anything}
      <button style={{ marginTop: "50px" }} onClick={increaseAnything}>
        Increase anything{" "}
      </button>
    </div>
  );
}

export default UseEffect;
