import React, { useState } from "react";

function UseState() {
  const [count, setCount] = useState(10);

  function handleCountIncrease() {
    setCount((prevCount) => prevCount + 1);
  }

  //   js variable
  let age = 100;

  function handleAgeIncrease(data) {
    age = data + 100;
    console.log("age", age);
  }

  console.log("age outside", age);

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
      Count - {count}
      <button style={{ marginTop: "50px" }} onClick={handleCountIncrease}>
        Increase{" "}
      </button>
      Age - {age}
      <button
        style={{ marginTop: "50px" }}
        onClick={() => handleAgeIncrease(count)}
      >
        Increase Age{" "}
      </button>
    </div>
  );
}

export default UseState;
