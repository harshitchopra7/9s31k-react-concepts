import ArrayManipulation from "./concepts/ArrayManipulation/ArrayManipulation";
import Filter from "./concepts/ArrayManipulation/Filter";
import AsynchronousJs from "./concepts/AsynchronousJs/AsynchronousJs";
import Props from "./concepts/props/Props";
import UseEffect from "./concepts/useEffect/UseEffect";
import UseState from "./concepts/useState/UseState";

function App() {
  const students = [
    {
      name: "Ballu",
      rollNumber: "20",
      gender: "male",
      phoneNumber: "1234",
    },
    {
      name: "Ajay",
      rollNumber: "05",
      gender: "male",
      phoneNumber: "1234",
    },
    {
      name: "Amit",
      rollNumber: "07",
      gender: "male",
      phoneNumber: "1234",
    },
    {
      name: "Amit 2",
      rollNumber: "0788888",
      gender: "male",
      phoneNumber: "1234",
    },
  ];

  return (
    <div className="App">
      {/* <UseState /> */}
      {/* <UseEffect /> */}
      {/* <AsynchronousJs /> */}
      {/* 
      {students.map((value, index) => (
        <Props
          key={index}
          name={value.name}
          rollNumber={value.rollNumber}
          gender={value.gender}
          phoneNumber={value.phoneNumber}
        />
      ))} */}

      {/* <Props />
      <Props />
      <Props /> */}

      <ArrayManipulation />
      {/* <Filter /> */}
    </div>
  );
}

export default App;
